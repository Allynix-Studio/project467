import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function Panel({ src, angle }: { src: string; angle: number }) {
  const tex = useTexture(src);
  tex.colorSpace = THREE.SRGBColorSpace;
  const x = Math.sin(angle) * 2.6;
  const z = Math.cos(angle) * 2.6;
  return (
    <group position={[x, 0, z]} rotation={[0, angle, 0]}>
      <mesh position={[0, 1.05, 0]}>
        <planeGeometry args={[1.6, 2]} />
        <meshBasicMaterial map={tex} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.95, 1.05, 0.14, 48]} />
        <meshStandardMaterial color="#0d0d0f" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.93, 0.96, 48]} />
        <meshBasicMaterial color="#e53920" />
      </mesh>
    </group>
  );
}

function Carousel({ images }: { images: string[] }) {
  const g = useRef<THREE.Group>(null);
  useFrame((state, dt) => {
    if (!g.current) return;
    g.current.rotation.y += dt * 0.18;
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, state.pointer.y * 0.06, 0.05);
  });
  return (
    <group ref={g}>
      {images.map((src, i) => <Panel key={src} src={src} angle={(i / images.length) * Math.PI * 2} />)}
    </group>
  );
}

export default function Showroom3D({ images }: { images: string[] }) {
  return (
    <Canvas camera={{ position: [0, 2.4, 11], fov: 34 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={["#1a0705", 9, 17]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 4, 0]} color="#e53920" intensity={30} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.13, 0]}>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial color="#120604" metalness={0.8} roughness={0.35} />
      </mesh>
      <Suspense fallback={null}><Carousel images={images} /></Suspense>
    </Canvas>
  );
}

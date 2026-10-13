import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Display({ src }: { src: string }) {
  const tex = useTexture(src);
  tex.colorSpace = THREE.SRGBColorSpace;
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.25;
  });
  return (
    <group ref={group}>
      {/* Curved photo panel, viewed from both sides */}
      <mesh position={[0, 0.98, 0]}>
        <cylinderGeometry args={[1.4, 1.4, 1.9, 64, 1, true, -0.55, 1.1]} />
        <meshBasicMaterial map={tex} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>
      {/* Obsidian plinth */}
      <mesh position={[0, -0.12, 0]}>
        <cylinderGeometry args={[1.1, 1.2, 0.24, 64]} />
        <meshStandardMaterial color="#0d0d0f" metalness={0.6} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.08, 1.1, 64]} />
        <meshBasicMaterial color="#e53920" />
      </mesh>
    </group>
  );
}

export default function ObjectStage3D({ src }: { src: string }) {
  return (
    <Canvas camera={{ position: [0, 1.3, 6.4], fov: 35 }} dpr={[1, 1.75]} gl={{ antialias: true }}>
      <color attach="background" args={["#070708"]} />
      <ambientLight intensity={0.35} />
      <spotLight position={[0, 6, 2]} angle={0.45} penumbra={0.8} intensity={60} />
      <pointLight position={[-3, 1, -2]} color="#e53920" intensity={6} />
      <Suspense fallback={null}>
        <Display src={src} />
      </Suspense>
      <ContactShadows position={[0, -0.25, 0]} opacity={0.6} scale={6} blur={2.4} far={2} />
      <OrbitControls enablePan={false} minDistance={4.5} maxDistance={9} minPolarAngle={0.9} maxPolarAngle={1.65} target={[0, 0.9, 0]} />
    </Canvas>
  );
}

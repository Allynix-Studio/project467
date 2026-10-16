import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Hero photo that drifts slower than the page as you scroll. */
export function ParallaxFigure({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.img
        src={src}
        alt="Obsidian Ronin collectible figure on a black stone base"
        width={1280}
        height={1600}
        style={{ y, scale }}
        className="aspect-[4/5] w-full object-cover object-top"
      />
    </div>
  );
}

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { DURATION, EASE_ESTABLISH, STAGGER } from "@/motion/tokens";

/** Fades and lifts content into place once it enters the viewport. */
export function Reveal({
  children,
  index = 0,
  y = 24,
  className,
  immediate = false,
}: {
  children: ReactNode;
  index?: number;
  y?: number;
  className?: string;
  /** Animate on mount instead of on scroll (for above-the-fold content). */
  immediate?: boolean;
}) {
  const transition = { duration: DURATION.reveal, ease: EASE_ESTABLISH, delay: Math.min(index, 8) * STAGGER };
  return immediate ? (
    <motion.div className={className} initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={transition}>
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

/** Wipes an image frame open from the bottom, with a slow scale settle. */
export function ImageReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: DURATION.establish * 1.2, ease: EASE_ESTABLISH, delay }}
    >
      <motion.div initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: DURATION.establish * 1.8, ease: EASE_ESTABLISH, delay }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

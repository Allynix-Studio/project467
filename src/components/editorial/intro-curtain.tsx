import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_ESTABLISH } from "@/motion/tokens";

/** Brief brand intro, shown once per browser session. */
export function IntroCurtain() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("p467-intro")) return;
    sessionStorage.setItem("p467-intro", "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.9, ease: EASE_ESTABLISH }}
          aria-hidden
        >
          <div className="overflow-hidden">
            <motion.p
              className="text-[clamp(3rem,12vw,9rem)] font-medium leading-none"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: EASE_ESTABLISH }}
            >
              467
            </motion.p>
          </div>
          <motion.span
            className="absolute bottom-10 h-px w-40 origin-left bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: EASE_ESTABLISH }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

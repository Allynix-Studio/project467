import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_ESTABLISH } from "@/motion/tokens";

const KEY = "p467-entered";

/** Cinematic "Enter" screen, shown once per visit. */
export function IntroCurtain() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(KEY) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) setOpen(false);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const enter = () => {
    sessionStorage.setItem(KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="enter"
          role="dialog"
          aria-label="Welcome to Project 467"
          className="red-glow fixed inset-0 z-[100] grid place-items-center overflow-hidden"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1, ease: EASE_ESTABLISH }}
        >
          <p aria-hidden className="outline-type pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center text-[34vw] font-medium leading-none">467</p>
          <div className="relative flex flex-col items-center text-center">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE_ESTABLISH, delay: 0.2 }} className="font-technical text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Anime culture / Collected
            </motion.p>
            <div className="mt-4 overflow-hidden">
              <motion.h2 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: EASE_ESTABLISH, delay: 0.35 }} className="text-[clamp(3rem,10vw,8rem)] font-medium uppercase leading-none">
                Project 467
              </motion.h2>
            </div>
            <motion.button
              type="button"
              onClick={enter}
              autoFocus
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="font-technical group mt-12 flex items-center gap-4 border border-primary px-10 py-4 text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-primary"
            >
              <span className="enter-pulse h-2 w-2 rounded-full bg-primary group-hover:bg-foreground" /> Enter
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

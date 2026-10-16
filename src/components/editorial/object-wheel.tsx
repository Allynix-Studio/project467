import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { OBJECTS, CODENAMES } from "@/lib/objects";
import { EASE_INTERACT } from "@/motion/tokens";

/** Every object on a slowly turning ring; pointing at one brings it to the centre. */
export function ObjectWheel() {
  const items = OBJECTS.slice(0, 12);
  const [active, setActive] = useState(0);
  const a = items[active]!;

  return (
    <section aria-labelledby="wheel-title" className="relative border-t border-border py-20 lg:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-technical text-[10px] uppercase text-primary">The circle / {items.length} objects</p>
          <h2 id="wheel-title" className="mt-3 text-[clamp(2rem,4.5vw,4rem)] font-medium uppercase leading-[0.9]">Every piece,<br />one orbit.</h2>
        </div>
        <p className="font-technical max-w-xs text-[10px] uppercase text-muted-foreground">Point at an object to bring it forward.</p>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[min(42rem,90vw)]">
        <div className="wheel-spin absolute inset-0 rounded-full border border-border">
          {items.map((o, i) => {
            const angle = (i / items.length) * 360;
            return (
              <button
                key={o.slug}
                type="button"
                aria-label={o.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="absolute left-1/2 top-1/2 -ml-[8%] -mt-[10%] w-[16%]"
                style={{ transform: `rotate(${angle}deg) translateY(-215%) rotate(${-angle}deg)` }}
              >
                <span className="wheel-counter block">
                  <img
                    src={o.img}
                    alt=""
                    loading="lazy"
                    className={`aspect-[4/5] w-full border object-cover transition-all duration-300 ${i === active ? "scale-125 border-primary" : "border-border opacity-60 grayscale hover:opacity-100 hover:grayscale-0"}`}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <div className="absolute inset-[24%] grid place-items-center rounded-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3, ease: EASE_INTERACT }}
              className="flex flex-col items-center text-center"
            >
              <p className="font-technical text-[10px] uppercase text-primary">{CODENAMES[a.slug]}</p>
              <p className="mt-2 text-[clamp(1.1rem,2.6vw,2rem)] font-medium uppercase leading-none">{a.name}</p>
              <p className="font-technical mt-2 text-xs">{a.price}</p>
              <Link to="/objects/$slug" params={{ slug: a.slug }} className="font-technical mt-4 border-b border-primary pb-1 text-[10px] uppercase">
                View object
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

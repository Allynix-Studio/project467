import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { COLLECTIONS, collectionObjects } from "@/lib/collections";
import { EASE_ESTABLISH } from "@/motion/tokens";

/** A deck of collection cards that shuffles the top card to the back. */
export function CardShuffle() {
  const [order, setOrder] = useState(() => COLLECTIONS.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const next = () => setOrder((o) => [...o.slice(1), o[0]!]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4200);
    return () => clearInterval(t);
  }, [paused]);

  const top = COLLECTIONS[order[0]!]!;

  return (
    <section aria-labelledby="deck-title" className="grid items-center gap-12 border-t border-border py-20 lg:grid-cols-2 lg:py-28">
      <div>
        <p className="font-technical text-[10px] uppercase text-primary">Collections / Deck</p>
        <h2 id="deck-title" className="mt-3 text-[clamp(2rem,4.5vw,4rem)] font-medium uppercase leading-[0.9]">Shuffle<br />the archive.</h2>
        <p className="mt-6 max-w-md text-muted-foreground">{top.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={next} className="font-technical border border-border px-5 py-3 text-[10px] uppercase transition-colors hover:border-primary">
            Next card
          </button>
          <Link to="/collections/$slug" params={{ slug: top.slug }} className="font-technical bg-primary px-5 py-3 text-[10px] uppercase text-primary-foreground">
            Open {top.title}
          </Link>
        </div>
      </div>

      <div
        className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {order.map((ci, depth) => {
          const c = COLLECTIONS[ci]!;
          const cover = collectionObjects(c)[0];
          return (
            <motion.button
              key={c.slug}
              type="button"
              onClick={next}
              aria-label={`${c.title}, show next card`}
              className="absolute inset-0 overflow-hidden border border-border bg-card text-left shadow-2xl"
              style={{ zIndex: COLLECTIONS.length - depth }}
              animate={{ y: depth * -18, x: depth * 14, rotate: depth * 4, scale: 1 - depth * 0.05, opacity: 1 - depth * 0.25 }}
              transition={{ duration: 0.8, ease: EASE_ESTABLISH }}
            >
              {cover && <img src={cover.img} alt="" className="h-full w-full object-cover" />}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5 pt-20">
                <span className="font-technical block text-[10px] uppercase text-primary">{c.kicker}</span>
                <span className="mt-1 block text-2xl font-medium uppercase">{c.title}</span>
              </span>
              <span className="font-technical absolute left-4 top-4 text-[10px] uppercase text-muted-foreground">{c.index}</span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

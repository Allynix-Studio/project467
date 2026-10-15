import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { OBJECTS } from "@/lib/objects";
import { Reveal } from "@/motion/primitives/reveal";

const Stage = lazy(() => import("./showroom-3d"));
const PICKS = ["sorcerers-hoodie", "straw-hat-varsity-jacket", "obsidian-ronin", "survey-corps-utility-jacket", "pochita-life-size-vinyl", "capsule-corp-technical-tee"];

/** Dark room lit in vermilion, with products turning on plinths. */
export function Showroom() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const items = PICKS.map((s) => OBJECTS.find((o) => o.slug === s)!).filter(Boolean);

  return (
    <section aria-labelledby="showroom-title" className="red-glow relative -mx-5 overflow-hidden border-y border-border sm:-mx-8 lg:-mx-12">
      <p aria-hidden className="outline-type pointer-events-none absolute inset-x-0 top-8 select-none whitespace-nowrap text-center text-[16vw] font-medium uppercase leading-none">Showroom</p>
      <div className="relative h-[70svh] min-h-[28rem]">
        {ready && (
          <Suspense fallback={null}>
            <Stage images={items.map((o) => o.img)} />
          </Suspense>
        )}
      </div>
      <div className="relative flex flex-wrap items-end justify-between gap-6 px-5 pb-10 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-technical text-[10px] uppercase text-primary">The showroom / Live</p>
          <h2 id="showroom-title" className="mt-3 text-[clamp(2rem,4.5vw,4rem)] font-medium uppercase leading-[0.9]">Step inside<br />the drop.</h2>
        </Reveal>
        <ul className="font-technical flex flex-wrap gap-2 text-[10px] uppercase">
          {items.map((o) => (
            <li key={o.slug}><Link to="/objects/$slug" params={{ slug: o.slug }} className="block border border-border bg-background/60 px-3 py-2 backdrop-blur transition-colors hover:border-primary">{o.name}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

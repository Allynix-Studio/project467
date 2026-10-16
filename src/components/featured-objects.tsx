import { Reveal } from "@/motion/primitives/reveal";
import { Link } from "@tanstack/react-router";
import { OBJECTS } from "@/lib/objects";

export function FeaturedObjects() {
  return (
    <section aria-labelledby="featured-title" className="relative py-16 lg:py-24">
      <div aria-hidden className="pointer-events-none -mx-5 mb-12 overflow-hidden sm:-mx-8 lg:-mx-12">
        <p className="marquee-track outline-type flex w-max select-none whitespace-nowrap text-[clamp(4rem,10vw,9rem)] font-medium uppercase leading-none">
          {Array.from({ length: 2 }).map((_, k) => <span key={k} className="pr-8">Culture collected — Drop 001 — Culture collected — Drop 001 —&nbsp;</span>)}
        </p>
      </div>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-technical mb-4 text-[10px] uppercase text-primary">Featured objects / 04</p>
          <h2 id="featured-title" className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.9] font-medium uppercase">
            Selected<br />this season.
          </h2>
        </div>
        <Link to="/archive" className="font-technical border-b border-border pb-1 text-[11px] uppercase text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
          View all objects
        </Link>
      </div>

      <ul className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {OBJECTS.slice(0, 4).map((o, i) => (
          <li key={o.id} id={o.anchor} className="scroll-mt-24"><Reveal index={i}>
            <Link to="/objects/$slug" params={{ slug: o.slug }} className="group block">
              <div className="tilt-card relative overflow-hidden border border-border bg-card group-hover:border-primary">
                <img
                  src={o.img}
                  alt={o.name}
                  width={960}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="font-technical absolute left-3 top-3 text-[10px] uppercase text-muted-foreground">{o.id}</span>
                <span className="font-technical absolute bottom-3 right-3 bg-background/80 px-2 py-1 text-[10px] uppercase text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  View object
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-technical text-[10px] uppercase text-primary">{o.category}</p>
                  <h3 className="mt-1.5 text-base font-medium">{o.name}</h3>
                  <p className="font-technical mt-1 text-[10px] uppercase text-muted-foreground">{o.note}</p>
                </div>
                <p className="font-technical text-sm">{o.price}</p>
              </div>
            </Link>
          </Reveal></li>
        ))}
      </ul>
    </section>
  );
}

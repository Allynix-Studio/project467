import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { OBJECTS, getObject } from "@/lib/objects";
import { Reveal, ImageReveal } from "@/motion/primitives/reveal";
import { useBag } from "@/lib/bag";

export const Route = createFileRoute("/objects/$slug")({
  loader: ({ params }) => {
    const object = getObject(params.slug);
    if (!object) throw notFound();
    return { object };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Object not found — Project 467" }, { name: "robots", content: "noindex" }] };
    const o = loaderData.object;
    const title = `${o.name} — Project 467`;
    return {
      meta: [
        { title },
        { name: "description", content: o.description },
        { property: "og:title", content: title },
        { property: "og:description", content: o.description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ObjectNotFound,
  component: ObjectPage,
});

function ObjectNotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-5 pt-40 text-center">
        <p className="font-technical text-[10px] uppercase text-primary">404 / Not catalogued</p>
        <h1 className="mt-4 text-4xl font-medium uppercase">Object not found.</h1>
        <Button asChild variant="outline" className="mt-8"><Link to="/archive">Back to the archive</Link></Button>
      </div>
    </main>
  );
}

function ObjectPage() {
  const { object: o } = Route.useLoaderData();
  const [choice, setChoice] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const addToBag = useBag((s) => s.add);
  const needsChoice = !!o.options && !choice;
  const related = OBJECTS.filter((x) => x.slug !== o.slug && x.category === o.category)
    .concat(OBJECTS.filter((x) => x.slug !== o.slug && x.category !== o.category))
    .slice(0, 3);

  return (
    <main className="surface-grain min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[112rem] px-5 pb-20 pt-24 sm:px-8 lg:px-12">
        <nav className="font-technical mb-8 text-[10px] uppercase text-muted-foreground">
          <Link to="/archive" className="hover:text-foreground">Archive</Link> / {" "}
          <Link to="/archive" search={{ category: o.category }} className="hover:text-foreground">{o.category}</Link> / {" "}
          <span className="text-foreground">No. {o.id}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <ImageReveal key={o.slug} className="overflow-hidden border border-border bg-card">
            <img src={o.img} alt={o.name} width={960} height={1200} className="aspect-[4/5] w-full object-cover" />
          </ImageReveal>

          <Reveal immediate key={`d-${o.slug}`} index={2} className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-technical text-[10px] uppercase text-primary">{o.category} / {o.year} / {o.note}</p>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] font-medium uppercase">{o.name}</h1>
            <p className="font-technical mt-6 text-2xl">{o.price}</p>
            <p className="mt-6 max-w-md text-muted-foreground">{o.description}</p>

            {o.options && (
              <fieldset className="mt-8">
                <legend className="font-technical mb-3 text-[10px] uppercase text-muted-foreground">{o.options.label}</legend>
                <div className="flex flex-wrap gap-2">
                  {o.options.values.map((v) => (
                    <button
                      key={v}
                      type="button"
                      aria-pressed={choice === v}
                      onClick={() => { setChoice(v); setAdded(false); }}
                      className={`font-technical min-w-12 border px-4 py-2 text-xs uppercase transition-colors ${
                        choice === v ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            <Button className="mt-8 w-full sm:w-auto" size="lg" disabled={needsChoice} onClick={() => { addToBag(o.slug, choice); setAdded(true); }}>
              {needsChoice ? `Select a ${o.options!.label.toLowerCase()}` : added ? "Added to bag" : "Add to bag"}
            </Button>

            <dl className="mt-10 border-t border-border">
              {o.specs.map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border py-3">
                  <dt className="font-technical text-[10px] uppercase text-muted-foreground">{k}</dt>
                  <dd className="font-technical text-xs">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <section className="mt-24 border-t border-border pt-12">
          <h2 className="mb-8 text-2xl font-medium uppercase">Related objects</h2>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <li key={r.id}>
                <Link to="/objects/$slug" params={{ slug: r.slug }} className="group block">
                  <div className="overflow-hidden border border-border bg-card">
                    <img src={r.img} alt={r.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="mt-3 flex justify-between gap-4">
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="font-technical text-sm">{r.price}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

import { SiteFooter } from "@/components/site-footer";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/motion/primitives/reveal";
import { COLLECTIONS, collectionObjects } from "@/lib/collections";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — Project 467" },
      { name: "description", content: "Curated Project 467 collections: limited drops, display pieces and everyday objects, grouped with intent." },
      { property: "og:title", content: "Collections — Project 467" },
      { property: "og:description", content: "Curated groupings of anime figures, apparel and art from Project 467." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <main className="surface-grain min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[112rem] px-5 pb-20 pt-28 sm:px-8 lg:px-12">
        <header className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-10">
          <div>
            <p className="font-technical mb-4 text-[10px] uppercase text-primary">Collections / {String(COLLECTIONS.length).padStart(3, "0")}</p>
            <h1 className="text-[clamp(3rem,8vw,7.5rem)] leading-[0.86] font-medium uppercase">Collections.</h1>
          </div>
          <p className="max-w-sm text-muted-foreground">Objects grouped with intent — drops, shelves and wardrobes, each curated around one idea.</p>
        </header>

        <ul className="divide-y divide-border">
          {COLLECTIONS.map((c) => {
            const items = collectionObjects(c);
            return (
              <li key={c.slug}><Reveal>
                <Link to="/collections/$slug" params={{ slug: c.slug }} className="group grid gap-8 py-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                  <div>
                    <p className="font-technical text-[10px] uppercase text-primary">{c.index} / {c.kicker}</p>
                    <h2 className="mt-3 text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] font-medium uppercase transition-colors group-hover:text-primary">{c.title}</h2>
                    <p className="mt-4 max-w-md text-muted-foreground">{c.description}</p>
                    <p className="font-technical mt-6 text-[10px] uppercase text-muted-foreground">{items.length} objects — View collection</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {items.slice(0, 3).map((o) => (
                      <div key={o.id} className="overflow-hidden border border-border bg-card">
                        <img src={o.img} alt={o.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                      </div>
                    ))}
                  </div>
                </Link>
              </Reveal></li>
            );
          })}
        </ul>
      </div>
      <SiteFooter />
    </main>
  );
}

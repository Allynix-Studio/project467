import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { CATEGORIES, OBJECTS } from "@/lib/objects";

const FILTERS = ["All", ...CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];

export const Route = createFileRoute("/archive")({
  validateSearch: (search: Record<string, unknown>): { category?: Filter } => {
    const c = search["category"];
    return FILTERS.includes(c as Filter) && c !== "All" ? { category: c as Filter } : {};
  },
  head: () => ({
    meta: [
      { title: "The Archive — Project 467" },
      { name: "description", content: "Browse every Project 467 object: anime apparel, scale figures, collectibles and art." },
      { property: "og:title", content: "The Archive — Project 467" },
      { property: "og:description", content: "Every object in the Project 467 collection, in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Archive,
});

function Archive() {
  const category = Route.useSearch({ select: (s) => s.category ?? "All" });
  const items = category === "All" ? OBJECTS : OBJECTS.filter((o) => o.category === category);

  return (
    <main className="surface-grain min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[112rem] px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <header className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-10">
          <div>
            <p className="font-technical mb-4 text-[10px] uppercase text-primary">Archive / {String(OBJECTS.length).padStart(3, "0")} objects</p>
            <h1 className="text-[clamp(3rem,8vw,7.5rem)] leading-[0.86] font-medium uppercase">The archive.</h1>
          </div>
          <p className="max-w-sm text-muted-foreground">Every object we carry — figures, apparel, character goods and art — catalogued in one place.</p>
        </header>

        <nav aria-label="Filter by category" className="sticky top-16 z-30 -mx-5 flex gap-2 overflow-x-auto bg-background/85 px-5 py-4 backdrop-blur sm:mx-0 sm:px-0">
          {FILTERS.map((f) => (
            <Link
              key={f}
              to="/archive"
              search={f === "All" ? {} : { category: f }}
              className={`font-technical shrink-0 border px-4 py-2 text-[11px] uppercase transition-colors ${
                f === category ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </Link>
          ))}
        </nav>

        <p className="font-technical mb-6 mt-4 text-[10px] uppercase text-muted-foreground">
          Showing {items.length} {items.length === 1 ? "object" : "objects"}
        </p>

        <ul className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((o) => (
            <li key={o.id} className="group"><Link to="/objects/$slug" params={{ slug: o.slug }} className="block">
              <div className="relative overflow-hidden border border-border bg-card">
                <img src={o.img} alt={o.name} width={960} height={1200} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                <span className="font-technical absolute left-3 top-3 text-[10px] uppercase text-muted-foreground">No. {o.id}</span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-technical text-[10px] uppercase text-primary">{o.category} / {o.year}</p>
                  <h2 className="mt-1.5 text-base font-medium">{o.name}</h2>
                  <p className="font-technical mt-1 text-[10px] uppercase text-muted-foreground">{o.note}</p>
                </div>
                <p className="font-technical text-sm">{o.price}</p>
              </div>
            </Link></li>
          ))}
        </ul>
      </div>
    </main>
  );
}

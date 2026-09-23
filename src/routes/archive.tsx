import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { CATEGORIES, OBJECTS } from "@/lib/objects";
import { priceToNumber } from "@/lib/bag";
import { matchesQuery } from "@/components/navigation/search-overlay";
import { Search } from "lucide-react";

const FILTERS = ["All", ...CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];
const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "newest", label: "Newest" },
] as const;
type Sort = (typeof SORTS)[number]["id"];

export const Route = createFileRoute("/archive")({
  validateSearch: (search: Record<string, unknown>): { category?: Filter | undefined; q?: string | undefined; sort?: Sort | undefined } => {
    const c = search["category"];
    const q = typeof search["q"] === "string" ? search["q"].slice(0, 80) : "";
    const sort = SORTS.some((x) => x.id === search["sort"]) ? (search["sort"] as Sort) : undefined;
    return {
      ...(FILTERS.includes(c as Filter) && c !== "All" ? { category: c as Filter } : {}),
      ...(q ? { q } : {}),
      ...(sort && sort !== "featured" ? { sort } : {}),
    };
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
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const category = search.category ?? "All";
  const q = search.q ?? "";
  const sort = search.sort ?? "featured";
  let items = category === "All" ? OBJECTS : OBJECTS.filter((o) => o.category === category);
  if (q) items = items.filter((o) => matchesQuery(`${o.name} ${o.category} ${o.note} ${o.description}`, q));
  if (sort === "price-asc") items = [...items].sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
  if (sort === "price-desc") items = [...items].sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
  if (sort === "newest") items = [...items].sort((a, b) => b.year.localeCompare(a.year));

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
              search={(prev) => ({ ...prev, category: f === "All" ? undefined : f })}
              className={`font-technical shrink-0 border px-4 py-2 text-[11px] uppercase transition-colors ${
                f === category ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </Link>
          ))}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <label className="flex items-center gap-2 border border-border px-3">
              <Search className="size-3.5 text-muted-foreground" />
              <input
                defaultValue={q}
                aria-label="Filter archive"
                placeholder="Filter"
                onChange={(e) => navigate({ search: (prev) => ({ ...prev, q: e.target.value || undefined }), replace: true })}
                className="font-technical w-28 bg-transparent py-2 text-[11px] uppercase outline-none placeholder:text-muted-foreground sm:w-40"
              />
            </label>
            <select
              aria-label="Sort"
              value={sort}
              onChange={(e) => navigate({ search: (prev) => ({ ...prev, sort: e.target.value === "featured" ? undefined : (e.target.value as Sort) }), replace: true })}
              className="font-technical border border-border bg-background px-3 py-2 text-[11px] uppercase text-muted-foreground outline-none"
            >
              {SORTS.map((x) => <option key={x.id} value={x.id}>{x.label}</option>)}
            </select>
          </div>
        </nav>

        <p className="font-technical mb-6 mt-4 text-[10px] uppercase text-muted-foreground">
          Showing {items.length} {items.length === 1 ? "object" : "objects"}{q ? ` for “${q}”` : ""}
        </p>
        {items.length === 0 && (
          <div className="border border-border p-10 text-center">
            <p className="text-muted-foreground">No objects match these filters.</p>
            <Link to="/archive" className="font-technical mt-4 inline-block border-b border-primary pb-1 text-[11px] uppercase">Clear filters</Link>
          </div>
        )}

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

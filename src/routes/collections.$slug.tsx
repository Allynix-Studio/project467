import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { COLLECTIONS, collectionObjects, getCollection } from "@/lib/collections";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Collection not found — Project 467" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.collection;
    const title = `${c.title} — Project 467 Collection`;
    return {
      meta: [
        { title },
        { name: "description", content: c.description },
        { property: "og:title", content: title },
        { property: "og:description", content: c.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CollectionNotFound,
  component: CollectionPage,
});

function CollectionNotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-5 pt-40 text-center">
        <p className="font-technical text-[10px] uppercase text-primary">404 / Not curated</p>
        <h1 className="mt-4 text-4xl font-medium uppercase">Collection not found.</h1>
        <Button asChild variant="outline" className="mt-8"><Link to="/collections">All collections</Link></Button>
      </div>
    </main>
  );
}

function CollectionPage() {
  const { collection: c } = Route.useLoaderData();
  const items = collectionObjects(c);
  const others = COLLECTIONS.filter((x) => x.slug !== c.slug);

  return (
    <main className="surface-grain min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-[112rem] px-5 pb-20 pt-24 sm:px-8 lg:px-12">
        <nav className="font-technical mb-8 text-[10px] uppercase text-muted-foreground">
          <Link to="/collections" className="hover:text-foreground">Collections</Link> / <span className="text-foreground">{c.index}</span>
        </nav>
        <header className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="font-technical mb-4 text-[10px] uppercase text-primary">{c.kicker}</p>
            <h1 className="text-[clamp(3rem,8vw,7.5rem)] leading-[0.86] font-medium uppercase">{c.title}</h1>
          </div>
          <div>
            <p className="text-muted-foreground">{c.description}</p>
            <p className="font-technical mt-4 text-[10px] uppercase text-muted-foreground">{items.length} objects</p>
          </div>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((o) => (
            <li key={o.id}>
              <Link to="/objects/$slug" params={{ slug: o.slug }} className="group block">
                <div className="relative overflow-hidden border border-border bg-card">
                  <img src={o.img} alt={o.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                  <span className="font-technical absolute left-3 top-3 text-[10px] uppercase text-muted-foreground">No. {o.id}</span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-technical text-[10px] uppercase text-primary">{o.category}</p>
                    <h2 className="mt-1.5 text-base font-medium">{o.name}</h2>
                  </div>
                  <p className="font-technical text-sm">{o.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {others.length > 0 && (
          <section className="mt-24 border-t border-border pt-10">
            <p className="font-technical mb-6 text-[10px] uppercase text-muted-foreground">More collections</p>
            <ul className="flex flex-col gap-4">
              {others.map((x) => (
                <li key={x.slug}>
                  <Link to="/collections/$slug" params={{ slug: x.slug }} className="text-2xl font-medium uppercase transition-colors hover:text-primary">
                    <span className="font-technical mr-4 text-[10px] text-primary">{x.index}</span>{x.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

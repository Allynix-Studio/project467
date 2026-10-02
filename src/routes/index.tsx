import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { FeaturedObjects } from "@/components/featured-objects";
import { Reveal, ImageReveal } from "@/motion/primitives/reveal";
import heroFigure from "@/assets/hero-figure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Project 467 — Culture, Collected" },
      { name: "description", content: "Project 467 presents anime culture through objects, fashion, and collectible design." },
      { property: "og:title", content: "Project 467 — Culture, Collected" },
      { property: "og:description", content: "Anime culture through objects, fashion, and collectible design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="surface-grain min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto flex min-h-screen max-w-[112rem] flex-col px-5 pb-5 pt-16 sm:px-8 sm:pb-7 lg:px-12">


        <section className="grid flex-1 grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <Reveal immediate index={1}><p className="font-technical mb-6 flex items-center gap-3 text-[10px] uppercase text-primary">
              <span className="h-px w-8 bg-primary" /> Drop 001 / Obsidian Ronin
            </p></Reveal>
            <Reveal immediate index={2} y={40}><h1 className="text-[clamp(3.25rem,6.5vw,7.5rem)] leading-[0.86] font-medium uppercase">
              Culture,<br />collected.
            </h1></Reveal>
            <Reveal immediate index={4}><p className="mt-8 max-w-md text-lg leading-snug text-muted-foreground">
              Authentic figures, elevated streetwear and collectible art from Japan, chosen with a curator's eye.
            </p></Reveal>
            <Reveal immediate index={5} className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" asChild><Link to="/objects/$slug" params={{ slug: "obsidian-ronin" }}>Shop the drop</Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/archive">Enter the archive</Link></Button>
            </Reveal>
            <Reveal immediate index={6}><dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6 font-technical text-[10px] uppercase">
              <div><dt className="text-muted-foreground">Edition</dt><dd className="mt-2 text-foreground">1 / 467</dd></div>
              <div><dt className="text-muted-foreground">Scale</dt><dd className="mt-2 text-foreground">1:7</dd></div>
              <div><dt className="text-muted-foreground">Origin</dt><dd className="mt-2 text-primary">Tokyo</dd></div>
            </dl></Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <figure className="liquid-obsidian relative mx-auto max-w-xl overflow-hidden">
              <ImageReveal delay={0.15}><img src={heroFigure} alt="Obsidian Ronin collectible figure on a black stone base" width={1280} height={1600} className="aspect-[4/5] max-h-[60svh] w-full object-cover lg:max-h-none" /></ImageReveal>
              <figcaption className="font-technical absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-background to-transparent p-5 pt-16 text-[10px] uppercase">
                <span>Obsidian Ronin</span><span className="text-primary">Limited</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <FeaturedObjects />

        <footer className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-5 font-technical text-[10px] uppercase text-muted-foreground">
          <p>Anime / Objects / Culture</p>
          <p>Est. 04 / 06 / 07</p>
        </footer>
      </div>
    </main>
  );
}

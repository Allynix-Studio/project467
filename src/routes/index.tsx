import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

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
      <div className="mx-auto flex min-h-screen max-w-[112rem] flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12">
        <header className="flex items-center justify-between border-b border-border pb-5">
          <p className="text-sm font-semibold uppercase">Project 467</p>
          <p className="font-technical text-[10px] uppercase text-muted-foreground">Visual validation / 01</p>
        </header>

        <section className="grid flex-1 grid-cols-1 items-end gap-12 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <p className="font-technical mb-8 text-[10px] uppercase text-primary">Global anime culture house</p>
            <h1 className="max-w-5xl text-[clamp(4.25rem,11vw,10.5rem)] leading-[0.82] font-medium uppercase">
              Culture,<br />collected.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <div className="liquid-obsidian max-w-md p-6 sm:p-8">
              <p className="max-w-xs text-lg leading-snug">A study in obsidian, motion, and collectible culture.</p>
              <div className="mt-12 grid grid-cols-2 gap-y-8 border-t border-border pt-6 font-technical text-[10px] uppercase text-muted-foreground">
                <span>Foundation</span><span className="text-right text-foreground">Active</span>
                <span>Palette</span><span className="text-right text-foreground">Obsidian / Bone</span>
                <span>Signal</span><span className="text-right text-primary">Vermilion</span>
              </div>
              <Button className="mt-10 w-full">Enter the archive</Button>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-end justify-between gap-6 border-t border-border pt-5 font-technical text-[10px] uppercase text-muted-foreground">
          <p>Anime / Objects / Culture</p>
          <p>Est. 04 / 06 / 07</p>
        </footer>
      </div>
    </main>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { OBJECTS } from "@/lib/objects";
import { COLLECTIONS } from "@/lib/collections";

export function matchesQuery(text: string, q: string) {
  const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const hay = text.toLowerCase();
  return terms.every((t) => hay.includes(t));
}

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQ("");
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    if (!q.trim()) return { objects: [], collections: [] };
    return {
      objects: OBJECTS.filter((o) => matchesQuery(`${o.name} ${o.category} ${o.note} ${o.description}`, q)),
      collections: COLLECTIONS.filter((c) => matchesQuery(`${c.title} ${c.kicker} ${c.description}`, q)),
    };
  }, [q]);

  const empty = q.trim() && results.objects.length === 0 && results.collections.length === 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className={`surface-grain fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl transition-opacity duration-300 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="mx-auto max-w-4xl px-5 pt-6 sm:px-8">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <Search className="size-5 text-primary" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search objects, categories, collections"
            aria-label="Search"
            className="flex-1 bg-transparent text-2xl font-medium outline-none placeholder:text-muted-foreground sm:text-3xl"
            tabIndex={open ? 0 : -1}
          />
          <button aria-label="Close search" onClick={onClose} className="grid size-10 place-items-center text-muted-foreground hover:text-foreground" tabIndex={open ? 0 : -1}>
            <X className="size-5" />
          </button>
        </div>

        <div className="max-h-[calc(100vh-7rem)] overflow-y-auto py-8">
          {!q.trim() && (
            <div>
              <p className="font-technical mb-4 text-[10px] uppercase text-muted-foreground">Browse by category</p>
              <div className="flex flex-wrap gap-2">
                {["Apparel", "Figures", "Collectibles", "Art"].map((c) => (
                  <Link key={c} to="/archive" search={{ category: c as "Apparel" }} onClick={onClose} className="font-technical border border-border px-4 py-2 text-[11px] uppercase text-muted-foreground hover:border-primary hover:text-foreground">
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {empty && <p className="text-muted-foreground">Nothing matches “{q}”. Try a category or a shorter word.</p>}

          {results.objects.length > 0 && (
            <section>
              <p className="font-technical mb-4 text-[10px] uppercase text-primary">Objects / {results.objects.length}</p>
              <ul className="divide-y divide-border border-y border-border">
                {results.objects.map((o) => (
                  <li key={o.id}>
                    <Link to="/objects/$slug" params={{ slug: o.slug }} onClick={onClose} className="group flex items-center gap-4 py-3">
                      <img src={o.img} alt="" className="aspect-[4/5] w-12 border border-border object-cover" />
                      <div className="flex-1">
                        <p className="font-medium transition-colors group-hover:text-primary">{o.name}</p>
                        <p className="font-technical text-[10px] uppercase text-muted-foreground">{o.category} / {o.note}</p>
                      </div>
                      <p className="font-technical text-sm">{o.price}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {results.collections.length > 0 && (
            <section className="mt-10">
              <p className="font-technical mb-4 text-[10px] uppercase text-primary">Collections / {results.collections.length}</p>
              <ul className="flex flex-col gap-3">
                {results.collections.map((c) => (
                  <li key={c.slug}>
                    <Link to="/collections/$slug" params={{ slug: c.slug }} onClick={onClose} className="text-xl font-medium uppercase hover:text-primary">
                      <span className="font-technical mr-3 text-[10px] text-primary">{c.index}</span>{c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

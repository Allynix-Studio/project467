import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/objects";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-[112rem] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <p className="text-3xl font-medium uppercase leading-none">Project 467</p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Anime culture, collected. Figures, garments and objects, chosen one at a time.
          </p>
        </div>
        <nav className="font-technical grid grid-cols-2 gap-8 text-[11px] uppercase sm:grid-cols-3 lg:col-span-7" aria-label="Footer">
          <div>
            <p className="mb-4 text-muted-foreground">Shop</p>
            <ul className="space-y-3">
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <Link to="/archive" search={{ category: c }} className="transition-colors hover:text-primary">{c}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-muted-foreground">Explore</p>
            <ul className="space-y-3">
              <li><Link to="/archive" className="transition-colors hover:text-primary">Archive</Link></li>
              <li><Link to="/collections" className="transition-colors hover:text-primary">Collections</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-muted-foreground">House</p>
            <ul className="space-y-3 text-muted-foreground">
              <li>Officially sourced</li>
              <li>Tracked shipping</li>
              <li>30-day returns</li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="font-technical mx-auto flex max-w-[112rem] flex-wrap justify-between gap-4 border-t border-border px-5 py-5 text-[10px] uppercase text-muted-foreground sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Project 467</p>
        <p>Anime / Objects / Culture</p>
      </div>
    </footer>
  );
}

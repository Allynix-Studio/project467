import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useBag } from "@/lib/bag";
import { BagDrawer } from "@/components/commerce/bag-drawer";

const NAV = [
  { label: "Apparel", href: "/archive?category=Apparel", index: "01" },
  { label: "Figures", href: "/archive?category=Figures", index: "02" },
  { label: "Collectibles", href: "/archive?category=Collectibles", index: "03" },
  { label: "Art", href: "/archive?category=Art", index: "04" },
  { label: "Collections", href: "/collections", index: "05" },
  { label: "Archive", href: "/archive", index: "06" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const count = useBag((s) => s.lines.reduce((n, l) => n + l.qty, 0));
  const setBagOpen = useBag((s) => s.setOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[112rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="text-sm font-semibold uppercase tracking-wide">Project 467</span>
            <span className="font-technical hidden text-[10px] uppercase text-primary sm:inline">/ Atelier</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group font-technical flex items-baseline gap-1.5 text-[11px] uppercase text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="text-[9px] text-primary opacity-0 transition-opacity group-hover:opacity-100">{item.index}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <button aria-label="Search" className="grid size-10 place-items-center text-muted-foreground transition-colors hover:text-foreground">
              <Search className="size-4" />
            </button>
            <button aria-label={`Bag, ${count} items`} onClick={() => setBagOpen(true)} className="relative grid size-10 place-items-center text-muted-foreground transition-colors hover:text-foreground">
              <ShoppingBag className="size-4" />
              <span className="font-technical absolute right-1 top-1 text-[9px] text-primary">{count}</span>
            </button>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`surface-grain fixed inset-0 z-40 bg-background pt-16 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-5 pb-8 pt-10 sm:px-8">
          <ul className="space-y-2">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-border">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 text-4xl font-medium uppercase"
                >
                  {item.label}
                  <span className="font-technical text-[10px] text-primary">{item.index}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="font-technical text-[10px] uppercase text-muted-foreground">Anime / Objects / Culture</p>
        </nav>
      </div>
    </>
  );
}

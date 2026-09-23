import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { OBJECTS } from "@/lib/objects";
import { priceToNumber, useBag } from "@/lib/bag";

export function BagDrawer() {
  const { lines, open, setOpen, setQty, remove } = useBag();

  useEffect(() => {
    void useBag.persist.rehydrate();
  }, []);

  const rows = lines
    .map((l) => ({ line: l, object: OBJECTS.find((o) => o.slug === l.slug) }))
    .filter((r): r is { line: typeof r.line; object: NonNullable<typeof r.object> } => !!r.object);
  const subtotal = rows.reduce((sum, r) => sum + priceToNumber(r.object.price) * r.line.qty, 0);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex w-full flex-col gap-0 border-border bg-background p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border p-6 text-left">
          <p className="font-technical text-[10px] uppercase text-primary">Bag / {String(rows.reduce((n, r) => n + r.line.qty, 0)).padStart(2, "0")}</p>
          <SheetTitle className="text-2xl font-medium uppercase">Your bag</SheetTitle>
          <SheetDescription className="sr-only">Objects you have added to your bag.</SheetDescription>
        </SheetHeader>

        {rows.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center">
            <p className="text-muted-foreground">Your bag is empty.</p>
            <Button asChild variant="outline" onClick={() => setOpen(false)}>
              <Link to="/archive">Browse the archive</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {rows.map(({ line, object: o }) => (
                <li key={line.key} className="flex gap-4 py-5">
                  <img src={o.img} alt={o.name} className="aspect-[4/5] w-20 shrink-0 border border-border object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium">{o.name}</p>
                        <p className="font-technical mt-1 text-[10px] uppercase text-muted-foreground">
                          {o.category}{line.option ? ` / ${o.options?.label ?? "Option"} ${line.option}` : ""}
                        </p>
                      </div>
                      <button aria-label={`Remove ${o.name}`} onClick={() => remove(line.key)} className="text-muted-foreground transition-colors hover:text-primary">
                        <X className="size-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-border">
                        <button aria-label="Decrease quantity" onClick={() => setQty(line.key, line.qty - 1)} className="grid size-8 place-items-center text-muted-foreground hover:text-foreground">
                          <Minus className="size-3" />
                        </button>
                        <span className="font-technical w-6 text-center text-xs">{line.qty}</span>
                        <button aria-label="Increase quantity" onClick={() => setQty(line.key, line.qty + 1)} className="grid size-8 place-items-center text-muted-foreground hover:text-foreground">
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <p className="font-technical text-sm">${(priceToNumber(o.price) * line.qty).toLocaleString()}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-border p-6">
              <div className="flex justify-between">
                <span className="font-technical text-[10px] uppercase text-muted-foreground">Subtotal</span>
                <span className="font-technical text-lg">${subtotal.toLocaleString()}</span>
              </div>
              <p className="font-technical mt-2 text-[10px] uppercase text-muted-foreground">Shipping and taxes at checkout</p>
              <Button className="mt-5 w-full" size="lg" disabled>Checkout — coming soon</Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

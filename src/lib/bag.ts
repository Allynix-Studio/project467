import { create } from "zustand";
import { persist } from "zustand/middleware";

export type BagLine = { key: string; slug: string; option: string | null; qty: number };

type BagState = {
  lines: BagLine[];
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (slug: string, option: string | null) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
};

export const useBag = create<BagState>()(
  persist(
    (set) => ({
      lines: [],
      open: false,
      setOpen: (open) => set({ open }),
      add: (slug, option) =>
        set((s) => {
          const key = `${slug}::${option ?? ""}`;
          const found = s.lines.find((l) => l.key === key);
          const lines = found
            ? s.lines.map((l) => (l.key === key ? { ...l, qty: Math.min(l.qty + 1, 9) } : l))
            : [...s.lines, { key, slug, option, qty: 1 }];
          return { lines, open: true };
        }),
      setQty: (key, qty) =>
        set((s) => ({
          lines: qty <= 0 ? s.lines.filter((l) => l.key !== key) : s.lines.map((l) => (l.key === key ? { ...l, qty: Math.min(qty, 9) } : l)),
        })),
      remove: (key) => set((s) => ({ lines: s.lines.filter((l) => l.key !== key) })),
    }),
    { name: "p467-bag", partialize: (s) => ({ lines: s.lines }), skipHydration: true },
  ),
);

export const priceToNumber = (p: string) => Number(p.replace(/[^0-9.]/g, "")) || 0;

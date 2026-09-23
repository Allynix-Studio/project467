import hoodie from "@/assets/object-hoodie.jpg";
import figure from "@/assets/object-figure.jpg";
import print from "@/assets/object-print.jpg";
import goods from "@/assets/object-goods.jpg";
import ronin from "@/assets/hero-figure.jpg";

export const CATEGORIES = ["Apparel", "Figures", "Collectibles", "Art"] as const;
export type Category = (typeof CATEGORIES)[number];

export type ArchiveObject = {
  id: string;
  name: string;
  category: Category;
  price: string;
  note: string;
  img: string;
  anchor: string;
  year: string;
  slug: string;
  description: string;
  options: { label: string; values: string[] } | null;
  specs: [string, string][];
};

export const OBJECTS: ArchiveObject[] = [
  { id: "01", name: "Yume Heavyweight Hoodie", category: "Apparel", price: "$148", note: "Embroidered", img: hoodie, anchor: "apparel", year: "2026", slug: "yume-heavyweight-hoodie", description: "A 480gsm loopback cotton hoodie with tonal chest embroidery and a dropped shoulder. Cut to hold its shape wash after wash.", options: { label: "Size", values: ["S", "M", "L", "XL"] }, specs: [["Material","480gsm cotton"],["Fit","Relaxed"],["Origin","Portugal"]] },
  { id: "02", name: "Pilot 01 Scale Figure", category: "Figures", price: "$320", note: "1:7 scale", img: figure, anchor: "figures", year: "2026", slug: "pilot-01-scale-figure", description: "A 1:7 scale figure sculpted in PVC and ABS, hand-painted and mounted on a numbered display base.", options: null, specs: [["Scale","1:7"],["Height","24 cm"],["Material","PVC / ABS"]] },
  { id: "03", name: "Kitsune Ink Print", category: "Art", price: "$210", note: "Edition of 67", img: print, anchor: "art", year: "2025", slug: "kitsune-ink-print", description: "A giclée print on 310gsm cotton rag, signed and numbered in an edition of 67.", options: { label: "Size", values: ["A3", "A2"] }, specs: [["Paper","310gsm cotton rag"],["Edition","67"],["Signed","Yes"]] },
  { id: "04", name: "Akane Character Set", category: "Collectibles", price: "$64", note: "Pins / stand / plush", img: goods, anchor: "collectibles", year: "2026", slug: "akane-character-set", description: "A boxed set of enamel pins, an acrylic stand and a small plush, packed in a rigid gift box.", options: null, specs: [["Contents","3 pieces"],["Box","Rigid, magnetic"],["Plush","15 cm"]] },
  { id: "05", name: "Obsidian Ronin", category: "Figures", price: "$480", note: "1 / 467 limited", img: ronin, anchor: "ronin", year: "2026", slug: "obsidian-ronin", description: "The first Project 467 original: a 1:7 ronin cast in resin with a hand-finished obsidian base. 467 made, never restocked.", options: null, specs: [["Scale","1:7"],["Edition","467"],["Material","Resin"]] },
];

export const getObject = (slug: string) => OBJECTS.find((o) => o.slug === slug);

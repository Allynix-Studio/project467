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
};

export const OBJECTS: ArchiveObject[] = [
  { id: "01", name: "Yume Heavyweight Hoodie", category: "Apparel", price: "$148", note: "Embroidered", img: hoodie, anchor: "apparel", year: "2026" },
  { id: "02", name: "Pilot 01 Scale Figure", category: "Figures", price: "$320", note: "1:7 scale", img: figure, anchor: "figures", year: "2026" },
  { id: "03", name: "Kitsune Ink Print", category: "Art", price: "$210", note: "Edition of 67", img: print, anchor: "art", year: "2025" },
  { id: "04", name: "Akane Character Set", category: "Collectibles", price: "$64", note: "Pins / stand / plush", img: goods, anchor: "collectibles", year: "2026" },
  { id: "05", name: "Obsidian Ronin", category: "Figures", price: "$480", note: "1 / 467 limited", img: ronin, anchor: "ronin", year: "2026" },
];

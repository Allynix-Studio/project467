import { OBJECTS, type ArchiveObject } from "@/lib/objects";

export type Collection = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  description: string;
  objectSlugs: string[];
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "drop-001-obsidian-ronin",
    index: "001",
    title: "Obsidian Ronin",
    kicker: "Drop 001 / Limited",
    description: "The founding drop. A numbered figure, a heavyweight layer and a signed print — built around a single silhouette.",
    objectSlugs: ["obsidian-ronin", "yume-heavyweight-hoodie", "kitsune-ink-print"],
  },
  {
    slug: "display-shelf",
    index: "002",
    title: "The Display Shelf",
    kicker: "Figures / Collectibles",
    description: "Scale figures and character goods chosen to sit together — sculpt, paint and packaging worth keeping.",
    objectSlugs: ["pilot-01-scale-figure", "obsidian-ronin", "akane-character-set"],
  },
  {
    slug: "worn-and-hung",
    index: "003",
    title: "Worn & Hung",
    kicker: "Apparel / Art",
    description: "Pieces you live with every day: garments cut to last and editions made for the wall.",
    objectSlugs: ["yume-heavyweight-hoodie", "kitsune-ink-print"],
  },
];

export const getCollection = (slug: string) => COLLECTIONS.find((c) => c.slug === slug);

export const collectionObjects = (c: Collection): ArchiveObject[] =>
  c.objectSlugs.map((s) => OBJECTS.find((o) => o.slug === s)).filter((o): o is ArchiveObject => !!o);

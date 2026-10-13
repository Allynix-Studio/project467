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
    description: "The founding drop. One numbered figure and the pieces around it: a heavyweight hoodie, a signed print and the incense to burn beside them.",
    objectSlugs: ["obsidian-ronin", "sorcerers-hoodie", "kitsune-ink-print", "wisteria-incense-set"],
  },
  {
    slug: "display-shelf",
    index: "002",
    title: "The Display Shelf",
    kicker: "Figures / Collectibles",
    description: "Four pieces chosen to stand together on one shelf. Sculpt, paint and finish worth keeping.",
    objectSlugs: ["eva-01-test-type", "gojo-display-figure", "zoro-scale-figure", "pochita-life-size-vinyl"],
  },
  {
    slug: "worn-and-hung",
    index: "003",
    title: "Worn & Hung",
    kicker: "Apparel / Art",
    description: "Things you wear every day and the rug they land on. Made to last, made to be used.",
    objectSlugs: ["straw-hat-varsity-jacket", "survey-corps-utility-jacket", "capsule-corp-technical-tee", "alchemy-circle-rug"],
  },
];

export const getCollection = (slug: string) => COLLECTIONS.find((c) => c.slug === slug);

export const collectionObjects = (c: Collection): ArchiveObject[] =>
  c.objectSlugs.map((s) => OBJECTS.find((o) => o.slug === s)).filter((o): o is ArchiveObject => !!o);

import ronin from "@/assets/hero-figure.jpg";
import print from "@/assets/object-print.jpg";
import sorcererHoodie from "@/assets/p-sorcerer-hoodie.jpg";
import varsity from "@/assets/p-straw-hat-varsity.jpg";
import utility from "@/assets/p-survey-utility-jacket.jpg";
import capsuleTee from "@/assets/p-capsule-tee.jpg";
import eva from "@/assets/p-eva-test-type.jpg";
import pochita from "@/assets/p-pochita-vinyl.jpg";
import gojo from "@/assets/p-gojo-figure.jpg";
import zoro from "@/assets/p-zoro-figure.jpg";
import incense from "@/assets/p-wisteria-incense.jpg";
import rug from "@/assets/p-alchemy-rug.jpg";
import deskObject from "@/assets/p-capsule-desk-object.jpg";
import ceramic from "@/assets/p-akatsuki-ceramic.jpg";

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

const SIZES = { label: "Size", values: ["XS", "S", "M", "L", "XL", "XXL"] };

export const OBJECTS: ArchiveObject[] = [
  { id: "01", name: "Obsidian Ronin", category: "Figures", price: "$480", note: "1 / 467 limited", img: ronin, anchor: "ronin", year: "2026", slug: "obsidian-ronin", description: "The first Project 467 original. A 1:7 ronin in polystone with a hand-finished obsidian base. 467 numbered pieces, never restocked.", options: null, specs: [["Scale", "1:7"], ["Height", "31 cm"], ["Material", "Polystone / resin"], ["Edition", "467, numbered"]] },
  { id: "02", name: "Sorcerer's Hoodie", category: "Apparel", price: "$165", note: "Tonal embroidery", img: sorcererHoodie, anchor: "apparel", year: "2026", slug: "sorcerers-hoodie", description: "A 500gsm brushed-back cotton hoodie with a tonal seal embroidered at the chest. Double-layer hood, dropped shoulder and a boxy cut that keeps its shape.", options: SIZES, specs: [["Material", "500gsm cotton fleece"], ["Fit", "Boxy, dropped shoulder"], ["Made in", "Portugal"], ["Care", "Cold wash, dry flat"]] },
  { id: "03", name: "Straw Hat Varsity Jacket", category: "Apparel", price: "$395", note: "Wool / leather", img: varsity, anchor: "varsity", year: "2026", slug: "straw-hat-varsity-jacket", description: "A melton wool varsity jacket with lambskin sleeves, chenille 467 patch and an embroidered straw hat crest. Quilted lining and striped rib trims.", options: SIZES, specs: [["Body", "Melton wool"], ["Sleeves", "Lambskin leather"], ["Lining", "Quilted satin"], ["Made in", "Japan"]] },
  { id: "04", name: "Survey Corps Utility Jacket", category: "Apparel", price: "$285", note: "Technical shell", img: utility, anchor: "utility", year: "2026", slug: "survey-corps-utility-jacket", description: "A water-resistant field jacket with a removable harness, eight cargo pockets and an embroidered wings insignia on the sleeve.", options: SIZES, specs: [["Shell", "Ripstop nylon, DWR"], ["Pockets", "8"], ["Harness", "Removable"], ["Fit", "Regular"]] },
  { id: "05", name: "Capsule Corp Technical Tee", category: "Apparel", price: "$68", note: "Heavyweight", img: capsuleTee, anchor: "tee", year: "2026", slug: "capsule-corp-technical-tee", description: "A 280gsm compact-cotton tee with a small technical chest print. Tight collar rib, boxy fit and pre-shrunk so it stays true to size.", options: SIZES, specs: [["Material", "280gsm compact cotton"], ["Fit", "Boxy"], ["Print", "Water-based"], ["Made in", "Portugal"]] },
  { id: "06", name: "Eva-01 Test Type", category: "Figures", price: "$340", note: "Articulated", img: eva, anchor: "figures", year: "2026", slug: "eva-01-test-type", description: "A die-cast and ABS articulated figure with over 50 points of movement, LED eyes and a display base with nameplate.", options: null, specs: [["Height", "30 cm"], ["Material", "Die-cast / ABS / PVC"], ["Articulation", "50+ points"], ["Extras", "LED eyes, display base"]] },
  { id: "07", name: "Gojo Display Figure", category: "Figures", price: "$420", note: "1:7 scale", img: gojo, anchor: "gojo", year: "2026", slug: "gojo-display-figure", description: "A 1:7 scale figure with a translucent energy effect part and a rock-textured base. Sculpted and painted by hand.", options: null, specs: [["Scale", "1:7"], ["Height", "28 cm"], ["Material", "PVC / ABS"], ["Extras", "Effect part"]] },
  { id: "08", name: "Zoro Scale Figure", category: "Figures", price: "$380", note: "1:8 scale", img: zoro, anchor: "zoro", year: "2026", slug: "zoro-scale-figure", description: "A 1:8 scale figure in a three-sword stance, with metal-finish blades and a sculpted stone base.", options: null, specs: [["Scale", "1:8"], ["Height", "26 cm"], ["Material", "PVC / ABS"], ["Blades", "Metallic finish"]] },
  { id: "09", name: "Pochita Life-Size Vinyl", category: "Collectibles", price: "$1,250", note: "Edition of 500", img: pochita, anchor: "collectibles", year: "2026", slug: "pochita-life-size-vinyl", description: "A life-size rotocast vinyl art toy in high-gloss orange, mounted on a black plinth with a numbered plaque. 500 made.", options: null, specs: [["Height", "45 cm"], ["Material", "Rotocast vinyl"], ["Edition", "500, numbered"], ["Base", "Lacquered plinth"]] },
  { id: "10", name: "Capsule Corp Desk Object", category: "Collectibles", price: "$95", note: "Aluminium", img: deskObject, anchor: "desk", year: "2026", slug: "capsule-corp-desk-object", description: "A lacquered aluminium capsule on a brushed steel base. Twists open to store small things on your desk.", options: null, specs: [["Height", "18 cm"], ["Body", "Lacquered aluminium"], ["Base", "Brushed steel"], ["Opens", "Twist cap"]] },
  { id: "11", name: "Akatsuki Ceramic Set", category: "Collectibles", price: "$140", note: "Teapot + 4 cups", img: ceramic, anchor: "ceramic", year: "2026", slug: "akatsuki-ceramic-set", description: "A textured black stoneware teapot and four cups with hand-glazed red clouds. Fired in Mino, Japan.", options: null, specs: [["Pieces", "5"], ["Material", "Stoneware"], ["Teapot", "600 ml"], ["Made in", "Mino, Japan"]] },
  { id: "12", name: "Wisteria Incense Set", category: "Collectibles", price: "$48", note: "40 sticks", img: incense, anchor: "incense", year: "2026", slug: "wisteria-incense-set", description: "Forty slow-burning wisteria incense sticks from Awaji Island, with a cast-iron stone holder in a lacquered box.", options: null, specs: [["Sticks", "40"], ["Burn time", "25 min each"], ["Origin", "Awaji, Japan"], ["Holder", "Cast iron"]] },
  { id: "13", name: "Alchemy Circle Rug", category: "Art", price: "$520", note: "Hand-tufted", img: rug, anchor: "art", year: "2026", slug: "alchemy-circle-rug", description: "A round, hand-tufted New Zealand wool rug with a transmutation circle in bone and vermilion.", options: { label: "Size", values: ["120 cm", "160 cm"] }, specs: [["Material", "New Zealand wool"], ["Pile", "12 mm"], ["Shape", "Round"], ["Backing", "Felt, non-slip"]] },
  { id: "14", name: "Kitsune Ink Print", category: "Art", price: "$210", note: "Edition of 67", img: print, anchor: "print", year: "2026", slug: "kitsune-ink-print", description: "A giclée print on 310gsm cotton rag, signed and numbered in an edition of 67.", options: { label: "Size", values: ["A3", "A2"] }, specs: [["Paper", "310gsm cotton rag"], ["Edition", "67"], ["Signed", "Yes"]] },
];

export const getObject = (slug: string) => OBJECTS.find((o) => o.slug === slug);

/** Drop code names shown in large type on product pages. */
export const CODENAMES: Record<string, string> = {
  "obsidian-ronin": "The Ronin", "sorcerers-hoodie": "The Sealbearer", "straw-hat-varsity-jacket": "The Captain",
  "survey-corps-utility-jacket": "The Scout", "capsule-corp-technical-tee": "The Engineer", "eva-01-test-type": "Unit One",
  "gojo-display-figure": "The Limitless", "zoro-scale-figure": "Three Blades", "pochita-life-size-vinyl": "The Companion",
  "capsule-corp-desk-object": "The Capsule", "akatsuki-ceramic-set": "Red Cloud", "wisteria-incense-set": "The Ward",
  "alchemy-circle-rug": "The Circle", "kitsune-ink-print": "The Fox",
};

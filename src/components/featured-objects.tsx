import hoodie from "@/assets/object-hoodie.jpg";
import figure from "@/assets/object-figure.jpg";
import print from "@/assets/object-print.jpg";
import goods from "@/assets/object-goods.jpg";

const OBJECTS = [
  { id: "01", name: "Yume Heavyweight Hoodie", category: "Apparel", price: "$148", note: "Embroidered", img: hoodie, anchor: "apparel" },
  { id: "02", name: "Pilot 01 Scale Figure", category: "Figures", price: "$320", note: "1:7 scale", img: figure, anchor: "figures" },
  { id: "03", name: "Kitsune Ink Print", category: "Art", price: "$210", note: "Edition of 67", img: print, anchor: "art" },
  { id: "04", name: "Akane Character Set", category: "Collectibles", price: "$64", note: "Pins / stand / plush", img: goods, anchor: "collectibles" },
];

export function FeaturedObjects() {
  return (
    <section aria-labelledby="featured-title" className="border-t border-border py-16 lg:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-technical mb-4 text-[10px] uppercase text-primary">Featured objects / 04</p>
          <h2 id="featured-title" className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.9] font-medium uppercase">
            Selected<br />this season.
          </h2>
        </div>
        <a href="/#archive" className="font-technical border-b border-border pb-1 text-[11px] uppercase text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
          View all objects
        </a>
      </div>

      <ul className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {OBJECTS.map((o) => (
          <li key={o.id} id={o.anchor} className="scroll-mt-24">
            <a href={`/#${o.anchor}`} className="group block">
              <div className="relative overflow-hidden border border-border bg-card">
                <img
                  src={o.img}
                  alt={o.name}
                  width={960}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="font-technical absolute left-3 top-3 text-[10px] uppercase text-muted-foreground">{o.id}</span>
                <span className="font-technical absolute bottom-3 right-3 bg-background/80 px-2 py-1 text-[10px] uppercase text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  View object
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-technical text-[10px] uppercase text-primary">{o.category}</p>
                  <h3 className="mt-1.5 text-base font-medium">{o.name}</h3>
                  <p className="font-technical mt-1 text-[10px] uppercase text-muted-foreground">{o.note}</p>
                </div>
                <p className="font-technical text-sm">{o.price}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

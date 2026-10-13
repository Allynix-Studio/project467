import { lazy, Suspense, useState } from "react";
import { ImageReveal } from "@/motion/primitives/reveal";

const Stage = lazy(() => import("./object-stage-3d"));

export function ObjectViewer({ src, alt }: { src: string; alt: string }) {
  const [mode, setMode] = useState<"photo" | "3d">("photo");
  return (
    <div className="mx-auto w-full max-w-[48svh] lg:max-w-none">
      <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
        {mode === "photo" ? (
          <ImageReveal className="h-full">
            <img src={src} alt={alt} width={960} height={1200} className="h-full w-full object-cover object-top" />
          </ImageReveal>
        ) : (
          <Suspense fallback={<p className="font-technical grid h-full place-items-center text-[10px] uppercase text-muted-foreground">Loading stage…</p>}>
            <Stage src={src} />
          </Suspense>
        )}
        {mode === "3d" && (
          <p className="font-technical pointer-events-none absolute bottom-4 left-4 text-[10px] uppercase text-muted-foreground">Drag to turn</p>
        )}
      </div>
      <div className="font-technical mt-3 flex gap-2 text-[10px] uppercase" role="group" aria-label="View">
        {(["photo", "3d"] as const).map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={mode === m}
            onClick={() => setMode(m)}
            className={`border px-4 py-2 transition-colors ${mode === m ? "border-primary text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
          >
            {m === "photo" ? "Photo" : "3D view"}
          </button>
        ))}
      </div>
    </div>
  );
}

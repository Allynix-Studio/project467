/** Brief brand intro on the home page. Pure CSS so it plays before the page becomes interactive. */
export function IntroCurtain() {
  return (
    <div aria-hidden className="intro-curtain pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="overflow-hidden">
        <p className="intro-mark text-[clamp(3rem,12vw,9rem)] font-medium leading-none">467</p>
      </div>
      <span className="intro-line absolute bottom-10 h-px w-40 origin-left bg-primary" />
    </div>
  );
}

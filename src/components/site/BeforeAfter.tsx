import { useRef, useState } from "react";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section id="results" className="py-28 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Résultats</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Des transformations <em className="italic text-gradient-gold">visibles</em>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Glissez pour révéler la différence — résultats réels, beauté authentique.
          </p>
        </div>

        <div
          ref={ref}
          className="relative mx-auto max-w-4xl aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm shadow-luxe select-none cursor-ew-resize"
          onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
          onClick={(e) => onMove(e.clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
        >
          <img
            src={afterImg}
            alt="Après"
            loading="lazy"
            width={768}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={beforeImg}
              alt="Avant"
              loading="lazy"
              width={768}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          <span className="absolute top-5 left-5 glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] rounded-full">
            Avant
          </span>
          <span className="absolute top-5 right-5 glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] rounded-full">
            Après
          </span>

          <div
            className="absolute top-0 bottom-0 w-px bg-gold pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gold flex items-center justify-center shadow-luxe">
              <span className="text-ink text-xs">⇆</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Résultat après 3 séances de soin signature
        </p>
      </div>
    </section>
  );
}

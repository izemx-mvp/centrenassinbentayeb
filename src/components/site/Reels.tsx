import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

const reels = [
  { img: reel1, title: "Rituel signature", tag: "Spa" },
  { img: reel2, title: "Sérum éclat", tag: "Skincare" },
  { img: reel3, title: "Cabine privée", tag: "Atmosphère" },
  { img: reel4, title: "Glow doré", tag: "Hydrafacial" },
];

export function Reels({ withHeader = true }: { withHeader?: boolean }) {
  return (
    <section id="videos" className="py-24 md:py-32 bg-gradient-warm overflow-hidden">
      <div className="container-luxe">
        {withHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-gradient-rose" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-rose">En images</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                Dans les coulisses du <em className="italic text-gradient-rose">centre</em>.
              </h2>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noopener" className="text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-rose transition flex items-center gap-2">
              Voir tout sur Instagram →
            </a>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {reels.map((r) => (
            <div key={r.title} className="group relative aspect-[9/16] overflow-hidden rounded-sm shadow-soft hover:shadow-luxe transition-all duration-700 cursor-pointer">
              <img src={r.img} alt={r.title} loading="lazy" width={576} height={1024} className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500 animate-glow-pulse">
                  <svg className="w-5 h-5 ml-1 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft mb-1">{r.tag}</div>
                <div className="text-white font-display text-lg">{r.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import hydra from "@/assets/service-hydrafacial.jpg";
import laser from "@/assets/service-laser.jpg";
import facial from "@/assets/service-facial.jpg";
import minceur from "@/assets/service-minceur.jpg";
import botox from "@/assets/service-botox.jpg";
import antiage from "@/assets/service-antiage.jpg";

const services = [
  { img: hydra, title: "Hydrafacial", desc: "Soin signature en 4 étapes pour une peau hydratée, lumineuse et purifiée en profondeur." },
  { img: laser, title: "Épilation Laser", desc: "Technologie dernière génération pour une peau lisse, douce et durablement libérée." },
  { img: facial, title: "Soins du Visage", desc: "Rituels sur-mesure qui réveillent l'éclat naturel et restaurent l'équilibre cutané." },
  { img: minceur, title: "Lipo & Minceur", desc: "Protocoles non-invasifs pour sculpter la silhouette et raffermir les tissus." },
  { img: botox, title: "Botox & Fillers", desc: "Injections esthétiques subtiles, réalisées avec exigence pour un résultat naturel." },
  { img: antiage, title: "Soins Anti-âge", desc: "Programmes globaux ciblant fermeté, rides et éclat pour défier le temps." },
];

export function Services({ withHeader = true }: { withHeader?: boolean }) {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background via-blush/20 to-background">
      <div className="container-luxe">
        {withHeader && (
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-gradient-rose" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-rose">Nos soins</span>
              <span className="h-px w-10 bg-gradient-rose" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              L'art du soin, élevé au rang d'<em className="italic text-gradient-rose">expérience</em>.
            </h2>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-sm bg-card shadow-soft hover:shadow-luxe transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent opacity-95 group-hover:opacity-100 transition" />
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-gold-soft">
                  0{i + 1}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl md:text-3xl text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/80 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 leading-relaxed">
                  {s.desc}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold-soft hover:text-white transition"
                >
                  Réserver
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

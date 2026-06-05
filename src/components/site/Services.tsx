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

export function Services() {
  return (
    <section id="services" className="py-28 md:py-40 bg-muted/40">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Nos soins</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            L'art du soin, élevé au rang d'<em className="italic text-gradient-gold">expérience</em>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Une carte de soins pensée pour révéler la singularité de chaque peau.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-sm bg-card shadow-soft hover:shadow-luxe transition-all duration-700"
              style={{ animationDelay: `${i * 0.08}s` }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-90 group-hover:opacity-100 transition" />
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-background/80">
                  0{services.indexOf(s) + 1}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl md:text-3xl text-background mb-2">{s.title}</h3>
                <p className="text-sm text-background/75 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold-soft hover:text-background transition"
                >
                  Réserver
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

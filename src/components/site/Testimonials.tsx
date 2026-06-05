import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";

const items = [
  { img: c1, name: "Sarah M.", role: "Cliente fidèle", text: "Un véritable cocon de douceur. L'équipe est aux petits soins et les résultats sont visibles dès la première séance. Ma peau n'a jamais été aussi lumineuse." },
  { img: c2, name: "Inès B.", role: "Hydrafacial", text: "Le rituel hydrafacial est devenu mon rendez-vous mensuel incontournable. Professionnalisme, élégance et écoute : tout est parfait." },
  { img: c3, name: "Claire D.", role: "Soins anti-âge", text: "À 50 ans, j'ai retrouvé confiance et éclat. Les protocoles sont sur-mesure et le résultat reste naturel. Un centre d'exception." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Témoignages</span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Elles nous font <em className="italic text-gradient-gold">confiance</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative bg-card border border-border/60 rounded-sm p-8 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all duration-500"
            >
              <div className="text-gold text-sm tracking-[0.3em] mb-4">★★★★★</div>
              <blockquote className="text-foreground/80 leading-relaxed italic font-display text-lg">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={64}
                  height={64}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
                />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

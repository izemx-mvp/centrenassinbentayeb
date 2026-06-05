import aboutImg from "@/assets/about-clinic.jpg";

export function About() {
  return (
    <section id="about" className="py-28 md:py-40 bg-background">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-rose rounded-sm opacity-20 blur-xl" />
          <div className="relative overflow-hidden rounded-sm shadow-luxe">
            <img
              src={aboutImg}
              alt="Intérieur du centre à Nador"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.5s]"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-12 glass shadow-soft p-6 md:p-8 rounded-sm max-w-[240px]">
            <div className="font-display text-5xl text-gradient-rose">12+</div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
              Années d'expertise au service de votre beauté
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gradient-rose" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-rose">À propos</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
            Un sanctuaire dédié à votre <em className="italic text-gradient-rose">éclat</em>.
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed text-lg">
            Niché au cœur de Nador, le Centre Esthétique Nassim Bentayeb conjugue expertise
            médicale et art du soin. Chaque protocole est pensé comme un rituel sur-mesure,
            dans une atmosphère feutrée où le temps suspend son cours.
          </p>
          <p className="mt-4 text-foreground/65 leading-relaxed">
            Technologies de dernière génération, praticiens diplômés et produits d'exception :
            tout est réuni pour révéler la meilleure version de vous-même.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              ["Expertise médicale", "Praticiens diplômés et certifiés"],
              ["Technologies premium", "Équipements de dernière génération"],
              ["Protocoles sur-mesure", "Diagnostic personnalisé offert"],
              ["Confidentialité", "Cabines privatives & feutrées"],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-gold pl-4">
                <div className="text-sm font-medium text-foreground">{t}</div>
                <div className="text-xs text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

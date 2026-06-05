import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Centre esthétique Nassim Bentayeb à Nador"
          className="h-full w-full object-cover scale-105 animate-fade-in"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blush/30 via-background/40 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      <div className="relative container-luxe min-h-screen flex flex-col justify-center pt-32 pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="h-px w-12 bg-gradient-rose" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-rose">
              Médecine esthétique premium · Nador
            </span>
          </div>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Révélez votre <em className="text-gradient-rose not-italic font-display italic">beauté</em> naturelle
          </h1>
          <p
            className="mt-8 text-lg md:text-xl text-foreground/75 max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Centre esthétique premium spécialisé en soins du visage, laser, hydrafacial et bien-être.
            Une expérience sensorielle au cœur de Nador.
          </p>
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-rose px-9 py-4 text-xs uppercase tracking-[0.25em] text-white hover:shadow-glow transition-all duration-500 shadow-luxe"
            >
              Prendre rendez-vous
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/soins"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-gold/60 px-9 py-4 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Découvrir nos soins
            </Link>
          </div>

          <div
            className="mt-20 grid grid-cols-3 max-w-lg gap-8 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              ["+12", "Années"],
              ["3 500+", "Clientes"],
              ["4.9★", "Satisfaction"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-gradient-gold">{v}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow">
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">Découvrir</span>
        <span className="h-12 w-px bg-gradient-rose" />
      </div>
    </section>
  );
}

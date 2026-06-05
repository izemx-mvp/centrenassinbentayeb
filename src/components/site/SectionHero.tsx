export function SectionHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-warm overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-blush blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/30 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative container-luxe text-center max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up">
          <span className="h-px w-10 bg-gradient-rose" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-rose">{eyebrow}</span>
          <span className="h-px w-10 bg-gradient-rose" />
        </div>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] animate-fade-up"
          style={{ animationDelay: "0.15s" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p
            className="mt-6 text-lg text-foreground/70 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

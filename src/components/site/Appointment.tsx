import { useState } from "react";

const soins = ["Hydrafacial", "Épilation Laser", "Soins du visage", "Lipo & Minceur", "Botox & Fillers", "Soins anti-âge"];

export function Appointment() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28 md:py-40 bg-gradient-to-b from-muted/40 to-background">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">Rendez-vous</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Offrez-vous une <em className="italic text-gradient-gold">parenthèse</em> d'exception.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
            Réservez votre consultation personnalisée. Notre équipe vous recontacte sous 24h
            pour confirmer votre créneau et vous accompagner dans votre choix.
          </p>

          <div className="mt-10 space-y-5">
            {[
              ["Téléphone", "+33 1 23 45 67 89"],
              ["Email", "contact@nassimbentayeb.fr"],
              ["Adresse", "12 rue de la Beauté, 75008 Paris"],
              ["Horaires", "Lun – Sam · 10h – 20h"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-6 border-b border-border/60 pb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold w-20 shrink-0">{k}</span>
                <span className="text-foreground/80">{v}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/33123456789"
            target="_blank"
            rel="noopener"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/50 px-7 py-3 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-gold hover:text-ink transition-all duration-500"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg>
            Contacter sur WhatsApp
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="bg-card border border-border rounded-sm p-8 md:p-10 shadow-luxe space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nom" name="nom" required />
            <Field label="Téléphone" name="tel" type="tel" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Soin souhaité</label>
            <select
              required
              className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground focus:border-gold focus:outline-none transition"
            >
              <option value="">Sélectionner un soin</option>
              {soins.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Message</label>
            <textarea
              rows={4}
              className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground focus:border-gold focus:outline-none transition resize-none"
              placeholder="Partagez-nous vos attentes…"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-gold hover:text-ink transition-all duration-500 shadow-soft"
          >
            {sent ? "✓ Demande envoyée" : "Réserver maintenant"}
          </button>
          <p className="text-[10px] text-muted-foreground text-center uppercase tracking-[0.2em]">
            Réponse garantie sous 24h · Données 100% confidentielles
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none transition"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container-luxe grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Nassim Bentayeb</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold mt-1">Centre Esthétique</div>
          <p className="mt-6 text-primary-foreground/70 max-w-sm leading-relaxed text-sm">
            Un sanctuaire dédié à la beauté, au bien-être et à l'art du soin sur-mesure.
            Médecine esthétique d'exception au cœur de Paris.
          </p>
          <div className="flex gap-3 mt-8">
            {["Instagram", "Facebook", "TikTok", "WhatsApp"].map((s) => (
              <a
                key={s}
                href="#"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:bg-gold hover:text-ink transition-all duration-500 text-xs"
                aria-label={s}
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li>12 rue de la Beauté</li>
            <li>75008 Paris</li>
            <li>+33 1 23 45 67 89</li>
            <li>contact@nassimbentayeb.fr</li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Horaires</div>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li>Lundi — Vendredi</li>
            <li className="text-primary-foreground">10h00 — 20h00</li>
            <li className="pt-3">Samedi</li>
            <li className="text-primary-foreground">10h00 — 18h00</li>
            <li className="pt-3">Dimanche · Fermé</li>
          </ul>
        </div>
      </div>

      <div className="container-luxe mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
        <div>© {new Date().getFullYear()} Centre Esthétique Nassim Bentayeb · Tous droits réservés</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition">Mentions légales</a>
          <a href="#" className="hover:text-gold transition">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

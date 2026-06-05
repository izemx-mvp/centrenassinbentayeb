import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rose/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative container-luxe grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Nassim Bentayeb</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-gradient-gold mt-1">Centre Esthétique · Nador</div>
          <p className="mt-6 text-primary-foreground/70 max-w-sm leading-relaxed text-sm">
            Un sanctuaire dédié à la beauté, au bien-être et à l'art du soin sur-mesure.
            Médecine esthétique d'exception au cœur de Nador, Maroc.
          </p>
          <div className="flex gap-3 mt-8">
            {[
              { l: "IG", href: "https://instagram.com" },
              { l: "FB", href: "https://facebook.com" },
              { l: "TT", href: "https://tiktok.com" },
              { l: "WA", href: "https://wa.me/212661234567" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-rose hover:bg-gradient-rose hover:text-white transition-all duration-500 text-[10px] uppercase tracking-widest"
                aria-label={s.l}
              >
                {s.l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gradient-gold mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li>Avenue Hassan II</li>
            <li>Quartier Al Matar</li>
            <li>Nador 62000, Maroc</li>
            <li className="pt-2">+212 6 61 23 45 67</li>
            <li>contact@nassimbentayeb.ma</li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gradient-gold mb-5">Navigation</div>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            {[
              ["/", "Accueil"],
              ["/a-propos", "À propos"],
              ["/soins", "Soins"],
              ["/resultats", "Résultats"],
              ["/avis", "Avis"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-rose transition">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-luxe relative mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
        <div>© {new Date().getFullYear()} Centre Esthétique Nassim Bentayeb · Nador · Tous droits réservés</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-rose transition">Mentions légales</a>
          <a href="#" className="hover:text-rose transition">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}

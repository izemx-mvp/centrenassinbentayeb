import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/soins", label: "Soins" },
  { to: "/resultats", label: "Résultats" },
  { to: "/galerie", label: "Galerie" },
  { to: "/avis", label: "Avis" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-soft py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-xl tracking-wide text-ink">Nassim Bentayeb</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gradient-gold mt-0.5 font-medium">
            Centre Esthétique · Nador
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-rose" }}
              className="relative text-sm text-foreground/80 hover:text-rose transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-gradient-rose after:transition-all hover:after:w-full data-[status=active]:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-rose px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-white hover:shadow-glow transition-all duration-500"
        >
          Rendez-vous
        </Link>
        <button
          aria-label="Menu"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-px w-6 bg-foreground transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border mt-3 animate-fade-in">
          <div className="container-luxe py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm py-2 border-b border-border/50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-rose px-6 py-3 text-xs uppercase tracking-[0.2em] text-white"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Soins" },
  { href: "#results", label: "Résultats" },
  { href: "#videos", label: "Vidéos" },
  { href: "#testimonials", label: "Avis" },
  { href: "#contact", label: "Contact" },
];

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
        scrolled ? "glass shadow-soft py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-xl tracking-wide text-ink">Nassim Bentayeb</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold mt-0.5">
            Centre Esthétique
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-gold hover:text-ink transition-all duration-500"
        >
          Rendez-vous
        </a>
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
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

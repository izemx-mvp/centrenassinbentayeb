import { createFileRoute } from "@tanstack/react-router";
import { SectionHero } from "@/components/site/SectionHero";
import { Appointment } from "@/components/site/Appointment";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Rendez-vous · Nassim Bentayeb · Nador" },
      { name: "description", content: "Prenez rendez-vous au Centre Esthétique Nassim Bentayeb à Nador. Avenue Hassan II · +212 6 61 23 45 67." },
      { property: "og:title", content: "Contact · Nassim Bentayeb" },
      { property: "og:description", content: "Réservez votre consultation personnalisée à Nador." },
    ],
  }),
  component: () => (
    <>
      <SectionHero
        eyebrow="Contact"
        title='Offrez-vous une <em class="italic text-gradient-rose">parenthèse</em> d\'exception.'
        subtitle="Notre équipe vous accueille du lundi au samedi à Nador. Réponse garantie sous 24h."
      />
      <Appointment withHeader={false} />
    </>
  ),
});

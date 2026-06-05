import { createFileRoute } from "@tanstack/react-router";
import { SectionHero } from "@/components/site/SectionHero";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: [
      { title: "Avis clientes · Nassim Bentayeb" },
      { name: "description", content: "Découvrez les témoignages authentiques de nos clientes. Le Centre Esthétique Nassim Bentayeb noté 4.9/5 à Nador." },
      { property: "og:title", content: "Avis · Nassim Bentayeb" },
      { property: "og:description", content: "Elles nous font confiance — témoignages authentiques." },
    ],
  }),
  component: () => (
    <>
      <SectionHero
        eyebrow="Témoignages"
        title='Elles nous font <em class="italic text-gradient-rose">confiance</em>.'
        subtitle="Plus de 3 500 clientes nous accordent leur confiance. Voici leurs mots."
      />
      <Testimonials withHeader={false} />
    </>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { SectionHero } from "@/components/site/SectionHero";
import { Services } from "@/components/site/Services";

export const Route = createFileRoute("/soins")({
  head: () => ({
    meta: [
      { title: "Nos soins · Centre Esthétique Nassim Bentayeb" },
      { name: "description", content: "Hydrafacial, épilation laser, soins du visage, lipo-minceur, botox, anti-âge. Découvrez notre carte de soins premium à Nador." },
      { property: "og:title", content: "Nos soins · Nassim Bentayeb" },
      { property: "og:description", content: "Une carte de soins premium pensée pour révéler la singularité de chaque peau." },
    ],
  }),
  component: () => (
    <>
      <SectionHero
        eyebrow="Nos soins"
        title='L\'art du soin, élevé au rang d\'<em class="italic text-gradient-rose">expérience</em>.'
        subtitle="Une carte de soins premium pensée pour révéler la singularité de chaque peau."
      />
      <Services withHeader={false} />
    </>
  ),
});

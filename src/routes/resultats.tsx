import { createFileRoute } from "@tanstack/react-router";
import { SectionHero } from "@/components/site/SectionHero";
import { BeforeAfter } from "@/components/site/BeforeAfter";

export const Route = createFileRoute("/resultats")({
  head: () => ({
    meta: [
      { title: "Résultats · Avant / Après · Nassim Bentayeb" },
      { name: "description", content: "Découvrez les transformations réelles de nos clientes. Avant/après authentiques de nos soins esthétiques à Nador." },
      { property: "og:title", content: "Résultats · Nassim Bentayeb" },
      { property: "og:description", content: "Transformations réelles, résultats visibles." },
    ],
  }),
  component: () => (
    <>
      <SectionHero
        eyebrow="Résultats"
        title='Des transformations <em class="italic text-gradient-rose">visibles</em>.'
        subtitle="Résultats authentiques, beauté révélée — glissez pour découvrir la différence."
      />
      <BeforeAfter withHeader={false} />
    </>
  ),
});

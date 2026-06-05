import { createFileRoute } from "@tanstack/react-router";
import { SectionHero } from "@/components/site/SectionHero";
import { About } from "@/components/site/About";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos · Centre Esthétique Nassim Bentayeb" },
      { name: "description", content: "Découvrez l'histoire, la philosophie et l'expertise du Centre Esthétique Nassim Bentayeb à Nador." },
      { property: "og:title", content: "À propos · Nassim Bentayeb" },
      { property: "og:description", content: "Notre histoire, notre vision, notre expertise." },
    ],
  }),
  component: () => (
    <>
      <SectionHero
        eyebrow="Notre histoire"
        title='Un savoir-faire au service de votre <em class="italic text-gradient-rose">éclat</em>.'
        subtitle="Depuis plus de douze ans, le Centre Esthétique Nassim Bentayeb cultive l'excellence au cœur de Nador."
      />
      <About />
    </>
  ),
});

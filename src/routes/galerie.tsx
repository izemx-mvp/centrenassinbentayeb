import { createFileRoute } from "@tanstack/react-router";
import { SectionHero } from "@/components/site/SectionHero";
import { Reels } from "@/components/site/Reels";
import { Instagram } from "@/components/site/Instagram";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie & Vidéos · Nassim Bentayeb" },
      { name: "description", content: "Plongez dans l'univers du Centre Esthétique Nassim Bentayeb : vidéos, coulisses et inspirations Instagram." },
      { property: "og:title", content: "Galerie · Nassim Bentayeb" },
      { property: "og:description", content: "Dans les coulisses de notre centre à Nador." },
    ],
  }),
  component: () => (
    <>
      <SectionHero
        eyebrow="Galerie"
        title='Dans les coulisses du <em class="italic text-gradient-rose">centre</em>.'
        subtitle="Une immersion sensorielle dans notre univers d'élégance et de soin."
      />
      <Reels withHeader={false} />
      <Instagram />
    </>
  ),
});

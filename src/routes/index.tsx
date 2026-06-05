import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centre Esthétique Nassim Bentayeb · Nador" },
      { name: "description", content: "Centre esthétique premium à Nador. Hydrafacial, laser, soins du visage, botox, anti-âge. Prenez rendez-vous." },
      { property: "og:title", content: "Centre Esthétique Nassim Bentayeb · Nador" },
      { property: "og:description", content: "Révélez votre beauté naturelle. Médecine esthétique premium à Nador." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials withHeader={true} />
      <section className="py-24 bg-gradient-rose text-white text-center">
        <div className="container-luxe max-w-2xl">
          <h2 className="text-4xl md:text-5xl text-white">Prête à révéler votre éclat ?</h2>
          <p className="mt-6 text-white/85 text-lg">
            Réservez votre consultation personnalisée et offrez-vous un moment d'exception.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-rose px-9 py-4 text-xs uppercase tracking-[0.25em] hover:shadow-glow transition-all duration-500"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}

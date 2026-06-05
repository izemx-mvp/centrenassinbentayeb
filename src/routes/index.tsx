import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Reels } from "@/components/site/Reels";
import { Testimonials } from "@/components/site/Testimonials";
import { Appointment } from "@/components/site/Appointment";
import { Instagram } from "@/components/site/Instagram";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centre Esthétique Nassim Bentayeb · Médecine esthétique premium" },
      { name: "description", content: "Centre esthétique premium à Paris : hydrafacial, laser, soins du visage, botox, anti-âge. Prenez rendez-vous." },
      { property: "og:title", content: "Centre Esthétique Nassim Bentayeb" },
      { property: "og:description", content: "Révélez votre beauté naturelle. Soins du visage, laser, hydrafacial et bien-être premium." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Reels />
        <Testimonials />
        <Appointment />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

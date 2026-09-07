import { createFileRoute } from "@tanstack/react-router";
import { Intro } from "@/components/Intro";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const title = "Sucrée Pastelería — Pastelería artesanal francesa en Lobos";
const description =
  "Tortas, tartas, budines, petit fours y postres artesanales de inspiración francesa por Valentina Chironi. Pedidos por WhatsApp en Lobos, Buenos Aires.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Intro />
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

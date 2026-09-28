import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import Manufacturing from "@/components/home/Manufacturing";
import QualityAssurance from "@/components/home/QualityAssurance";
import RnD from "@/components/home/RnD";
import Clients from "@/components/home/Clients";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Waterproofing, Construction Chemical & Tile-Fixing Manufacturer",
  description:
    "Aneeb Chemicals Pvt. Ltd. manufactures waterproofing, gypsum plastering, tile-fixing and laminated glass solutions from Ghaziabad, India, serving builders and contractors across Northern India.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <ProductsShowcase />
      <IndustriesPreview />
      <Manufacturing />
      <QualityAssurance />
      <RnD />
      <Clients />
      <Testimonials />
      <ContactCTA />
    </>
  );
}

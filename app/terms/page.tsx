import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for use of the ${company.name} website.`,
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing this website, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the site.`,
  },
  {
    title: "Product Information",
    body: "Product specifications, applications and packaging details published on this website are indicative. Please confirm batch-specific technical data with our sales team before specification or purchase.",
  },
  {
    title: "Intellectual Property",
    body: `All content on this website, including text, graphics and product formulations described herein, is the property of ${company.name} unless otherwise stated.`,
  },
  {
    title: "Limitation of Liability",
    body: `${company.name} is not liable for any damages arising from misuse of products outside recommended application guidelines. Always refer to the official technical datasheet before use.`,
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of India, with jurisdiction in Ghaziabad, Uttar Pradesh.",
  },
  {
    title: "Contact Us",
    body: `For questions about these Terms & Conditions, contact us at ${company.email} or ${company.phone}.`,
  },
];

export default function TermsPage() {
  return (
    <section className="section-pad bg-white">
      <Container className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading
          eyebrow="Legal"
          title="Terms & Conditions"
          description="Last updated: January 2026"
        />
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h2 className="font-display text-lg font-bold text-ink">{section.title}</h2>
              <p className="text-sm leading-relaxed text-ink-light">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

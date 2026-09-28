import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${company.name}, describing how we collect, use and protect information submitted through our website.`,
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "Information We Collect",
    body: "We collect information you voluntarily submit through our enquiry and contact forms, including your name, company, email address, phone number and message content.",
  },
  {
    title: "How We Use Your Information",
    body: "Information submitted through our forms is used solely to respond to product enquiries, provide quotations, share technical datasheets and follow up on business communications.",
  },
  {
    title: "Information Sharing",
    body: `${company.name} does not sell or rent personal information to third parties. Information may be shared with our internal sales and technical teams to fulfil your request.`,
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organisational measures to protect information submitted to us from unauthorised access, alteration or disclosure.",
  },
  {
    title: "Cookies",
    body: "Our website may use essential cookies to support core site functionality. We do not use cookies for third-party advertising purposes.",
  },
  {
    title: "Contact Us",
    body: `For questions about this Privacy Policy or your information, please contact us at ${company.email} or ${company.phone}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="section-pad bg-white">
      <Container className="mx-auto flex max-w-3xl flex-col gap-10">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
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

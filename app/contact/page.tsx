import type { Metadata } from "next";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aneeb Chemicals Pvt. Ltd. for product enquiries, technical support, or distributorship opportunities. Ghaziabad, Uttar Pradesh, India.",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  {
    icon: MapPin,
    title: "Factory Address",
    lines: [company.factoryAddress],
  },
  {
    icon: Building2,
    title: "Registered Office",
    lines: [company.registeredAddress],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [company.phone],
    href: `tel:${company.phoneRaw}`,
  },
  {
    icon: Mail,
    title: "Email",
    lines: [company.email],
    href: `mailto:${company.email}`,
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Saturday, 9:30 AM – 6:30 PM IST"],
  },
];

export default function ContactPage() {
  return (
    <section className="section-pad bg-surface-section min-h-[70vh]">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Contact Us"
          title="Talk to our technical sales team"
          description="Whether you need a product recommendation, a datasheet, or a bulk order quote, our team typically responds within one business day."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            {contactCards.map((card) => (
              <div key={card.title} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <card.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                    {card.title}
                  </p>
                  {card.lines.map((line) =>
                    card.href ? (
                      <a key={line} href={card.href} className="mt-1 block text-sm font-medium text-ink hover:text-primary">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="mt-1 text-sm text-ink-light">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
            <p className="rounded-2xl bg-primary-900 p-5 text-xs leading-relaxed text-white/70">
              GST: {company.gst} &middot; Bankers: {company.bankers.join(" & ")}
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

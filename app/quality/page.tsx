import type { Metadata } from "next";
import { ClipboardCheck, FlaskConical, ShieldCheck, TestTube2, Microscope, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Explore Aneeb Chemicals' quality assurance process, from raw material testing to finished goods certification and government lab verification.",
  alternates: { canonical: "/quality" },
};

const process = [
  {
    icon: TestTube2,
    title: "Raw Material Inspection",
    description: "Incoming polymers, resins and additives are tested against internal specification benchmarks before entering production.",
  },
  {
    icon: FlaskConical,
    title: "In-Process Sampling",
    description: "Batches are sampled at defined intervals through mixing, dispersion and curing to catch deviations early.",
  },
  {
    icon: Microscope,
    title: "Performance Testing",
    description: "Products are tested for viscosity, bond strength, elongation and cure behaviour relevant to their application.",
  },
  {
    icon: ClipboardCheck,
    title: "Finished Goods Documentation",
    description: "Every batch is recorded with a quality reference before packaging and dispatch.",
  },
  {
    icon: ShieldCheck,
    title: "Government Lab Verification",
    description: "Our Aneeb GCF laminated glass interlayer is tested for IS-standard conformance at a Government-approved testing laboratory.",
  },
  {
    icon: Award,
    title: "Continuous Improvement",
    description: "Field and customer feedback is routed to our R&D team to refine formulations over time.",
  },
];

export default function QualityPage() {
  return (
    <>
      <section className="section-pad bg-surface-section bg-brand-radial">
        <Container>
          <SectionHeading
            eyebrow="Quality Assurance"
            title="Discipline at every production stage, not a final inspection alone"
            description="Consistency across every batch comes from testing built into the manufacturing process itself, backed by government laboratory verification on our advanced formulations."
          />
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-4 rounded-2xl border border-line bg-surface-section p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <step.icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                Stage {i + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-light">{step.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="section-pad bg-surface-section">
        <Container className="grid gap-10 rounded-3xl bg-primary-900 p-10 text-white md:grid-cols-2 md:p-14">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Standards &amp; Compliance
            </h2>
            <p className="text-sm leading-relaxed text-white/80">
              Aneeb GCF, our laminated glass interlayer, was developed in collaboration with the
              Chemistry Department of C.C.S. University and the Department of Science &amp;
              Technology, Government of India, under the Make in India initiative. It conforms to
              Indian Standard requirements and has been tested at a Government-approved testing
              laboratory.
            </p>
            <p className="text-sm leading-relaxed text-white/80">
              Our GST registration (09AAMCA8213G1ZL) and banking relationships with Punjab National
              Bank and Yes Bank support transparent, audit-ready commercial dealings with our
              distributors and institutional buyers.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Button href="/contact" variant="secondary" className="w-fit">
              Request Compliance Documentation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

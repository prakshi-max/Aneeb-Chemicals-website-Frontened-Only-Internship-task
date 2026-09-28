"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, FlaskConical, ShieldCheck, TestTube2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const pillars = [
  {
    icon: TestTube2,
    title: "Raw Material Testing",
    description: "Every incoming polymer and additive batch is verified against internal specification benchmarks.",
  },
  {
    icon: FlaskConical,
    title: "In-Process Sampling",
    description: "Production batches are sampled at defined intervals through the mixing and curing cycle.",
  },
  {
    icon: ClipboardCheck,
    title: "Finished Goods Certification",
    description: "Each dispatched batch is documented with a quality record before it leaves the facility.",
  },
  {
    icon: ShieldCheck,
    title: "Government Lab Verification",
    description: "Our Aneeb GCF interlayer is IS-standard tested at a Government-approved testing laboratory.",
  },
];

export default function QualityAssurance() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <SectionHeading
            eyebrow="Quality Assurance"
            title="Quality is checked at every stage, not just at the end"
            description="Consistency across every drum and bag comes from testing discipline built into the production process itself, not a final inspection alone."
          />
          <Button href="/quality" variant="ghost" className="px-0 hover:bg-transparent hover:underline">
            See our full quality process →
          </Button>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface-section p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-sm font-bold text-ink">{pillar.title}</h3>
              <p className="text-xs leading-relaxed text-ink-light">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

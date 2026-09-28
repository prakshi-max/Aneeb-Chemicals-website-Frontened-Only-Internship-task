"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Leaf, Timer, Truck, Warehouse, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Wrench,
    title: "Application-Engineered Formulations",
    description:
      "Every product is formulated for a specific site condition, from spray-applied bonding coats to hydrostatic-pressure waterproofing.",
  },
  {
    icon: BadgeCheck,
    title: "Consistent Batch Quality",
    description:
      "In-house quality testing on every production batch keeps performance consistent from the first drum to the last.",
  },
  {
    icon: Timer,
    title: "Faster Site Turnaround",
    description:
      "Single-coat plastering and spray-compatible systems are built to compress construction schedules, not just meet them.",
  },
  {
    icon: Warehouse,
    title: "Reliable Supply Capacity",
    description:
      "A 10,000 sq. meter automated facility and dedicated warehousing keep large orders moving on schedule.",
  },
  {
    icon: Truck,
    title: "Northern India Logistics Network",
    description:
      "A dedicated sales, marketing and logistics team keeps distributors and job sites stocked across the region.",
  },
  {
    icon: Leaf,
    title: "Sustainability-Minded R&D",
    description:
      "From UV-cured laminated glass to low-wastage admixtures, our formulations target durability with a lighter environmental footprint.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-surface-section">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for contractors who can't afford a callback"
          description="Our formulations are developed and tested against real site conditions, not just laboratory benchmarks."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-line bg-white p-7 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-light">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

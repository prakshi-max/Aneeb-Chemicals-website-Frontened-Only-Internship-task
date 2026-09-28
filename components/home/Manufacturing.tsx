"use client";

import { motion } from "framer-motion";
import { Cog, Gauge, PackageCheck, Warehouse } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Gauge,
    title: "Raw Material Intake",
    description: "Incoming polymers, resins and additives are batch-checked against internal specification sheets before release to production.",
  },
  {
    icon: Cog,
    title: "Automated Batching",
    description: "Formulations are mixed on automatic production lines calibrated for consistent viscosity, dispersion and cure performance.",
  },
  {
    icon: PackageCheck,
    title: "In-Process QC",
    description: "Samples are pulled at defined intervals and tested against batch quality benchmarks before packaging begins.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Dispatch",
    description: "Finished goods move through climate-conscious warehousing before dispatch through our regional logistics network.",
  },
];

export default function Manufacturing() {
  return (
    <section className="section-pad bg-primary-900 text-white">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Manufacturing Capability"
          title="A 10,000 sq. meter facility built for consistent, at-scale output"
          description="Every formulation moves through the same disciplined production sequence, from raw material intake to dispatch."
          light
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="font-display text-xs font-semibold text-secondary">
                Step {i + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-secondary">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

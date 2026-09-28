"use client";

import { motion } from "framer-motion";
import { Factory, MapPin, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { company } from "@/lib/data/company";

const highlights = [
  {
    icon: Factory,
    title: "10,000 sq. meter facility",
    description: "Automatic production lines on the outskirts of Delhi-NCR, Ghaziabad.",
  },
  {
    icon: Users,
    title: "50-member team",
    description: "Including 5 in-house engineers across production, QC and R&D.",
  },
  {
    icon: MapPin,
    title: "North India coverage",
    description: "Serving builders, contractors and distributors from Ghaziabad.",
  },
];

export default function About() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <SectionHeading
            eyebrow="About Aneeb Chemicals"
            title="A Ghaziabad-built manufacturer trusted across Northern India's construction sector"
            description={`Since ${company.founded}, ${company.name} has manufactured waterproofing, plastering, tile-fixing and construction chemical systems engineered for cost-efficient, sustainable construction.`}
          />
          <p className="text-base leading-relaxed text-ink-light">
            Our product range spans gypsum bonding solutions, sprays, integral waterproofing
            admixtures and synthetic adhesives, alongside Aneeb GCF — an indigenously developed
            laminated glass interlayer created with the Chemistry Department of C.C.S. University
            and the Department of Science &amp; Technology, Government of India.
          </p>
          <div>
            <Button href="/about" variant="ghost" className="px-0 hover:bg-transparent hover:underline">
              Read our full company story →
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-line bg-surface-section p-6 transition-colors hover:border-primary-100"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <item.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-light">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

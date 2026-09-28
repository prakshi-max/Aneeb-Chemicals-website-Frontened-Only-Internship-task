"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Factory,
  Landmark,
  Mountain,
  PaintRoller,
  PanelsTopLeft,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { industries } from "@/lib/data/industries";

const iconMap = {
  Building2,
  Landmark,
  PanelsTopLeft,
  PaintRoller,
  Factory,
  Mountain,
} as const;

export default function IndustriesPreview() {
  return (
    <section className="section-pad bg-surface-section">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Industries Served"
            title="Formulated for the sectors that build India"
            description="Our systems are specified across residential, infrastructure, architectural and industrial projects."
          />
          <Button href="/industries" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            All Industries
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] ?? Building2;
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href="/industries"
                  className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink">{industry.name}</h3>
                  <p className="text-sm leading-relaxed text-ink-light">{industry.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

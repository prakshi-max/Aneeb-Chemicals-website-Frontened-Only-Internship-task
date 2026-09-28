"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const trustPoints = [
  "10,000 sq. meter manufacturing facility",
  "In-house R&D and quality testing lab",
  "Trusted across Northern India since 2014",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-section bg-brand-radial">
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="eyebrow w-fit rounded-full bg-primary-50 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Manufacturer &amp; Supplier Since 2014
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-balance text-ink md:text-5xl lg:text-[3.4rem]">
            Waterproofing &amp; Construction Chemicals Engineered to{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">Outlast the Build</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-light">
            Aneeb Chemicals manufactures gypsum plastering, waterproofing, tile-fixing and
            laminated glass solutions from our Ghaziabad facility, backed by in-house R&amp;D and
            supplied to builders, contractors and distributors across Northern India.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/products" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              Explore Products
            </Button>
            <Button href="/contact" variant="outline" icon={<PhoneCall className="h-4 w-4" />}>
              Talk to Our Team
            </Button>
          </div>

          <ul className="mt-2 flex flex-col gap-2.5">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm text-ink-light">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-1 shadow-card-hover">
            <div className="rounded-[22px] bg-primary-900 p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Waterproofing", value: "6 Systems" },
                  { label: "Plastering", value: "6 Systems" },
                  { label: "Tile Fixing", value: "5 Systems" },
                  { label: "Laminated Glass", value: "UV-Cured" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/10 p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/60">
                      {item.label}
                    </p>
                    <p className="mt-2 font-display text-xl font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-relaxed text-white/80">
                  &ldquo;Aneeb GCF is India&rsquo;s indigenously developed UV-cured laminated glass
                  interlayer, built under the Make in India initiative.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

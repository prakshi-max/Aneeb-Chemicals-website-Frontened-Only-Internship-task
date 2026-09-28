"use client";

import { motion } from "framer-motion";
import { Lightbulb, Sparkles, Sun } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RnD() {
  return (
    <section className="section-pad bg-surface-section">
      <Container className="grid gap-12 rounded-3xl bg-white p-8 shadow-card lg:grid-cols-[1.1fr_1fr] lg:p-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <SectionHeading
            eyebrow="Research & Development"
            title="Aneeb GCF: an indigenous, UV-cured laminated glass interlayer"
            description="Developed with the Chemistry Department of C.C.S. University and the Department of Science & Technology, Government of India, under the Make in India initiative."
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <Sun className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-ink-light">
                Photo cross-linked using UV curing technology, an energy-efficient alternative to
                conventional autoclave lamination processes.
              </p>
            </div>
            <div className="flex gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-ink-light">
                Offers safe fragment retention on breakage, along with durability and long-term
                cost efficiency versus conventional interlayers.
              </p>
            </div>
            <div className="flex gap-3">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-ink-light">
                Conforms to Indian Standard requirements and is tested at a Government-approved
                testing laboratory.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center rounded-2xl bg-brand-gradient p-10"
        >
          <div className="grid grid-cols-2 gap-4 text-center text-white">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-display text-2xl font-bold">UV</p>
              <p className="mt-1 text-xs text-white/80">Curing Technology</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-display text-2xl font-bold">IS</p>
              <p className="mt-1 text-xs text-white/80">Standard Tested</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-display text-2xl font-bold">DST</p>
              <p className="mt-1 text-xs text-white/80">Govt. of India Backed</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="font-display text-2xl font-bold">MII</p>
              <p className="mt-1 text-xs text-white/80">Make in India</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

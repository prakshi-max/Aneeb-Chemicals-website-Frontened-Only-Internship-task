"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/stats";

export default function Testimonials() {
  return (
    <section className="section-pad bg-surface-section">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What builders and architects say about working with us"
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-5 rounded-2xl bg-white p-7 shadow-card"
            >
              <Quote className="h-7 w-7 text-primary-100" fill="currentColor" />
              <p className="flex-1 text-sm leading-relaxed text-ink-light">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                <p className="text-xs text-ink-faint">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

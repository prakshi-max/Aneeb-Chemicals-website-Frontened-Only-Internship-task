"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import { company } from "@/lib/data/company";

export default function ContactCTA() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 text-center md:px-16"
        >
          <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-white/10" />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl font-display text-3xl font-bold text-balance text-white md:text-4xl">
              Ready to specify Aneeb Chemicals for your next project?
            </h2>
            <p className="max-w-xl text-white/85">
              Send us your requirement and our technical sales team will respond with product
              recommendations, pricing and datasheets.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-card transition-all hover:bg-white/90 active:scale-[0.98]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${company.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

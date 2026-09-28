"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Droplets, FlaskConical, Grid3x3, PaintBucket, PanelsTopLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { categories } from "@/lib/data/categories";

const iconMap = {
  Trowel: PaintBucket,
  Droplets,
  FlaskConical,
  Grid3x3,
  PanelsTopLeft,
} as const;

export default function ProductsShowcase() {
  return (
    <section className="section-pad bg-white">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Product Range"
            title="Five system categories, one dependable manufacturer"
            description="From foundation to facade, our formulations cover the full construction envelope."
          />
          <Button href="/products" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            View All Products
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? FlaskConical;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-surface-section p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-card-hover"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">{cat.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-light">{cat.description}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Browse category
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

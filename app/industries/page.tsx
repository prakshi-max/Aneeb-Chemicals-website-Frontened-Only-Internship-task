import type { Metadata } from "next";
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
import { industries } from "@/lib/data/industries";
import { getCategoryBySlug } from "@/lib/data/categories";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Aneeb Chemicals serves real estate, infrastructure, architecture, interior fit-out, industrial and mining sectors with formulated construction chemical systems.",
  alternates: { canonical: "/industries" },
};

const iconMap = {
  Building2,
  Landmark,
  PanelsTopLeft,
  PaintRoller,
  Factory,
  Mountain,
} as const;

export default function IndustriesPage() {
  return (
    <>
      <section className="section-pad bg-surface-section bg-brand-radial">
        <Container>
          <SectionHeading
            eyebrow="Industries Served"
            title="Formulated solutions across the sectors that build India"
            description="From residential towers to industrial facades, our product range is specified across a wide span of construction and manufacturing sectors."
          />
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="flex flex-col gap-8">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] ?? Building2;
            return (
              <div
                key={industry.slug}
                className="grid gap-8 rounded-3xl border border-line bg-surface-section p-8 md:grid-cols-[auto_1fr] md:items-center md:p-10"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                  <Icon className="h-8 w-8" />
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="font-display text-xl font-bold text-ink">{industry.name}</h2>
                  <p className="text-sm leading-relaxed text-ink-light md:max-w-2xl">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.relatedCategorySlugs.map((slug) => {
                      const cat = getCategoryBySlug(slug);
                      if (!cat) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/products?category=${slug}`}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-card transition-colors hover:bg-primary-50"
                        >
                          {cat.shortName}
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}

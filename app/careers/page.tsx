import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, HeartHandshake, MapPin, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { jobOpenings } from "@/lib/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open roles at Aneeb Chemicals Pvt. Ltd. across sales, quality assurance and manufacturing at our Ghaziabad facility.",
  alternates: { canonical: "/careers" },
};

const perks = [
  {
    icon: TrendingUp,
    title: "Growing Product Range",
    description: "Join a team actively expanding into new categories like laminated glass technology.",
  },
  {
    icon: GraduationCap,
    title: "Hands-On Learning",
    description: "Work directly with our R&D and QC teams on real formulation and production challenges.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Culture",
    description: "A close-knit, 50-member team where every function works closely with site and sales teams.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="section-pad bg-surface-section bg-brand-radial">
        <Container>
          <SectionHeading
            eyebrow="Careers"
            title="Build your career with a growing chemical manufacturer"
            description="We're always looking for driven people across sales, quality, production and R&D to help us serve builders and contractors across Northern India."
          />
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-6 md:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.title} className="flex flex-col gap-4 rounded-2xl border border-line p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <perk.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-bold text-ink">{perk.title}</h3>
              <p className="text-sm leading-relaxed text-ink-light">{perk.description}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="section-pad bg-surface-section">
        <Container className="flex flex-col gap-8">
          <SectionHeading eyebrow="Open Positions" title="Current openings at Aneeb Chemicals" />
          <div className="flex flex-col gap-4">
            {jobOpenings.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-ink">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-ink-faint">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View role
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

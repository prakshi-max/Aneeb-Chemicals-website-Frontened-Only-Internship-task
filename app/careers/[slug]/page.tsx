import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Briefcase, ChevronRight, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { jobOpenings, getJobBySlug } from "@/lib/data/careers";
import { company } from "@/lib/data/company";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return jobOpenings.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};

  return {
    title: job.title,
    description: job.description,
    alternates: { canonical: `/careers/${job.slug}` },
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Application: ${job.title}`
  )}`;

  return (
    <section className="section-pad bg-white">
      <Container className="mx-auto flex max-w-3xl flex-col gap-8">
        <nav className="flex items-center gap-1.5 text-xs text-ink-faint">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/careers" className="hover:text-primary">Careers</Link>
        </nav>

        <div className="flex flex-col gap-4">
          <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">{job.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-ink-faint">
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
              {job.department}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span>{job.type}</span>
          </div>
          <p className="text-base leading-relaxed text-ink-light">{job.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold text-ink">Responsibilities</h2>
          <ul className="flex flex-col gap-3">
            {job.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-surface-section p-4 text-sm text-ink-light">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold text-ink">Requirements</h2>
          <ul className="flex flex-col gap-3">
            {job.requirements.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-surface-section p-4 text-sm text-ink-light">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={mailtoHref}
          className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-primary-700 hover:shadow-card-hover"
        >
          <Mail className="h-4 w-4" />
          Apply for This Role
        </a>
      </Container>
    </section>
  );
}

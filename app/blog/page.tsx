import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles from Aneeb Chemicals on waterproofing, plastering, tile-fixing and laminated glass specification for construction professionals.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="section-pad bg-surface-section min-h-[70vh]">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Technical Insights"
          title="Specification guidance from our technical team"
          description="Practical articles on waterproofing systems, plastering methods and glazing standards for architects, contractors and site engineers."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <h2 className="font-display text-lg font-bold text-ink">{post.title}</h2>
              <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-ink-light">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-ink-faint">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

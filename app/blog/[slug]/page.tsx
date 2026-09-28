import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="section-pad bg-white">
      <Container className="mx-auto flex max-w-3xl flex-col gap-8">
        <nav className="flex items-center gap-1.5 text-xs text-ink-faint">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/blog" className="hover:text-primary">Blog</Link>
        </nav>

        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary">
            {post.category}
          </span>
          <h1 className="font-display text-3xl font-bold text-balance text-ink md:text-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-ink-faint">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-light">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-2xl border border-line bg-surface-section p-6">
          <p className="text-sm text-ink-light">
            Have a project that needs specification support?{" "}
            <Link href="/contact" className="font-semibold text-primary hover:underline">
              Talk to our technical team
            </Link>
            .
          </p>
        </div>
      </Container>
    </article>
  );
}

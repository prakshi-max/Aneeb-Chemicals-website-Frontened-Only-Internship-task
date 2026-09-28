import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-surface-section">
      <Container className="flex flex-col items-center gap-6 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white">
          <Compass className="h-8 w-8" />
        </span>
        <h1 className="font-display text-4xl font-bold text-ink">Page Not Found</h1>
        <p className="max-w-md text-ink-light">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Head back home or
          browse our product range.
        </p>
        <div className="flex gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-primary hover:text-primary"
          >
            Browse Products
          </Link>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Download, FileCheck2, Package } from "lucide-react";
import Container from "@/components/ui/Container";
import ProductVisual from "@/components/products/ProductVisual";
import EnquiryButton from "@/components/products/EnquiryButton";
import RelatedProducts from "@/components/products/RelatedProducts";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { getCategoryBySlug } from "@/lib/data/categories";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product);

  return (
    <>
      <section className="border-b border-line bg-surface-section py-4">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-ink-faint">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/products?category=${category?.slug}`} className="hover:text-primary">
              {category?.shortName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink">{product.name}</span>
          </nav>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-12 lg:grid-cols-2">
          <ProductVisual
            categorySlug={product.categorySlug}
            className="h-80 w-full rounded-3xl lg:h-full lg:min-h-[420px]"
            iconClassName="h-24 w-24"
          />

          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {category?.name}
              </span>
              <h1 className="mt-2 font-display text-3xl font-bold text-balance text-ink md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink-light">{product.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <EnquiryButton productName={product.name} />
              {product.hasDatasheet && (
                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  <Download className="h-4 w-4" />
                  View Datasheet
                </a>
              )}
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface-section p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Package className="h-4 w-4 text-primary" />
                Available Packaging
              </div>
              <div className="flex flex-wrap gap-2">
                {product.packaging.map((pack) => (
                  <span
                    key={pack}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-light shadow-card"
                  >
                    {pack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-section">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold text-ink">Applications</h2>
            <ul className="flex flex-col gap-3">
              {product.applications.map((app) => (
                <li key={app} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-ink-light shadow-card">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {app}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold text-ink">Key Features</h2>
            <ul className="flex flex-col gap-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm text-ink-light shadow-card">
                  <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="specifications" className="section-pad bg-white scroll-mt-20">
        <Container className="flex flex-col gap-6">
          <h2 className="font-display text-2xl font-bold text-ink">Technical Specifications</h2>
          <div className="overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left text-sm">
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-surface-section" : "bg-white"}>
                    <td className="w-1/3 px-6 py-4 font-semibold text-ink">{spec.label}</td>
                    <td className="px-6 py-4 text-ink-light">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-ink-faint">
            Values shown are typical performance ranges. Request the full technical datasheet from
            our sales team for batch-specific and application-specific figures.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-surface-section">
        <Container>
          <RelatedProducts products={related} />
        </Container>
      </section>
    </>
  );
}

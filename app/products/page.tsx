import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductsExplorer from "@/components/products/ProductsExplorer";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Aneeb Chemicals' full product range: waterproofing, gypsum plastering, construction chemicals, tile fixing and laminated glass solutions.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <section className="section-pad bg-surface-section min-h-[70vh]">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Our Products"
          title="Formulated systems for every stage of construction"
          description="Search or filter by category to find the right waterproofing, plastering, tile-fixing or glazing solution for your project."
        />
        <Suspense fallback={<div className="py-20 text-center text-ink-faint">Loading products…</div>}>
          <ProductsExplorer />
        </Suspense>
      </Container>
    </section>
  );
}

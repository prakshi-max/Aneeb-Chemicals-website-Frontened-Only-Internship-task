import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductVisual from "@/components/products/ProductVisual";
import { Product } from "@/lib/types";
import { getCategoryBySlug } from "@/lib/data/categories";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryBySlug(product.categorySlug);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <ProductVisual categorySlug={product.categorySlug} className="h-44 w-full" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          {category?.shortName}
        </span>
        <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-ink-light">
          {product.shortDescription}
        </p>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

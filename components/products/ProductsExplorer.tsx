"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";

export default function ProductsExplorer() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.categorySlug === activeCategory;
      const matchesQuery =
        query.trim() === "" ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-4 shadow-card md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="w-full rounded-full border border-line bg-surface-section py-2.5 pl-11 pr-4 text-sm text-ink outline-none transition-colors focus:border-primary"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-ink-faint">
          <SlidersHorizontal className="h-4 w-4" />
          {filtered.length} of {products.length} products
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            activeCategory === "all"
              ? "bg-primary text-white"
              : "bg-surface-section text-ink-light hover:bg-primary-50"
          }`}
        >
          All Products
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeCategory === cat.slug
                ? "bg-primary text-white"
                : "bg-surface-section text-ink-light hover:bg-primary-50"
            }`}
          >
            {cat.shortName}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-line py-20 text-center">
          <p className="font-display text-lg font-bold text-ink">No products found</p>
          <p className="text-sm text-ink-light">Try a different search term or category.</p>
        </div>
      )}
    </div>
  );
}

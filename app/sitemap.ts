import { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { blogPosts } from "@/lib/data/blog";
import { jobOpenings } from "@/lib/data/careers";
import { siteUrl } from "@/lib/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/industries",
    "/quality",
    "/blog",
    "/careers",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const careerRoutes = jobOpenings.map((job) => ({
    url: `${siteUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...careerRoutes];
}

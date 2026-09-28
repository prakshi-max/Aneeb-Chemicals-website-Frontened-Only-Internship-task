import { ProductCategory } from "@/lib/types";

export const categories: ProductCategory[] = [
  {
    slug: "internal-plastering",
    name: "Internal Plastering Solutions",
    shortName: "Plastering",
    description:
      "Gypsum bonding agents and plaster systems engineered for smooth, crack-resistant internal walls and ceilings, cutting application time versus conventional sand-cement plastering.",
    icon: "Trowel",
  },
  {
    slug: "waterproofing",
    name: "Waterproofing Solutions",
    shortName: "Waterproofing",
    description:
      "Elastomeric coatings, roof shields and integral compounds that protect roofs, terraces, basements and walls from water ingress across extreme weather cycles.",
    icon: "Droplets",
  },
  {
    slug: "construction-chemicals",
    name: "Construction Chemical Solutions",
    shortName: "Construction Chemicals",
    description:
      "Crystalline waterproofing systems and pump-grade primers that reinforce concrete structures from within, built for infrastructure and heavy civil works.",
    icon: "FlaskConical",
  },
  {
    slug: "tile-fixing",
    name: "Tile Fixing Solutions",
    shortName: "Tile Fixing",
    description:
      "High-bond tile adhesives, epoxy grouts and surface cleaners that deliver lasting adhesion for floor, wall and facade tiling in residential and commercial projects.",
    icon: "Grid3x3",
  },
  {
    slug: "laminated-glass",
    name: "Laminated Glass Solutions",
    shortName: "Laminated Glass",
    description:
      "Aneeb GCF, an indigenously developed UV-curable interlayer for safety and architectural laminated glass, built under a Government of India Make in India initiative.",
    icon: "PanelsTopLeft",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

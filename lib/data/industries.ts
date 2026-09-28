import { Industry } from "@/lib/types";

export const industries: Industry[] = [
  {
    slug: "real-estate-construction",
    name: "Real Estate & Construction",
    description:
      "Residential and commercial developers rely on our plastering, waterproofing and tile-fixing systems to speed up finishing schedules without compromising build quality.",
    icon: "Building2",
    relatedCategorySlugs: ["internal-plastering", "waterproofing", "tile-fixing"],
  },
  {
    slug: "infrastructure",
    name: "Infrastructure & Civil Works",
    description:
      "Crystalline waterproofing and integral admixtures protect basements, retaining structures and water-retaining civil works from long-term water damage.",
    icon: "Landmark",
    relatedCategorySlugs: ["construction-chemicals", "waterproofing"],
  },
  {
    slug: "architecture-glazing",
    name: "Architecture & Glazing",
    description:
      "Aneeb GCF laminated glass solutions serve architects and facade contractors building safety glazing, skylights and balustrade systems.",
    icon: "PanelsTopLeft",
    relatedCategorySlugs: ["laminated-glass"],
  },
  {
    slug: "interior-fit-out",
    name: "Interior Fit-Out",
    description:
      "Gypsum bonding and plaster systems give interior contractors a faster, smoother path from bare shell to paint-ready walls and ceilings.",
    icon: "PaintRoller",
    relatedCategorySlugs: ["internal-plastering"],
  },
  {
    slug: "industrial-chemical",
    name: "Industrial & Chemical Processing",
    description:
      "Chemical-resistant epoxy grouts and waterproofing systems hold up in demanding industrial environments with frequent washdowns and chemical exposure.",
    icon: "Factory",
    relatedCategorySlugs: ["tile-fixing", "construction-chemicals"],
  },
  {
    slug: "mining-heavy-industry",
    name: "Mining & Heavy Industry",
    description:
      "Durable, high-strength waterproofing and construction chemical formulations are engineered to perform in demanding mining and heavy-industrial site conditions.",
    icon: "Mountain",
    relatedCategorySlugs: ["waterproofing", "construction-chemicals"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

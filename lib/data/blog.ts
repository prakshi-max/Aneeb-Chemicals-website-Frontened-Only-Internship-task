import { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-waterproofing-system",
    title: "Choosing the Right Waterproofing System for Your Roof",
    excerpt:
      "Elastomeric coatings, crystalline slurries and integral admixtures all waterproof concrete differently. Here's how to match the system to the structure.",
    category: "Waterproofing",
    date: "2026-05-12",
    readTime: "5 min read",
    content: [
      "Not every waterproofing failure is caused by a bad product. Most are caused by the wrong product for the substrate, exposure condition, or structural movement the surface will experience over its service life.",
      "Exposed terraces and flat roofs need a system that can bridge thermal-movement cracking while resisting standing water. Elastomeric membrane coatings, like Aneeb Roof Mate, are built for this: a flexible film that moves with the substrate instead of cracking against it.",
      "Below-grade structures such as basements and lift pits face a different challenge — sustained hydrostatic pressure, often from both the positive and negative face. Crystalline systems, such as Aneeb Crystal Seal, react chemically with concrete to grow crystals inside the pore structure itself, giving a self-sealing barrier that keeps working even if a hairline crack appears later.",
      "For new-pour concrete such as raft foundations, the most reliable approach is often integral: dosing an admixture like Aneeb Crete or Aneeb AW Plus into the mix so the entire concrete mass resists capillary water absorption, rather than relying solely on a surface-applied membrane.",
      "The right specification comes down to three questions: is the surface exposed to UV and movement, is it under hydrostatic pressure, and is it new-pour or existing concrete. Answering those first prevents the majority of waterproofing call-backs our technical team sees on site.",
    ],
  },
  {
    slug: "single-coat-gypsum-plastering-explained",
    title: "Why Single-Coat Gypsum Plastering Is Changing Interior Fit-Outs",
    excerpt:
      "Bonding-agent-led plastering systems are cutting weeks off interior finishing schedules. Here's the science behind the speed.",
    category: "Plastering",
    date: "2026-04-03",
    readTime: "4 min read",
    content: [
      "Traditional sand-cement plastering typically requires hacking the concrete surface to create a mechanical key, followed by a base coat, a finishing coat, and curing time between each. On a large residential tower, that sequence can add weeks to the interior fit-out schedule.",
      "Bonding-agent systems like Gypsum Bond remove the hacking step entirely. The polymer-modified coating creates a textured, high-adhesion film directly on smooth shuttered concrete, giving the plaster coat a strong mechanical key without damaging the substrate.",
      "Combined with a gypsum plaster system such as Aneeb Bond + Gypsum Plaster One Coat, contractors can move from bare RCC to a smooth, paint-ready wall in a single plastering pass, rather than the two-coat cement plaster sequence most crews are used to.",
      "The time savings compound across a project: less water curing, lower dead load on the structure from a thinner plaster section, and fewer trade handoffs between hacking, base coat and finish coat crews.",
    ],
  },
  {
    slug: "understanding-is-standards-laminated-glass",
    title: "What IS Standard Conformance Means for Laminated Safety Glass",
    excerpt:
      "Specifying laminated glass for a facade or skylight? Here's what standard conformance and government lab testing actually verify.",
    category: "Glazing",
    date: "2026-02-18",
    readTime: "6 min read",
    content: [
      "Laminated safety glass is defined by its interlayer — the film bonded between two glass panes that holds fragments together on impact. The interlayer's quality determines whether a broken pane stays intact in its frame or scatters as loose shards.",
      "Aneeb GCF is a photo-cross-linked interlayer developed using UV curing technology, a collaboration between the Chemistry Department of C.C.S. University and the Department of Science & Technology, Government of India, under the Make in India initiative.",
      "Unlike conventional autoclave-cured PVB lamination, which requires sustained heat and pressure cycles, UV curing sets the interlayer using targeted light exposure — reducing energy consumption and processing time while achieving the same fragment-retention performance.",
      "For architects and facade contractors, the practical takeaway is specification confidence: an interlayer that conforms to Indian Standard requirements and has been verified at a Government-approved testing laboratory gives a documented basis for safety compliance on public-facing glazing.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

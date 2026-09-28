import { JobOpening } from "@/lib/types";

export const jobOpenings: JobOpening[] = [
  {
    slug: "area-sales-manager-north-india",
    title: "Area Sales Manager – North India",
    department: "Sales & Marketing",
    location: "Ghaziabad, Uttar Pradesh",
    type: "Full-time",
    description:
      "Drive dealer and distributor growth for our waterproofing and construction chemical range across the North India territory, working closely with our marketing and technical teams.",
    responsibilities: [
      "Develop and manage a distributor and dealer network across assigned territory",
      "Achieve monthly and quarterly sales targets for the product range",
      "Coordinate with site engineers and contractors on product application support",
      "Report market trends and competitor activity to the marketing team",
    ],
    requirements: [
      "3–6 years of B2B sales experience, preferably in construction chemicals or building materials",
      "Existing network of dealers, contractors or applicators is an advantage",
      "Willingness to travel extensively within the assigned territory",
      "Strong communication skills in Hindi and English",
    ],
  },
  {
    slug: "quality-control-chemist",
    title: "Quality Control Chemist",
    department: "Quality Assurance",
    location: "Ghaziabad Manufacturing Facility",
    type: "Full-time",
    description:
      "Support batch testing and quality documentation across our polymer, waterproofing and gypsum-based product lines at our Ghaziabad facility.",
    responsibilities: [
      "Conduct raw material and finished product testing per internal SOPs",
      "Maintain batch quality records and certificates of analysis",
      "Support formulation trials alongside the R&D team",
      "Investigate and document customer quality feedback",
    ],
    requirements: [
      "B.Sc. or M.Sc. in Chemistry, or equivalent industrial experience",
      "1–4 years of QC experience in a chemical or building-materials manufacturing environment",
      "Familiarity with polymer emulsion and cementitious testing methods preferred",
    ],
  },
  {
    slug: "production-supervisor",
    title: "Production Supervisor",
    department: "Manufacturing",
    location: "Ghaziabad Manufacturing Facility",
    type: "Full-time",
    description:
      "Oversee daily production operations across our automatic production lines, ensuring output meets both schedule and quality targets.",
    responsibilities: [
      "Supervise shift-wise production against daily and monthly targets",
      "Coordinate with QC to ensure batch quality compliance before dispatch",
      "Maintain plant safety and housekeeping standards",
      "Manage raw material inventory alongside the warehousing team",
    ],
    requirements: [
      "Diploma or degree in Chemical Engineering or related field",
      "3+ years supervising production in a process manufacturing environment",
      "Working knowledge of batching, mixing and packaging operations",
    ],
  },
];

export function getJobBySlug(slug: string) {
  return jobOpenings.find((j) => j.slug === slug);
}

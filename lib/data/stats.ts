import { StatItem, Testimonial } from "@/lib/types";

export const stats: StatItem[] = [
  { label: "Years of Manufacturing Experience", value: 11, suffix: "+" },
  { label: "Sq. Meter Manufacturing Facility", value: 10000, suffix: "" },
  { label: "Product Formulations", value: 18, suffix: "+" },
  { label: "In-House Engineers", value: 5, suffix: "" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rajeev Malhotra",
    role: "Project Head",
    company: "Skyline Builders & Developers",
    quote:
      "Aneeb's gypsum bonding system cut our internal plastering cycle noticeably across a 200-unit residential tower, and the technical team was responsive whenever our site engineers had questions.",
  },
  {
    name: "Sanjeev Kumar",
    role: "Procurement Manager",
    company: "Northline Infra Projects",
    quote:
      "We switched to Aneeb Crystal Seal for our basement waterproofing after repeated failures with our previous vendor. Two years on, the structure remains dry through the monsoon.",
  },
  {
    name: "Ar. Priya Nair",
    role: "Principal Architect",
    company: "Nair & Associates",
    quote:
      "The Aneeb GCF interlayer let us specify safety glazing on a skylight project at a fraction of the lamination cost we'd budgeted, without compromising on the IS conformance our client required.",
  },
];

export const clients = [
  "Skyline Builders & Developers",
  "Northline Infra Projects",
  "Nair & Associates Architects",
  "Ganga Realty Group",
  "Metro Habitat Developers",
  "Crescent Civil Contractors",
  "Uttar Pradesh Housing Board Vendors",
  "Delta Glazing Solutions",
];

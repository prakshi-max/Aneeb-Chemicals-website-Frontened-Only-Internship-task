import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "gypsum-bond",
    name: "Gypsum Bond",
    categorySlug: "internal-plastering",
    shortDescription:
      "A ready-to-use bonding coat that gives gypsum plaster a strong mechanical key on RCC and masonry surfaces.",
    description:
      "Gypsum Bond is a polymer-modified bonding agent applied prior to gypsum plastering. It creates a rough, high-adhesion film on smooth concrete and block surfaces, eliminating the need for hacking or chiselling and ensuring the plaster coat bonds securely for its service life.",
    applications: [
      "Bonding coat under gypsum plaster on RCC ceilings and columns",
      "Smooth shuttered concrete walls",
      "AAC block and fly-ash brick masonry",
      "Renovation work over existing painted surfaces",
    ],
    features: [
      "Single-coat application, no surface hacking required",
      "Sand-textured finish for a strong mechanical key",
      "Fast drying, ready for plastering within hours",
      "Reduces plaster consumption and labour time",
    ],
    specifications: [
      { label: "Form", value: "Ready-to-use liquid" },
      { label: "Coverage", value: "Approx. 90–110 sq.ft / litre (single coat)" },
      { label: "Drying Time", value: "2–4 hours before plastering" },
      { label: "Shelf Life", value: "12 months in sealed container" },
      { label: "Packaging", value: "1 L, 5 L, 20 L, 200 L" },
    ],
    packaging: ["1 Litre", "5 Litre", "20 Litre", "200 Litre Drum"],
    hasDatasheet: true,
    featured: true,
  },
  {
    slug: "aneeb-bond-gypsum-plaster-one-coat",
    name: "Aneeb Bond + Gypsum Plaster One Coat",
    categorySlug: "internal-plastering",
    shortDescription:
      "A combined bonding-and-plastering system that finishes internal walls in a single application cycle.",
    description:
      "This system pairs Aneeb Bond primer with a machine or hand-applied gypsum plaster to deliver a smooth, paint-ready internal surface in one coat, reducing site labour and drying time compared to conventional two-coat plastering.",
    applications: [
      "Single-coat internal wall and ceiling plastering",
      "Fast-track residential and commercial fit-outs",
      "Machine plastering with gypsum-compatible pumps",
    ],
    features: [
      "Cuts plastering cycle time significantly versus POP + sand-cement",
      "Smooth, pinhole-free finish ready for putty or paint",
      "Lightweight system reduces dead load on structure",
      "Consistent quality across large wall areas",
    ],
    specifications: [
      { label: "Coat Thickness", value: "10–12 mm typical" },
      { label: "Pot Life", value: "60–90 minutes" },
      { label: "Application", value: "Hand or plaster-pump applied" },
      { label: "Curing", value: "Air-drying, no water curing required" },
    ],
    packaging: ["25 Kg Bag", "40 Kg Bag"],
    hasDatasheet: true,
  },
  {
    slug: "plaster-cum-putty",
    name: "Plaster Cum Putty",
    categorySlug: "internal-plastering",
    shortDescription:
      "A dual-purpose gypsum-based compound that finishes as both a plaster base and a smooth putty topcoat.",
    description:
      "Plaster Cum Putty combines the levelling strength of gypsum plaster with the fine finish of wall putty, allowing contractors to complete a paint-ready wall surface with fewer material changeovers on site.",
    applications: [
      "Interior wall and ceiling finishing",
      "Surface levelling before painting or wallpapering",
      "Renovation and touch-up plastering",
    ],
    features: [
      "Smooth, low-porosity finish",
      "Reduces paint consumption due to uniform absorption",
      "Easy trowel application with minimal shrinkage",
    ],
    specifications: [
      { label: "Finish", value: "Fine, paint-ready" },
      { label: "Thickness", value: "1–3 mm topcoat" },
      { label: "Coverage", value: "Approx. 18–20 sq.ft / kg" },
    ],
    packaging: ["20 Kg Bag", "40 Kg Bag"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-bond-plus",
    name: "Aneeb Bond Plus",
    categorySlug: "internal-plastering",
    shortDescription:
      "A high-strength acrylic bonding agent for plaster, screed and repair mortars on dense concrete.",
    description:
      "Aneeb Bond Plus is formulated with acrylic polymers for higher bond strength than standard bonding coats, making it suited to dense, low-porosity concrete where conventional agents underperform.",
    applications: [
      "Bonding coat for repair mortars and screeds",
      "High-density RCC surfaces",
      "Plaster bonding in coastal and high-humidity regions",
    ],
    features: [
      "Superior bond strength on dense concrete",
      "Improved water resistance versus standard bonding agents",
      "Compatible with cement and gypsum-based plasters",
    ],
    specifications: [
      { label: "Base", value: "Acrylic polymer emulsion" },
      { label: "Coverage", value: "Approx. 80–100 sq.ft / litre" },
      { label: "Dilution", value: "As per substrate porosity" },
    ],
    packaging: ["1 Litre", "5 Litre", "20 Litre"],
    hasDatasheet: true,
    featured: true,
  },
  {
    slug: "spray-90",
    name: "Spray 90",
    categorySlug: "internal-plastering",
    shortDescription:
      "A spray-applied bonding compound designed for mechanised plastering lines and large-area coverage.",
    description:
      "Spray 90 is engineered for spray-plaster equipment, giving contractors uniform coverage on large wall and ceiling areas at speed, while maintaining the same bonding performance as brush or roller-applied Aneeb bonding agents.",
    applications: [
      "Mechanised spray-plastering",
      "Large-area commercial and industrial internal walls",
      "High-rise residential projects with tight schedules",
    ],
    features: [
      "Optimised viscosity for airless spray equipment",
      "Uniform film build across large surfaces",
      "Faster site turnaround than manual application",
    ],
    specifications: [
      { label: "Application", value: "Airless spray" },
      { label: "Coverage", value: "Approx. 100–120 sq.ft / litre" },
      { label: "Viscosity", value: "Spray-optimised" },
    ],
    packaging: ["20 Litre", "200 Litre Drum"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-bond-gypsum-plaster-pop",
    name: "Aneeb Bond+ Gypsum Plaster (POP)",
    categorySlug: "internal-plastering",
    shortDescription:
      "A Plaster of Paris compatible bonding system for smooth, decorative-ready internal finishes.",
    description:
      "This bonding system is formulated to work with Plaster of Paris applications, giving a hard, smooth base coat that supports cornice work, false ceilings and decorative plastering details.",
    applications: [
      "POP-based internal wall and ceiling finishing",
      "Decorative cornice and moulding substrates",
      "False ceiling perimeter finishing",
    ],
    features: [
      "Strong key for POP over concrete and masonry",
      "Smooth working consistency for detailed work",
      "Reduced cracking at POP-to-substrate joints",
    ],
    specifications: [
      { label: "Compatibility", value: "Plaster of Paris systems" },
      { label: "Setting Time", value: "20–30 minutes" },
      { label: "Coverage", value: "Approx. 90 sq.ft / litre" },
    ],
    packaging: ["5 Litre", "20 Litre"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-roof-mate",
    name: "Aneeb Roof Mate",
    categorySlug: "waterproofing",
    shortDescription:
      "An elastomeric roof coating that bridges hairline cracks and reflects heat on exposed terraces.",
    description:
      "Aneeb Roof Mate is a flexible, UV-stable membrane coating for exposed concrete roofs and terraces. Its elastomeric film accommodates thermal movement and micro-cracking while resisting standing water and ponding.",
    applications: [
      "Exposed RCC terraces and flat roofs",
      "Podium and parking deck waterproofing",
      "Retrofit waterproofing over aged roof surfaces",
    ],
    features: [
      "Crack-bridging elastomeric film",
      "UV and weather stable for long-term outdoor exposure",
      "Reflective finish helps reduce surface heat gain",
      "Seamless, jointless membrane application",
    ],
    specifications: [
      { label: "Elongation", value: "High elongation elastomeric film" },
      { label: "Coverage", value: "Approx. 40–50 sq.ft / kg (two coats)" },
      { label: "Recoat Time", value: "4–6 hours" },
      { label: "Service Life", value: "7–10 years, condition dependent" },
    ],
    packaging: ["4 Kg", "10 Kg", "20 Kg"],
    hasDatasheet: true,
    featured: true,
  },
  {
    slug: "aneeb-top-roof-shield",
    name: "Aneeb Top Roof Shield",
    categorySlug: "waterproofing",
    shortDescription:
      "A protective topcoat shield for waterproofed roofs, adding abrasion and UV resistance.",
    description:
      "Aneeb Top Roof Shield is applied as a protective top layer over waterproofing membranes, adding a durable, walkable surface that resists UV degradation, abrasion and ponding water damage.",
    applications: [
      "Protective topcoat over waterproofing membranes",
      "Terraces with foot traffic or maintenance access",
      "Roofs exposed to intense UV and monsoon cycles",
    ],
    features: [
      "Adds abrasion and foot-traffic resistance",
      "Extends the service life of underlying membranes",
      "UV-stable, non-yellowing finish",
    ],
    specifications: [
      { label: "Finish", value: "Matte protective topcoat" },
      { label: "Coverage", value: "Approx. 45–55 sq.ft / kg" },
      { label: "Drying Time", value: "4–6 hours touch dry" },
    ],
    packaging: ["4 Kg", "10 Kg", "20 Kg"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-elasto-seal-104",
    name: "Aneeb Elasto Seal 104",
    categorySlug: "waterproofing",
    shortDescription:
      "A high-elongation sealant-grade coating for expansion joints and critical junction waterproofing.",
    description:
      "Aneeb Elasto Seal 104 is designed for junctions and expansion joints where structural movement is expected, providing a flexible waterproof seal that resists cracking under repeated expansion and contraction cycles.",
    applications: [
      "Expansion and construction joint sealing",
      "Parapet-to-slab and pipe-penetration junctions",
      "Critical detailing on roofs and balconies",
    ],
    features: [
      "High elongation for joint movement accommodation",
      "Strong adhesion to concrete, masonry and metal",
      "Resists ponding water and weathering",
    ],
    specifications: [
      { label: "Elongation", value: "High-flexibility elastomeric grade" },
      { label: "Application", value: "Brush or trowel applied" },
      { label: "Coverage", value: "Joint-detail dependent" },
    ],
    packaging: ["1 Kg", "4 Kg", "20 Kg"],
    hasDatasheet: true,
  },
  {
    slug: "all-rounder-waterproofing-coating",
    name: "All Rounder Waterproofing Coating",
    categorySlug: "waterproofing",
    shortDescription:
      "A multi-surface waterproofing coating suited to roofs, walls, bathrooms and water tanks.",
    description:
      "All Rounder Waterproofing Coating is a versatile cementitious-polymer coating that can be used across multiple wet-area applications, from external walls to internal wet rooms and potable water tanks, reducing the number of specialised products a contractor needs to stock.",
    applications: [
      "External wall and roof waterproofing",
      "Bathroom, kitchen and wet-area tanking",
      "Overhead and underground water tank lining",
    ],
    features: [
      "Multi-surface, multi-application versatility",
      "Rigid crystalline bond suitable for water-tank use",
      "Two-component system for consistent mix quality",
    ],
    specifications: [
      { label: "System", value: "Two-component cementitious coating" },
      { label: "Coverage", value: "Approx. 20–25 sq.ft / kg (two coats)" },
      { label: "Potable Water Use", value: "Suitable for treated water tanks" },
    ],
    packaging: ["5 Kg Combo Pack", "20 Kg Combo Pack"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-crete",
    name: "Aneeb Crete",
    categorySlug: "waterproofing",
    shortDescription:
      "An integral waterproofing compound dosed directly into concrete and mortar mixes.",
    description:
      "Aneeb Crete is added at the mixing stage of concrete or mortar to reduce capillary water absorption throughout the mass, giving structures like basements and retaining walls built-in waterproofing rather than relying solely on surface membranes.",
    applications: [
      "Integral waterproofing of RCC basements and retaining walls",
      "Water-retaining structures and sumps",
      "Plaster and mortar water-resistance enhancement",
    ],
    features: [
      "Reduces capillary water absorption in concrete",
      "Simple dosing during batching, no extra application step",
      "Does not affect concrete workability at recommended dosage",
    ],
    specifications: [
      { label: "Dosage", value: "As percentage of cement weight, per mix design" },
      { label: "Form", value: "Liquid admixture" },
      { label: "Compatibility", value: "OPC and PPC cement systems" },
    ],
    packaging: ["1 Litre", "5 Litre", "20 Litre", "200 Litre"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-aw-plus-waterproofing-compound",
    name: "Aneeb AW Plus Waterproofing Compound",
    categorySlug: "waterproofing",
    shortDescription:
      "An advanced integral admixture for water-tightness in dense and mass concrete pours.",
    description:
      "Aneeb AW Plus is formulated for larger, denser concrete pours where water-tightness is critical, such as raft foundations and water-retaining structures, providing consistent capillary pore-blocking performance across the full concrete mass.",
    applications: [
      "Raft foundations and mass concrete pours",
      "Water treatment and retaining structures",
      "Basement and podium waterproof concrete",
    ],
    features: [
      "Effective pore-blocking in dense concrete sections",
      "Consistent performance across large pour volumes",
      "Compatible with standard ready-mix concrete plants",
    ],
    specifications: [
      { label: "Form", value: "Liquid integral admixture" },
      { label: "Dosage", value: "Per mix design and pour volume" },
      { label: "Application", value: "Batched at RMC plant or on-site mixer" },
    ],
    packaging: ["20 Litre", "200 Litre Drum"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-crystal-seal",
    name: "Aneeb Crystal Seal Waterproofing",
    categorySlug: "construction-chemicals",
    shortDescription:
      "A crystalline slurry coating that grows needle-like crystals inside concrete pores to block water permanently.",
    description:
      "Aneeb Crystal Seal is a cementitious crystalline waterproofing slurry. On contact with moisture, its active chemicals react with concrete to form insoluble crystals within the capillary pore structure, giving structures a self-sealing waterproof barrier that remains reactive with future water contact, including through hairline cracks.",
    applications: [
      "Basements, lift pits and underground structures",
      "Water treatment plants and reservoirs",
      "Tunnels and below-grade retaining structures",
    ],
    features: [
      "Crystalline growth self-seals future hairline cracks",
      "Permanent chemical bond with concrete substrate",
      "Withstands positive and negative water pressure",
      "Non-toxic, suitable for potable water structures",
    ],
    specifications: [
      { label: "System", value: "Cementitious crystalline slurry" },
      { label: "Coverage", value: "Approx. 20–22 sq.ft / kg (two coats)" },
      { label: "Water Pressure", value: "Resists positive and negative hydrostatic pressure" },
    ],
    packaging: ["5 Kg", "20 Kg", "25 Kg"],
    hasDatasheet: true,
    featured: true,
  },
  {
    slug: "aneeb-pump-primer",
    name: "Aneeb Pump Primer",
    categorySlug: "construction-chemicals",
    shortDescription:
      "A bonding primer engineered for pumped and sprayed mortar and plaster systems.",
    description:
      "Aneeb Pump Primer is formulated for compatibility with mechanised pumping and spraying equipment, giving mortar and plaster applicators a consistent, reliable bonding base when working at speed on large commercial or industrial sites.",
    applications: [
      "Pump-applied plaster and mortar systems",
      "Large-scale commercial and industrial projects",
      "Substrate priming ahead of sprayed renders",
    ],
    features: [
      "Formulated for pump and spray compatibility",
      "Consistent bond strength at high application speed",
      "Reduces rebound and material wastage on site",
    ],
    specifications: [
      { label: "Application", value: "Pump or spray equipment" },
      { label: "Coverage", value: "Approx. 90–100 sq.ft / litre" },
      { label: "Drying Time", value: "2–4 hours" },
    ],
    packaging: ["20 Litre", "200 Litre Drum"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-bond-plus-tile-adhesive",
    name: "Aneeb Bond Plus Tile Adhesive",
    categorySlug: "tile-fixing",
    shortDescription:
      "A polymer-modified cementitious adhesive for vitrified, ceramic and stone tile fixing.",
    description:
      "Aneeb Bond Plus Tile Adhesive is a high-bond-strength, polymer-modified cementitious adhesive suited to fixing vitrified, ceramic, and natural stone tiles on floors, walls and facades, including large-format tiles.",
    applications: [
      "Vitrified and ceramic floor and wall tiling",
      "Natural stone cladding and flooring",
      "Large-format tile installation",
    ],
    features: [
      "High bond and shear strength",
      "Non-slip, non-sag formulation for wall applications",
      "Extended open time for large tile installations",
    ],
    specifications: [
      { label: "Bond Strength", value: "High-strength polymer-modified grade" },
      { label: "Open Time", value: "20–30 minutes" },
      { label: "Coverage", value: "Approx. 3–4 kg / sq.m (notch dependent)" },
    ],
    packaging: ["20 Kg Bag", "40 Kg Bag"],
    hasDatasheet: true,
    featured: true,
  },
  {
    slug: "glomax-tile-cleaner",
    name: "Glomax Tile Cleaner",
    categorySlug: "tile-fixing",
    shortDescription:
      "A concentrated acid-based cleaner for removing cement and grout residue from newly laid tiles.",
    description:
      "Glomax Tile Cleaner is a concentrated cleaning solution formulated to remove cement haze, grout residue and efflorescence from freshly tiled floors and walls, restoring the tile's original finish without damaging the glaze.",
    applications: [
      "Post-installation cement and grout haze removal",
      "Efflorescence cleaning on tiled and stone surfaces",
      "Routine deep cleaning of ceramic and vitrified tiles",
    ],
    features: [
      "Fast-acting on cement and grout residue",
      "Safe on glazed tile surfaces when used as directed",
      "Concentrated formula for dilution flexibility",
    ],
    specifications: [
      { label: "Form", value: "Concentrated liquid" },
      { label: "Dilution", value: "As per surface condition" },
      { label: "Coverage", value: "Approx. 200–250 sq.ft / litre (diluted)" },
    ],
    packaging: ["1 Litre", "5 Litre", "20 Litre"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-epoxy-grout",
    name: "Aneeb Epoxy Grout",
    categorySlug: "tile-fixing",
    shortDescription:
      "A stain-resistant, chemical-resistant epoxy grout for high-performance tile joints.",
    description:
      "Aneeb Epoxy Grout is a three-component epoxy-based grout offering superior stain, chemical and water resistance compared to standard cementitious grout, making it suited to kitchens, hospitals, laboratories and other demanding environments. Available in a curated shade range to match project design intent.",
    applications: [
      "Kitchen, hospital and laboratory tile joints",
      "Swimming pools and wet-area grouting",
      "High-traffic commercial flooring joints",
    ],
    features: [
      "Superior stain and chemical resistance",
      "Non-porous, hygienic joint finish",
      "Available in multiple standard shades",
    ],
    specifications: [
      { label: "System", value: "Three-component epoxy grout" },
      { label: "Joint Width", value: "2–12 mm recommended" },
      { label: "Cure Time", value: "24–48 hours to light traffic" },
    ],
    packaging: ["1 Kg", "5 Kg"],
    hasDatasheet: true,
  },
  {
    slug: "tile-grout",
    name: "Tile Grout",
    categorySlug: "tile-fixing",
    shortDescription:
      "A polymer-modified cementitious grout for standard residential and commercial tile joints.",
    description:
      "Tile Grout is a polymer-modified cementitious jointing compound for ceramic and vitrified tiles, offering good water resistance and a smooth, even finish across standard joint widths.",
    applications: [
      "Residential and commercial floor and wall tile joints",
      "Ceramic and vitrified tile installations",
      "Balcony and terrace tiling",
    ],
    features: [
      "Smooth, crack-resistant cured finish",
      "Water-resistant polymer-modified formulation",
      "Easy trowel and float application",
    ],
    specifications: [
      { label: "System", value: "Polymer-modified cementitious grout" },
      { label: "Joint Width", value: "1–8 mm recommended" },
      { label: "Coverage", value: "Joint-size dependent" },
    ],
    packaging: ["1 Kg", "5 Kg", "20 Kg"],
    hasDatasheet: true,
  },
  {
    slug: "aneeb-gcf-laminated-glass-solution",
    name: "Aneeb GCF Laminated Glass Solution",
    categorySlug: "laminated-glass",
    shortDescription:
      "An indigenously developed, UV-curable interlayer film for safety and architectural laminated glass.",
    description:
      "Aneeb GCF is a photo-cross-linked laminated glass interlayer developed using UV curing technology in collaboration with the Chemistry Department of C.C.S. University and the Department of Science & Technology, Government of India, under the Make in India initiative. In the event of breakage, the interlayer holds shattered glass fragments in place, reducing injury risk while offering an energy-efficient, cost-effective alternative to conventional PVB lamination processes. Aneeb GCF conforms to Indian Standard requirements and has been tested at a Government-approved testing laboratory.",
    applications: [
      "Architectural safety glass for facades and partitions",
      "Balustrades, skylights and overhead glazing",
      "Automotive and specialised safety glazing",
    ],
    features: [
      "UV-curing process saves energy versus autoclave lamination",
      "Safe fragment retention on impact or breakage",
      "Durable, weather- and yellowing-resistant interlayer",
      "Conforms to Indian Standard requirements, government lab tested",
    ],
    specifications: [
      { label: "Technology", value: "Photo cross-linked, UV curing" },
      { label: "Developed With", value: "CCS University Chemistry Dept. & DST, Government of India" },
      { label: "Standard Conformance", value: "IS-standard tested at approved laboratory" },
      { label: "Initiative", value: "Make in India" },
    ],
    packaging: ["Roll format – project specific sizing"],
    hasDatasheet: true,
    featured: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, limit);
}

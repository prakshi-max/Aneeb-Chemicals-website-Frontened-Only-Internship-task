# Aneeb Chemicals — Corporate Website

A production-ready Next.js 15 (App Router) website for Aneeb Chemicals Pvt. Ltd., a Ghaziabad-based
manufacturer of waterproofing, gypsum plastering, construction chemical, tile-fixing and laminated
glass solutions.

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/                    Route segments (App Router)
  page.tsx              Homepage
  about/                About Us
  products/              Product listing, filters & [slug] detail pages
  industries/            Industries served
  quality/                Quality assurance & compliance
  blog/                   Blog listing & [slug] articles
  careers/                Careers listing & [slug] job detail
  contact/                Contact form & company details
  sitemap.ts / robots.ts  SEO
components/
  layout/                Header, Footer
  home/                  Homepage sections
  products/               Product cards, filters, enquiry modal
  contact/                Contact form
  ui/                     Shared building blocks (Button, Container, SectionHeading)
lib/
  data/                   Content data layer (products, categories, industries, blog, careers, company)
  types.ts                Shared TypeScript interfaces
```

## Content / CMS-Readiness

All business content (products, categories, industries, blog posts, job openings, company details)
lives in `lib/data/*.ts` as typed arrays/objects. To connect a real CMS or API later, replace the
data-fetching functions in these files (e.g. `getProductBySlug`, `getProductsByCategory`) with calls
to your API — component code does not need to change since it only depends on the shared types in
`lib/types.ts`.

## Forms

The contact form (`components/contact/ContactForm.tsx`) and product enquiry modal
(`components/products/EnquiryButton.tsx`) are built with local state and a `handleSubmit` placeholder
ready to be wired to an email service, CRM, or serverless API route.

## Design Tokens

Brand colors, gradients and shadows are defined centrally in `tailwind.config.ts` under `theme.extend`
so the visual identity can be adjusted from a single file.

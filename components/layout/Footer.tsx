import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Container from "@/components/ui/Container";
import { categories } from "@/lib/data/categories";
import { company } from "@/lib/data/company";

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Industries Served", href: "/industries" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-display text-lg font-bold text-white">
              A
            </span>
            <span className="font-display text-lg font-bold text-white">Aneeb Chemicals</span>
          </Link>
          <p className="text-sm leading-relaxed text-white/70">
            Manufacturer of waterproofing, construction chemical, tile-fixing, plastering and
            laminated glass solutions, engineering durable bonds for India&apos;s construction
            industry since {company.founded}.
          </p>
          <div className="flex gap-3 pt-1">
            <a href={company.socials.linkedin} aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={company.socials.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={company.socials.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Products</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`/products?category=${cat.slug}`} className="text-sm text-white/80 transition-colors hover:text-white">
                  {cat.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Company</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Get in Touch</h3>
          <ul className="mt-4 flex flex-col gap-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-secondary" />
              <span>{company.factoryAddress}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-secondary" />
              <a href={`tel:${company.phoneRaw}`} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-secondary" />
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name} All rights reserved. GST: {company.gst}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}

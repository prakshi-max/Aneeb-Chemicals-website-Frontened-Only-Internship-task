"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { categories } from "@/lib/data/categories";
import { company } from "@/lib/data/company";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-white/95 backdrop-blur" : "border-transparent bg-white"
      }`}
    >
      <div className="hidden bg-primary-900 text-white lg:block">
        <Container className="flex items-center justify-between py-2 text-xs">
          <p>GST: {company.gst} &middot; ISO-driven manufacturing since {company.founded}</p>
          <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 font-medium">
            <Phone className="h-3.5 w-3.5" />
            {company.phone}
          </a>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient font-display text-lg font-bold text-white">
            A
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-ink">Aneeb Chemicals</span>
            <span className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
              Pvt. Ltd.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="group relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/products"
              className="flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-primary"
            >
              Products
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-card-hover">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products?category=${cat.slug}`}
                        className="rounded-xl p-3 transition-colors hover:bg-primary-50"
                      >
                        <p className="text-sm font-semibold text-ink">{cat.name}</p>
                        <p className="mt-1 text-xs leading-relaxed text-ink-faint line-clamp-2">
                          {cat.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              <Link href="/products" className="rounded-lg px-2 py-2.5 text-sm font-semibold text-ink">
                All Products
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  className="rounded-lg px-4 py-2 text-sm text-ink-light"
                >
                  {cat.shortName}
                </Link>
              ))}
              <div className="my-2 h-px bg-line" />
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-lg px-2 py-2.5 text-sm font-semibold text-ink">
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="mt-3 w-full">
                Get a Quote
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

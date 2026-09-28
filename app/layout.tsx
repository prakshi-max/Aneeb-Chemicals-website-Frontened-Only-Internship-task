import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company, siteUrl } from "@/lib/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Waterproofing & Construction Chemical Manufacturer`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Aneeb Chemicals Pvt. Ltd. manufactures waterproofing, construction chemical, tile-fixing, gypsum plastering and laminated glass solutions from our 10,000 sq. meter facility in Ghaziabad, India.",
  keywords: [
    "waterproofing manufacturer India",
    "construction chemicals Ghaziabad",
    "gypsum bonding agent",
    "tile adhesive manufacturer",
    "laminated glass interlayer India",
  ],
  openGraph: {
    title: `${company.name} | Waterproofing & Construction Chemical Manufacturer`,
    description:
      "Premium waterproofing, construction chemical, tile-fixing, plastering and laminated glass solutions manufactured in Ghaziabad, India.",
    url: siteUrl,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Waterproofing & Construction Chemical Manufacturer`,
    description:
      "Premium waterproofing, construction chemical, tile-fixing, plastering and laminated glass solutions manufactured in Ghaziabad, India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

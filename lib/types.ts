export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  applications: string[];
  features: string[];
  specifications: ProductSpec[];
  packaging: string[];
  hasDatasheet: boolean;
  featured?: boolean;
}

export interface ProductCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: string;
  relatedCategorySlugs: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

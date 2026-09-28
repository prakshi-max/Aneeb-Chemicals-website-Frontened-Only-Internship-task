import type { Metadata } from "next";
import { Award, Building2, Factory, ShieldCheck, Target, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aneeb Chemicals Pvt. Ltd. — a Ghaziabad-based manufacturer of waterproofing, construction chemical and laminated glass solutions since 2014.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Aneeb Chemicals Pvt. Ltd. established in Ghaziabad with a focus on gypsum bonding and construction chemical formulations.",
  },
  {
    year: "2017",
    title: "Waterproofing Range Launched",
    description: "Expanded into elastomeric roof coatings and integral waterproofing admixtures for residential and commercial builders.",
  },
  {
    year: "2020",
    title: "Tile-Fixing Systems Added",
    description: "Introduced tile adhesives, epoxy grouts and surface cleaners to serve flooring and facade contractors.",
  },
  {
    year: "Present",
    title: "Aneeb GCF Laminated Glass",
    description: "Commercialised an indigenously developed UV-cured laminated glass interlayer, built under the Make in India initiative.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "Consistent batch quality and transparent technical support across every order size.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "In-house testing at every production stage, from raw material intake to dispatch.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Government-backed R&D collaboration behind our laminated glass interlayer technology.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface-section bg-brand-radial section-pad">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About Aneeb Chemicals"
            title="Manufacturing dependable construction chemistry since 2014"
            description="We manufacture waterproofing, gypsum plastering, tile-fixing and laminated glass systems from our Ghaziabad facility, built on a simple principle: products that perform the same way on site as they do in the lab."
          />
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-ink-light">
            <p>
              {company.name} was established to address a gap in Northern India&apos;s construction
              supply chain: contractors needed formulated chemical systems that could keep pace with
              faster project timelines, not just raw cement-based alternatives.
            </p>
            <p>
              Our complete product range includes gypsum bonding solutions, spray-applied bonding
              compounds, construction chemicals, synthetic adhesives, internal and exterior
              plastering systems, and — most recently — laminated glass interlayer technology.
            </p>
            <p>
              We operate from a {company.facilityArea} manufacturing facility on the outskirts of
              Delhi-NCR in Ghaziabad, supported by a team of {company.employees}, including{" "}
              {company.engineers} in-house engineers across production, quality and R&amp;D.
              A dedicated sales, marketing and logistics team keeps our distributor and contractor
              network across Northern India supplied on schedule.
            </p>
            <p>
              Backed by advanced warehousing, transportation and quality-testing facilities, we
              continue to invest in product development, most notably Aneeb GCF, our
              indigenously developed laminated glass interlayer.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 rounded-2xl border border-line bg-surface-section p-6">
              <Factory className="h-6 w-6 text-primary" />
              <p className="font-display text-2xl font-bold text-ink">{company.facilityArea}</p>
              <p className="text-sm text-ink-light">Manufacturing Facility</p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-line bg-surface-section p-6">
              <Users className="h-6 w-6 text-primary" />
              <p className="font-display text-2xl font-bold text-ink">{company.employees}+</p>
              <p className="text-sm text-ink-light">Team Members</p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-line bg-surface-section p-6">
              <Building2 className="h-6 w-6 text-primary" />
              <p className="font-display text-2xl font-bold text-ink">{company.annualTurnover}</p>
              <p className="text-sm text-ink-light">Annual Turnover</p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-line bg-surface-section p-6">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <p className="font-display text-2xl font-bold text-ink">Since {company.founded}</p>
              <p className="text-sm text-ink-light">Manufacturing Experience</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface-section">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Our Journey" title="Milestones that shaped our product range" align="center" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-card">
                <span className="font-display text-sm font-bold text-primary">{item.year}</span>
                <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-light">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Our Values" title="What guides how we manufacture and support our products" align="center" />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center gap-4 rounded-2xl border border-line p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                  <value.icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{value.title}</h3>
                <p className="text-sm leading-relaxed text-ink-light">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-primary-900">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Want to know more about our manufacturing capabilities?
          </h2>
          <Button href="/contact" variant="secondary">
            Contact Our Team
          </Button>
        </Container>
      </section>
    </>
  );
}

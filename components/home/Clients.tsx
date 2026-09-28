import Container from "@/components/ui/Container";
import { clients } from "@/lib/data/stats";

export default function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section className="border-y border-line bg-white py-12">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Trusted by builders and contractors across Northern India
        </p>
      </Container>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {loop.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="whitespace-nowrap text-lg font-semibold text-ink-faint/70"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

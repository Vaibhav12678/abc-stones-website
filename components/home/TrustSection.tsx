import Container from "@/components/ui/Container";
import TextDrop from "@/components/ui/TextDrop";

const trustPoints = [
  {
    title: "30+ Years Experience",
    detail: "Decades of deep industry knowledge in marble and granite selection.",
  },
  {
    title: "Premium Natural Stones",
    detail: "Hand-curated Italian marbles, Turkish varieties, and resilient granites.",
  },
  {
    title: "Global Sourcing",
    detail: "Direct relationships with premier quarries across international hubs.",
  },
  {
    title: "Slab & Block Availability",
    detail: "Supplying ready-to-install slabs and raw blocks for monumental projects.",
  },
  {
    title: "Quality Selection",
    detail: "Rigorous standards for structural integrity, veining character, and density.",
  },
  {
    title: "Trusted Service",
    detail: "Transparent guidance for architects, interior designers, and luxury builders.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-y border-charcoal/10">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Big Typography Header */}
          <TextDrop className="lg:col-span-5 border-l-2 border-gold pl-6 sm:pl-8">
            <span className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium text-charcoal leading-none block">
              30+ YEARS
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-gold font-normal tracking-wide block mt-2">
              OF STONE EXPERTISE
            </span>
            <p className="mt-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed max-w-sm">
              Dedicated to sourcing and delivering exceptional natural stone with
              unwavering consistency and professional excellence.
            </p>
          </TextDrop>

          {/* 6 Concise Typographic Points */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {trustPoints.map((point, index) => (
              <div key={point.title} className="group border-b border-charcoal/10 pb-4">
                <span className="text-[0.68rem] tracking-[0.2em] text-gold uppercase block mb-1 font-semibold">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-charcoal font-medium">
                  {point.title}
                </h3>
                <p className="mt-1 text-xs text-charcoal/65 leading-relaxed">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

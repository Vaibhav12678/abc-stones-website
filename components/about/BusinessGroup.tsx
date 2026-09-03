import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { businessGroup } from "@/data/firms";
import { SITE_NAME } from "@/lib/constants";

export default function BusinessGroup() {
  return (
    <section className="bg-[#FAF8F3] py-16 sm:py-24 border-b border-charcoal/10">
      <Container>
        <SectionHeading
          eyebrow="Associated Enterprises"
          title="Industry Background"
          align="center"
          className="mx-auto mb-12"
        />
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {businessGroup.map((firm) => (
            <div key={firm.name} className="bg-white border border-charcoal/15 p-6 sm:p-8 shadow-xs">
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">{firm.name}</h3>
              <p className="mt-1 text-xs tracking-[0.12em] uppercase text-gold font-semibold">{firm.location}</p>
              <p className="mt-3 text-xs sm:text-sm text-charcoal/75 leading-relaxed">{firm.activity}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-charcoal/50 max-w-xl mx-auto text-center">
          Presented as associated business-group references based on verified information supplied by {SITE_NAME}.
        </p>
      </Container>
    </section>
  );
}

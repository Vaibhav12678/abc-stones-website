import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Disclaimer | ${SITE_NAME}`,
  description: `Natural stone variation, representative imagery, and development disclaimer for ${SITE_NAME}.`,
};

export default function DisclaimerPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto bg-white border border-charcoal/10 p-6 sm:p-12 shadow-xs">
          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Legal &amp; Trust
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium mb-6">
            Disclaimer
          </h1>
          <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-8 pb-4 border-b border-charcoal/10">
            {SITE_NAME} · Natural Stone Information Notice
          </p>

          <div className="space-y-6 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">
                1. Representative Imagery &amp; Natural Variations
              </h2>
              <p>
                All photographs, digital renders, and imagery published across this website are representative in nature.
                Because natural stone is quarried from organic earth deposits, each block, slab, and batch possesses unique veining,
                tonal nuances, and crystal structures. No two natural stone slabs are identical. Clients and specifiers are encouraged
                to inspect actual slab bundles before fabrication.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">
                2. Showroom &amp; Processing Facility Status
              </h2>
              <p>
                The showroom and modern processing factory of {SITE_NAME} are currently under active development in Kishangarh,
                Rajasthan. Any architectural imagery or 3D visual concepts of facilities depict the planned aesthetic development
                and do not represent an operational retail showroom at this moment. Project consultations and slab viewings are conducted
                by appointment.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">
                3. Technical Guidance &amp; Architectural Suitability
              </h2>
              <p>
                Material descriptions, suggested applications, and maintenance advice published on this website are provided for general
                guidance only. Specific structural engineering, load calculations, slip resistance ratings, and chemical sealant specifications
                should be verified by qualified architects, interior designers, or structural engineers for each individual installation.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

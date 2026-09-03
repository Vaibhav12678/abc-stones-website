import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE_NAME, PRIMARY_PHONE, ADDRESS_LINES } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${SITE_NAME}`,
  description: `Terms of service and commercial guidelines for natural stone enquiries with ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto bg-white border border-charcoal/10 p-6 sm:p-12 shadow-xs">
          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Legal &amp; Trust
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium mb-6">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-8 pb-4 border-b border-charcoal/10">
            Last Updated: March 2025 · {SITE_NAME}
          </p>

          <div className="space-y-6 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">1. Natural Stone Inherent Characteristics</h2>
              <p>
                Natural marble and granite are organic geological products quarried from the earth. Natural variations in coloration,
                veining intensity, crystal clusters, fissures, and surface markings are authentic characteristics of genuine natural stone,
                not material defects. Samples and digital images serve as representative representations; specific slab bundles should be
                visually inspected and confirmed.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">2. Quotations and Availability</h2>
              <p>
                Quotations provided via website inquiry, telephone, or WhatsApp are estimates based on material availability and dimensions
                at the time of consultation. Material reservations and formal commercial purchase orders are subject to confirmed written agreement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">3. Facility and Showroom Status</h2>
              <p>
                Our processing facility and showroom in Kishangarh, Rajasthan, are currently in development. On-site visits and slab inspections
                must be scheduled in advance with our team.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">4. Applicable Jurisdiction</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising
                shall be subject to the exclusive jurisdiction of the competent courts in Kishangarh / Ajmer, Rajasthan.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

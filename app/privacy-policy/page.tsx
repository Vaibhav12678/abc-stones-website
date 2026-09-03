import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE_NAME, PRIMARY_PHONE, ADDRESS_LINES } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy policy and information handling practices of ${SITE_NAME}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto bg-white border border-charcoal/10 p-6 sm:p-12 shadow-xs">
          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Legal &amp; Trust
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-8 pb-4 border-b border-charcoal/10">
            Last Updated: March 2025 · {SITE_NAME}
          </p>

          <div className="space-y-6 text-xs sm:text-sm text-charcoal/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">1. Overview</h2>
              <p>
                {SITE_NAME} (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed
                to protecting any personal information you share with us through our website or direct customer inquiries.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">2. Information We Collect</h2>
              <p>
                When you submit an enquiry via our Get a Quote form, WhatsApp link, or telephone call, we may collect your name,
                contact telephone number, and message details pertaining to your natural stone requirements.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">3. How We Use Your Information</h2>
              <p>
                Information collected is used solely to respond to your specific stone inquiries, prepare pricing estimates,
                coordinate slab viewings, and fulfill project logistics. We do not sell, rent, or lease customer data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">4. WhatsApp and Communications</h2>
              <p>
                Our quotation and consultation features connect directly to WhatsApp. By initiating a WhatsApp message,
                you agree to communication according to WhatsApp&apos;s privacy policies and terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg text-charcoal font-medium mb-2">5. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy, you may contact {SITE_NAME} at our registered facility:
                <br />
                {ADDRESS_LINES.join(" ")}
                <br />
                Phone: {PRIMARY_PHONE}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

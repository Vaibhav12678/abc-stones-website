import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: `Get in touch with ${SITE_NAME} for natural stone enquiries, quotations, or to schedule a visit to our Kishangarh facility.`,
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        {/* Top-left Back Button */}
        <BackButton />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <ContactInfo />
          </div>
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

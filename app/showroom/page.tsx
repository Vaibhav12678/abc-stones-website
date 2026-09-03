import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import TextDrop from "@/components/ui/TextDrop";
import { SITE_NAME, ADDRESS_LINES, PRIMARY_PHONE, PHONE_NUMBERS, GOOGLE_MAPS_LINK } from "@/lib/constants";
import { getCallLink, getWhatsappLink } from "@/lib/whatsapp";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: `Showroom & Location | ${SITE_NAME}`,
  description: `Visit or contact ${SITE_NAME} in Kishangarh, Rajasthan. Natural stone slab viewings and architectural consultations by appointment.`,
};

export default function ShowroomPage() {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: "https://abcstonesindia.com/images/showroom/showroom-placeholder.jpg",
    telephone: PRIMARY_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 9B, 9A, Khasra No. 1178/748, 1178/749, Ralawata",
      addressLocality: "Kishangarh",
      addressRegion: "Rajasthan",
      postalCode: "305801",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.5786",
      longitude: "74.8631",
    },
    url: "https://abcstonesindia.com",
    priceRange: "$$$",
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <Container>
        {/* Top-left Back Button */}
        <BackButton />

        {/* Header */}
        <TextDrop className="max-w-3xl mb-12 sm:mb-16">
          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Location &amp; Visit Details
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-medium leading-[1.08]">
            Showroom &amp; Facilities
          </h1>
          <p className="mt-4 text-sm sm:text-base text-charcoal/75 leading-relaxed">
            Our upcoming experiential natural stone showroom and processing yard in Kishangarh, Rajasthan,
            are designed to bring the world&apos;s finest natural stone directly to architects and designers.
          </p>
        </TextDrop>

        {/* Location Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Details Card */}
          <div className="lg:col-span-6 bg-white border border-charcoal/15 p-6 sm:p-10 shadow-xs">
            <h2 className="font-serif text-2xl text-charcoal font-medium mb-6 pb-4 border-b border-charcoal/10">
              {SITE_NAME}
            </h2>

            <div className="space-y-6 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-1 font-semibold uppercase tracking-wider text-xs">
                    Registered Facility Address
                  </strong>
                  <p className="text-charcoal/80 leading-relaxed">
                    {ADDRESS_LINES.join(" ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-1 font-semibold uppercase tracking-wider text-xs">
                    Telephone &amp; Contact
                  </strong>
                  <div className="space-y-1 text-charcoal/80">
                    {PHONE_NUMBERS.map((p) => (
                      <div key={p}>
                        <a href={getCallLink(p)} className="hover:text-gold transition-colors">
                          {p}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-1 font-semibold uppercase tracking-wider text-xs">
                    Facility Status &amp; Appointments
                  </strong>
                  <p className="text-charcoal/80 leading-relaxed">
                    Showroom is currently under active development. Direct slab viewings, project discussions,
                    and block inquiries are scheduled by appointment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-wrap items-center gap-3">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-charcoal hover:bg-[#11100F] hover:text-[#FAF8F3] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all"
              >
                <Navigation size={13} />
                GET DIRECTIONS
              </a>

              <a
                href={getCallLink(PRIMARY_PHONE)}
                className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all"
              >
                <Phone size={13} className="text-gold" />
                CALL US
              </a>

              <a
                href={getWhatsappLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-charcoal/30 hover:border-gold hover:bg-gold/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-all"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WHATSAPP CONSULTATION
              </a>
            </div>
          </div>

          {/* Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-charcoal/15 shadow-md">
              <Image
                src="/images/showroom/showroom-placeholder.jpg"
                alt={`${SITE_NAME} showroom in Kishangarh`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F3]/95 backdrop-blur-xs p-4 border border-charcoal/10">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal block">
                  Kishangarh, Rajasthan
                </span>
                <span className="text-xs text-charcoal/70 block mt-0.5">
                  India&apos;s leading stone hub · Centralized logistics connectivity
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

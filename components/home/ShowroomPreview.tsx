"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import TextDrop from "@/components/ui/TextDrop";
import { SITE_NAME, ADDRESS_LINES, PRIMARY_PHONE, PHONE_NUMBERS, GOOGLE_MAPS_LINK } from "@/lib/constants";
import { getCallLink, getWhatsappLink } from "@/lib/whatsapp";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";

export default function ShowroomPreview() {
  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-b border-charcoal/10">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Information Column */}
          <TextDrop className="lg:col-span-6">
            <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
              Kishangarh Destination
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              Showroom &amp; Facilities
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-charcoal/75 leading-relaxed">
              Our bespoke experiential showroom and advanced natural stone processing
              facility are currently under development in Kishangarh, Rajasthan.
              We are crafting a world-class environment where architects, interior designers,
              builders, and clients can experience full-scale slabs and bookmatched compositions.
            </p>

            <div className="mt-8 space-y-4 border-t border-charcoal/10 pt-6 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-0.5 font-semibold">Registered Location</strong>
                  <p className="text-charcoal/70 leading-relaxed">
                    {SITE_NAME}
                    <br />
                    {ADDRESS_LINES.join(" ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-0.5 font-semibold">Direct Enquiries</strong>
                  <p className="text-charcoal/70">
                    {PHONE_NUMBERS.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-0.5 font-semibold">Development Status</strong>
                  <p className="text-charcoal/70">
                    Showroom currently under active development. Direct project consultations and slab inspections available by appointment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
          </TextDrop>

          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-charcoal/10 shadow-lg">
              <Image
                src="/images/showroom/showroom-placeholder.jpg"
                alt={`${SITE_NAME} — showroom and stone gallery under development`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F3]/95 backdrop-blur-xs p-3.5 border border-charcoal/10">
                <p className="text-[0.68rem] font-semibold text-charcoal tracking-wider uppercase">
                  Facility In Progress · Kishangarh, Rajasthan
                </p>
                <p className="text-[0.65rem] text-charcoal/70 mt-0.5">
                  Visual render concept for our upcoming flagship display hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

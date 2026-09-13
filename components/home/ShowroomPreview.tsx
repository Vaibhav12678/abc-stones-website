"use client";

import Container from "@/components/ui/Container";
import TextDrop from "@/components/ui/TextDrop";
import { SITE_NAME, ADDRESS_LINES, PRIMARY_PHONE, PHONE_NUMBERS, GOOGLE_MAPS_LINK } from "@/lib/constants";
import { getCallLink, getWhatsappLink } from "@/lib/whatsapp";
import { MapPin, Phone, Clock, MessageCircle, Navigation, Play } from "lucide-react";

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

          {/* Visual Column / Future Video Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-charcoal/20 shadow-xl bg-[#11100F] flex flex-col items-center justify-center p-6 text-center">
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center mb-3.5">
                  <Play size={22} className="text-gold ml-0.5 fill-gold/20" />
                </div>
                <p className="eyebrow text-gold text-[0.68rem] tracking-[0.22em] uppercase font-semibold">
                  Video Coming Soon
                </p>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F3] font-medium tracking-wide mt-1">
                  Showroom Walkthrough
                </h3>
                <p className="text-xs text-[#FAF8F3]/60 max-w-xs mt-1.5 leading-relaxed">
                  Experiential facility &amp; architectural gallery video will be featured here.
                </p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-xs p-3.5 border border-white/10 text-left">
                <p className="text-[0.68rem] font-semibold text-cream tracking-wider uppercase">
                  Facility In Progress · Kishangarh, Rajasthan
                </p>
                <p className="text-[0.65rem] text-cream/70 mt-0.5">
                  Walkthrough video currently in production. Direct project consultations available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

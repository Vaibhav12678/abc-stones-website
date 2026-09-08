import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import TextDrop from "@/components/ui/TextDrop";
import { SITE_NAME } from "@/lib/constants";
import { groupFirms } from "@/data/groupFirms";
import { getWhatsappLink } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `About ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME} — over 30 years of stone expertise in imported marble, granite, global sourcing, and architectural supply.`,
};

const qualityPillars = [
  {
    title: "Direct Quarry Selection",
    desc: "Rigorous hand-evaluation of individual blocks in premier stone regions, prioritizing veining harmony and structural density.",
  },
  {
    title: "Global Sourcing Network",
    desc: "Longstanding relationships with mountain quarries in Carrara (Italy), Turkey, and renowned granite extraction centers.",
  },
  {
    title: "Slab & Block Availability",
    desc: "Accommodating both finished calibrated slabs for interiors and raw stone blocks for monumental architectural works.",
  },
  {
    title: "Precision Processing",
    desc: "Calibrated gang sawing, multi-stage diamond polishing, honing, and custom dimensional cutting.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        {/* Top-left Back Button */}
        <BackButton />

        {/* Header */}
        <TextDrop className="max-w-3xl mb-12 sm:mb-16">
          <p className="eyebrow text-gold text-[0.75rem] tracking-[0.22em] uppercase font-semibold mb-2">
            Auspicious · Beautiful · Classy
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-medium leading-[1.08]">
            About {SITE_NAME}
          </h1>
          <p className="mt-4 font-serif text-xl sm:text-2xl text-gold italic">
            30+ Years of Stone Expertise
          </p>
          <p className="mt-4 text-sm sm:text-base text-charcoal/75 leading-relaxed">
            Positioning luxury residences, architectural landmarks, and distinguished hospitality spaces
            at the forefront of natural stone excellence.
          </p>
        </TextDrop>

        {/* Story Section */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-charcoal/15 shadow-xl bg-beige">
              <Image
                src="/images/about/story.webp"
                alt={`${SITE_NAME} stone heritage and facility`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <TextDrop className="lg:col-span-6">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium mb-4">
              Our Story
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-4">
              {SITE_NAME} was established with a clear mandate: to make Auspicious, Beautiful,
              and Classy (ABC) natural stone accessible with unwavering integrity, consistency,
              and professional service.
            </p>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed mb-4">
              With over 30 years of deep immersion in the marble and granite industry, our founders
              have witnessed the evolution of natural stone architecture. We understand that stone
              is not merely a decorative surface — it is geological earth art that forms the enduring
              structural soul of a building.
            </p>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
              We collaborate closely with architects, interior designers, commercial developers,
              and discerning private clients, ensuring every chosen slab harmonizes with the spatial vision.
            </p>
          </TextDrop>
        </div>

        {/* Global Sourcing & Stone Selection */}
        <div className="bg-white border border-charcoal/15 p-8 sm:p-12 mb-16 sm:mb-24 shadow-xs">
          <TextDrop className="max-w-2xl mx-auto text-center mb-10">
            <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
              Provenance &amp; Quality
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              Global Sourcing &amp; Selection Approach
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-charcoal/70">
              Every natural stone block begins its journey through strict origin curation.
            </p>
          </TextDrop>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPillars.map((pillar) => (
              <div key={pillar.title} className="border-t-2 border-gold pt-4">
                <h3 className="font-serif text-lg text-charcoal font-medium mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Associate Firms & Mining Network */}
        <div className="mb-16 sm:mb-24">
          <TextDrop className="max-w-2xl mx-auto text-center mb-10">
            <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
              Integrated Infrastructure
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              Our Associate Firms &amp; Quarries
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-charcoal/70">
              Captive mining operations, precision slab factories, and specialized mineral processing across Rajasthan.
            </p>
          </TextDrop>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {groupFirms.map((firm, idx) => (
              <div key={firm.name} className="bg-white border border-charcoal/15 p-6 shadow-xs hover:border-gold transition-colors">
                <span className="text-[0.6rem] tracking-[0.16em] uppercase text-gold font-bold block mb-1">
                  {firm.badge}
                </span>
                <h3 className="font-serif text-base text-charcoal font-semibold mb-1">
                  {firm.name}
                </h3>
                <p className="text-[0.72rem] text-charcoal/60 mb-3">
                  {firm.location}
                </p>
                <p className="text-xs text-charcoal/80 border-t border-charcoal/10 pt-2.5 leading-relaxed">
                  {firm.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions / Appointment & Collection Section */}
        <TextDrop className="bg-white border border-charcoal/15 p-8 sm:p-14 mb-16 sm:mb-20 shadow-xs text-center max-w-3xl mx-auto">
          <p className="eyebrow text-gold text-[0.72rem] tracking-[0.22em] uppercase font-semibold mb-2">
            Direct Stone Consultation
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium mb-4">
            Schedule an Appointment &amp; Explore
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed max-w-lg mx-auto mb-8">
            Connect directly with {SITE_NAME} to discuss your spatial requirements, review slab availability, or arrange personalized architectural consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsappLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              SCHEDULE AN APPOINTMENT
            </a>
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 border border-charcoal/30 hover:border-gold hover:bg-gold/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-all duration-300"
            >
              EXPLORE COLLECTION
              <ArrowRight size={13} className="text-gold" />
            </Link>
          </div>
        </TextDrop>
      </Container>
    </div>
  );
}

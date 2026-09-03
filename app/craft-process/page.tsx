import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import TextDrop from "@/components/ui/TextDrop";
import ProcessTimeline from "@/components/craft/ProcessTimeline";
import { specialServices, capabilities } from "@/data/processes";
import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: `Craft & Process | ${SITE_NAME}`,
  description: `From direct quarry sourcing to project delivery: discover the 6-step natural stone processing journey at ${SITE_NAME}.`,
};

export default function CraftProcessPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        {/* Top-left Back Button */}
        <BackButton />

        {/* Header */}
        <TextDrop className="max-w-3xl mb-12 sm:mb-16">
          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Editorial Storytelling
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-medium leading-[1.08]">
            Craft &amp; Process
          </h1>
          <p className="mt-4 text-sm sm:text-base text-charcoal/75 leading-relaxed">
            Every slab in our collection represents a meticulous six-step progression
            from ancient geological formation to refined architectural centerpiece.
            Here is how natural stone journeys from earth to exceptional space at {SITE_NAME}.
          </p>
        </TextDrop>

        {/* 6 Step Process */}
        <div className="mb-16 sm:mb-24">
          <ProcessTimeline />
        </div>

        {/* Capabilities & Finishing */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 sm:mb-20">
          <div className="bg-white border border-charcoal/15 p-6 sm:p-8 shadow-xs">
            <h2 className="font-serif text-2xl text-charcoal font-medium mb-3">
              Processing &amp; Finishing Capabilities
            </h2>
            <p className="text-xs text-charcoal/70 mb-6 leading-relaxed">
              Applying calibrated surface finishes and dimensional profiling to meet specific project demands.
            </p>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-3 text-xs sm:text-sm text-charcoal/80 pb-2 border-b border-charcoal/5">
                  <Check size={14} className="text-gold shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-charcoal/15 p-6 sm:p-8 shadow-xs">
            <h2 className="font-serif text-2xl text-charcoal font-medium mb-3">
              Specialized Project Services
            </h2>
            <p className="text-xs text-charcoal/70 mb-6 leading-relaxed">
              Dedicated support for architects, interior designers, and commercial builders.
            </p>
            <ul className="space-y-3">
              {specialServices.map((service) => (
                <li key={service} className="flex items-center gap-3 text-xs sm:text-sm text-charcoal/80 pb-2 border-b border-charcoal/5">
                  <Check size={14} className="text-gold shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#11100F] text-[#FAF8F3] p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg">
          <h2 className="font-serif text-2xl sm:text-3xl text-cream font-medium mb-3">
            Discuss Your Custom Project Requirements
          </h2>
          <p className="text-xs sm:text-sm text-beige/70 max-w-md mx-auto mb-6">
            Consult our specialists on custom slab thicknesses, bookmatching layouts, or block allocations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 bg-gold text-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] hover:bg-cream transition-all"
            >
              EXPLORE OUR COLLECTION
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

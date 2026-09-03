"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Phone, MessageCircle, Layers, Box } from "lucide-react";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import Divider from "@/components/ui/Divider";
import StoneCard from "@/components/collection/StoneCard";
import { Stone } from "@/types/stone";
import { getWhatsappLink, getCallLink } from "@/lib/whatsapp";
import { SITE_NAME, PRIMARY_PHONE } from "@/lib/constants";
import { useQuote } from "@/components/ui/QuoteContext";
import { getRelatedStones } from "@/data/stones";

export default function StoneDetails({ stone }: { stone: Stone }) {
  const { openQuote } = useQuote();
  const relatedStones = getRelatedStones(stone, 4);

  return (
    <article className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        {/* Top-left Back Button */}
        <BackButton label="Back to Collection" fallbackHref="/collection" />

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-charcoal/60 uppercase tracking-wider">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href={`/collection?category=${stone.category}`} className="hover:text-gold transition-colors">
            {stone.category}
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">{stone.name}</span>
        </nav>

        {/* Stone Details Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Large Stone Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] w-full bg-white border border-charcoal/15 shadow-md overflow-hidden">
              <Image
                src={stone.image}
                alt={`${stone.name} — natural stone slab from ${SITE_NAME}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {stone.origin && (
                <span className="absolute top-3 left-3 bg-[#FAF8F3]/95 backdrop-blur-xs text-charcoal text-xs tracking-wider uppercase px-3 py-1 font-semibold border border-charcoal/10">
                  Origin: {stone.origin}
                </span>
              )}
              <span className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[0.65rem] tracking-wider uppercase px-3 py-1.5 text-center">
                Representative visual — natural veining and pattern variations occur naturally
              </span>
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="eyebrow text-gold text-xs tracking-[0.2em] uppercase font-semibold">
                {stone.category}
              </span>
              {stone.origin && (
                <>
                  <span className="text-charcoal/30">·</span>
                  <span className="text-xs uppercase tracking-wider text-charcoal/60">
                    {stone.origin}
                  </span>
                </>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium leading-[1.08]">
              {stone.name}
            </h1>

            {/* Slab and Block Availability Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-charcoal/15 text-xs text-charcoal font-medium">
                <Layers size={14} className="text-gold" />
                <span>SLAB AVAILABLE: YES</span>
              </div>
              {stone.category === "marble" ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-charcoal/15 text-xs text-charcoal font-medium">
                  <Box size={14} className="text-gold" />
                  <span>BLOCK AVAILABLE: YES</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-charcoal/15 text-xs text-charcoal/70">
                  <Box size={14} className="text-charcoal/40" />
                  <span>BLOCK: ON REQUEST</span>
                </div>
              )}
            </div>

            {stone.description && (
              <p className="mt-5 text-sm sm:text-base text-charcoal/80 leading-relaxed">
                {stone.description}
              </p>
            )}

            {/* Characteristics Checklist */}
            {stone.characteristics && stone.characteristics.length > 0 && (
              <div className="mt-6 pt-5 border-t border-charcoal/10">
                <h3 className="text-xs uppercase tracking-[0.16em] text-gold font-semibold mb-3">
                  Verified Characteristics
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-charcoal/80">
                  {stone.characteristics.map((char) => (
                    <li key={char} className="flex items-start gap-2">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommended Applications */}
            {stone.applications && stone.applications.length > 0 && (
              <div className="mt-6 pt-5 border-t border-charcoal/10">
                <h3 className="text-xs uppercase tracking-[0.16em] text-gold font-semibold mb-3">
                  Recommended Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stone.applications.map((app) => (
                    <span
                      key={app}
                      className="text-xs bg-white border border-charcoal/15 px-3 py-1 text-charcoal/80"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Direct CTA Section */}
            <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openQuote(stone.name)}
                className="inline-flex items-center justify-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all"
              >
                GET A QUOTE FOR {stone.name.toUpperCase()}
              </button>

              <a
                href={getWhatsappLink(stone.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-charcoal/30 hover:border-gold hover:bg-gold/10 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-all"
              >
                <MessageCircle size={14} className="text-emerald-600" />
                WHATSAPP US
              </a>
            </div>

            <p className="mt-3 text-[0.7rem] text-charcoal/60">
              Official supplier: {SITE_NAME} · Enquiries handled directly by stone specialists.
            </p>
          </div>
        </div>

        {/* Stone FAQs if available */}
        {stone.faqs && stone.faqs.length > 0 && (
          <div className="mt-16 pt-12 border-t border-charcoal/10 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium text-center mb-8">
              Frequently Asked Questions About {stone.name}
            </h2>
            <div className="space-y-4">
              {stone.faqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-charcoal/15 p-5">
                  <h3 className="font-serif text-lg text-charcoal font-medium mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Stones Section */}
        {relatedStones.length > 0 && (
          <div className="mt-16 pt-12 border-t border-charcoal/10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                Related {stone.category.toUpperCase()} Stones
              </h2>
              <Link
                href={`/collection?category=${stone.category}`}
                className="text-xs uppercase tracking-wider text-charcoal hover:text-gold font-semibold"
              >
                View all {stone.category} →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedStones.map((rel) => (
                <StoneCard key={rel.slug} stone={rel} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}

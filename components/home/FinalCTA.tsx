"use client";

import Container from "@/components/ui/Container";
import TextDrop from "@/components/ui/TextDrop";
import { SITE_NAME } from "@/lib/constants";
import { useQuote } from "@/components/ui/QuoteContext";
import { getWhatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const { openQuote } = useQuote();

  return (
    <section className="bg-[#FAF8F3] py-16 sm:py-24">
      <Container>
        <TextDrop className="bg-white border border-charcoal/15 p-8 sm:p-12 lg:p-16 shadow-lg text-center relative overflow-hidden">
          {/* Subtle gold line accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold" />

          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.22em] uppercase font-semibold mb-3">
            Begin Your Stone Journey
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium max-w-2xl mx-auto leading-[1.12]">
            Ready to Bring Natural Stone into Your Next Project?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-charcoal/70 max-w-xl mx-auto leading-relaxed">
            Connect directly with {SITE_NAME}. Whether you need assistance selecting
            the ideal marble variety or require bulk slab specifications for architectural plans,
            our team is here to assist.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => openQuote()}
              className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300"
            >
              GET A QUOTE
            </button>

            <a
              href={getWhatsappLink("quotation")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-charcoal/30 hover:border-gold hover:bg-gold/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-all duration-300"
            >
              <MessageCircle size={14} className="text-emerald-600" />
              WHATSAPP US
            </a>
          </div>
        </TextDrop>
      </Container>
    </section>
  );
}

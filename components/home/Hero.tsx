"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { useQuote } from "@/components/ui/QuoteContext";

export default function Hero() {
  const { openQuote } = useQuote();

  return (
    <section className="relative w-full pt-28 pb-14 sm:pt-36 sm:pb-20 md:py-32 overflow-hidden bg-[#FAF8F3]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-gold" />
              <p className="eyebrow text-gold text-[0.7rem] tracking-[0.22em] uppercase font-semibold">
                Natural Stone Destination
              </p>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-medium leading-[1.08] tracking-tight">
              Premium Marble &amp; Granite
              <br />
              <span className="italic font-normal">for Exceptional Spaces</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal/75 leading-relaxed max-w-lg">
              Premium natural stone sourced for luxury homes, hospitality, architectural
              and commercial projects. Over three decades of stone expertise bringing timeless earth
              art into living architecture.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/collection"
                className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300"
              >
                EXPLORE COLLECTION
                <ArrowRight size={14} className="text-gold" />
              </Link>

              <button
                type="button"
                onClick={() => openQuote()}
                className="inline-flex items-center border border-charcoal/30 bg-white/70 hover:border-gold hover:bg-gold/15 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-all duration-300"
              >
                GET A QUOTE
              </button>
            </div>

            {/* Quick trust strip under buttons */}
            <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-center gap-6 text-[0.72rem] text-charcoal/60 tracking-wider uppercase font-medium">
              <span>30+ Years Experience</span>
              <span className="w-1 h-1 rounded-full bg-gold" />
              <span>Slab &amp; Block</span>
              <span className="w-1 h-1 rounded-full bg-gold" />
              <span>Global Quarries</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] w-full overflow-hidden shadow-xl border border-charcoal/10 group">
              <Image
                src="/images/hero/Background.webp"
                alt="Curated natural stone slab — representative visual"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1800ms] ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="bg-[#FAF8F3]/90 backdrop-blur-sm text-charcoal text-[0.65rem] tracking-[0.16em] uppercase px-3 py-1.5 font-medium border border-charcoal/10">
                  Imported Marble &amp; Granite
                </span>
                <span className="text-[0.65rem] tracking-widest text-[#FAF8F3] uppercase bg-black/40 px-2 py-1 backdrop-blur-xs">
                  Slab &amp; Block Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

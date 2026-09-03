"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StoneCard from "@/components/collection/StoneCard";
import TextDrop from "@/components/ui/TextDrop";
import { marbleStones, graniteStones } from "@/data/stones";
import { StoneCategory } from "@/types/stone";
import { ArrowRight } from "lucide-react";

export default function FeaturedCollection() {
  const [category, setCategory] = useState<StoneCategory>("marble");

  const displayedStones =
    category === "marble"
      ? marbleStones
      : graniteStones.slice(0, 6);

  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-b border-charcoal/10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <TextDrop>
            <p className="eyebrow text-gold text-[0.72rem] tracking-[0.2em] uppercase font-semibold mb-2">
              Curated Stone Selection
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              Wide Range of Indian &amp; Imported Stones
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 max-w-xl leading-relaxed">
              Carefully selected stones sourced from India and leading international markets such as Italy, Turkey, China, and others — giving clients access to a wide variety of colors, patterns, textures, and finishes.
            </p>
          </TextDrop>

          {/* Category Switcher Tabs (Compact Interactive Toggle Button) */}
          <div className="w-fit inline-flex items-center p-1 bg-white border border-charcoal/20 rounded-full shadow-xs self-start md:self-auto">
            <button
              onClick={() => setCategory("marble")}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold tracking-[0.14em] uppercase rounded-full transition-all duration-300 ${
                category === "marble"
                  ? "bg-[#11100F] text-gold shadow-xs"
                  : "text-charcoal/70 hover:text-charcoal"
              }`}
            >
              {category === "marble" && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              )}
              MARBLE
            </button>
            <button
              onClick={() => setCategory("granite")}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold tracking-[0.14em] uppercase rounded-full transition-all duration-300 ${
                category === "granite"
                  ? "bg-[#11100F] text-gold shadow-xs"
                  : "text-charcoal/70 hover:text-charcoal"
              }`}
            >
              {category === "granite" && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              )}
              GRANITE
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Scrolling / Desktop Grid */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {displayedStones.map((stone, i) => (
            <div
              key={stone.slug}
              className="w-[280px] sm:w-auto shrink-0 snap-center"
            >
              <StoneCard stone={stone} index={i} />
            </div>
          ))}
        </div>

        {/* Mobile scroll indicator note */}
        <div className="sm:hidden mt-2 text-center text-[0.68rem] text-charcoal/50 tracking-wider uppercase">
          ← Swipe to explore stones →
        </div>

        {/* Bottom Action */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            href={`/collection?category=${category}`}
            className="inline-flex items-center gap-2 border border-charcoal/30 hover:border-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-all"
          >
            VIEW ALL {category.toUpperCase()} STONES
            <ArrowRight size={13} className="text-gold group-hover:text-charcoal" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

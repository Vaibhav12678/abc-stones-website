"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Stone } from "@/types/stone";
import { getCanonicalStoneUrl } from "@/data/stones";

export default function StoneCard({
  stone,
  priority = false,
}: {
  stone: Stone;
  index?: number;
  priority?: boolean;
}) {
  const url = getCanonicalStoneUrl(stone);

  return (
    <Link
      href={url}
      className="group flex flex-col bg-white border border-charcoal/10 hover:border-gold transition-all duration-300 shadow-xs hover:shadow-md overflow-hidden"
    >
      {/* Stone Image */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full bg-beige overflow-hidden">
        <Image
          src={stone.image}
          alt={`${stone.name} — representative image`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 25vw"
          className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
        />
        {stone.origin && (
          <span className="absolute top-2.5 right-2.5 bg-[#FAF8F3]/90 backdrop-blur-xs text-charcoal text-[0.62rem] tracking-wider uppercase px-2 py-0.5 font-medium border border-charcoal/10">
            {stone.origin}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-[0.65rem] tracking-[0.18em] uppercase text-charcoal/50 mb-1">
            <span>{stone.category}</span>
            {stone.category === "marble" ? (
              <span className="text-gold font-medium">SLAB • BLOCK</span>
            ) : (
              <span>SLAB</span>
            )}
          </div>

          <h3 className="font-serif text-lg sm:text-xl text-charcoal font-medium group-hover:text-gold transition-colors line-clamp-1">
            {stone.name}
          </h3>
        </div>

        <div className="mt-4 pt-3 border-t border-charcoal/5 flex items-center justify-between text-xs font-semibold tracking-[0.14em] uppercase text-charcoal group-hover:text-gold transition-colors">
          <span>View Stone</span>
          <ArrowRight
            size={13}
            className="text-gold group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}

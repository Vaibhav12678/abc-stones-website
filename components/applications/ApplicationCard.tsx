"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ApplicationItem } from "@/types/application";

export default function ApplicationCard({
  item,
}: {
  item: ApplicationItem;
  index?: number;
}) {
  return (
    <Link
      href={`/applications/${item.slug}`}
      className="group relative block overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-charcoal border border-charcoal/10 shadow-xs hover:shadow-md transition-all duration-300"
    >
      <Image
        src={item.image}
        alt={`${item.name} — representative architectural stone application`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
        {item.pairedStoneName && (
          <span className="text-[0.62rem] tracking-[0.16em] uppercase text-gold font-medium mb-1">
            Paired with {item.pairedStoneName}
          </span>
        )}
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl sm:text-2xl text-cream font-medium">
            {item.name}
          </h3>
          <span className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-cream group-hover:bg-gold group-hover:text-charcoal transition-colors">
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

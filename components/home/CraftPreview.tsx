"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import ProcessTimeline from "@/components/craft/ProcessTimeline";
import TextDrop from "@/components/ui/TextDrop";
import { ArrowRight } from "lucide-react";

export default function CraftPreview() {
  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-b border-charcoal/10">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <TextDrop>
            <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
              From Quarry to Architectural Installation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              Craft &amp; Process
            </h2>
          </TextDrop>

          <Link
            href="/craft-process"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal hover:text-gold transition-colors"
          >
            VIEW PROCESS DETAILS
            <ArrowRight size={13} className="text-gold" />
          </Link>
        </div>

        <ProcessTimeline />
      </Container>
    </section>
  );
}

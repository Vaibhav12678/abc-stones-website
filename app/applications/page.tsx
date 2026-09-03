import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import TextDrop from "@/components/ui/TextDrop";
import ApplicationCard from "@/components/applications/ApplicationCard";
import { applications } from "@/data/applications";
import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Architectural Applications | ${SITE_NAME}`,
  description: `Discover how natural marble and granite from ${SITE_NAME} elevate luxury residences, hospitality resorts, and commercial architecture.`,
};

export default function ApplicationsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        {/* Top-left Back Button */}
        <BackButton />

        {/* Header */}
        <TextDrop className="max-w-2xl mb-10 sm:mb-14">
          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Architectural Applications
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium leading-[1.08]">
            Natural Stone for Every Space
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            Explore dedicated architectural applications for imported marble and resilient granite.
            From gourmet kitchen waterfall islands to monolithic cladding and grand foyer flooring.
          </p>
        </TextDrop>

        {/* 13 Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {applications.map((app, index) => (
            <ApplicationCard key={app.slug} item={app} index={index} />
          ))}
        </div>

        {/* Bottom Stone Collection Link */}
        <div className="mt-14 pt-10 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-charcoal/70">
            Have a custom architectural brief or require specialized block sawing?
          </p>
          <Link
            href="/collection"
            className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all"
          >
            EXPLORE THE STONE COLLECTION
            <ArrowRight size={13} className="text-gold" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

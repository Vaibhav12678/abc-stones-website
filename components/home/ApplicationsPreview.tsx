"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ApplicationCard from "@/components/applications/ApplicationCard";
import TextDrop from "@/components/ui/TextDrop";
import { applications } from "@/data/applications";
import { ArrowRight } from "lucide-react";

export default function ApplicationsPreview() {
  const featuredApplications = applications.slice(0, 6);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-slide on mobile screens every 3.5s
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (containerRef.current && window.innerWidth < 640) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % featuredApplications.length;
          const container = containerRef.current;
          if (container) {
            const cards = container.querySelectorAll<HTMLElement>("[data-app-card]");
            if (cards[next]) {
              const card = cards[next];
              const targetLeft =
                card.offsetLeft -
                container.offsetLeft -
                (container.clientWidth - card.clientWidth) / 2;
              container.scrollTo({
                left: Math.max(0, targetLeft),
                behavior: "smooth",
              });
            }
          }
          return next;
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, featuredApplications.length]);

  const handleScroll = () => {
    if (!containerRef.current || window.innerWidth >= 640) return;
    const container = containerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-app-card]");
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      if (Math.abs(containerCenter - cardCenter) < card.clientWidth / 2) {
        setActiveIndex(i);
      }
    });
  };

  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-b border-charcoal/10">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <TextDrop>
            <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
              Architectural Spaces
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              Explore by Application
            </h2>
          </TextDrop>

          <Link
            href="/applications"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal hover:text-gold transition-colors"
          >
            VIEW ALL APPLICATIONS
            <ArrowRight size={13} className="text-gold" />
          </Link>
        </div>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 4000)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {featuredApplications.map((app, index) => (
            <div
              key={app.slug}
              data-app-card
              className="w-[280px] sm:w-auto shrink-0 snap-center"
            >
              <ApplicationCard item={app} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="sm:hidden mt-4 flex items-center justify-center gap-2">
          {featuredApplications.map((app, idx) => (
            <span
              key={app.slug}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-charcoal/25"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

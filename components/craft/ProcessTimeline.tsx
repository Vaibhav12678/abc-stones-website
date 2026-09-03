"use client";

import { useState, useEffect, useRef } from "react";
import { processes } from "@/data/processes";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-swipe effect: advances box by box every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % processes.length;
        scrollToIndex(next);
        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-process-card]");
    if (cards[index]) {
      const card = cards[index];
      const targetLeft = card.offsetLeft - container.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
    }
  };

  const handleManualNav = (direction: "prev" | "next") => {
    setActiveIndex((prev) => {
      let next = direction === "next" ? prev + 1 : prev - 1;
      if (next < 0) next = processes.length - 1;
      if (next >= processes.length) next = 0;
      scrollToIndex(next);
      return next;
    });
  };

  // Sync activeIndex on manual scroll/swipe
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>("[data-process-card]");
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      if (Math.abs(containerCenter - cardCenter) < card.clientWidth / 2) {
        setActiveIndex(i);
      }
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        // Resume auto-swipe after 4 seconds of idle
        setTimeout(() => setIsPaused(false), 4000);
      }}
    >
      {/* Scrollable Box-by-Box Carousel */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {processes.map((step, idx) => (
          <div
            key={step.number}
            data-process-card
            className={`w-[85vw] sm:w-[340px] md:w-[380px] shrink-0 snap-center bg-white border p-6 sm:p-8 transition-all duration-400 shadow-xs hover:shadow-md flex flex-col justify-between ${
              activeIndex === idx
                ? "border-gold ring-1 ring-gold/40"
                : "border-charcoal/10 hover:border-charcoal/30"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-gold">
                  {step.number}
                </span>
                <span className="text-[0.62rem] tracking-[0.2em] uppercase text-charcoal/50 font-semibold bg-[#FAF8F3] px-2.5 py-1 border border-charcoal/10">
                  STEP {idx + 1} OF 6
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
                {step.title}
              </h3>
              <p className="text-xs text-gold font-semibold uppercase tracking-wider mt-0.5 mb-3">
                {step.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal/10 flex items-center justify-between text-[0.68rem] text-charcoal/50 uppercase tracking-wider">
              <span>{idx === 5 ? "Delivery & Support" : "Quality Standard"}</span>
              <span className="text-gold font-semibold">0{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls & Indicators */}
      <div className="mt-6 flex items-center justify-between">
        {/* Step Indicator Dots */}
        <div className="flex items-center gap-2">
          {processes.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => {
                setActiveIndex(idx);
                scrollToIndex(idx);
              }}
              aria-label={`Go to step ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? "w-7 h-2 bg-gold"
                  : "w-2 h-2 bg-charcoal/20 hover:bg-charcoal/40"
              }`}
            />
          ))}
        </div>

        {/* Previous / Next Arrow Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleManualNav("prev")}
            aria-label="Previous step"
            className="w-9 h-9 border border-charcoal/20 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-charcoal transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => handleManualNav("next")}
            aria-label="Next step"
            className="w-9 h-9 border border-charcoal/20 hover:border-gold hover:bg-gold/10 flex items-center justify-center text-charcoal transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

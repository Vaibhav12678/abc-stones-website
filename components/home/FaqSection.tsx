"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import TextDrop from "@/components/ui/TextDrop";
import { generalFaqs } from "@/data/faq";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-b border-charcoal/10">
      <Container>
        <div className="max-w-3xl mx-auto">
          <TextDrop className="text-center mb-10">
            <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70">
              Clear, transparent answers about natural stone specification, sourcing, and care.
            </p>
          </TextDrop>

          <div className="space-y-3">
            {generalFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="border border-charcoal/15 bg-white transition-colors duration-200"
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                  >
                    <span className="font-serif text-base sm:text-lg text-charcoal font-medium">
                      {faq.question}
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-charcoal/60 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-gold" : ""
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-charcoal/75 leading-relaxed border-t border-charcoal/5 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

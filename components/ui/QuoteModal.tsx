"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Phone, MessageSquare } from "lucide-react";
import { useQuote } from "./QuoteContext";
import { getWhatsappLink } from "@/lib/whatsapp";
import { SITE_NAME, PRIMARY_PHONE } from "@/lib/constants";

export default function QuoteModal() {
  const { isOpen, prefillStone, closeQuote } = useQuote();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [stone, setStone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStone(prefillStone || "");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, prefillStone]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = getWhatsappLink({
      stoneName: stone || "Natural Stone Collection",
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim() || undefined,
    });
    window.open(link, "_blank", "noopener,noreferrer");
    closeQuote();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-charcoal/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F3] border border-charcoal/15 shadow-2xl p-6 sm:p-8 text-charcoal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeQuote}
          aria-label="Close quote modal"
          className="absolute top-5 right-5 p-2 text-charcoal/60 hover:text-charcoal hover:bg-black/5 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mb-6">
          <p className="eyebrow mb-1">Enquiry &amp; Quotation</p>
          <h2 id="quote-modal-title" className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
            Get a Quote
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-charcoal/70">
            {SITE_NAME} · Speak directly with our natural stone specialists.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quote-name" className="block text-[0.7rem] uppercase tracking-wider text-charcoal/70 mb-1">
              Your Name *
            </label>
            <input
              id="quote-name"
              type="text"
              required
              placeholder="e.g. Rajesh Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-gold transition-colors"
            />
          </div>

          <div>
            <label htmlFor="quote-phone" className="block text-[0.7rem] uppercase tracking-wider text-charcoal/70 mb-1">
              Phone Number *
            </label>
            <input
              id="quote-phone"
              type="tel"
              required
              placeholder="e.g. +91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-gold transition-colors"
            />
          </div>

          <div>
            <label htmlFor="quote-stone" className="block text-[0.7rem] uppercase tracking-wider text-charcoal/70 mb-1">
              Interested Stone
            </label>
            <input
              id="quote-stone"
              type="text"
              placeholder="e.g. Statuario Marble, Calacatta Gold, Black Pearl"
              value={stone}
              onChange={(e) => setStone(e.target.value)}
              className="w-full bg-white border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-gold transition-colors"
            />
          </div>

          <div>
            <label htmlFor="quote-message" className="block text-[0.7rem] uppercase tracking-wider text-charcoal/70 mb-1">
              Project Details or Message
            </label>
            <textarea
              id="quote-message"
              rows={3}
              placeholder="Approximate area (sq. ft.), application (flooring, kitchen, cladding), or specific slab requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white border border-charcoal/20 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-gold transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300"
            >
              <Send size={14} />
              Submit via WhatsApp
            </button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-charcoal/10 flex items-center justify-between text-xs text-charcoal/60">
          <span>Prefer a phone call?</span>
          <a
            href={`tel:${PRIMARY_PHONE.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center gap-1.5 font-semibold text-charcoal hover:text-gold transition-colors"
          >
            <Phone size={12} />
            {PRIMARY_PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

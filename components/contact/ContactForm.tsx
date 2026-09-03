"use client";

import { useState } from "react";
import { getWhatsappLink } from "@/lib/whatsapp";
import { SITE_NAME } from "@/lib/constants";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [stone, setStone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsappLink({
      stoneName: stone || "Natural Stone Collection",
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim() || undefined,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-charcoal/15 text-charcoal p-6 sm:p-10 shadow-sm"
    >
      <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
        Send an Enquiry
      </p>
      <h2 className="font-serif text-2xl text-charcoal font-medium mb-6">
        Request Information or Quotation
      </h2>

      <div className="space-y-4 text-xs sm:text-sm">
        <div>
          <label htmlFor="contact-name" className="block uppercase tracking-wider text-charcoal/70 text-xs mb-1">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g. Rajesh Sharma"
            className="w-full border border-charcoal/20 bg-white py-2.5 px-3.5 outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block uppercase tracking-wider text-charcoal/70 text-xs mb-1">
            Phone Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="e.g. +91 98765 43210"
            className="w-full border border-charcoal/20 bg-white py-2.5 px-3.5 outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-stone" className="block uppercase tracking-wider text-charcoal/70 text-xs mb-1">
            Interested Stone (Optional)
          </label>
          <input
            id="contact-stone"
            type="text"
            value={stone}
            onChange={(e) => setStone(e.target.value)}
            placeholder="e.g. Statuario Marble, Calacatta Gold, Black Pearl"
            className="w-full border border-charcoal/20 bg-white py-2.5 px-3.5 outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block uppercase tracking-wider text-charcoal/70 text-xs mb-1">
            Project Message / Specifications
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please share requirements such as area (sq. ft.), application, thickness, or custom sawing..."
            className="w-full border border-charcoal/20 bg-white py-2.5 px-3.5 outline-none focus:border-gold transition-colors resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal py-3.5 text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300"
      >
        <Send size={14} />
        Send Enquiry via WhatsApp
      </button>

      <p className="mt-4 text-[0.7rem] text-charcoal/60 leading-relaxed text-center">
        This opens WhatsApp with your pre-filled inquiry directly to {SITE_NAME}.
      </p>
    </form>
  );
}

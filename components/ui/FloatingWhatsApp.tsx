"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsappLink } from "@/lib/whatsapp";
import { SITE_NAME } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsappLink("general");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE_NAME} on WhatsApp`}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20"
      style={{ touchAction: "manipulation" }}
    >
      <span className="sr-only">WhatsApp Chat</span>
      <MessageCircle size={28} className="fill-white stroke-[#25D366]" />
      
      {/* Subtle pulse ring */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none -z-10" />

      {/* Tooltip on hover for desktop */}
      <span className="absolute right-full mr-3 hidden md:group-hover:inline-block whitespace-nowrap bg-charcoal text-cream text-[0.7rem] uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-md pointer-events-none transition-opacity">
        WhatsApp Enquiry
      </span>
    </a>
  );
}

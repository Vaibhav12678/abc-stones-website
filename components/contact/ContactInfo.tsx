import { Phone, MapPin, MessageCircle, Mail, Instagram } from "lucide-react";
import { PHONE_NUMBERS, ADDRESS_LINES, SITE_NAME, PRIMARY_PHONE, PRIMARY_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/constants";
import { getCallLink, getWhatsappLink } from "@/lib/whatsapp";
import Divider from "@/components/ui/Divider";

export default function ContactInfo() {
  return (
    <div>
      <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
        Get in Touch
      </p>
      <h1 className="font-serif text-3xl sm:text-5xl text-charcoal leading-[1.08] font-medium">
        Contact {SITE_NAME}
      </h1>
      <p className="mt-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed max-w-md">
        Reach out directly for stone inquiries, custom quotations, or to schedule a visit to our Kishangarh facility.
      </p>

      <Divider className="my-8 opacity-30" />

      <div className="space-y-6 text-xs sm:text-sm">
        <div className="flex items-start gap-3.5">
          <Phone size={18} className="text-gold mt-1 shrink-0" />
          <div>
            <strong className="text-charcoal block mb-1 font-semibold uppercase tracking-wider text-xs">
              Telephone Enquiries
            </strong>
            <div className="space-y-1">
              {PHONE_NUMBERS.map((n) => (
                <a
                  key={n}
                  href={getCallLink(n)}
                  className="block text-charcoal/80 hover:text-gold transition-colors font-medium"
                >
                  {n}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <MessageCircle size={18} className="text-emerald-600 mt-1 shrink-0" />
          <div>
            <strong className="text-charcoal block mb-1 font-semibold uppercase tracking-wider text-xs">
              WhatsApp Support
            </strong>
            <a
              href={getWhatsappLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/80 hover:text-gold transition-colors"
            >
              Direct Chat ({PRIMARY_PHONE})
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <Mail size={18} className="text-red-500 mt-1 shrink-0" />
          <div>
            <strong className="text-charcoal block mb-1 font-semibold uppercase tracking-wider text-xs">
              Email Correspondence
            </strong>
            <a
              href={`mailto:${PRIMARY_EMAIL}`}
              className="text-charcoal/80 hover:text-gold transition-colors font-medium"
            >
              {PRIMARY_EMAIL}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <Instagram size={18} className="text-pink-500 mt-1 shrink-0" />
          <div>
            <strong className="text-charcoal block mb-1 font-semibold uppercase tracking-wider text-xs">
              Instagram
            </strong>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/80 hover:text-gold transition-colors font-medium"
            >
              @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <MapPin size={18} className="text-gold mt-1 shrink-0" />
          <div>
            <strong className="text-charcoal block mb-1 font-semibold uppercase tracking-wider text-xs">
              Kishangarh Facility
            </strong>
            <p className="text-charcoal/80 leading-relaxed">
              {ADDRESS_LINES.join(" ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

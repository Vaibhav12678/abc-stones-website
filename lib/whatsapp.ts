import { SITE_NAME, WHATSAPP_NUMBER, PRIMARY_PHONE } from "./constants";

export interface EnquiryPayload {
  stoneName?: string;
  name?: string;
  phone?: string;
  message?: string;
}

export function buildWhatsAppMessage(payload?: EnquiryPayload | string): string {
  if (typeof payload === "string") {
    return `Hello ${SITE_NAME}\n\nI am interested in ${payload}.`;
  }

  const stone = payload?.stoneName ? `I am interested in ${payload.stoneName}.` : "I am interested in your natural stone collection.";
  const parts: string[] = [`Hello ${SITE_NAME}`, "", stone];

  if (payload?.name) {
    parts.push(`Name: ${payload.name}`);
  }
  if (payload?.phone) {
    parts.push(`Phone: ${payload.phone}`);
  }
  if (payload?.message) {
    parts.push(`Message: ${payload.message}`);
  }

  return parts.join("\n");
}

export function getWhatsappLink(payload?: EnquiryPayload | string) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");
  const message = buildWhatsAppMessage(payload);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getCallLink(phone: string = PRIMARY_PHONE) {
  const clean = phone.replace(/[^0-9+]/g, "");
  return `tel:${clean}`;
}

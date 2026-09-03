"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { NAV_LINKS, PRIMARY_PHONE } from "@/lib/constants";
import { getCallLink, getWhatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const popularStones = [
  { name: "Statuario Marble", href: "/collection/marble/statuario-marble" },
  { name: "Calacatta Gold Marble", href: "/collection/marble/calacatta-gold-marble" },
  { name: "Carrara White Marble", href: "/collection/marble/carrara-white-marble" },
  { name: "Silver Grey Marble", href: "/collection/marble/silver-grey-marble" },
  { name: "Bhaswara White", href: "/collection/marble/bhaswara-white" },
  { name: "Black Pearl", href: "/collection/granite/black-pearl" },
  { name: "Alaska White", href: "/collection/granite/alaska-white" },
  { name: "Black Markino", href: "/collection/granite/black-markino" },
  { name: "Khalda Red", href: "/collection/granite/khalda-red" },
  { name: "S. White", href: "/collection/granite/s-white" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[110] bg-[#FAF8F3] text-charcoal flex flex-col lg:hidden overflow-y-auto"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {/* Header without company name */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-charcoal/10 bg-[#FAF8F3] sticky top-0 z-10">
            <div className="relative w-8 h-8">
              <Image
                src="/logo/logo.png"
                alt="Emblem"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="p-2 text-charcoal hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-5 py-5 flex-1 flex flex-col justify-between">
            {/* Main Navigation (Only 5 links) */}
            <nav className="flex flex-col border-b border-charcoal/10 pb-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-2.5 font-serif text-2xl tracking-wide transition-colors flex items-center justify-between",
                    pathname === link.href ? "text-gold font-medium" : "text-charcoal hover:text-gold"
                  )}
                >
                  <span>{link.label}</span>
                  {pathname === link.href && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                </Link>
              ))}
            </nav>

            {/* Popular Stones */}
            <div className="py-5 border-b border-charcoal/10">
              <p className="eyebrow text-[0.65rem] tracking-[0.2em] mb-3 text-gold">
                POPULAR STONES
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                {popularStones.map((stone) => (
                  <Link
                    key={stone.href}
                    href={stone.href}
                    className="text-xs text-charcoal/80 hover:text-gold py-1 flex items-center justify-between group transition-colors"
                  >
                    <span className="truncate pr-1">{stone.name}</span>
                    <span className="text-gold text-[0.7rem] group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-3 pt-2">
                <Link
                  href="/collection"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase text-charcoal hover:text-gold transition-colors"
                >
                  VIEW ALL STONES
                  <ArrowRight size={13} className="text-gold" />
                </Link>
              </div>
            </div>

            {/* Contact Action Buttons */}
            <div className="pt-5 grid grid-cols-2 gap-3">
              <a
                href={getCallLink(PRIMARY_PHONE)}
                className="flex items-center justify-center gap-2 border border-charcoal/30 hover:border-gold py-3 px-3 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-charcoal hover:bg-gold transition-all"
              >
                <Phone size={13} className="text-gold" />
                CALL US
              </a>
              <a
                href={getWhatsappLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#11100F] hover:bg-gold text-[#FAF8F3] hover:text-charcoal py-3 px-3 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-all"
              >
                <MessageCircle size={14} className="text-emerald-400" />
                WHATSAPP US
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

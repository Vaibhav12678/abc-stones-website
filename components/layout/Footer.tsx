import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import { SITE_NAME, PHONE_NUMBERS, ADDRESS_LINES, PRIMARY_PHONE, PRIMARY_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, GOOGLE_MAPS_LINK } from "@/lib/constants";
import { getCallLink, getWhatsappLink } from "@/lib/whatsapp";
import { ArrowRight, Phone, MessageCircle, Mail, Instagram, Navigation } from "lucide-react";

const footerPopularStones = [
  { name: "Statuario Marble", href: "/collection/marble/statuario-marble" },
  { name: "Calacatta Gold", href: "/collection/marble/calacatta-gold-marble" },
  { name: "Carrara White", href: "/collection/marble/carrara-white-marble" },
  { name: "Silver Grey", href: "/collection/marble/silver-grey-marble" },
  { name: "Black Pearl", href: "/collection/granite/black-pearl" },
  { name: "Alaska White", href: "/collection/granite/alaska-white" },
  { name: "Black Markino", href: "/collection/granite/black-markino" },
  { name: "Khalda Red", href: "/collection/granite/khalda-red" },
];

export default function Footer() {
  return (
    <footer className="bg-[#11100F] text-[#FAF8F3] pt-16 pb-10 border-t border-gold/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-4 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo/logo.png"
                  alt={SITE_NAME}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight justify-center">
                <span className="font-serif text-sm sm:text-base text-cream tracking-wide block group-hover:text-gold transition-colors font-semibold">
                  ABC <span className="text-gold font-bold">STONES</span> INDIA PVT. LTD.
                </span>
                <span className="text-[0.48rem] sm:text-[0.52rem] tracking-[0.24em] text-gold uppercase mt-1 font-medium">
                  Premium Natural Stone
                </span>
              </div>
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-beige/70 max-w-sm leading-relaxed">
              Curating <strong className="text-cream font-medium">Auspicious, Beautiful and Classy (ABC)</strong> natural stone for luxury residences,
              architectural landmarks, and prestigious commercial spaces.
            </p>
            <p className="mt-3 text-[0.68rem] tracking-[0.16em] uppercase text-gold font-medium">
              Auspicious · Beautiful · Classy · 30+ Years Experience
            </p>
          </div>

          {/* Popular Stones */}
          <div>
            <p className="eyebrow mb-4 text-gold text-[0.68rem] tracking-[0.2em]">POPULAR STONES</p>
            <ul className="space-y-2">
              {footerPopularStones.map((stone) => (
                <li key={stone.href}>
                  <Link
                    href={stone.href}
                    className="text-xs text-beige/75 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{stone.name}</span>
                    <span className="text-gold text-[0.65rem] group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/collection"
                  className="text-xs font-semibold tracking-wider text-gold hover:text-cream transition-colors inline-flex items-center gap-1"
                >
                  VIEW ALL STONES →
                </Link>
              </li>
            </ul>
          </div>

          {/* Collection & Company */}
          <div>
            <p className="eyebrow mb-4 text-gold text-[0.68rem] tracking-[0.2em]">COLLECTION</p>
            <ul className="space-y-2 mb-6 text-xs text-beige/75">
              <li>
                <Link href="/collection?category=marble" className="hover:text-gold transition-colors">
                  Marble
                </Link>
              </li>
              <li>
                <Link href="/collection?category=granite" className="hover:text-gold transition-colors">
                  Granite
                </Link>
              </li>
            </ul>

            <p className="eyebrow mb-4 text-gold text-[0.68rem] tracking-[0.2em]">COMPANY</p>
            <ul className="space-y-2 text-xs text-beige/75">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/craft-process" className="hover:text-gold transition-colors">
                  Craft &amp; Process
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-gold transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Stone Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <p className="eyebrow mb-4 text-gold text-[0.68rem] tracking-[0.2em]">CONTACT</p>
            <ul className="space-y-2.5 text-xs text-beige/75">
              <li>
                <a
                  href={getCallLink(PRIMARY_PHONE)}
                  className="hover:text-gold transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-all">
                    <Phone size={10} />
                  </span>
                  <span>Call: {PRIMARY_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsappLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <MessageCircle size={10} />
                  </span>
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="hover:text-gold transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center text-red-400 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                    <Mail size={10} />
                  </span>
                  <span>{PRIMARY_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 flex items-center justify-center text-pink-400 shrink-0 group-hover:bg-pink-500 group-hover:text-white transition-all">
                    <Instagram size={10} />
                  </span>
                  <span>@{INSTAGRAM_HANDLE}</span>
                </a>
              </li>
              <li className="pt-2.5 text-beige/60 leading-relaxed text-[0.7rem] border-t border-cream/10 mt-2">
                <div className="mb-2.5">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/40 text-gold hover:bg-gold hover:text-charcoal text-[0.65rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 group mt-1"
                >
                  <Navigation size={11} className="text-gold group-hover:text-charcoal transition-colors" />
                  <span>Get Directions</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Associate Firms & Mining Network Bar */}
        <div className="border-t border-cream/10 pt-8 pb-2">
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold font-semibold mb-3">
            Our Associate Firms &amp; Mining Network
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-beige/70">
            <div>
              <span className="text-cream font-medium block">ABC STONEX</span>
              <span className="text-[0.68rem] text-beige/50">Kishangarh · Granite Slabs &amp; Tiles</span>
            </div>
            <div>
              <span className="text-cream font-medium block">ROOP RAJAT GRANITE</span>
              <span className="text-[0.68rem] text-beige/50">Malpura, Tonk · Pearl Black Quarry</span>
            </div>
            <div>
              <span className="text-cream font-medium block">SHREE VEER TEJA GRANITE</span>
              <span className="text-[0.68rem] text-beige/50">Pali · P. White Granite Quarry</span>
            </div>
            <div>
              <span className="text-cream font-medium block">ABC Micron</span>
              <span className="text-[0.68rem] text-beige/50">Makrana · Pure Marble Powder</span>
            </div>
          </div>
        </div>

        <Divider className="opacity-20 my-6" />

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige/50">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gold transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-gold transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

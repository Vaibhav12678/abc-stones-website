"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import { useQuote } from "@/components/ui/QuoteContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-premium",
          scrolled
            ? "bg-[#FAF8F3]/95 backdrop-blur-md border-b border-charcoal/10 py-3 shadow-sm"
            : "bg-[#FAF8F3]/80 backdrop-blur-sm border-b border-charcoal/5 py-3.5 sm:py-4"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group">
            <div className="relative h-10 w-[55px] sm:h-12 sm:w-[66px] shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo/logo.png"
                alt={SITE_NAME}
                fill
                sizes="(max-width: 640px) 55px, 66px"
                className="object-contain object-center"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center self-center pt-1 sm:pt-0.5">
              <span className="font-serif text-[0.72rem] sm:text-xs md:text-sm font-semibold tracking-wider text-charcoal leading-snug transition-colors duration-300">
                ABC <span className="text-gold font-bold">STONES</span> INDIA PVT. LTD.
              </span>
              <span className="text-[0.42rem] sm:text-[0.5rem] tracking-[0.22em] text-gold uppercase font-medium leading-none mt-0.5">
                Premium Natural Stone
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative text-[0.72rem] font-semibold tracking-[0.14em] uppercase py-1 transition-colors duration-300",
                    active ? "text-gold font-bold" : "text-charcoal/80 hover:text-gold"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ease-premium",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => openQuote()}
              className="hidden sm:inline-flex items-center border border-charcoal/30 bg-transparent px-4 py-2 text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-charcoal hover:border-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Get a Quote
            </button>

            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-1.5 text-charcoal hover:text-gold transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

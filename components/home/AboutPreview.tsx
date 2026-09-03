"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import TextDrop from "@/components/ui/TextDrop";
import { SITE_NAME } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-b border-charcoal/10">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden border border-charcoal/10 shadow-xl">
              <Image
                src="/images/about/showroom-facade.jpg"
                alt={`${SITE_NAME} — architectural facility and stone expertise`}
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-6 sm:-right-4 bg-[#11100F] text-[#FAF8F3] p-4 sm:p-6 shadow-xl border-l-2 border-gold max-w-[200px] sm:max-w-xs">
              <span className="font-serif text-3xl sm:text-4xl text-gold font-semibold block leading-none">
                30+
              </span>
              <span className="text-[0.65rem] sm:text-xs tracking-[0.16em] uppercase text-cream/90 mt-1 block">
                Years of Stone Expertise
              </span>
            </div>
          </div>

          {/* Editorial Content */}
          <TextDrop className="lg:col-span-6 flex flex-col justify-center">
            <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
              Auspicious · Beautiful · Classy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium leading-[1.1]">
              About {SITE_NAME}
            </h2>

            <p className="mt-5 text-sm sm:text-base text-charcoal/75 leading-relaxed">
              {SITE_NAME} was founded on a foundational ethos: to make <strong>Auspicious, Beautiful, and Classy (ABC)</strong> natural stone
              accessible to architects, interior designers, and luxury homeowners with genuine trust and professional integrity.
              With over 30 years of industry experience, our expertise connects world-renowned quarries directly to exceptional architectural spaces.
            </p>

            <p className="mt-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              From hand-selecting Italian marble in Carrara to curating structural granites,
              we focus on structural soundness, aesthetic veining, and reliable project delivery.
              Our state-of-the-art factory and experiential showroom are currently under development
              in Kishangarh, Rajasthan, to further elevate your stone selection experience.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-all"
              >
                READ OUR FULL STORY
                <ArrowRight size={13} className="text-gold" />
              </Link>
            </div>
          </TextDrop>
        </div>
      </Container>
    </section>
  );
}

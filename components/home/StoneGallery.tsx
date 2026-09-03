import Link from "next/link";
import Container from "@/components/ui/Container";
import TextDrop from "@/components/ui/TextDrop";
import { ArrowRight, Sparkles } from "lucide-react";

export default function StoneGallery() {
  return (
    <section className="bg-[#FAF8F3] py-14 sm:py-20 border-b border-charcoal/10">
      <Container>
        <TextDrop className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="eyebrow text-gold text-[0.7rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Inspirational Architecture
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
            Stone Visual Gallery
          </h2>
        </TextDrop>

        {/* Gallery Coming Soon Container */}
        <TextDrop delay={0.1} className="max-w-3xl mx-auto bg-white border border-charcoal/15 p-10 sm:p-16 text-center shadow-xs">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold mb-5">
            <Sparkles size={22} />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-medium tracking-tight">
            GALLERY COMING SOON
          </h3>

          <p className="mt-4 text-xs sm:text-sm text-charcoal/70 max-w-lg mx-auto leading-relaxed">
            High-resolution architectural photography, bookmatched slab displays, and on-site project installations are currently being curated for our upcoming gallery showcase.
          </p>

          <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 bg-[#11100F] text-[#FAF8F3] hover:bg-gold hover:text-charcoal px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300"
            >
              EXPLORE OUR STONE COLLECTION
              <ArrowRight size={13} className="text-gold" />
            </Link>
          </div>
        </TextDrop>
      </Container>
    </section>
  );
}

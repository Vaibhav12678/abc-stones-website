import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Story() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="eyebrow mb-4">Our Story</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal leading-[1.08] font-medium">
            Making Auspicious, Beautiful
            <br />&amp; Classy Stone Accessible
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed max-w-lg">
            ABC STONES INDIA PVT. LTD. was founded with the vision of making
            Auspicious, Beautiful and Classy (ABC) Stones available with
            trust, consistency and professional service. The company focuses
            on sourcing, selection, processing, finishing and delivering
            natural stone solutions.
          </p>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden border border-charcoal/15 shadow-xl bg-beige">
          <Image
            src="/images/about/showroom-facade.jpg"
            alt="ABC STONES INDIA PVT. LTD. — architectural facility"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

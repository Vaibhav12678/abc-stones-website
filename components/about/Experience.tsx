import Container from "@/components/ui/Container";

export default function Experience() {
  return (
    <section className="bg-white border-y border-charcoal/10 py-16 sm:py-24">
      <Container className="text-center">
        <span className="font-serif text-6xl sm:text-8xl text-gold font-medium block">
          30+
        </span>
        <p className="mt-3 eyebrow text-gold text-xs tracking-[0.2em] uppercase font-semibold">
          Years of Industry Experience
        </p>
        <p className="mt-4 max-w-xl mx-auto text-xs sm:text-sm text-charcoal/75 leading-relaxed">
          Three decades in the marble and granite industry, shaping how we
          source, evaluate, process, and deliver natural stone for exceptional architectural spaces.
        </p>
      </Container>
    </section>
  );
}

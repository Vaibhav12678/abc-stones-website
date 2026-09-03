import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";

const lines = ["Build with quality.", "Grow with trust.", "Create a lasting legacy."];

export default function Vision() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container className="max-w-3xl mx-auto text-center">
        <p className="eyebrow mb-6">Our Vision</p>
        <Divider className="w-16 mx-auto mb-10" />
        <div className="space-y-3">
          {lines.map((line) => (
            <p key={line} className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
              {line}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

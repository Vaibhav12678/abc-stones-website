"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  "30+ Years of Industry Experience",
  "Wide Range of Indian & Imported Stones",
  "Quality You Can Trust",
  "In-House Processing & Finishing",
  "Customized Solutions",
  "Transparency & Reliability",
  "Experience Meets Modern Approach",
];

export default function TrustStats() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose ABC STONES INDIA PVT. LTD."
          title="Built on Trust and Experience"
          align="center"
          className="mx-auto mb-14"
        />
        <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-x-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex items-center gap-3 py-3.5 border-b border-charcoal/10"
            >
              <Check size={15} className="text-gold shrink-0" strokeWidth={2.5} />
              <span className="text-charcoal/85">{reason}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

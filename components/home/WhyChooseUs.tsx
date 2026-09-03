"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const reasons = [
  "30+ Years of Industry Experience",
  "Wide Range of Indian & Imported Stones",
  "Quality You Can Trust",
  "In-House Processing & Finishing",
  "Customized Solutions",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={
              <>
                Experience Meets
                <br />a Modern Approach
              </>
            }
            description="Three decades of stone industry experience, applied to every project we take on."
          />

          <div className="space-y-1">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-4 py-4 border-b border-charcoal/10"
              >
                <Check size={16} className="text-gold shrink-0" strokeWidth={2.5} />
                <span className="text-base sm:text-lg text-charcoal">{reason}</span>
              </motion.div>
            ))}
            <div className="pt-8">
              <Button href="/about" variant="outline-dark" showArrow>
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

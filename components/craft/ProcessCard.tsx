"use client";

import { motion } from "framer-motion";
import { ProcessStep } from "@/data/processes";

export default function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 4) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-gold/20 pt-6"
    >
      <span className="font-serif text-3xl text-gold">{step.number}</span>
      <h3 className="mt-3 font-serif text-2xl text-cream">{step.title}</h3>
      <p className="mt-2 text-sm text-beige/60 leading-relaxed">{step.description}</p>
    </motion.div>
  );
}

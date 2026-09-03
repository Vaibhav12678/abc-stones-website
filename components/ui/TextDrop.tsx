"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextDropProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function TextDrop({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  y = -45,
}: TextDropProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

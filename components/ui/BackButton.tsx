"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  fallbackHref?: string;
  className?: string;
}

export default function BackButton({
  label = "Back",
  fallbackHref = "/",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/70 hover:text-gold transition-colors mb-6 group cursor-pointer ${className}`}
      aria-label={label}
    >
      <ArrowLeft
        size={14}
        className="text-gold transition-transform duration-300 group-hover:-translate-x-1"
      />
      <span>{label}</span>
    </button>
  );
}

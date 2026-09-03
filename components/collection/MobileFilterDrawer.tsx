"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { StoneFilters, defaultFilters } from "@/lib/filters";
import FilterFields from "./FilterFields";

export default function MobileFilterDrawer({
  open,
  onClose,
  filters,
  setFilters,
}: {
  open: boolean;
  onClose: () => void;
  filters: StoneFilters;
  setFilters: (f: StoneFilters) => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[110] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-cream overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/10 sticky top-0 bg-cream z-10">
              <span className="eyebrow">Filters</span>
              <button aria-label="Close filters" onClick={onClose}>
                <X size={22} />
              </button>
            </div>

            <div className="px-6">
              <FilterFields filters={filters} setFilters={setFilters} />
            </div>

            <div className="sticky bottom-0 bg-cream border-t border-charcoal/10 p-4 flex gap-3">
              <button
                onClick={() => setFilters(defaultFilters(filters.category))}
                className="flex-1 border border-charcoal/25 py-3 text-xs font-semibold tracking-[0.14em] uppercase"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gold text-charcoal py-3 text-xs font-semibold tracking-[0.14em] uppercase"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

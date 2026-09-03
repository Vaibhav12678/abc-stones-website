"use client";

import { SlidersHorizontal } from "lucide-react";
import { SortOption } from "@/lib/filters";

export default function FilterBar({
  count,
  sort,
  setSort,
  onOpenMobileFilters,
}: {
  count: number;
  sort: SortOption;
  setSort: (s: SortOption) => void;
  onOpenMobileFilters: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 pb-8 border-b border-charcoal/10 mb-8">
      <button
        onClick={onOpenMobileFilters}
        className="lg:hidden inline-flex items-center gap-2 border border-charcoal/25 px-4 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase"
      >
        <SlidersHorizontal size={14} />
        Filters
      </button>

      <p className="text-sm text-charcoal/60">
        <span className="text-charcoal font-semibold">{count}</span> {count === 1 ? "Stone" : "Stones"}
      </p>

      <div className="flex items-center gap-2 ml-auto">
        <label htmlFor="sort" className="text-xs text-charcoal/50 tracking-[0.1em] uppercase hidden sm:inline">
          Sort:
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="bg-transparent border border-charcoal/20 text-xs font-semibold tracking-[0.1em] uppercase py-2 px-3 outline-none focus:border-gold"
        >
          <option value="featured">Featured</option>
          <option value="az">A–Z</option>
          <option value="za">Z–A</option>
        </select>
      </div>
    </div>
  );
}

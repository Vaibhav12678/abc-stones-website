"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/ui/Container";
import BackButton from "@/components/ui/BackButton";
import TextDrop from "@/components/ui/TextDrop";
import StoneCard from "@/components/collection/StoneCard";
import { stones } from "@/data/stones";
import { StoneCategory, StoneColor } from "@/types/stone";
import { Search, X } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const colorFilters: { label: string; value: StoneColor | "All" }[] = [
  { label: "All Colors", value: "All" },
  { label: "White", value: "White" },
  { label: "Black", value: "Black" },
  { label: "Grey", value: "Grey" },
  { label: "Gold", value: "Gold" },
  { label: "Brown", value: "Brown" },
  { label: "Red", value: "Red" },
  { label: "Pink", value: "Pink" },
];

const appFilters = [
  "All Applications",
  "Flooring",
  "Kitchens",
  "Bathrooms",
  "Wall Cladding",
  "Countertops",
  "Staircases",
  "Feature Walls",
  "Hotels & Hospitality",
  "Commercial Spaces",
];

function CollectionContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [category, setCategory] = useState<StoneCategory>(
    categoryParam === "granite" ? "granite" : "marble"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColor, setSelectedColor] = useState<StoneColor | "All">("All");
  const [selectedApp, setSelectedApp] = useState("All Applications");

  useEffect(() => {
    if (categoryParam === "granite" || categoryParam === "marble") {
      setCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredStones = useMemo(() => {
    return stones.filter((stone) => {
      // Category filter
      if (stone.category !== category) return false;

      // Search term filter
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = stone.name.toLowerCase().includes(query);
        const matchesOrigin = stone.origin?.toLowerCase().includes(query);
        if (!matchesName && !matchesOrigin) return false;
      }

      // Color filter
      if (selectedColor !== "All") {
        if (!stone.colors?.includes(selectedColor)) return false;
      }

      // Application filter
      if (selectedApp !== "All Applications") {
        if (!stone.applications?.some((app) => app.toLowerCase().includes(selectedApp.toLowerCase()))) {
          return false;
        }
      }

      return true;
    });
  }, [category, searchTerm, selectedColor, selectedApp]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedColor("All");
    setSelectedApp("All Applications");
  };

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedColor !== "All" ||
    selectedApp !== "All Applications";

  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-[#FAF8F3] min-h-screen">
      <Container>
        {/* Top-left Back Button */}
        <BackButton />

        {/* Page Header */}
        <TextDrop className="max-w-3xl mb-8 sm:mb-10">
          <p className="eyebrow text-gold text-[0.72rem] tracking-[0.2em] uppercase font-semibold mb-2">
            Wide Range of Indian &amp; Imported Stones
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium leading-[1.08]">
            Natural Stone Collection
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-charcoal/75 leading-relaxed">
            We offer carefully selected stones sourced from India and leading international markets such as Italy, Turkey, China, and others — giving clients access to an extensive variety of colors, natural patterns, textures, and finishes in both calibrated slabs and raw monumental blocks.
          </p>
        </TextDrop>

        {/* 1. Category Switcher (MARBLE | GRANITE) */}
        <div className="flex items-center justify-start border-b border-charcoal/10 pb-4 mb-6">
          <div className="w-fit inline-flex items-center p-1 bg-white border border-charcoal/20 rounded-full shadow-xs">
            <button
              onClick={() => {
                setCategory("marble");
                resetFilters();
              }}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold tracking-[0.14em] uppercase rounded-full transition-all duration-300 ${
                category === "marble"
                  ? "bg-[#11100F] text-gold shadow-xs"
                  : "text-charcoal/70 hover:text-charcoal"
              }`}
            >
              {category === "marble" && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              )}
              MARBLE ({stones.filter((s) => s.category === "marble").length})
            </button>
            <button
              onClick={() => {
                setCategory("granite");
                resetFilters();
              }}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold tracking-[0.14em] uppercase rounded-full transition-all duration-300 ${
                category === "granite"
                  ? "bg-[#11100F] text-gold shadow-xs"
                  : "text-charcoal/70 hover:text-charcoal"
              }`}
            >
              {category === "granite" && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              )}
              GRANITE ({stones.filter((s) => s.category === "granite").length})
            </button>
          </div>
        </div>

        {/* 2. Fast Search Bar */}
        <div className="mb-6 relative max-w-md">
          <label htmlFor="stone-search" className="sr-only">Search stones</label>
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              id="stone-search"
              type="text"
              placeholder={`Search ${category} by name or origin...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-charcoal/20 pl-10 pr-9 py-2.5 text-xs sm:text-sm text-charcoal outline-none focus:border-gold transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* 3. Horizontal Scrolling Filter Chips */}
        <div className="space-y-3 mb-8">
          {/* Color Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <span className="text-[0.68rem] tracking-wider uppercase text-charcoal/50 font-semibold shrink-0 mr-1">
              Color:
            </span>
            {colorFilters.map((col) => (
              <button
                key={col.value}
                onClick={() => setSelectedColor(col.value)}
                className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium uppercase tracking-wider border transition-all duration-200 ${
                  selectedColor === col.value
                    ? "bg-[#11100F] text-[#FAF8F3] border-[#11100F]"
                    : "bg-white text-charcoal/70 border-charcoal/15 hover:border-gold hover:text-charcoal"
                }`}
              >
                {col.label}
              </button>
            ))}
          </div>

          {/* Application Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <span className="text-[0.68rem] tracking-wider uppercase text-charcoal/50 font-semibold shrink-0 mr-1">
              Use:
            </span>
            {appFilters.map((app) => (
              <button
                key={app}
                onClick={() => setSelectedApp(app)}
                className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium uppercase tracking-wider border transition-all duration-200 ${
                  selectedApp === app
                    ? "bg-[#11100F] text-[#FAF8F3] border-[#11100F]"
                    : "bg-white text-charcoal/70 border-charcoal/15 hover:border-gold hover:text-charcoal"
                }`}
              >
                {app}
              </button>
            ))}
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex items-center justify-between py-3 border-t border-charcoal/10 mb-6 text-xs text-charcoal/70">
          <p>
            Showing <strong className="text-charcoal">{filteredStones.length}</strong> {category} varieties
          </p>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-gold font-semibold uppercase tracking-wider hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* 4. Large Stone Cards Grid */}
        {filteredStones.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredStones.map((stone, i) => (
              <StoneCard key={stone.slug} stone={stone} priority={i < 4} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-charcoal/10 p-12 text-center max-w-md mx-auto my-8">
            <p className="font-serif text-2xl text-charcoal mb-2">No matching stones found</p>
            <p className="text-xs text-charcoal/70 mb-5">
              Try modifying your color or application filters, or search for another stone.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center border border-charcoal/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:bg-gold hover:border-gold"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default function CollectionPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-36 pb-20 bg-[#FAF8F3] min-h-screen text-center text-charcoal/60">
          Loading collection...
        </div>
      }
    >
      <CollectionContent />
    </Suspense>
  );
}

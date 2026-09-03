"use client";

import { cn } from "@/lib/utils";
import { StoneCategory } from "@/types/stone";

const tabs: { value: StoneCategory; label: string }[] = [
  { value: "marble", label: "Marble" },
  { value: "granite", label: "Granite" },
];

export default function CollectionTabs({
  active,
  onChange,
}: {
  active: StoneCategory;
  onChange: (value: StoneCategory) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Stone category"
      className="flex items-center gap-8 sm:gap-12 overflow-x-auto no-scrollbar whitespace-nowrap border-b border-charcoal/10"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.value)}
            className={cn(
              "relative shrink-0 pb-4 pt-2 text-sm sm:text-base font-semibold tracking-[0.08em] uppercase transition-colors duration-300",
              isActive ? "text-charcoal" : "text-charcoal/40 hover:text-charcoal/70"
            )}
          >
            {tab.label}
            <span
              className={cn(
                "absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-400 ease-premium",
                isActive ? "w-full" : "w-0"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

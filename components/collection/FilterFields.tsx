"use client";

import { StoneFilters } from "@/lib/filters";
import { colorOptions } from "@/data/categories";
import { cn } from "@/lib/utils";

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer group select-none">
      <span
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center border transition-colors duration-200",
          checked ? "bg-gold border-gold" : "border-charcoal/30 group-hover:border-gold/60"
        )}
      >
        {checked && <span className="h-1.5 w-1.5 bg-charcoal" />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-sm text-charcoal/80">{label}</span>
    </label>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-6 border-b border-charcoal/10">
      <p className="eyebrow mb-4">{title}</p>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export default function FilterFields({
  filters,
  setFilters,
}: {
  filters: StoneFilters;
  setFilters: (f: StoneFilters) => void;
}) {
  const toggleColor = (color: StoneFilters["colors"][number]) => {
    const next = filters.colors.includes(color)
      ? filters.colors.filter((value) => value !== color)
      : [...filters.colors, color];
    setFilters({ ...filters, colors: next });
  };

  return (
    <div>
      <FilterGroup title="Color">
        {colorOptions.map((c) => (
          <CheckRow key={c} label={c} checked={filters.colors.includes(c)} onChange={() => toggleColor(c)} />
        ))}
      </FilterGroup>
    </div>
  );
}

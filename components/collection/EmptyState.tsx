import { SearchX } from "lucide-react";

export default function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 border border-dashed border-charcoal/15">
      <SearchX size={30} className="text-gold mb-5" strokeWidth={1.2} />
      <h3 className="font-serif text-2xl text-charcoal mb-2">No stones match these filters</h3>
      <p className="text-sm text-charcoal/60 max-w-sm mb-6">
        Try adjusting or clearing your filters to see more of the collection.
      </p>
      <button
        onClick={onReset}
        className="text-xs font-semibold tracking-[0.16em] uppercase text-gold hover:text-charcoal transition-colors duration-300"
      >
        Reset Filters
      </button>
    </div>
  );
}

import { Stone } from "@/types/stone";
import StoneCard from "./StoneCard";
import EmptyState from "./EmptyState";

export default function StoneGrid({
  stones,
  onReset,
}: {
  stones: Stone[];
  onReset: () => void;
}) {
  if (stones.length === 0) {
    return <EmptyState onReset={onReset} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
      {stones.map((stone, i) => (
        <StoneCard key={stone.slug} stone={stone} index={i} />
      ))}
    </div>
  );
}

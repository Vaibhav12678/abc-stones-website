import { Stone, StoneCategory, StoneColor } from "@/types/stone";

export interface StoneFilters {
  category: StoneCategory;
  colors: StoneColor[];
}

export const defaultFilters = (category: StoneCategory): StoneFilters => ({
  category,
  colors: [],
});

export function applyFilters(stones: Stone[], filters: StoneFilters): Stone[] {
  return stones.filter((stone) => {
    if (stone.category !== filters.category) return false;

    if (filters.colors.length > 0) {
      if (!stone.colors || !stone.colors.some((c) => filters.colors.includes(c))) {
        return false;
      }
    }

    return true;
  });
}

export type SortOption = "featured" | "az" | "za";

export function sortStones(stones: Stone[], sort: SortOption): Stone[] {
  const copy = [...stones];
  if (sort === "az") return copy.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "za") return copy.sort((a, b) => b.name.localeCompare(a.name));
  return copy.sort((a, b) => Number(b.featured) - Number(a.featured));
}

export type StoneCategory = "marble" | "granite";

export type StoneColor =
  | "White"
  | "Black"
  | "Brown"
  | "Grey"
  | "Red"
  | "Gold"
  | "Pink"
  | "Green"
  | "Other";

export type StoneOrigin = "Italy" | "Turkey" | "India" | "China" | "Other" | "Not confirmed";

export type StoneForm = "Slab" | "Block";

export interface StoneFaq {
  question: string;
  answer: string;
}

export interface Stone {
  slug: string;
  name: string;
  category: StoneCategory;
  origin?: StoneOrigin | string;
  colors?: StoneColor[];
  forms?: StoneForm[];
  slabAvailable?: boolean;
  blockAvailable?: boolean;
  applications?: string[];
  description?: string;
  characteristics?: string[];
  image: string;
  featured?: boolean;
  faqs?: StoneFaq[];
}

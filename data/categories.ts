export const categories = [
  { value: "marble", label: "Marble" },
  { value: "granite", label: "Granite" },
] as const;

export const colorOptions = [
  "White",
  "Black",
  "Brown",
  "Grey",
  "Red",
  "Gold",
  "Pink",
  "Green",
  "Other",
] as const;

export const originOptions = ["Italy", "Turkey", "India", "China", "Other"] as const;

export const formOptions = ["Slab", "Block"] as const;

export const applicationOptions = [
  "Flooring",
  "Wall Cladding",
  "Kitchen Countertop",
  "Bathroom",
  "Staircase",
  "Table Top",
  "Feature Wall",
  "Exterior",
  "Commercial",
  "Hospitality",
] as const;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marble & Granite Collection",
  description:
    "Explore ABC STONES INDIA PVT. LTD.'s premium range of imported marble and granite, curated for exceptional spaces.",
};

export default function CollectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}

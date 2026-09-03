import { ApplicationItem } from "@/types/application";

export const applications: ApplicationItem[] = [
  {
    slug: "kitchens",
    aliases: ["marble-for-kitchens"],
    name: "Kitchens",
    title: "Marble & Granite for Luxury Kitchens",
    image: "/images/applications/Kitchen.webp",
    description:
      "Kitchen spaces demand an exacting balance of culinary resilience and sculptural elegance. From dramatic bookmatched marble waterfall islands to high-density granite prep counters, natural stone defines the heart of modern residences.",
    pairedStoneName: "Calacatta Gold Marble",
    pairedStoneSlug: "calacatta-gold-marble",
    recommendedStoneSlugs: [
      "calacatta-gold-marble",
      "alaska-white",
      "carrara-white-marble",
      "black-pearl",
    ],
    designTips: [
      "Utilize Calacatta Gold or Carrara White for statement islands and breakfast bars.",
      "Consider high-durability granite like Black Pearl or Alaska White for heavy cooktop zones.",
      "Ensure proper sealing and simple neutral-pH daily cleaning to preserve stone brilliance.",
    ],
  },
  {
    slug: "flooring",
    aliases: ["marble-for-flooring"],
    name: "Flooring",
    title: "Natural Stone Flooring for Timeless Grandeur",
    image: "/images/applications/Flooring.webp",
    description:
      "Natural stone flooring creates an uninterrupted foundation of luxury. Whether selecting the luminous crystalline white of Italian marble or the hardwearing grandeur of granite, stone floors age with grace and distinction.",
    pairedStoneName: "Statuario Marble",
    pairedStoneSlug: "statuario-marble",
    recommendedStoneSlugs: [
      "statuario-marble",
      "carrara-white-marble",
      "silver-grey-marble",
      "bhaswara-white",
      "s-white",
    ],
    designTips: [
      "Large-format slabs minimize grout lines for an uninterrupted, expansive aesthetic.",
      "Honed finishes offer a modern matte tactility and enhanced slip resistance.",
      "Bookmatching along main corridors creates a cinematic architectural axis.",
    ],
  },
  {
    slug: "bathrooms",
    aliases: ["marble-for-bathrooms"],
    name: "Bathrooms",
    title: "Marble for Spa-Inspired Bathrooms",
    image: "/images/applications/Bathroom.webp",
    description:
      "Transform personal sanctuaries into private luxury retreats. Natural marble walls, vanities, and shower surrounds envelop spaces in soothing organic textures, cool thermal comfort, and reflective brilliance.",
    pairedStoneName: "Silver Grey Marble",
    pairedStoneSlug: "silver-grey-marble",
    recommendedStoneSlugs: [
      "silver-grey-marble",
      "statuario-marble",
      "calacatta-gold-marble",
      "carrara-white-marble",
    ],
    designTips: [
      "Silver Grey Marble creates a serene contemporary spa atmosphere.",
      "Combine honed shower flooring with polished wall cladding for safe, tactile harmony.",
      "Integrated solid marble sinks enhance visual continuity.",
    ],
  },
  {
    slug: "countertops",
    aliases: ["granite-countertops"],
    name: "Countertops",
    title: "Granite & Marble Countertops",
    image: "/images/applications/Counter top.webp",
    description:
      "Every counter requires uncompromising structural endurance paired with bespoke beauty. Our curated granites and marbles offer superior edge profiling, thermal resistance, and enduring surface refinement.",
    pairedStoneName: "Carrara White Marble",
    pairedStoneSlug: "carrara-white-marble",
    recommendedStoneSlugs: [
      "carrara-white-marble",
      "black-pearl",
      "alaska-white",
      "himalaya-brown",
    ],
    designTips: [
      "Granite countertops provide unparalleled resistance to heat and scratches.",
      "Select mitered apron edges (40mm–60mm) to establish a substantial, monolithic presence.",
      "Incorporate matching natural stone backsplashes for seamless elegance.",
    ],
  },
  {
    slug: "wall-cladding",
    aliases: ["marble-wall-cladding"],
    name: "Wall Cladding",
    title: "Natural Stone Wall Cladding & Facades",
    image: "/images/applications/Wall Cladding.webp",
    description:
      "Vertical surfaces clad in natural stone command presence, introducing organic grain, thermal insulation, and architectural permanence to exterior facades and interior feature elevations.",
    pairedStoneName: "Black Pearl Granite",
    pairedStoneSlug: "black-pearl",
    recommendedStoneSlugs: [
      "black-pearl",
      "silver-grey-marble",
      "khalda-red",
      "bagera-black",
    ],
    designTips: [
      "Dense granites like Black Pearl provide exceptional weathering protection outdoors.",
      "Accentuate stone texture with deliberate grazing lighting to celebrate subtle mineral depth.",
    ],
  },
  {
    slug: "staircases",
    aliases: ["marble-staircases"],
    name: "Staircases",
    title: "Marble & Granite Staircases",
    image: "/images/applications/Stair case.webp",
    description:
      "A stone staircase serves as an enduring architectural sculpture. Treads and risers crafted from premium natural stone celebrate craftsmanship, delivering majestic ascents and acoustic quietude.",
    pairedStoneName: "Black Markino Granite",
    pairedStoneSlug: "black-markino",
    recommendedStoneSlugs: [
      "black-markino",
      "carrara-white-marble",
      "statuario-marble",
      "p-white",
    ],
    designTips: [
      "Black Markino provides the visual drama of black marble with the extreme abrasion resistance of granite.",
      "Subtle micro-bevels or non-slip fluted details ensure safety without sacrificing minimalism.",
    ],
  },
  {
    slug: "hospitality",
    aliases: ["hotels-hospitality"],
    name: "Hotels & Hospitality",
    title: "Stone for World-Class Hospitality & Hotels",
    image: "/images/applications/Hotels.webp",
    description:
      "Grand reception atriums, luxury guest suites, and resort poolscapes rely on natural stone to communicate prestige and enduring quality to discerning global travelers.",
    pairedStoneName: "Statuario Marble",
    pairedStoneSlug: "statuario-marble",
    recommendedStoneSlugs: [
      "statuario-marble",
      "calacatta-gold-marble",
      "silver-grey-marble",
      "black-pearl",
    ],
    designTips: [
      "Bookmatched Statuario Marble behind reception desks creates an unforgettable first impression.",
      "High-traffic corridors benefit from durable stone selection backed by precision fabrication.",
    ],
  },
  {
    slug: "commercial-spaces",
    aliases: ["commercial"],
    name: "Commercial Spaces",
    title: "Natural Stone for Commercial Spaces",
    image: "/images/applications/Commercial.webp",
    description:
      "Corporate headquarters, flagship boutiques, and modern commercial lobbies require materials that reflect institutional stability and endure heavy pedestrian circulation effortlessly.",
    pairedStoneName: "Black Pearl Granite",
    pairedStoneSlug: "black-pearl",
    recommendedStoneSlugs: [
      "black-pearl",
      "p-white",
      "s-white",
      "silver-grey-marble",
    ],
    designTips: [
      "Select high-compressive-strength stones capable of sustaining decades of heavy footfall.",
      "Monochrome palettes create refined corporate sophistication.",
    ],
  },
  {
    slug: "luxury-homes",
    aliases: ["residential"],
    name: "Luxury Homes",
    title: "Natural Stone for Luxury Residences",
    image: "/images/applications/Luxury House.webp",
    description:
      "Curated natural stone brings bespoke individuality to private villas, penthouses, and residences. Each slab is an original work of earth art, conferring singular character to every room.",
    pairedStoneName: "Calacatta Gold Marble",
    pairedStoneSlug: "calacatta-gold-marble",
    recommendedStoneSlugs: [
      "calacatta-gold-marble",
      "statuario-marble",
      "alaska-white",
      "bhaswara-white",
    ],
    designTips: [
      "Coordinate stone selections between floors, accent walls, and custom furniture for unified flow.",
      "Work closely with ABC STONES INDIA PVT. LTD. to inspect specific slab bundles.",
    ],
  },
  {
    slug: "architectural-projects",
    aliases: ["architectural"],
    name: "Architectural Projects",
    title: "Stone for Architectural Landmark Projects",
    image: "/images/applications/Architectural.webp",
    description:
      "Monumental columns, bespoke facades, cantilevered features, and expansive public plazas. We support architects and structural engineers with verified slab and block specifications.",
    pairedStoneName: "S. White Granite",
    pairedStoneSlug: "s-white",
    recommendedStoneSlugs: [
      "s-white",
      "bhaswara-white",
      "chima",
      "zirawal-white",
    ],
    designTips: [
      "Custom block extraction supports specialized dimensional and sculptural cutting.",
      "Consistent stone colorways ensure uniformity across multi-thousand square meter projects.",
    ],
  },
  {
    slug: "feature-walls",
    aliases: ["accent-walls"],
    name: "Feature Walls",
    title: "Dramatic Natural Stone Feature Walls",
    image: "/images/applications/Feature Wall.webp",
    description:
      "A statement stone wall transforms an interior partition into an organic gallery focal point. With dynamic veining and crystalline depth, natural stone captivates the eye.",
    pairedStoneName: "Statuario Marble",
    pairedStoneSlug: "statuario-marble",
    recommendedStoneSlugs: [
      "statuario-marble",
      "calacatta-gold-marble",
      "black-markino",
      "khalda-red",
    ],
    designTips: [
      "Four-piece bookmatched marble slabs produce hypnotic mirror-symmetrical patterns.",
      "Recessed perimeter warm LED illumination highlights stone texture and translucent quartz veins.",
    ],
  },
  {
    slug: "table-tops",
    aliases: ["dining-tables"],
    name: "Table Tops",
    title: "Custom Natural Stone Table Tops",
    image: "/images/applications/Luxury House.webp",
    description:
      "Bespoke dining tables, executive conference desks, and sculptural coffee tables cut from monolithic slabs of marble or granite become heirloom centerpieces.",
    pairedStoneName: "Bhaswara White",
    pairedStoneSlug: "bhaswara-white",
    recommendedStoneSlugs: [
      "bhaswara-white",
      "calacatta-gold-marble",
      "black-pearl",
      "carrara-white-marble",
    ],
    designTips: [
      "Monolithic 20mm or 30mm solid slabs with beveled or bullnose edge profiles.",
      "Natural stone table tops pair beautifully with brushed brass, antique gold, or dark timber bases.",
    ],
  },
  {
    slug: "fireplaces",
    aliases: ["hearths"],
    name: "Fireplaces",
    title: "Natural Stone Fireplaces & Hearths",
    image: "/images/applications/Feature Wall.webp",
    description:
      "Natural stone hearths and fireplace mantels deliver warmth, drama, and safety. Natural stone easily withstands ambient warmth while providing dramatic focal presence.",
    pairedStoneName: "Khalda Red Granite",
    pairedStoneSlug: "khalda-red",
    recommendedStoneSlugs: [
      "khalda-red",
      "black-markino",
      "statuario-marble",
      "himalaya-brown",
    ],
    designTips: [
      "Granite and dense marble provide superior ambient thermal resilience.",
      "Floor-to-ceiling cladding establishes an imposing, cozy architectural anchor.",
    ],
  },
];

export function getApplicationBySlug(rawSlug: string): ApplicationItem | undefined {
  const clean = rawSlug.toLowerCase().trim();
  return applications.find(
    (app) => app.slug === clean || app.aliases?.some((a) => a === clean)
  );
}

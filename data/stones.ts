import { Stone } from "@/types/stone";

// Source of truth: verified stone collection of ABC STONES INDIA PVT. LTD.
// Origins are specified ONLY where verified (e.g. Italian and Turkish marble).
// All marble varieties support both SLAB and BLOCK.

export const stones: Stone[] = [
  // ---------- MARBLE (5) ----------
  {
    slug: "statuario-marble",
    name: "Statuario Marble",
    category: "marble",
    origin: "Italy",
    colors: ["White", "Grey"],
    forms: ["Slab", "Block"],
    slabAvailable: true,
    blockAvailable: true,
    image: "/images/marble/statuario.webp",
    featured: true,
    description:
      "A globally revered Italian white marble distinguished by luminous white crystalline ground and bold, dramatic grey veining. An iconic selection for luxury residences, grand foyers, and prestigious hospitality projects.",
    characteristics: [
      "Pure crystalline white ground",
      "Dramatic feathered grey veining",
      "Ideal for bookmatched installations",
      "Quarried in Carrara, Italy",
    ],
    applications: [
      "Hotels & Hospitality",
      "Luxury Homes",
      "Feature Walls",
      "Bathrooms",
      "Flooring",
    ],
    faqs: [
      {
        question: "Is Statuario Marble available in slabs and blocks?",
        answer: "Yes, ABC STONES INDIA PVT. LTD. provides Statuario Marble in both processed slabs and unprocessed raw blocks upon enquiry.",
      },
      {
        question: "Where is Statuario Marble sourced from?",
        answer: "Authentic Statuario Marble is quarried exclusively in the mountain quarries of Carrara, Italy.",
      },
    ],
  },
  {
    slug: "calacatta-gold-marble",
    name: "Calacatta Gold Marble",
    category: "marble",
    origin: "Italy",
    colors: ["White", "Gold", "Grey"],
    forms: ["Slab", "Block"],
    slabAvailable: true,
    blockAvailable: true,
    image: "/images/marble/calacatta-gold.webp",
    featured: true,
    description:
      "Prestigious Italian marble characterized by warm golden ribbons intertwined with subtle taupe-grey veining over a soft creamy white backdrop. Celebrated by world-class interior designers for gourmet kitchens, bespoke waterfall islands, and master suites.",
    characteristics: [
      "Lustrous white background with warm honey veining",
      "Rich organic veining patterns",
      "Exceptional visual depth",
      "Italian quarry origin",
    ],
    applications: [
      "Kitchens",
      "Countertops",
      "Bathrooms",
      "Luxury Homes",
      "Feature Walls",
    ],
    faqs: [
      {
        question: "Is Calacatta Gold suitable for luxury kitchen islands?",
        answer: "Calacatta Gold is one of the most sought-after marbles globally for kitchen waterfall islands and statement countertops when sealed and cared for properly.",
      },
      {
        question: "Are blocks available for Calacatta Gold Marble?",
        answer: "Yes, we facilitate both slab selection and block requirements through ABC STONES INDIA PVT. LTD.",
      },
    ],
  },
  {
    slug: "carrara-white-marble",
    name: "Carrara White Marble",
    category: "marble",
    origin: "Italy",
    colors: ["White", "Grey"],
    forms: ["Slab", "Block"],
    slabAvailable: true,
    blockAvailable: true,
    image: "/images/marble/carrara-white.webp",
    featured: true,
    description:
      "The quintessential Italian classic, Carrara White showcases delicate, soft feathery veining gracefully dispersed across a serene grey-white canvas. Timeless, versatile, and structurally resilient.",
    characteristics: [
      "Subtle, smoky linear veining",
      "Uniform background tone",
      "Centuries of architectural pedigree",
      "Available in polished and honed textures",
    ],
    applications: [
      "Countertops",
      "Flooring",
      "Bathrooms",
      "Staircases",
      "Luxury Homes",
    ],
    faqs: [
      {
        question: "What is the difference between Carrara White and Statuario?",
        answer: "Carrara White features a softer, grey-toned background with subtle linear veining, whereas Statuario features a brighter white crystalline ground with sharper, bolder grey veining.",
      },
    ],
  },
  {
    slug: "silver-grey-marble",
    name: "Silver Grey Marble",
    category: "marble",
    origin: "Turkey",
    colors: ["Grey", "White"],
    forms: ["Slab", "Block"],
    slabAvailable: true,
    blockAvailable: true,
    image: "/images/marble/silver-grey.webp",
    featured: true,
    description:
      "A contemporary Turkish marble featuring cool silver, ash, and graphite tones with delicate white veining. Delivers a sophisticated, modern minimalist atmosphere for luxury spa bathrooms, cladding, and architectural interiors.",
    characteristics: [
      "Sophisticated cool ash and silver palette",
      "Fine crystalline structure",
      "High polish reflection",
      "Sourced from Turkey",
    ],
    applications: [
      "Bathrooms",
      "Wall Cladding",
      "Flooring",
      "Feature Walls",
      "Commercial Spaces",
    ],
    faqs: [
      {
        question: "Is Silver Grey Marble suitable for bathroom wall cladding?",
        answer: "Yes, Silver Grey Marble is an outstanding pairing for luxury bathrooms and feature wall cladding, offering serene cool tones and elegant surface depth.",
      },
    ],
  },
  {
    slug: "bhaswara-white",
    name: "Bhaswara White",
    category: "marble",
    colors: ["White"],
    forms: ["Slab", "Block"],
    slabAvailable: true,
    blockAvailable: true,
    image: "/images/marble/bhaswara-white.webp",
    featured: true,
    description:
      "A pristine white natural marble showcasing clean crystalline texture and luminous light reflectivity. An enduring selection for grand floor expanses, custom table tops, and architectural surfaces.",
    characteristics: [
      "Bright white crystalline stone",
      "Even and balanced surface tone",
      "Available in both slab and block forms",
    ],
    applications: [
      "Table Tops",
      "Flooring",
      "Feature Walls",
      "Architectural Projects",
      "Luxury Homes",
    ],
    faqs: [
      {
        question: "Can Bhaswara White be ordered in custom block dimensions?",
        answer: "Yes, ABC STONES INDIA PVT. LTD. supplies Bhaswara White in both blocks and customized slab thicknesses.",
      },
    ],
  },

  // ---------- GRANITE (18) ----------
  {
    slug: "black-pearl",
    name: "Black Pearl",
    category: "granite",
    colors: ["Black"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/black-pearl.webp",
    featured: true,
    description:
      "A dense, semi-solid black granite accented with subtle specks of silver, gold, and dark grey mica. Highly resilient against heat, scratching, and heavy traffic.",
    characteristics: [
      "Deep black base with iridescent mica flakes",
      "Superior density and scratch resistance",
      "Low porosity and high durability",
    ],
    applications: [
      "Wall Cladding",
      "Commercial Spaces",
      "Countertops",
      "Flooring",
    ],
  },
  {
    slug: "p-white",
    name: "P White",
    category: "granite",
    colors: ["White", "Grey"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/p-white.webp",
    description:
      "A uniform white-and-grey speckled granite renowned for strength, balanced granularity, and consistent coloration across extensive surfaces.",
    applications: ["Flooring", "Commercial Spaces", "Countertops", "Staircases"],
  },
  {
    slug: "chima",
    name: "Chima",
    category: "granite",
    colors: ["Pink", "Grey"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/chima.webp",
    description:
      "A classic natural granite exhibiting fine grain structure with pink-grey undertones. Exceptional compressive strength for heavy-duty applications.",
    applications: ["Flooring", "Commercial Spaces", "Architectural Projects"],
  },
  {
    slug: "khalda-red",
    name: "Khalda Red",
    category: "granite",
    colors: ["Red", "Black"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/khalda-red.webp",
    featured: true,
    description:
      "A bold, regal red granite interspersed with dark mineral clusters. Creates striking contrast in statement fireplaces, cladding, and entrance portals.",
    applications: ["Fireplaces", "Wall Cladding", "Feature Walls", "Exterior"],
  },
  {
    slug: "himalaya-brown",
    name: "Himalaya Brown",
    category: "granite",
    colors: ["Brown", "Black"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/himalaya-brown.webp",
    description:
      "Warm earthy brown granite enriched with deep charcoal and bronze mineral currents, introducing natural organic warmth to interiors.",
    applications: ["Countertops", "Flooring", "Feature Walls", "Luxury Homes"],
  },
  {
    slug: "black-markino",
    name: "Black Markino",
    category: "granite",
    colors: ["Black", "White"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/black-markino.webp",
    featured: true,
    description:
      "A dramatic dark granite woven with crisp white and silver linear streaks reminiscent of black marble, but endowed with granite's superior hardness.",
    applications: ["Staircases", "Flooring", "Wall Cladding", "Feature Walls"],
  },
  {
    slug: "fish-black",
    name: "Fish Black",
    category: "granite",
    colors: ["Black", "White"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/fish-black.webp",
    description:
      "An intriguing dark granite featuring characteristic white and silver fish-scale crystal patterns across a jet black matrix.",
    applications: ["Countertops", "Wall Cladding", "Flooring", "Luxury Homes"],
  },
  {
    slug: "s-white",
    name: "S. White",
    category: "granite",
    colors: ["White", "Grey"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/s-white.webp",
    featured: true,
    description:
      "A crisp, light-reflective natural granite offering clean contemporary aesthetic and extreme durability for expansive public and architectural projects.",
    applications: ["Architectural Projects", "Flooring", "Commercial Spaces"],
  },
  {
    slug: "alaska-white",
    name: "Alaska White",
    category: "granite",
    colors: ["White", "Grey", "Black"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/alaska-white.webp",
    featured: true,
    description:
      "A dramatic frost-white granite animated with icy quartz deposits, smoky feldspar, and onyx-black veins. A prime choice for designer kitchen countertops.",
    applications: ["Kitchens", "Countertops", "Flooring", "Feature Walls"],
  },
  {
    slug: "alaska-gold",
    name: "Alaska Gold",
    category: "granite",
    colors: ["Gold", "Brown", "White"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/alaska-gold.webp",
    description:
      "An opulent stone blending luminous amber, warm honey, and ivory swirls with crystalline mineral clusters for warm, inviting architectural spaces.",
    applications: ["Countertops", "Kitchens", "Feature Walls", "Luxury Homes"],
  },
  {
    slug: "alaska-pink",
    name: "Alaska Pink",
    category: "granite",
    colors: ["Pink", "Grey", "White"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/alaska-pink.webp",
    description:
      "Soft rose and blush quartz crystal waves harmonized with silver-grey veins, creating unique organic character.",
    applications: ["Countertops", "Feature Walls", "Luxury Homes"],
  },
  {
    slug: "zirawal-white",
    name: "Zirawal White",
    category: "granite",
    colors: ["White", "Grey"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/zirawal-white.webp",
    description:
      "A robust white granite with evenly dispersed grey speckling, ideal for high-traffic flooring and commercial plazas.",
    applications: ["Flooring", "Commercial Spaces", "Staircases"],
  },
  {
    slug: "kotra-black",
    name: "Kotra Black",
    category: "granite",
    colors: ["Black"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/kotra-black.webp",
    description:
      "Solid, deep black granite with fine crystal grain and uniform surface coloration. Resilient against heavy mechanical wear.",
    applications: ["Countertops", "Flooring", "Wall Cladding"],
  },
  {
    slug: "rajasthan-black",
    name: "Rajasthan Black",
    category: "granite",
    colors: ["Black"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/rajasthan-black.webp",
    description:
      "A quintessential dark granite celebrated for structural toughness, deep black tone, and superb polish retention.",
    applications: ["Countertops", "Flooring", "Commercial Spaces"],
  },
  {
    slug: "bagera-black",
    name: "Bagera Black",
    category: "granite",
    colors: ["Black", "Grey"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/bagera-black.webp",
    description:
      "Dense black stone with subtle grey micro-crystalline inclusions providing refined texture.",
    applications: ["Wall Cladding", "Flooring", "Countertops"],
  },
  {
    slug: "bagera-brown",
    name: "Bagera Brown",
    category: "granite",
    colors: ["Brown", "Black"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/bagera-brown.webp",
    description:
      "Rich mocha and dark chocolate tones accented with deep black mineral flecks.",
    applications: ["Feature Walls", "Flooring", "Countertops"],
  },
  {
    slug: "star-black",
    name: "Star Black",
    category: "granite",
    colors: ["Black", "Gold"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/star-black.webp",
    description:
      "Lustrous black granite scattered with shimmering metallic specks reminiscent of a starry night sky.",
    applications: ["Countertops", "Wall Cladding", "Feature Walls"],
  },
  {
    slug: "ktise-brown",
    name: "Ktise Brown",
    category: "granite",
    colors: ["Brown"],
    forms: ["Slab"],
    slabAvailable: true,
    blockAvailable: false,
    image: "/images/granite/ktise-brown.webp",
    description:
      "A solid earthy brown granite engineered by nature for resilience, warmth, and enduring polish.",
    applications: ["Flooring", "Countertops", "Commercial Spaces"],
  },
];

// Helper resolvers supporting both legacy and canonical slugs
export function getStoneBySlug(rawSlug: string): Stone | undefined {
  const clean = rawSlug.toLowerCase().trim();
  return stones.find((s) => {
    if (s.slug === clean) return true;
    // support variations e.g. "statuario" vs "statuario-marble"
    if (s.slug.replace("-marble", "") === clean) return true;
    if (clean.replace("-marble", "") === s.slug.replace("-marble", "")) return true;
    if (clean === "banswara-white" && s.slug === "bhaswara-white") return true;
    return false;
  });
}

export function getCanonicalStoneUrl(stone: Stone): string {
  return `/collection/${stone.category}/${stone.slug}`;
}

export const featuredStones = stones.filter((s) => s.featured);

export const marbleStones = stones.filter((s) => s.category === "marble");

export const graniteStones = stones.filter((s) => s.category === "granite");

export function getRelatedStones(currentStone: Stone, limit = 4): Stone[] {
  return stones
    .filter((s) => s.slug !== currentStone.slug && s.category === currentStone.category)
    .slice(0, limit);
}

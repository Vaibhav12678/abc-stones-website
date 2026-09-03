export interface JournalArticle {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Buying Guide" | "Comparison" | "Maintenance" | "Design Guide";
  image: string;
  relatedStoneSlugs: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "italian-marble-complete-buying-guide",
    title: "Italian Marble: Complete Buying Guide",
    subtitle: "Everything architects, designers, and homeowners need to know before investing in genuine Italian natural stone.",
    excerpt: "From Carrara to Statuario, learn how Italian marble is quarried, graded, finished, and specified for world-class residential and commercial interiors.",
    date: "2025-01-15",
    readTime: "6 min read",
    category: "Buying Guide",
    image: "/images/marble/statuario.webp",
    relatedStoneSlugs: ["statuario-marble", "calacatta-gold-marble", "carrara-white-marble"],
    sections: [
      {
        heading: "The Heritage and Geological Rarity of Italian Marble",
        paragraphs: [
          "For millennia, the Apuan Alps of northern Tuscany have yielded the world's most sought-after natural stone. What separates genuine Italian marble from alternatives across the globe is its crystalline purity — formed under intense metamorphic pressure that transmuted ancient limestone into dense calcite crystals.",
          "This micro-structure creates an unparalleled subsurface luminosity: light penetrates the surface before scattering, giving authentic Italian marble its trademark warm glow that artificial composites and porcelain tiles can never authentically recreate.",
        ],
      },
      {
        heading: "Key Varieties: Statuario, Calacatta Gold & Carrara White",
        paragraphs: [
          "Understanding the differences between iconic Italian white marbles is crucial for sound architectural specification. While Carrara White offers subtle, feathery grey veining across a cool grey-white ground, Statuario boasts an exceptionally radiant white ground punctuated by bold, sculptural grey veining.",
          "Calacatta Gold, harvested from higher elevations, introduces ribbons of warm honey, gold, and amber intertwined with taupe accents, creating an unmistakably regal warmth in luxury living spaces.",
        ],
      },
      {
        heading: "Slabs vs Blocks: Specifying the Right Format",
        paragraphs: [
          "At ABC STONES INDIA PVT. LTD., natural stone is supplied in both ready-to-install slabs and raw blocks. For bespoke architectural installations with monumental columns, curved stair treads, or unusual thicknesses, block procurement allows tailored dimensional sawing.",
          "For interior flooring, wall cladding, and countertop fabrication, 20mm and 30mm calibrated slabs allow direct visual selection of pattern continuity and bookmatching.",
        ],
      },
    ],
  },
  {
    slug: "statuario-vs-calacatta-gold-marble",
    title: "Statuario vs Calacatta Gold Marble",
    subtitle: "A detailed comparison of two of Italy's most celebrated luxury natural stones.",
    excerpt: "Explore the nuanced visual differences, veining dynamics, and design applications of Statuario and Calacatta Gold marble.",
    date: "2025-01-22",
    readTime: "5 min read",
    category: "Comparison",
    image: "/images/marble/calacatta-gold.webp",
    relatedStoneSlugs: ["statuario-marble", "calacatta-gold-marble"],
    sections: [
      {
        heading: "Visual Aesthetics: Cool Drama vs Warm Opulence",
        paragraphs: [
          "Both Statuario and Calacatta Gold originate in the Carrara quarry basin, yet their personalities in finished interiors are strikingly distinct. Statuario exhibits a crisp, cooler crystalline background with dramatic, high-contrast charcoal and slate veining.",
          "Calacatta Gold introduces warm amber, champagne, and gold veining that softens the composition. In spaces dominated by natural timber, brushed brass hardware, or warm lighting, Calacatta Gold seamlessly harmonizes with the interior palette.",
        ],
      },
      {
        heading: "Bookmatching Potential and Focal Walls",
        paragraphs: [
          "Because both varieties feature pronounced veining structures, they represent the pinnacle of bookmatched installations. Slabs cut sequentially from the block are mirrored to create geometric diamonds, wings, and kaleidoscopic centerpieces.",
          "Statuario's bold strokes are especially suited to grand entrance atriums and high-ceilinged hotel lobbies, whereas Calacatta Gold excels in statement kitchen waterfall islands and master bath suites.",
        ],
      },
    ],
  },
  {
    slug: "marble-vs-granite-which-should-you-choose",
    title: "Marble vs Granite: Which Should You Choose?",
    subtitle: "A practical guide to balancing organic beauty, structural durability, and maintenance requirements.",
    excerpt: "Compare porosity, hardness, maintenance, and architectural suitability between marble and granite for your next project.",
    date: "2025-02-05",
    readTime: "7 min read",
    category: "Comparison",
    image: "/images/granite/black-pearl.webp",
    relatedStoneSlugs: ["black-pearl", "carrara-white-marble", "alaska-white"],
    sections: [
      {
        heading: "Geological Differences and Everyday Performance",
        paragraphs: [
          "The decision between marble and granite fundamentally begins with geology. Marble is a metamorphic stone primarily composed of calcite, with a Mohs hardness of 3 to 4. Granite is an igneous rock crystallized from magma, composed predominantly of quartz and feldspar, ranking 6 to 7 on the Mohs scale.",
          "This fundamental distinction makes granite virtually impervious to ordinary household scratches and heat, while marble provides softer tactile warmth, crystalline depth, and fluid veining that granite cannot duplicate.",
        ],
      },
      {
        heading: "Best Applications for Each Stone",
        paragraphs: [
          "For high-traffic flooring, outdoor facades, and rigorous culinary worktops, granite options like Black Pearl, Alaska White, and S. White offer unyielding resilience. For master bathrooms, living room flooring, wall cladding, and luxury fireplace surrounds, Italian marble elevates the architectural atmosphere.",
        ],
      },
    ],
  },
  {
    slug: "slab-vs-block-understanding-natural-stone",
    title: "Slab vs Block: Understanding Natural Stone",
    subtitle: "How natural stone is quarried, sawn, and processed for architectural and project delivery.",
    excerpt: "Demystifying the difference between raw stone blocks and processed slabs to help you make informed procurement decisions.",
    date: "2025-02-12",
    readTime: "5 min read",
    category: "Buying Guide",
    image: "/images/hero/Background.webp",
    relatedStoneSlugs: ["statuario-marble", "bhaswara-white", "black-pearl"],
    sections: [
      {
        heading: "What is a Natural Stone Block?",
        paragraphs: [
          "A stone block is the initial raw extraction from a mountain quarry face. Using wire saws and hydraulic splitters, monumental cubic masses weighing 15 to 30 tons are carefully detached from bedrock. Blocks are evaluated for structural density, natural fissure patterns, and dimensional integrity.",
          "Architects and institutional developers often secure entire blocks to ensure consistent colour tone and veining across large commercial plazas or landmark structures.",
        ],
      },
      {
        heading: "From Block to Polished Slab",
        paragraphs: [
          "Once inspected, blocks are mounted onto heavy-duty gang saws or multi-wire cutting machines where water and diamond grit saw them into calibrated slabs — typically 20mm or 30mm thick. The slabs are then numbered in consecutive cutting order to facilitate bookmatching.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-marble-for-flooring",
    title: "How to Choose Marble for Flooring",
    subtitle: "Key considerations for selecting, finishing, and installing natural marble floors that last generations.",
    excerpt: "Ensure your stone floor stands the test of time with expert advice on slip resistance, veining orientation, and thickness.",
    date: "2025-02-18",
    readTime: "6 min read",
    category: "Design Guide",
    image: "/images/applications/Flooring.webp",
    relatedStoneSlugs: ["statuario-marble", "carrara-white-marble", "silver-grey-marble", "bhaswara-white"],
    sections: [
      {
        heading: "Finish Matters: Polished vs Honed",
        paragraphs: [
          "While high-gloss polished marble reflects light and visually expands spaces, honed (matte) marble has emerged as an architectural favorite for contemporary residences. Honed marble provides subtle texture, minimizes the visibility of everyday micro-scratches, and offers enhanced slip safety.",
        ],
      },
      {
        heading: "Subfloor Preparation and Proper Sealing",
        paragraphs: [
          "A flawless natural stone floor requires an immovable subfloor. Any deflection in the structural foundation can cause hairline fissures across stone tiles or slabs. Following installation, impregnating penetrating sealers should be applied to prevent moisture absorption while allowing the stone to breathe.",
        ],
      },
    ],
  },
  {
    slug: "best-marble-for-luxury-kitchens",
    title: "Best Marble for Luxury Kitchens",
    subtitle: "How world-class designers specify natural marble countertops and statement waterfall islands.",
    excerpt: "Discover why Calacatta Gold and Carrara White remain the gold standard in premium kitchen design.",
    date: "2025-02-25",
    readTime: "5 min read",
    category: "Design Guide",
    image: "/images/applications/Kitchen.webp",
    relatedStoneSlugs: ["calacatta-gold-marble", "carrara-white-marble", "alaska-white"],
    sections: [
      {
        heading: "The Allure of the Natural Stone Island",
        paragraphs: [
          "A natural marble waterfall island serves as the undeniable centerpiece of a luxury home. Calacatta Gold with mitered 50mm edges commands visual authority, transforming everyday meal preparation into a gallery-like experience.",
        ],
      },
      {
        heading: "Managing Everyday Kitchen Realities",
        paragraphs: [
          "Acidic substances like lemon juice, vinegar, and tomato sauce can cause chemical etching on unsealed calcite stones. By treating kitchen marble with modern breathable fluoropolymer sealers and wiping spills promptly, luxury homeowners enjoy the genuine patina of natural stone without fear.",
        ],
      },
    ],
  },
  {
    slug: "statuario-marble-origin-characteristics-applications",
    title: "Statuario Marble: Origin, Characteristics & Applications",
    subtitle: "A deep dive into the world's most prestigious white marble.",
    excerpt: "Explore the geological marvel of Statuario Marble, from its Italian Carrara provenance to its iconic role in bespoke architecture.",
    date: "2025-03-01",
    readTime: "6 min read",
    category: "Buying Guide",
    image: "/images/marble/statuario.webp",
    relatedStoneSlugs: ["statuario-marble", "carrara-white-marble"],
    sections: [
      {
        heading: "Provenance and Limited Availability",
        paragraphs: [
          "Statuario Marble is quarried in small, precious pockets in the upper regions of Carrara, Italy. Due to its limited geological supply and high global demand, authentic Statuario is among the most prized natural building stones in human history.",
        ],
      },
      {
        heading: "Distinguishing Authentic Statuario",
        paragraphs: [
          "Look for a bright, semi-translucent sugar-white ground. Unlike common commercial white stones, Statuario's grey veining is distinctly feathered, varying from slate grey to charcoal with occasional hints of golden amber.",
        ],
      },
    ],
  },
  {
    slug: "calacatta-gold-marble-guide-luxury-interiors",
    title: "Calacatta Gold Marble: A Guide for Luxury Interiors",
    subtitle: "Incorporating warm gold-veined Italian marble into modern residential and hospitality schemes.",
    excerpt: "Learn how Calacatta Gold elevates modern architecture through its luminous warmth and dynamic veining.",
    date: "2025-03-08",
    readTime: "5 min read",
    category: "Design Guide",
    image: "/images/marble/calacatta-gold.webp",
    relatedStoneSlugs: ["calacatta-gold-marble", "statuario-marble"],
    sections: [
      {
        heading: "Designing with Warm Metallic Accents",
        paragraphs: [
          "Calacatta Gold's warm ribbons of caramel and honey create an effortless bridge to brushed bronze fixtures, custom walnut cabinetry, and warm LED cove lighting. It prevents minimalist monochromatic spaces from feeling sterile.",
        ],
      },
    ],
  },
  {
    slug: "how-to-clean-marble-without-damaging-it",
    title: "How to Clean Marble Without Damaging It",
    subtitle: "Practical, chemistry-backed advice for maintaining natural stone surfaces in pristine condition.",
    excerpt: "Avoid common household cleaning errors that strip sealers and etch natural marble surfaces.",
    date: "2025-03-15",
    readTime: "4 min read",
    category: "Maintenance",
    image: "/images/applications/Bathroom.webp",
    relatedStoneSlugs: ["carrara-white-marble", "silver-grey-marble"],
    sections: [
      {
        heading: "The Golden Rule: Never Use Acidic or Abrasive Cleaners",
        paragraphs: [
          "Common supermarket bathroom and kitchen cleaners containing bleach, ammonia, vinegar, or citrus extracts will instantly react with calcium carbonate, leaving cloudy dull spots called chemical etching.",
          "Instead, clean natural stone using lukewarm water and a pH-neutral cleaner formulated specifically for natural stone, accompanied by soft microfiber cloths.",
        ],
      },
    ],
  },
  {
    slug: "marble-maintenance-guide-for-kitchens",
    title: "Marble Maintenance Guide for Kitchens",
    subtitle: "Long-term sealing, stain prevention, and care routines for culinary marble surfaces.",
    excerpt: "A comprehensive checklist for keeping your marble countertops, backsplashes, and islands immaculate year after year.",
    date: "2025-03-22",
    readTime: "5 min read",
    category: "Maintenance",
    image: "/images/applications/Counter top.webp",
    relatedStoneSlugs: ["calacatta-gold-marble", "carrara-white-marble", "black-pearl"],
    sections: [
      {
        heading: "Periodic Resealing Schedule",
        paragraphs: [
          "High-performance penetrating sealers soak into the microscopic pores of natural stone, forming an oleophobic and hydrophobic barrier. Performing a simple water droplet test every 6 to 12 months will indicate when your countertop is ready for a quick reseal application.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  const clean = slug.toLowerCase().trim();
  return journalArticles.find((a) => a.slug === clean);
}

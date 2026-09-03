export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const processes: ProcessStep[] = [
  {
    number: "01",
    title: "Sourcing",
    subtitle: "Direct Quarry Relationships",
    description:
      "Carefully establishing direct partnerships with premier natural stone quarries worldwide — including the crystalline marble mountains of Carrara, Italy and renowned quarry regions.",
  },
  {
    number: "02",
    title: "Stone Selection",
    subtitle: "Block & Slab Curation",
    description:
      "Expert evaluation of every individual block and slab for structural soundness, veining beauty, color purity, and density before it enters processing.",
  },
  {
    number: "03",
    title: "Cutting",
    subtitle: "Precision Dimensional Sawing",
    description:
      "Raw natural stone blocks are sawn into uniform slabs or custom project dimensions with high-precision gang saws and wire saws to maintain dimensional accuracy.",
  },
  {
    number: "04",
    title: "Finishing",
    subtitle: "Surface Character & Texture",
    description:
      "Applying calibrated surface treatments suited to architectural intent — including high mirror polish, soft matte honing, tactile brushed, and specialized finishes.",
  },
  {
    number: "05",
    title: "Quality Check",
    subtitle: "Rigorous Standards Inspection",
    description:
      "Every finished slab undergoes rigorous multi-point inspection for thickness tolerance, edge integrity, surface uniformity, and pattern fidelity.",
  },
  {
    number: "06",
    title: "Project Delivery",
    subtitle: "Secure Packing & Logistics",
    description:
      "Careful timber crating, protective interleaving, and coordinated freight delivery directly to project sites, ready for flawless installation.",
  },
];

export const specialServices: string[] = [
  "Customized Sizes & Slabs",
  "Tailored Surface Finishes",
  "Architectural Project Selection",
  "Bookmatching Consultation",
  "Custom Edge Detail Support",
  "Slab & Block Inspection",
  "Bulk & Commercial Project Supply",
  "Rigorous Quality Verification",
  "Dedicated Project Support",
];

export const capabilities: string[] = [
  "Block Sourcing & Selection",
  "Slab Sawing & Calibration",
  "Precision Surface Grinding",
  "High-Clarity Mirror Polishing",
  "Contemporary Matte Honing",
  "Leathered, Brushed & Antique Texturing",
  "Custom Dimensional Edge Profiling",
  "Multi-Point Quality Control",
  "Secure Heavy-Duty Timber Packing",
];

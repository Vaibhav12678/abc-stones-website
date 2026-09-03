export interface GroupFirm {
  name: string;
  location: string;
  city: string;
  state: string;
  role: string;
  specialization: string;
  badge: string;
}

export const groupFirms: GroupFirm[] = [
  {
    name: "ABC STONEX",
    location: "Kishangarh, Ajmer, Rajasthan",
    city: "Kishangarh",
    state: "Rajasthan",
    role: "Manufacturing Facility",
    specialization: "Granite Slabs and Calibrated Tiles Manufacturing",
    badge: "Manufacturing",
  },
  {
    name: "ROOP RAJAT GRANITE",
    location: "Malpura, Tonk, Rajasthan",
    city: "Malpura, Tonk",
    state: "Rajasthan",
    role: "Quarry & Mining",
    specialization: "Direct Mining of Pearl Black Granite Blocks",
    badge: "Active Quarry",
  },
  {
    name: "SHREE VEER TEJA GRANITE",
    location: "Pali, Rajasthan",
    city: "Pali",
    state: "Rajasthan",
    role: "Quarry & Mining",
    specialization: "Direct Mining of P. White Granite Blocks",
    badge: "Active Quarry",
  },
  {
    name: "ABC Micron",
    location: "Makrana, Rajasthan",
    city: "Makrana",
    state: "Rajasthan",
    role: "Mineral Processing",
    specialization: "Production & Manufacturing of Pure Marble Powder",
    badge: "Processing Plant",
  },
];

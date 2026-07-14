import type { RegionDetail } from "./types";

const connecticut: RegionDetail = {
  slug: "connecticut",
  overview: ["Connecticut Oversize Permits"],
  contacts: [
    {
      label: "Office",
      value: "Connecticut Bureau of Highway Operations Oversize/Overweight Permits",
    },
    {
      label: "Address",
      value: "P.O. Box 317546, Newington, Connecticut 06131-7546",
    },
    {
      label: "Contact",
      value: "(860) 594-2880",
      href: "tel:+1-860-594-2880",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity:
    "Single trip permits are valid for three (3) travel days. Loads 13′6″ wide or greater and/or over 14′ high, or 120′ long, can travel Tuesday through Thursday 9:00 a.m. – 4:00 p.m.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (ET)",
  legalDimensions: {
    length: "130′",
    height: "14′",
    axleWeights: [
      { group: "Single", weight: "22,400" },
      { group: "Tandem", weight: "40,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "80,000" },
    ],
  },
  routinePermitLimits: {
    height: "16′",
  },
  escorts: {
    miscellaneous: [
      "Divided Highways — Width 12′1″: 1 Rear",
      "Divided Highways — Width 13′7″: 2 (Front & Rear)",
      "Divided Highways — Width 15′: 3 (1 Front & 2 Rear)",
      "Divided Highways — Width over 13′5″ and Height over 15′ *: 2 Police escorts (Front & Rear)",
      "Divided Highways — Height 14′1″: 1 Front",
      "Divided Highways — Height 15′1″ or higher and Width 13′6″ or wider *: 3 (1 Front & Police escort front and rear)",
      "Divided Highways — Height 15′4″: 3 (1 Front & Police escort front and rear)",
      "Divided Highways — Length 100′1″: 1 Rear",
      "Divided Highways — Length 119′1″: 2 (Front and Rear)",
      "Undivided Highways — Width 12′1″: 1 Front",
      "Undivided Highways — Width 13′7″: 2 (Front & Rear)",
      "Undivided Highways — Width 15′: 3 (1 Front & 2 Rear)",
      "Undivided Highways — Width over 13′5″ and Height over 15′ *: 2 Police escorts (Front & Rear)",
      "Undivided Highways — Height 15′1″ or higher and Width 13′6″ or wider *: 3 (1 Front & Police escort front and rear)",
      "Undivided Highways — Height 15′4″ *: 3 (1 Front & Police escort front and rear)",
      "Undivided Highways — Length 80′1″: 1 Rear",
      "Undivided Highways — Length 100′1″: 2 (Front & Rear)",
      "Undivided Highways — Length 119′1″: 2 (Front & Rear)",
      "* Require Police escort.",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 120,000",
    "Gross Weight — 6 Axles: 130,000",
    "Gross Weight — 7 Axles: 140,000",
    "Gross Weight — 8 Axles: 160,000",
  ],
};

export default connecticut;

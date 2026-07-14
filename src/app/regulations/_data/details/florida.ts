import type { RegionDetail } from "./types";

const florida: RegionDetail = {
  slug: "florida",
  overview: ["Florida Oversize Overweight Permits"],
  contacts: [
    {
      label: "Office",
      value: "Department of Transportation Bar Annex Building Permit Section",
    },
    {
      label: "Address",
      value: "605 Suwanee M. S. 62, Tallahassee, Florida 32399",
    },
    {
      label: "Contact",
      value: "(850) 410-5777",
      href: "tel:+1-850-410-5777",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 5:00 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip oversize/overweight permits are valid for five (5) consecutive days.",
  operatingTime: "7:30 A.M. – 5:00 P.M. (ET)",
  legalDimensions: {
    length: "150′. No set maximum on overhang.",
    width: "16′",
    height: "16′",
    axleWeights: [
      { group: "Single", weight: "22,000" },
      { group: "Tandem", weight: "40,000 – 55,000" },
      { group: "Tridum", weight: "60,000 – 82,500" },
      { group: "Quad", weight: "66,000 – 110,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On 2-Lane Highways — Width over 12′ up to 14′ if pavement is 24′ or larger: 1 Front",
      "On 2-Lane Highways — Width over 12′ if pavement is less than 24′ wide: 2 (Front & Rear)",
      "On 2-Lane Highways — Width over 14′ to 15′ (each lane must be 12′ wide): 2 (Front & Rear)",
      "On 2-Lane Highways — Length 75′ to 95′ may require: 1 Rear",
      "On 2-Lane Highways — Length over 95′: 1 Rear",
      "On 2-Lane Highways — Height 14′6″ and over: 1 Front w/ Height Pole",
      "On 2-Lane Highways — Height over 16′: 2 (Front w/ Height Pole & Rear)",
      "On 2-Lane Highways — Rear overhang up to 20′ past the center of last axle on trailer or dolly (except truck cranes) considered on individual basis and may require escort: 1 Rear",
      "On 4-Lane Highways — Width over 12′ up to 14′: 1 Rear",
      "On 4-Lane Highways — Width over 14′ to 15′: 2 (Front & Rear)",
      "On 4-Lane Highways — Length 75′ to 95′ may require: 1 Rear",
      "On 4-Lane Highways — Length over 95′: 1 Rear",
      "On 4-Lane Highways — Height 14′6″ and over: 1 Front w/ Height Pole",
      "On 4-Lane Highways — Height over 16′: 2 (Front w/ Height Pole & Rear)",
      "On 4-Lane Highways — Rear overhang up to 20′ past the center of last axle on trailer or dolly (except truck cranes) considered on individual basis and may require escort: 1 Rear",
      "For State Police escorts, if needed, estimated cost is $1.50/mile/car + $20/hr/car.",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 112,000 (depends on outer bridge axle configuration and routes)",
    "Gross Weight — 6 Axles: 122,000 (depends on outer bridge axle configuration and routes)",
    "Gross Weight — 7 Axles: 142,000 (depends on outer bridge axle configuration and routes)",
    "Gross Weight — 8 Axles: 160,000 (depends on outer bridge axle configuration and routes)",
  ],
};

export default florida;

import type { RegionDetail } from "./types";

const missouri: RegionDetail = {
  slug: "missouri",
  overview: [
    "Missouri oversize and overweight permits are issued by the Missouri Department of Transportation, Motor Carrier Services Division, Permit Section. Single-trip and pre-issued permits are valid for seven travel days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and traffic-control needs.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Missouri Department of Transportation, Motor Carrier Services Division, Permit Section",
    },
    {
      label: "Address",
      value: "P.O. Box 893, Jefferson City, Missouri 65102",
    },
    {
      label: "Contact",
      value: "(573) 751-7100 / 1 (800) 877-8499",
      href: "tel:+1-573-751-7100",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 5:00 P.M. (CT)",
    },
  ],
  permitValidity:
    "Single-trip Missouri oversize permits are valid for seven (7) travel days; pre-issued permits are also issued for seven (7) days.",
  operatingTime: "7:30 A.M. – 5:00 P.M. (CT)",
  routinePermitLimits: {
    length: "150′",
    width: "16′",
    height: "16′. Over 17′ requires approval from utility companies.",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "46,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "72,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane & undivided highways — width over 12′4″ to 14′: 1 (front on 2-lane / rear on undivided)",
      "On 2-lane & undivided highways — width over 12′4″ to 14′ off designated highways: 1 front & 1 rear",
      "On 2-lane & undivided highways — width over 14′ to 16′: 1 front & 1 rear",
      "On interstate and divided multi-lane highways — width over 12′4″ to 16′: 1 rear",
    ],
    length: [
      "On 2-lane & undivided highways — length over 90′ for a combination unit, except divided highways: 1 rear",
    ],
    height: [
      "On 2-lane & undivided highways — height over 15′6″ (with route survey): 1 with high pole",
      "On interstate and divided multi-lane highways — height over 15′6″ (with route survey): 1 with high pole",
    ],
    miscellaneous: [
      "Special escort requirements may be specified whenever the size, speed or operation of the move requires them",
      "Flagmen may be required when the load equals or exceeds lane width, or on a 2-lane bridge where movement infringes on an adjacent lane; escorts may act as flagmen when needed",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 104,000",
    "Gross Weight — 6 Axles: 120,000",
    "Gross Weight — 7 Axles (1-2-4): 130,000",
    "Gross Weight — 7 Axles (1-2-3-1 & 1-3-2-1): 138,000",
    "Gross Weight — 7 Axles (1-2-2-2): 150,000",
    "Gross Weight — 8 Axles (1-3-4): 144,000",
    "Gross Weight — 8 Axles (all other configurations): 160,000",
    "Gross Weight — 9 Axles (1-4-4): 156,000",
  ],
};

export default missouri;

import type { RegionDetail } from "./types";

const montana: RegionDetail = {
  slug: "montana",
  overview: [
    "Montana oversize and overweight permits are issued by the Montana Department of Transportation, Motor Carrier Services Division. Single-trip permits are valid for three consecutive days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Montana Department of Transportation, Motor Carrier Services Division",
    },
    {
      label: "Address",
      value: "2550 Prospect Avenue, Helena, Montana 59601",
    },
    {
      label: "Contact",
      value: "(406) 444-7262",
      href: "tel:+1-406-444-7262",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (MT)",
    },
  ],
  permitValidity: "Single-trip permits are valid for three (3) consecutive days.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (MT)",
  routinePermitLimits: {
    length: "150′",
    width: "18′",
    height: "17′",
    axleWeights: [
      { group: "Single", note: "Depends on axle spacings", weight: "20,000" },
      { group: "Tandem", note: "Depends on axle spacings", weight: "48,000" },
      { group: "Tridum", note: "Depends on axle spacings", weight: "51,750" },
      { group: "Quad", note: "Depends on axle spacings", weight: "55,440" },
    ],
  },
  escorts: {
    width: [
      "On interstate — width over 16′6″: 1 rear",
      "On 2-lane or multi-lane non-interstate — width over 12′6″ up to 14′: 1 front",
      "On 2-lane or multi-lane non-interstate — main body over 14′ or overall width over 15′: 2 (front & rear)",
      "On non-interstate only (load not over 16′ wide or 120′ long) — width over 10′ and not equipped with required lights/signs: 2 (front & rear)",
    ],
    length: [
      "On interstate — length over 120′: 1 rear",
      "On 2-lane or multi-lane non-interstate — length over 110′: 1 rear",
    ],
    height: [
      "Height over 17′ (before permit application): route survey required",
    ],
    miscellaneous: [
      "Convoys — no more than 5 O/O loads needing escorts may convoy if width not over 14′ (or 15′ with projections) and not over 120′ long: 2 (front & rear)",
      "Convoys — no more than 5 vehicles needing escorts may convoy if any unit is over-length on 2-lane highways or over 110′ on interstate highways: 2 (front & rear)",
      "Convoy escort must display sign: ‘Oversize Load, Convoy Follows (# of vehicles).’",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 107,000",
    "Gross Weight — 6 Axles: 110,000",
    "Gross Weight — 7 Axles: 114,000",
    "Gross Weight — 8 Axles: 126,000",
  ],
};

export default montana;

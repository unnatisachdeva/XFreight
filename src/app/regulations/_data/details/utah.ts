import type { RegionDetail } from "./types";

const utah: RegionDetail = {
  slug: "utah",
  overview: [
    "Utah oversize and overweight permits are issued by the Utah Department of Transportation, Port of Entry Section. Single-trip permits are valid for four consecutive days (96 hours).",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Utah Department of Transportation, Port of Entry Section",
    },
    {
      label: "Address",
      value: "4501 South 2700 West, Salt Lake City, Utah 84119",
    },
    {
      label: "Contact",
      value: "(801) 965-4508",
      href: "tel:+1-801-965-4508",
    },
    {
      label: "Hours",
      value: "7:00 A.M. – 5:00 P.M. (MT)",
    },
  ],
  permitValidity: "Single-trip permits are valid for four (4) consecutive days (96 hours).",
  operatingTime: "7:00 A.M. – 5:00 P.M. (MT)",
  routinePermitLimits: {
    length: "No maximum length",
    width: "17′ (over requires special DOT approval)",
    height: "17′6″ (over requires special DOT approval)",
    axleWeights: [
      { group: "Single", weight: "29,500" },
      { group: "Tandem", weight: "50,000" },
      { group: "Tridum", weight: "61,750" },
      { group: "Quad", note: "Must be cleared through UDOT", weight: "See permit conditions" },
      { group: "Trunnion", weight: "50,000" },
    ],
  },
  escorts: {
    width: [
      "On all secondary highways — width of 12′: 1 front",
      "On all secondary highways — width of 14′ or more: 2 (front & rear)",
      "On all secondary highways — width over 17′ (plus 2 police vehicles): 2 (front & rear)",
    ],
    length: [
      "On all secondary highways — length of 105′–120′: 1 rear",
      "On all secondary highways — length over 120′: 2 (front & rear)",
    ],
    height: [
      "On all secondary highways — height of 16′ or more: 2 (front & rear with high pole)",
      "On all secondary highways — height over 17′6″ (notify utilities) or cannot maintain minimum posted speed: 2 (front & rear) + police / 2 (front & rear)",
    ],
    overhang: ["On all secondary highways — overhang of 20′ or more: 1"],
  },
  notes: [
    "Gross Weight — 5 Axles: 100,000",
    "Gross Weight — 6 Axles: 136,750",
    "Gross Weight — 7 Axles: 148,500",
    "Gross Weight — 8 Axles: 186,750",
  ],
};

export default utah;

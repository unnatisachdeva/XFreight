import type { RegionDetail } from "./types";

const washington: RegionDetail = {
  slug: "washington",
  overview: [
    "Washington State oversize and overweight permits are issued by the Washington State Department of Transportation. Single-trip permits involving weight are usually valid for one move; overdimensional-only permits may be issued for a month or a year.",
    "Permit approval depends on the proposed route, dimensions, axle weights and overhead/corner clearances.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Washington State Department of Transportation",
    },
    {
      label: "Address",
      value: "4582 Woodview Drive Southeast, Lacey, Washington 98503",
    },
    {
      label: "Contact",
      value: "(360) 704-6340 / 1 (800) 562-6902",
      href: "tel:+1-360-704-6340",
    },
    {
      label: "Hours",
      value: "7:00 A.M. – 5:00 P.M. (PT)",
    },
  ],
  operatingTime: "7:00 A.M. – 5:00 P.M. (PT)",
  routinePermitLimits: {
    length:
      "No overall length set; permit allows movement on routes the permittee can negotiate",
    width:
      "14′ or less on 2-lane highways; 32′ or less on multi-lane undivided highways; 20′ if opposing lanes separated by a physical barrier. Must be applied for in writing if over 16′.",
    height:
      "Over 16′ high requires written application demonstrating necessity and public interest. All loads over 14′ are governed by overhead-clearance obstacles.",
    axleWeights: [
      { group: "Single", weight: "22,000" },
      { group: "Tandem", weight: "43,000" },
      { group: "Tridum", weight: "65,000" },
      { group: "Quad", weight: "70,000" },
      { group: "Trunnion", weight: "43,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 11′: 2 (front & rear)",
      "On multiple-lane highways — width over 14′–20′: 1 rear",
      "On multiple-lane highways — width over 20′: 2 (front & rear)",
    ],
    length: [
      "On 2-lane highways — length over 105′: 1 rear",
      "On multiple-lane highways — length over 125′: 1 rear",
    ],
    height: [
      "On 2-lane highways — height over 14′6″ (city/county authorizations necessary for detours): 1 front with height pole",
      "On multiple-lane highways — height over 14′6″: 1 front with height pole",
    ],
    overhang: [
      "On 2-lane highways — front overhang (depends on routes): 1 front",
      "On 2-lane highways — rear overhang when load measured from center of last axle exceeds ⅓ of total length: 1 rear",
      "On multiple-lane highways — front overhang over 20′ measured from steering axle on 2-lane roads: 1 front",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 99,200 (variable depending on bridge formula)",
    "Gross Weight — 6 Axles: 108,000 (variable depending on bridge formula)",
    "Gross Weight — 7 Axles: 134,000 (variable depending on bridge formula)",
    "Gross Weight — 8 Axles: 156,000 (variable depending on bridge formula)",
  ],
};

export default washington;

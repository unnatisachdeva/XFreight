import type { RegionDetail } from "./types";

const tennessee: RegionDetail = {
  slug: "tennessee",
  overview: [
    "Tennessee oversize and overweight permits are issued by the Tennessee Department of Transportation. Single-trip permits are valid for six travel days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Tennessee Department of Transportation — TN Oversize Permits",
    },
    {
      label: "Address",
      value: "Suite 300, James K. Polk State Office Building, Nashville, Tennessee 37219",
    },
    {
      label: "Contact",
      value: "(615) 741-3821",
      href: "tel:+1-615-741-3821",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (CT)",
    },
  ],
  permitValidity: "Single-trip permits are issued for six (6) travel days.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (CT)",
  routinePermitLimits: {
    length: "120′",
    width: "16′",
    height: "15′",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "40,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "80,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 10′ up to 12′6″ where pavement width (excluding shoulders) is less than 24′: 1 front",
      "On 2-lane highways — width over 10′ up to 12′6″ at bridge structures where road width is less than 20′: 1 flagperson",
      "On 2-lane highways — width over 12′6″ up to 14′: 1 front",
      "On 4-lane highways — width over 12′6″ up to 14′: 1 rear",
      "On all highways — width over 14′ (if approved): 2 (front & rear)",
    ],
    height: [
      "On all highways — height over 13′6″ up to 15′: special permit with special routing, no escort",
      "On all highways — height over 15′ if approved, using height pole: 1 front",
    ],
    length: [
      "On all highways — length over 75′ up to 85′: needs light",
      "On all highways — length over 85′ up to 120′: 1 rear",
      "On all highways — length over 120′: 2 (front & rear)",
    ],
    miscellaneous: [
      "Moving houses: 2 (front & rear)",
      "Weight GVW over 150,000 lbs requires approval by TN DOT",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 100,000",
    "Gross Weight — 6 Axles: 120,000",
    "Gross Weight — 7 Axles: 140,000",
    "Gross Weight — 8 Axles: 160,000",
  ],
};

export default tennessee;

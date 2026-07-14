import type { RegionDetail } from "./types";

const northCarolina: RegionDetail = {
  slug: "north-carolina",
  overview: [
    "North Carolina oversize and overweight permits are issued by the North Carolina Department of Transportation Permit Unit. Single-trip permits are valid for ten calendar days; return trips must be requested at the time of application.",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "North Carolina Department of Transportation, Permit Unit",
    },
    {
      label: "Address",
      value: "1425 Rock Quarry Road, Suite 109-110, Raleigh, North Carolina 27610",
    },
    {
      label: "Contact",
      value: "1 (888) 574-6683 / (919) 733-7154",
      href: "tel:+1-888-574-6683",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (ET); no calls after 4:00 P.M.",
    },
  ],
  permitValidity:
    "Single-trip permits are valid for ten (10) calendar days. A return trip must be requested at the time of application.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (ET); no calls after 4:00 P.M.",
  routinePermitLimits: {
    length: "No set limit; beams and girders 120′",
    width: "15′ depending on load",
    height:
      "No set limits; controlled by clearances on chosen routes. Loads over 14′ high must be submitted 2 days in advance.",
    axleWeights: [
      { group: "Steer", weight: "12,000" },
      { group: "Single", weight: "25,000" },
      { group: "Tandem", weight: "50,000" },
      { group: "Tridum", weight: "60,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 12′ up to 14′: 1 front",
      "On 2-lane highways — width 14′1″–15′: 1 front / 1 rear",
      "On multi-lane highways — width over 12′ up to 15′: 1 rear",
      "On all highways — width over 14′: 2 (front & rear)",
    ],
    length: [
      "On all highways — length over 150′: 2 (front & rear)",
    ],
    height: [
      "On all highways — height over 14′5″: 1 front with height pole",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 112,000 (must have 51′ wheelbase)",
    "Gross Weight — 6 Axles: 120,000 (must have 51′ wheelbase)",
    "Gross Weight — 7 Axles: 132,000 (must have 51′ wheelbase)",
  ],
};

export default northCarolina;

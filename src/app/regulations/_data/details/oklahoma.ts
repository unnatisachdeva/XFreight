import type { RegionDetail } from "./types";

const oklahoma: RegionDetail = {
  slug: "oklahoma",
  overview: [
    "Oklahoma oversize and overweight permits are issued by the Oklahoma Department of Public Safety, Size and Weights Unit. Single-trip permits are valid for three consecutive days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Oklahoma Department of Public Safety, Size and Weights Unit",
    },
    {
      label: "Address",
      value: "2401 NW 23rd St. Ste. 45, Oklahoma City, Oklahoma 73107",
    },
    {
      label: "Contact",
      value: "1 (877) 425-2390 / (405) 425-7012",
      href: "tel:+1-877-425-2390",
    },
    {
      label: "Hours",
      value: "7:00 A.M. – 6:45 P.M. (CT)",
    },
  ],
  permitValidity: "Single-trip permits are valid for three (3) consecutive days.",
  operatingTime: "7:00 A.M. – 6:45 P.M. (CT)",
  routinePermitLimits: {
    length: "No maximum",
    width: "16′",
    height: "21′ on certain routes",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Steering axle", weight: "15,000" },
      { group: "Tandem", weight: "40,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "65,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 12′ up to 14′: 1 front",
      "On 2-lane highways — width over 14′: 2 (front & rear)",
      "On multi-lane highways — width over 12′ up to 16′: 1 rear",
      "On multi-lane highways — width over 16′ (on all highways and roads): 2 (front & rear)",
    ],
    length: [
      "On 2-lane highways — length over 80′: 1 front",
      "On 2-lane highways — length over 100′: 2 (front & rear)",
    ],
    height: [
      "On 2-lane highways — height over 14′6″: 2 (front & rear)",
      "On 2-lane highways — height at 15′9″: must contact all public utilities and railroads in advance; 2 front with height pole + 1 rear",
      "On multi-lane highways — height over 14′6″: 2 (front & rear)",
      "On multi-lane highways — height at 15′9″ or over: must contact all public utilities and railroads in advance; 2 front with height pole + 1 rear",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles (steering, tandem, tandem): 95,000",
    "Gross Weight — 6 Axles (steering, tandem, tridum): 115,000",
    "Gross Weight — 7 Axles (steering, tridum, tridum): 135,000",
    "Gross Weight — 8 Axles (steering, tandem, tandem, tridum): 150,000",
  ],
};

export default oklahoma;

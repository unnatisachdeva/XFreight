import type { RegionDetail } from "./types";

const kentucky: RegionDetail = {
  slug: "kentucky",
  overview: [
    "Kentucky oversize and overweight permits are issued by the Kentucky Department of Vehicle Regulation. Single-trip permits are valid for ten calendar days.",
    "Permit approval depends on the proposed route, vehicle configuration, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Kentucky Department of Vehicle Regulation",
    },
    {
      label: "Address",
      value: "200 Metro Street, Frankfort, Kentucky 40602",
    },
    {
      label: "Contact",
      value: "(502) 564-7150",
      href: "tel:+1-502-564-7150",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for ten (10) calendar days.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (ET)",
  routinePermitLimits: {
    length: "75′ on 2-lane roads; 120′ on 4-lane divided highways",
    width: "16′",
    height: "15′6″",
    overhang: "35′ overall",
    axleWeights: [
      { group: "Single", weight: "24,000" },
      { group: "Tandem", note: "5 axles", weight: "45,000" },
      { group: "Tandem", note: "6 or more axles", weight: "48,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "80,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — over 10′6″ to 12′: 1 rear",
      "On 2-lane highways — over 12′ to 14′: 2 (front & rear)",
      "On 4+ lane divided highways — over 12′: 1 rear",
      "On 4+ lane divided highways — over 14′ may require: 2 (front & rear)",
    ],
    length: [
      "On 2-lane highways — over 75′ to 120′: 1 front",
      "On 2-lane highways — over 120′: 1 front, 2 rear",
      "On 4+ lane divided highways — over 120′: 1 front, 2 rear",
    ],
    height: ["On all roads — over 15′: 1 front with height pole"],
    miscellaneous: [
      "On 4+ lane divided highways — overhang over 10′: 1 at point of overhang",
      "On 4+ lane divided highways — where conditions dictate the need: 2 (front & rear)",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 96,000",
    "Gross Weight — 6 Axles: 120,000",
    "Gross Weight — 7 Axles: 148,000",
  ],
};

export default kentucky;

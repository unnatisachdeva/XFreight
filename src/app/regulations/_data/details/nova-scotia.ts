import type { RegionDetail } from "./types";

const novaScotia: RegionDetail = {
  slug: "nova-scotia",
  overview: [
    "Nova Scotia oversize and overweight permits are issued by the Nova Scotia Department of Transportation, Motor Vehicle Inspection Division. Permits are valid for three travel days.",
    "Permit approval depends on the proposed route, dimensions and axle weights.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Nova Scotia Department of Transportation, Motor Vehicle Inspection Division",
    },
    {
      label: "Address",
      value: "P.O. Box 156, Halifax, Nova Scotia, Canada B3J 2M4",
    },
    {
      label: "Contact",
      value: "(902) 424-5536",
      href: "tel:+1-902-424-5536",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:30 P.M. (AT)",
    },
  ],
  permitValidity: "Permits are valid for three (3) travel days.",
  operatingTime: "7:30 A.M. – 4:30 P.M. (AT)",
  routinePermitLimits: {
    axleWeights: [
      { group: "Single", weight: "25,000 lbs / 11,340 kgs" },
      { group: "Steering", weight: "17,630 lbs / 8,000 kgs" },
      { group: "Tandem", weight: "50,040 lbs / 22,700 kgs" },
      { group: "Tridum", weight: "65,030 lbs / 29,500 kgs" },
      { group: "Jeep / Booster", weight: "Always needs permit" },
    ],
  },
  escorts: {
    width: [
      "Width 12′–14′ on highways other than 100-series: 1 front",
      "Width 14′1″–17′ on divided highway: 1 rear",
      "Width 14′1″–17′ on undivided highway: 1 front",
      "Width 17′–22′ (arrange in advance): 2 (front & rear) + RCMP",
    ],
    length: [
      "Length 82′–100′: 1 rear",
      "Length over 100′ (arrange in advance): 2 (front & rear)",
    ],
  },
};

export default novaScotia;

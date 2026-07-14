import type { RegionDetail } from "./types";

const ontario: RegionDetail = {
  slug: "ontario",
  overview: [
    "Ontario oversize and overweight permits are issued by the Ontario Ministry of Transportation, Compliance Branch. Single-trip permits are valid for three to five travel days.",
    "Permit approval depends on the proposed route, dimensions, axle spacings, weights and tire sizes.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Ontario Ministry of Transportation, Compliance Branch",
    },
    {
      label: "Address",
      value: "Main Floor East Building, 301 St. Paul, 3rd Floor, St. Catharines, Ontario, Canada L2R 7R4",
    },
    {
      label: "Contact",
      value: "(416) 246-7166",
      href: "tel:+1-416-246-7166",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for three (3) to five (5) travel days.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (ET)",
  routinePermitLimits: {
    length: "149′ (over requires special approval)",
    width: "16′4″",
    height: "14′ (over requires special clearance checks for routes traveled)",
    weight:
      "Axle and gross weights depend on axle spacings, weight and tire size",
    axleWeights: [
      {
        group: "Single, Tandem, Tridum & Quad",
        note: "Depend on axle spacings, weight and tire size",
        weight: "See permit conditions",
      },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width 13′1″ and over: 1 front",
      "On multi-lane highways — width 13′1″ and over: 1 rear",
    ],
    length: [
      "On 2-lane highways — length 120′7″ and over: 1",
      "On multi-lane highways — length 120′7″ and over: 1",
    ],
    miscellaneous: [
      "Private escorts are allowed for loads up to 16′4″ wide; official escorts are required thereafter",
      "Escort requirements for length, height and weight will be indicated on individual permits",
    ],
  },
};

export default ontario;

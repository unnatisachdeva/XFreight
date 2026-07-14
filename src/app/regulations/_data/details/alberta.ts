import type { RegionDetail } from "./types";

const alberta: RegionDetail = {
  slug: "alberta",
  overview: ["Alberta Oversize Permits & Regulations"],
  contacts: [
    {
      label: "Office",
      value: "Alberta Motor Transport Branch",
    },
    {
      label: "Address",
      value:
        "4th Floor Provincial Building, 4920 51st Street, Red Deer, Alberta, Canada T6N6K8",
    },
    {
      label: "Contact",
      value: "(403) 342-7138",
      href: "tel:+1-403-342-7138",
    },
    {
      label: "Hours",
      value: "6:00 A.M. – 10:00 P.M. 7:15 A.M. – 3:30 P.M. Sat. & Sun. (MT)",
    },
  ],
  permitValidity: "Permits are valid for two (2) consecutive days.",
  operatingTime:
    "6:00 A.M. – 10:00 P.M. 7:15 A.M. – 3:30 P.M. Sat. & Sun. (MT)",
  routinePermitLimits: {
    length: "Depends on routes and equipment.",
    width: "Depends on routes and what is being hauled.",
    height: "Depends on routes and equipment.",
    axleWeights: [
      { group: "Steering axle", weight: "12,100" },
      { group: "Single", weight: "12,100" },
      { group: "Tandem", weight: "55,000" },
      { group: "Tridum", weight: "59,400" },
      { group: "Quad", weight: "59,400" },
    ],
  },
  escorts: {
    width: [
      "Over 12’7” up to and including 14’7” — 1 Front",
      "14’7” and over — 2 (Front & Rear)",
    ],
    length: [
      "Varies greatly depending on season, road conditions and dimensions — 1 or more",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 122,000",
    "Gross Weight — 6 Axles: 126,500",
    "Gross Weight — 7 Axles: Depends on the tire size and number of tires",
    "Gross Weight — 8 Axles: Depends on the tire size and number of tires",
  ],
};

export default alberta;

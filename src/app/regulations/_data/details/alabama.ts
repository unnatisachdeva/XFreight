import type { RegionDetail } from "./types";

const alabama: RegionDetail = {
  slug: "alabama",
  overview: ["Alabama Oversize Permits & Regulations"],
  contacts: [
    {
      label: "Office",
      value: "Alabama State Highway Department",
    },
    {
      label: "Address",
      value: "1409 Coliseum Boulevard, Montgomery, Alabama 36110",
    },
    {
      label: "Contact",
      value: "(334) 834-1092",
      href: "tel:+1-334-834-1092",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:45 P.M. (CT)",
    },
  ],
  permitValidity: "Single trip permits are valid for five (5) consecutive days.",
  operatingTime: "8:00 A.M. – 4:45 P.M. (CT)",
  routinePermitLimits: {
    length: "150′",
    overhang: "Maximum overhang of 20′",
    width: "16′. Over 16′ cannot use interstate.",
    height: "16′",
    axleWeights: [
      { group: "Single (Interstate)", weight: "22,000" },
      { group: "Tandem (Interstate)", weight: "44,000" },
      { group: "Tridum (Interstate)", weight: "66,000" },
      { group: "Quad (Interstate)", weight: "88,000" },
      { group: "Tandem (Secondary)", spacing: "14′", weight: "40,000" },
      { group: "Tandem (Secondary)", spacing: "15′", weight: "42,000" },
      { group: "Tandem (Secondary)", spacing: "16′", weight: "44,000" },
      { group: "Tridum (Secondary)", spacing: "5′ or less", weight: "48,000" },
      { group: "Tridum (Secondary)", spacing: "Over 5′", weight: "51,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On 2-Lane Highways — Overhang of bulldozer blade: 1 Front",
      "On 4-Lane Highways — Overhang of bulldozer blade: 1 Rear",
      "On All Highways — Width over 12′: 2 (Front & Rear)",
      "On All Highways — Length over 85′ to 105′: 1 Rear",
      "On All Highways — Length over 105′: 2 (Front & Rear)",
      "On All Highways — Height over 16′: 1 Front",
      "On All Highways — Overhang in rear more than 5′: 1 Rear",
      "On All Highways — Overhang in front more than 10′: 1 Front",
      "On All Highways — Overhang of bulldozer blade (minimum required): 1",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 110,000",
    "Gross Weight — 6 Axles: 122,000",
    "Gross Weight — 7 Axles: 142,000",
    "Gross Weight — 8 Axles: 150,000",
  ],
};

export default alabama;

import type { RegionDetail } from "./types";

const districtOfColumbia: RegionDetail = {
  slug: "district-of-columbia",
  overview: ["District of Columbia Oversize Permits"],
  contacts: [
    {
      label: "Office",
      value: "District of Columbia Dept. of Highway and Traffic Representative",
    },
    {
      label: "Address",
      value: "941 North Capitol, Ste. 2300, Washington, D.C. 20001",
    },
    {
      label: "Contact",
      value: "(202) 442-4670",
      href: "tel:+1-202-442-4670",
    },
    {
      label: "Hours",
      value: "9:00 A.M. – 3:00 P.M. (ET)",
    },
  ],
  permitValidity: "A single trip permit is valid for one (1) trip only, usually five (5) consecutive days.",
  operatingTime: "9:00 A.M. – 3:00 P.M. (ET)",
  legalDimensions: {
    length: "The maximum length is determined by the routes traveled. Extreme lengths will require night travel.",
    width: "The maximum width is determined by the routes traveled. Vehicles will be allowed to travel if the street can handle the width. Extreme widths will require night travel.",
    height: "The maximum height is determined by overhead clearance. Extreme height will require night travel.",
    weight:
      "The maximum weight allowed will be considered on a case-by-case basis and depends on where the vehicle will be traveling. No one axle can exceed 31,000 lbs.",
    axleWeights: [
      { group: "Single", weight: "31,000 per axle" },
      { group: "Tandem", weight: "31,000 per axle" },
      { group: "Tridum", weight: "31,000 per axle" },
      { group: "Quad", weight: "31,000 per axle" },
    ],
  },
  escorts: {
    width: ["Over 12′: 1 Front"],
    height: ["Over 13′6″: 1 Front"],
    length: ["80′ or more: 1 Front"],
    weight: [
      "Any axle weight over 31,000 lbs: 1",
      "Weight over 79,000 lbs: 1 Front",
    ],
  },
};

export default districtOfColumbia;

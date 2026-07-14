import type { RegionDetail } from "./types";

const yukon: RegionDetail = {
  slug: "yukon",
  overview: [
    "Yukon Territory oversize and overweight permits are issued by the Yukon Department of Highways and Public Works. Permits are valid for one trip; the number of days is not specified.",
    "Permit approval depends on the proposed route, dimensions and axle weights.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Yukon Territory Department of Highways and Public Works, Government of Yukon",
    },
    {
      label: "Address",
      value: "P.O. Box 2703, Whitehorse, Yukon, Canada Y1A 2C6",
    },
    {
      label: "Contact",
      value: "(403) 867-5729",
      href: "tel:+1-403-867-5729",
    },
    {
      label: "Hours",
      value: "24/7 (PT)",
    },
  ],
  permitValidity: "Permits are valid for one trip; the number of days is not specified.",
  operatingTime: "24/7 (PT)",
  routinePermitLimits: {
    length: "Determined by routes traveled",
    width: "Determined by routes traveled",
    height: "Determined by routes traveled",
    axleWeights: [
      { group: "Single", weight: "25,350" },
      { group: "Tandem", weight: "51,920" },
      { group: "Tridum", weight: "59,840" },
      { group: "Quad", weight: "59,840" },
    ],
  },
  escorts: {
    width: [
      "Width 10′6″ – 12′6″: 1",
      "Width over 12′6″: 2 (front & rear)",
    ],
    length: [
      "Length 85′5″ – 101′8″: 1",
      "Length 101′9″ and over: 2 (front & rear)",
    ],
    overhang: [
      "Overhang over 9′10″ beyond turning axis: 1",
      "Rear overhang over 21′4″ beyond last axle: 1",
      "Overhang beyond center line on curve: 2 (front & rear)",
    ],
    height: ["Excessive height (case-by-case): 1"],
    miscellaneous: [
      "Unique loads over 101′9″ long and 16′ wide: police escort",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 117,260",
    "Gross Weight — 6 Axles: 125,180",
    "Gross Weight — 7 Axles: 133,100",
    "Gross Weight — 8 Axles: 177,100",
  ],
};

export default yukon;

import type { RegionDetail } from "./types";

const britishColumbia: RegionDetail = {
  slug: "british-columbia",
  overview: ["British Columbia Oversize Permits"],
  contacts: [
    {
      label: "Office",
      value: "British Columbia Ministry of Solicitor General Motor Carrier Division",
    },
    {
      label: "Address",
      value: "Victoria, British Columbia, Canada V8T5A3",
    },
    {
      label: "Contact",
      value: "1 (800) 559-9688",
      href: "tel:+1-800-559-9688",
    },
    {
      label: "Hours",
      value: "8:30 A.M. – 4:30 P.M. (PT)",
    },
  ],
  permitValidity:
    "Oversize/overweight permits are valid for one trip only. Permittee gives the starting date and the number of days that it will take to travel through British Columbia.",
  operatingTime: "8:30 A.M. – 4:30 P.M. (PT)",
  legalDimensions: {
    length: "101′",
    width: "14′6″",
    height: "15′6″",
    axleWeights: [
      { group: "Single", weight: "29,700" },
      { group: "Tandem", weight: "50,600" },
      { group: "Tridum", weight: "63,800" },
      { group: "Quad", weight: "Not allowed" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On 2-Lane Highways — Width 12′6″ up to and including 14′6″: 1 Front",
      "On 2-Lane Highways — Width 10′6″ up to and including 11′6″: Escort may not be required if tractor has rotating beacon on cab’s roof",
      "On 2-Lane Highways — Overhang 9′11″ Front or 20′5″ Rear, or more: 1 Escort",
      "On 2-Lane Highways — Length 90′3″ or more: 1 Rear",
      "On 4 or More Lane Highways — Width 10′6″ up to and including 14′6″: 1 Rear",
      "On 4 or More Lane Highways — Width 10′6″ up to and including 11′6″: Escort may not be required if tractor has rotating flashing beacon on cab’s roof",
      "On 4 or More Lane Highways — Length 90′3″ or more: 1 Rear",
      "On 4 or More Lane Highways — Overhang 9′11″ front or 20′5″ rear, or more: 1 Escort",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 114,400 lbs",
    "Gross Weight — 6 Axles: 133,377 lbs",
    "Gross Weight — 7 Axles: 140,800 lbs",
  ],
};

export default britishColumbia;

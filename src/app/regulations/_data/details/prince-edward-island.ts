import type { RegionDetail } from "./types";

const princeEdwardIsland: RegionDetail = {
  slug: "prince-edward-island",
  overview: [
    "Prince Edward Island oversize and overweight permits are issued by the Department of Transportation & Public Works, Highway Safety Division. Permits are valid for 24 hours.",
    "No set maximums for length, width or height; permits are issued based on road capacity and clearance.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Prince Edward Island Department of Transportation & Public Works, Highway Safety Division",
    },
    {
      label: "Address",
      value: "P.O. Box 2000, Charlottetown, Prince Edward Island, Canada C1A 7N8",
    },
    {
      label: "Contact",
      value: "(902) 368-5200",
      href: "tel:+1-902-368-5200",
    },
    {
      label: "Hours",
      value: "8:30 A.M. – 5:00 P.M. (AT)",
    },
  ],
  permitValidity: "Permits are valid for 24 hours.",
  operatingTime: "8:30 A.M. – 5:00 P.M. (AT)",
  routinePermitLimits: {
    length:
      "No maximum established; permit issued if roads can handle. Escorts required if longer than 80′.",
    width:
      "No maximum established; permit issued if road can handle. Escorts required for all loads over 12′ wide.",
    height:
      "No maximum established; permit issued if adequate clearance exists.",
    weight: "Depends on tire sizes and axle spacings",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "58,000" },
      { group: "Tridum", weight: "74,000" },
      { group: "Quad", weight: "79,200" },
    ],
  },
  escorts: {
    width: ["Width 12′ and over: 2 (front & rear)"],
    length: ["Length 90′ and over: 2 (front & rear)"],
    miscellaneous: [
      "Government reserves the right to add escorts when deemed necessary",
      "Escort vehicles must have a flashing amber light mounted on top and a wide-load sign or ‘D’ sign attached to the front",
    ],
  },
};

export default princeEdwardIsland;

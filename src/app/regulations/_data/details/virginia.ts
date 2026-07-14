import type { RegionDetail } from "./types";

const virginia: RegionDetail = {
  slug: "virginia",
  overview: [
    "Virginia oversize and overweight permits are issued by the Virginia Department of Motor Vehicles, Motor Carrier Services, Hauling Permit Section. Single-trip permits are valid for thirteen consecutive days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Virginia Department of Motor Vehicles, Motor Carrier Services, Hauling Permit Section",
    },
    {
      label: "Address",
      value: "P.O. Box 23269, Richmond, Virginia 23269",
    },
    {
      label: "Contact",
      value: "(804) 497-7135",
      href: "tel:+1-804-497-7135",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 12:30 P.M. and 1:30 P.M. – 4:00 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for thirteen (13) consecutive days.",
  operatingTime: "8:00 A.M. – 12:30 P.M. and 1:30 P.M. – 4:00 P.M. (ET)",
  routinePermitLimits: {
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", note: "Depending on axle spacings", weight: "44,000" },
      { group: "Tridum", note: "Depending on axle spacings", weight: "64,000" },
      { group: "Quad", note: "Depending on axle spacings", weight: "64,500" },
    ],
  },
  escorts: {
    width: [
      "Non-interstate — width 12′1″–14′: 2 (front & rear)",
      "Interstate — width 12′1″–14′: 1 rear",
      "Non-interstate — width 14′1″–16′: 3 (2 front & 1 rear)",
      "Interstate — width 14′1″–16′: 2 (front & rear)",
      "Non-interstate — width 16′1″–18′: 4 (2 front & 2 rear)",
      "Interstate — width 16′1″–18′: 3 (1 front & 2 rear)",
    ],
    height: [
      "Non-interstate — height over 14′5″: 1 front with height pole 3″ above load height",
      "Interstate — height over 14′5″: 1 front with height pole",
    ],
    length: [
      "Non-interstate — length 85′–120′: 1 rear",
      "Interstate — length 85′–120′: 0",
      "Non-interstate / interstate — length 120′1″–150′: 1 rear",
      "Non-interstate / interstate — length 150′1″ and over: 2 (front & rear)",
    ],
    overhang: [
      "Non-interstate / interstate — overhang 10′ and over front: 1 front",
      "Non-interstate / interstate — overhang 15′ and over rear: 1 rear",
    ],
    miscellaneous: [
      "Loads over 12′ wide or over 75′ long need amber flashing lights or escorts with amber flashing lights",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 110,000 (must have 64′ of spacing)",
    "Gross Weight — 6 Axles: 135,000 (must have 64′ of spacing)",
    "Gross Weight — 7 Axles: 150,000 (must have 64′ of spacing)",
    "Gross Weight — 8 Axles: 150,000 (must have 64′ of spacing)",
  ],
};

export default virginia;

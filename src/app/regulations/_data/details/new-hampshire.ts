import type { RegionDetail } from "./types";

const newHampshire: RegionDetail = {
  slug: "new-hampshire",
  overview: [
    "New Hampshire oversize and overweight permits are issued by the New Hampshire Department of Transportation, Bureau of Highway Maintenance.",
    "Permit approval depends on the proposed route, dimensions, axle weights and bridge-review requirements.",
  ],
  contacts: [
    {
      label: "Office",
      value: "New Hampshire Department of Transportation, Bureau of Highway Maintenance",
    },
    {
      label: "Address",
      value: "John O. Morton Building, P.O. Box 483, Concord, New Hampshire 03302",
    },
    {
      label: "Contact",
      value: "(603) 271-2691",
      href: "tel:+1-603-271-2691",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:00 P.M. (ET)",
    },
  ],
  operatingTime: "8:00 A.M. – 4:00 P.M. (ET)",
  routinePermitLimits: {
    length: "90′",
    width: "16′",
    height:
      "16′. Over 13′6″ requires a route survey. No permits for height over 15′ on all turnpikes.",
    axleWeights: [
      { group: "Single", weight: "25,000" },
      { group: "Tandem", weight: "50,000" },
      { group: "Tridum", weight: "70,000" },
      { group: "Quad", weight: "85,000" },
    ],
  },
  escorts: {
    width: [
      "Width 12′ and over: 1 front",
      "Police escort — width 18′ and over ($132 per half day; State Police need 48-hour notice)",
    ],
    length: [
      "Length 80′ and over: 1 front",
      "Police escort — length 100′ and over ($132 per half day; State Police need 48-hour notice)",
    ],
    overhang: [
      "Overhang 15′ and over with 12′ width: 1 front + 1 rear",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 130,000",
    "Gross Weight — 6 Axles: 140,000",
    "Gross Weight — 7 Axles: 150,000",
    "Gross Weight — 8 Axles: 150,000 (goes to bridge division)",
    "OS/OW permits must be submitted to Bridge Design for review when any bridge has a load posting or weight restriction, any axle spacing is less than 4′-0″, or various single-unit/combination axle weight thresholds are exceeded",
  ],
};

export default newHampshire;

import type { RegionDetail } from "./types";

const maryland: RegionDetail = {
  slug: "maryland",
  overview: [
    "Maryland oversize and overweight permits are issued by the Maryland State Highway Administration, Hauling Permit Section. Single-trip permits are valid for five travel days, excluding Saturdays and Sundays.",
    "Permit approval depends on the proposed route, vehicle configuration, dimensions, axle weights and traffic-control needs.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Maryland State Highway Administration, Hauling Permit Section",
    },
    {
      label: "Address",
      value: "7491 Connelley Drive, Hanover, Maryland 21076",
    },
    {
      label: "Contact",
      value: "(410) 582-5757 / (800) 846-6435",
      href: "tel:+1-410-582-5757",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:30 P.M. (ET); closed for lunch 12:00 p.m. – 1:00 p.m.",
    },
  ],
  permitValidity:
    "Single-trip permits are valid for five (5) travel days. Saturday and Sunday are excluded from these five days.",
  operatingTime:
    "7:30 A.M. – 4:30 P.M. (ET); closed for lunch 12:00 p.m. – 1:00 p.m.",
  routinePermitLimits: {
    length: "120′",
    height: "16′",
    axleWeights: [
      { group: "Single", weight: "27,000" },
      { group: "Tandem", weight: "52,000" },
      { group: "Tridum", weight: "63,000" },
    ],
  },
  escorts: {
    width: [
      "On all highways — width over 13′ except manufactured housing: 1",
      "On all highways — width 14′ or more, including manufactured housing: 2 (front & rear)",
    ],
    length: [
      "On all highways — length over 85′: 1",
      "On all highways — length 140′ or more: 2 (front & rear)",
    ],
    height: [
      "On all highways — height 14′6″ or more (unless route requires escort for lesser height): 1 with height pole",
    ],
    miscellaneous: [
      "On all highways — weight over 60 tons (120,000 lbs) GVW: 1",
      "On all highways — when weather or road conditions justify: 1, or 2 (front & rear) if conditions warrant",
      "On all highways — traveling a road too narrow to allow other vehicles to pass safely in either direction: 2 (front & rear)",
      "On all highways — traveling against traffic that will have to be diverted or stopped: 2 (front & rear)",
      "Police escort required when width is 16′ or more, weight is over 65 tons (130,000 lbs) GVW, or as the Maryland State Highway Administration requires for traffic diversion/control",
    ],
  },
  notes: [
    "For loads 120,000 to 150,000 lbs GVW on interstates only, maximum is 27,000 lbs per axle",
  ],
};

export default maryland;

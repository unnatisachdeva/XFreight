import type { RegionDetail } from "./types";

const manitoba: RegionDetail = {
  slug: "manitoba",
  overview: [
    "Manitoba oversize and overweight permits are issued by the Manitoba Department of Highways and Transportation, Motor Carrier Division. Permits are valid for the estimated duration of the trip.",
    "Approval depends on the proposed route, vehicle configuration, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Manitoba Department of Highways and Transportation, Motor Carrier Division",
    },
    {
      label: "Address",
      value: "1695 Sargent Ave, Winnipeg, Manitoba, Canada R3H 0C4",
    },
    {
      label: "Contact",
      value: "1 (877) 812-0009, dial *#8 then #1",
      href: "tel:+1-877-812-0009",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 6:00 P.M. (CT)",
    },
  ],
  permitValidity: "Permits are valid for the estimated duration of the trip.",
  operatingTime: "7:30 A.M. – 6:00 P.M. (CT)",
  routinePermitLimits: {
    length: "98′6″",
    width: "15′",
    height: "15′",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "48,300" },
      { group: "Tridum", weight: "60,500" },
      { group: "Quad", weight: "Not allowed" },
      {
        group: "More than 131,900 lbs",
        note: "Depends on axle spreads for RTAC",
        weight: "See permit conditions",
      },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width 15′1″: 2 (front & rear)",
      "On 4-lane divided highways — width 15′1″ to 20′: 1 rear",
      "On 4-lane divided highways — width 15′1″ and over: 2 (front & rear)",
      "Width over 9.0 metres: consult Highways Department",
    ],
    length: [
      "On 2-lane highways — length 98′5″: 2 (front & rear)",
      "On 4-lane divided highways — P.T.H. No. 1E from Falcon Lake to MB/ON border: 1 front",
      "On 4-lane divided highways — P.T.H. No. 1W from Headingley to P.T.H. 100: 1 front",
    ],
    miscellaneous: [
      "Any load 12′1½″ wide or over: 1 or more escorts",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 108,724",
    "Gross Weight — 6 Axles: 121,000",
    "Gross Weight — 7 Axles: 133,100",
    "Gross Weight — 8 Axles: Loads over 132,000 lbs need special approval",
  ],
};

export default manitoba;

import type { RegionDetail } from "./types";

const mississippi: RegionDetail = {
  slug: "mississippi",
  overview: [
    "Mississippi oversize and overweight permits are issued by the Mississippi Department of Transportation Permit Division. Single-trip permits are valid for three consecutive days, with weekend travel rules based on the permit type.",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions such as pavement and bridge clearance.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Mississippi Department of Transportation Permit Division",
    },
    {
      label: "Address",
      value: "P.O. Box 1850, Jackson, Mississippi 39215",
    },
    {
      label: "Contact",
      value: "1 (888) 737-0061 / (601) 359-1717",
      href: "tel:+1-888-737-0061",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:30 P.M. (CT)",
    },
  ],
  permitValidity:
    "Single-trip permits are valid for three (3) consecutive days. Weekend travel is permitted until 30 minutes before sunset on Saturday. If the permit includes 24-hour movement, Sunday travel is allowed; otherwise Sunday travel is not allowed unless the load is a sealed container.",
  operatingTime: "7:30 A.M. – 4:30 P.M. (CT)",
  routinePermitLimits: {
    length: "120′ (no set maximum overhang)",
    width: "20′",
    height:
      "17′. Any dimensions 15′8″ and over require a route survey.",
    axleWeights: [
      { group: "Single (steering axle)", weight: "12,000" },
      { group: "Tandem", weight: "48,000" },
      { group: "Tridum", note: "63,000 on interstates", weight: "57,000" },
      { group: "Quad", note: "72,000 on interstates", weight: "64,000" },
    ],
  },
  escorts: {
    length: [
      "On all highways — overall length 95′ up to 105′: 1 rear",
      "On all highways — overall length over 105′: 2 (front & rear)",
    ],
    width: [
      "On all highways — width over 13′: 1 (front on 2-lane / rear on 4-lane)",
    ],
    overhang: [
      "On all highways — overhang of 15′ or more in front: 1 front",
      "On all highways — overhang of 15′ or more in rear: 1 rear",
    ],
    height: ["Height of loads controlled by route clearance"],
    miscellaneous: [
      "Weight on loads is controlled by pavement and bridge clearance",
      "Rear escort for width may be replaced by two 5″ flashing amber lights with 500 ft visibility mounted approximately 6′ above the road surface on the rear corners of the load; controls must be inside the towing vehicle with a device to alert the driver if a malfunction occurs",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 113,000",
    "Gross Weight — 6 Axles: 123,000",
    "Gross Weight — 7 Axles: 128,000",
    "Gross Weight — 8 Axles: 141,000",
  ],
};

export default mississippi;

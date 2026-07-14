import type { RegionDetail } from "./types";

const newBrunswick: RegionDetail = {
  slug: "new-brunswick",
  overview: [
    "New Brunswick oversize and overweight permits are issued by the New Brunswick Department of Transportation. Special permits are valid for seven travel days.",
    "Weight, length and width limits depend on the route traveled. Height depends on the route, and loads over 16′ high must contact utility companies three days in advance.",
  ],
  contacts: [
    {
      label: "Office",
      value: "New Brunswick Overweight and Oversize Loads, Department of Transportation",
    },
    {
      label: "Address",
      value: "P.O. Box 6000, Fredericton, New Brunswick, Canada E3B 5H1",
    },
    {
      label: "Contact",
      value: "(506) 453-2982",
      href: "tel:+1-506-453-2982",
    },
    {
      label: "Hours",
      value: "8:15 A.M. – 4:30 P.M. (AT)",
    },
  ],
  permitValidity: "A special permit is valid for 7 travel days.",
  operatingTime: "8:15 A.M. – 4:30 P.M. (AT)",
  routinePermitLimits: {
    length: "Depends on route traveled",
    width: "Depends on route traveled",
    height:
      "Depends on route traveled; over 16′ (4.88 m) high must contact utility companies 3 days in advance",
    weight: "Depends on route traveled",
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 12′ (3.65 m): 1 front",
      "On 2-lane highways — width over 16′ (4.88 m): 1 front & 1 rear",
      "On multi-lane/interstate highways — width over 10′ (3.05 m), nighttime travel only: 1 rear",
      "On multi-lane/interstate highways — width over 12′ (3.65 m): 1 rear",
    ],
    length: [
      "On 2-lane highways — length over 90′ (27.5 m): 1 rear",
      "On multi-lane/interstate highways — length over 98′5″ (30 m): 1 rear",
    ],
    overhang: [
      "On all highways — front overhang over 10′ (3.05 m): 1 front",
      "On all highways — rear overhang over 10′ (3.05 m): 1 rear",
    ],
    miscellaneous: [
      "One week prior to moving loads exceeding 4.88 m (16 ft) in width or 30 m (98 ft) in length, the permit holder must notify the nearest RCMP detachment (or municipal police where applicable) and follow police direction for traffic control",
      "Additional escorts may also be stipulated by the permit",
    ],
  },
};

export default newBrunswick;

import type { RegionDetail } from "./types";

const minnesota: RegionDetail = {
  slug: "minnesota",
  overview: [
    "Minnesota oversize and overweight permits are issued by the Minnesota Administrative Truck Center. Single-trip permits are valid for five consecutive days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and traffic-safety conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Minnesota Administrative Truck Center",
    },
    {
      label: "Address",
      value: "110 Centre Point Curve, Mendota Heights, Minnesota 55120",
    },
    {
      label: "Contact",
      value: "(651) 296-6000",
      href: "tel:+1-651-296-6000",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:00 P.M. (CT)",
    },
  ],
  permitValidity: "Single-trip permits are valid for five (5) consecutive days.",
  operatingTime: "7:30 A.M. – 4:00 P.M. (CT)",
  routinePermitLimits: {
    length: "Two-vehicle combination overall maximum length is 130′",
    width:
      "Up to 14′6″ commonly permittable; 14′6″–16′ on certain routes; over 16′ highly restricted",
    height:
      "Easy movement up to 14′; 14′–15′6″ many restrictions; over 15′6″ highly restricted and route survey required",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", note: "46,000 with bridge check", weight: "40,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "72,000" },
      { group: "Trunnion", weight: "60,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width 14′6″ to 16′6″ on single lane: 2 minimum",
      "On multi-lane divided highways — width 14′6″ to 16′6″: 1 minimum",
      "On all highways — width over 16′6″: 2 minimum",
    ],
    length: [
      "On all highways — length over 95′ up to 110′: 1 minimum",
      "On all highways — length over 110′: 2 minimum",
    ],
    height: [
      "On all highways — height over 15′6″: high-pole escort suggested (not required); pre-move survey required",
    ],
    miscellaneous: [
      "Police escort is primarily the permittee's responsibility to determine; automatically required if the permittee cannot yield right of way to oncoming traffic, if the vehicle/load encroaches into the oncoming lane, or if traffic must be directed or controlled",
      "Permittee is responsible for police escort fees",
      "State may require police escort for other safety reasons",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 92,000",
    "Gross Weight — 6 Axles: 112,000",
    "Gross Weight — 7 Axles: 132,000",
    "Gross Weight — 8 Axles: 144,000",
  ],
};

export default minnesota;

import type { RegionDetail } from "./types";

const westVirginia: RegionDetail = {
  slug: "west-virginia",
  overview: [
    "West Virginia oversize and overweight permits are issued by the West Virginia Department of Transportation. Single-trip permits are valid for five working days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "West Virginia Department of Transportation",
    },
    {
      label: "Address",
      value: "Building 5, Room 337, State Capitol Complex, Charleston, West Virginia 25305",
    },
    {
      label: "Contact",
      value: "(304) 558-0384",
      href: "tel:+1-304-558-0384",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:00 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are issued for five (5) working days.",
  operatingTime: "7:30 A.M. – 4:00 P.M. (ET)",
  routinePermitLimits: {
    length: "No maximum set; depends on load and routes",
    width: "16′ (15′ on 2-lane highways)",
    height: "15′",
    overhang: "15′ front, 30′ rear",
    axleWeights: [
      { group: "Single", weight: "28,000" },
      { group: "Tandem", weight: "45,000" },
      { group: "Tridum", weight: "50,000" },
      { group: "Quad", weight: "55,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width 10′6″: 1 front",
      "On 2-lane highways — width over 12′: 2 (front & rear)",
      "On 2-lane highways — width over 15′: 3 (2 front & 1 rear) + police escort",
      "On 2-lane highways — width over 16′: as required by permit; must be accompanied by WV DOT",
      "On 4+ lane highways — width over 12′: 1 rear",
      "On 4+ lane highways — width over 14′: 2 (front & rear)",
      "On 4+ lane highways — width over 15′: 3 (1 front & 2 rear)",
      "On 4+ lane highways — width over 16′: as required by permit; must be accompanied by WV DOT",
    ],
    length: [
      "On 2-lane highways — length 75′: 1 rear",
      "On 2-lane highways — length over 95′: 2 (front & rear)",
      "On 4+ lane highways — length over 95′: 1 rear",
      "On 4+ lane highways — length over 100′: 2 (front & rear)",
    ],
    height: [
      "On 2-lane and 4+ lane highways — height over 13′9″: permittee must give notice to owners of overhead wires, cables or other facilities that may be affected (owners are not required to make changes)",
      "On 2-lane and 4+ lane highways — height over 15′: 1 front with pole",
    ],
    overhang: [
      "On 2-lane and 4+ lane highways — overhang over 10′: 1",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 104,000",
    "Gross Weight — 6 Axles: 120,000",
    "Gross Weight — 7 Axles: 120,000",
    "Gross Weight — 8 Axles: 120,000",
  ],
};

export default westVirginia;

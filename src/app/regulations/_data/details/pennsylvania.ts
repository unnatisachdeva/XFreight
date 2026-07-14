import type { RegionDetail } from "./types";

const pennsylvania: RegionDetail = {
  slug: "pennsylvania",
  overview: [
    "Pennsylvania oversize and overweight permits are issued by the Pennsylvania Department of Transportation, Central Permit Office. Single-trip permits are valid for five travel days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and bridge-engineering analysis.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Pennsylvania Department of Transportation, Central Permit Office",
    },
    {
      label: "Address",
      value: "P.O. Box 2671, 400 North St, 6th Floor Keystone Building, Harrisburg, Pennsylvania 17120",
    },
    {
      label: "Contact",
      value: "(717) 787-5367",
      href: "tel:+1-717-787-5367",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for five (5) travel days.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (ET)",
  routinePermitLimits: {
    length: "Generally 120′; up to 160′ on 4-lane highways",
    width: "16′ is generally the maximum",
    height: "14′6″ (over requires a route survey)",
    weight: "Ranges subject to bridge engineering analysis",
    axleWeights: [
      { group: "Single", weight: "27,000" },
      { group: "Tandem", note: "Subject to bridge engineering analysis", weight: "52,000" },
      { group: "Tridum", note: "Subject to bridge engineering analysis", weight: "63,000" },
      { group: "Quad", note: "Subject to bridge engineering analysis", weight: "72,000" },
    ],
  },
  escorts: {
    width: [
      "On all-lane highways — width over 13′: 1 (rear if multi-lane, front if 2-lane)",
      "On all-lane highways — width over 16′: police escort",
    ],
    length: [
      "On all-lane highways — length over 90′: 1 rear",
      "On all-lane highways — length over 160′: police escort",
    ],
    height: [
      "On all-lane highways — height over 14′6″ with high pole: 1 front; permittee must notify public utilities at least 1 day prior to arrange relocation of affected wires",
    ],
    overhang: [
      "On all-lane highways — rear overhang over 15′: 1 rear",
    ],
    miscellaneous: [
      "Overweight greater than 201,000 lbs: police escort",
      "Overweight if permit requires reduced speeds over bridges: 1 rear",
      "Overweight if permit requires load to be only vehicle on a bridge or occupy more than 1 lane to cross on a 2-directional bridge: 2 (front & rear)",
      "If bridge supports only 1 lane of traffic: 1 rear",
      "Urban areas — oversize load allowed to run 3:00 a.m. to sunrise: 2 (front & rear)",
      "Urban areas — permitted load unable to maintain 40 mph on limited-access highways, allowed only 9 a.m.–4 p.m.: 1 rear",
      "Non-urbanized areas — permitted load unable to maintain 40 mph on limited-access highways: 1 rear",
      "Police escort requires 24-hour advance notice; cost is usually $2.00/mile + $50 setup fee + overtime",
      "Police escort may be required when any permit provision is contravened or conditions warrant; PennDOT personnel escort may also be required",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 116,000–120,000",
    "Gross Weight — 6 Axles: 127,000–147,000",
    "Gross Weight — 7 Axles: 136,000–174,000",
    "Gross Weight — 8 Axles: 136,000–201,000",
    "Weight ranges are authorized subject to bridge engineering analysis",
  ],
};

export default pennsylvania;

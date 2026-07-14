import type { RegionDetail } from "./types";

const vermont: RegionDetail = {
  slug: "vermont",
  overview: [
    "Vermont oversize and overweight permits are issued by the Vermont Agency of Transportation, Commercial Vehicle Operations. Single-trip permits are valid for ten working days.",
    "Permit approval depends on the proposed route, dimensions, axle weights, tire widths and engineering studies.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Vermont Agency of Transportation, Commercial Vehicle Operations",
    },
    {
      label: "Address",
      value: "120 State Street, Montpelier, Vermont 05603",
    },
    {
      label: "Contact",
      value: "(802) 828-2064",
      href: "tel:+1-802-828-2064",
    },
    {
      label: "Hours",
      value: "7:45 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for ten (10) working days.",
  operatingTime: "7:45 A.M. – 4:30 P.M. (ET)",
  routinePermitLimits: {
    length: "100′ or more requires an engineering study",
    width: "15′ or more requires an engineering study",
    height:
      "Over 14′ are limited to short distances; facility clearance and public safety govern issuance",
    weight:
      "Single, tandem, tridum and quad are evaluated individually. Gross weight of 150,000 lbs or more requires an engineering study. No wheel shall exert more than 600 lbs per inch of tire width on the road surface.",
  },
  escorts: {
    width: [
      "On all highways — width of 12′ or more: 1 front (rear if interstate)",
    ],
    length: [
      "On all highways — length of 80′ or more: 1 front (rear if interstate)",
    ],
    overhang: [
      "On all highways — overhang of 15′ or more (⅓ of length): 1 front (rear if interstate)",
    ],
    miscellaneous: [
      "Large or hazardous moves may require 2 (front & rear) and a police escort",
    ],
  },
};

export default vermont;

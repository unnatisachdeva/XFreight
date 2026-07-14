import type { RegionDetail } from "./types";

const michigan: RegionDetail = {
  slug: "michigan",
  overview: [
    "Michigan oversize and overweight permits are issued by the Michigan Department of Transportation, Transport Permits Unit. Single-trip permits are valid for five consecutive days, excluding Saturdays and Sundays.",
    "Permit approval depends on the proposed route, dimensions, weight and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Michigan Department of Transportation, Transport Permits Unit",
    },
    {
      label: "Address",
      value: "7050 West Saginaw, Suite 2/M-43, Lansing, Michigan 48917",
    },
    {
      label: "Contact",
      value: "(517) 373-2121",
      href: "tel:+1-517-373-2121",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity:
    "Single-trip permits are valid for five (5) consecutive days, excluding Saturday and Sunday.",
  operatingTime: "7:30 A.M. – 4:30 P.M. (ET)",
  routinePermitLimits: {
    length: "150′",
    width: "16′; 14′ during spring restrictions",
    height: "15′",
    weight: "Handled on a case-by-case basis",
  },
  escorts: {
    width: [
      "On all highways — width over 12′ to 14′: 1",
      "On all highways — width over 14′: 2 (front & rear)",
    ],
    length: [
      "On all highways — length 90′ to 100′: 1 rear",
      "On all highways — length over 100′: 2 (front & rear)",
    ],
    height: [
      "On all highways — height over 14′5″ with high pole: 1 front",
      "On all highways — height over 15′ with high pole: 2 (front & rear)",
    ],
    overhang: ["On all highways — overhang over 15′: 1 rear"],
  },
};

export default michigan;

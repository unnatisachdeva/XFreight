import type { RegionDetail } from "./types";

const maine: RegionDetail = {
  slug: "maine",
  overview: [
    "Maine oversize and overweight permits are issued by the Maine Department of State, Bureau of Motor Vehicles, Overlimit Permit Unit.",
    "Single-trip and return-trip permits are valid for seven calendar days. Permit approval depends on the route, dimensions, weight and any required police or pilot-car escorts.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Maine Department of State, Bureau of Motor Vehicles, Overlimit Permit Unit",
    },
    {
      label: "Address",
      value: "29 State House Station, Augusta, Maine 04333",
    },
    {
      label: "Contact",
      value: "(207) 624-9000 Ext. 52134",
      href: "tel:+1-207-624-9000",
    },
    {
      label: "Fax",
      value: "(207) 622-5332",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 5:00 P.M. (ET)",
    },
  ],
  permitValidity:
    "Single-trip permits and return trips are valid for seven (7) calendar days.",
  operatingTime: "7:30 A.M. – 5:00 P.M. (ET)",
  routinePermitLimits: {
    length: "125′",
    width: "16′. Over 16′ wide requires police escort.",
    height: "16′. Over 16′ high must contact utility companies.",
    axleWeights: [
      { group: "Single", weight: "25,000" },
      { group: "Tandem", weight: "50,000" },
      { group: "Tridum", weight: "75,000" },
      { group: "Quad", weight: "100,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width 12′ to 15′11″: 1 front",
      "On 4+ lane highways — same thresholds as 2-lane, except escorts travel to the rear of the load",
    ],
    length: [
      "On 2-lane highways — length 80′ up to 124′: 1 front",
      "On 4+ lane highways — same thresholds as 2-lane, except escorts travel to the rear of the load",
    ],
    overhang: [
      "On 2-lane highways — overhang 15′ or more: 1 front",
      "On 2-lane highways — overhang 15′ or more and width 12′ or more: 2 (front & rear)",
      "On 4+ lane highways — same thresholds as 2-lane, except escorts travel to the rear of the load",
    ],
    height: [
      "Height 16′ or greater: contact utility companies; may require pilot car or police escort for extreme heights",
    ],
    miscellaneous: [
      "State police escorts require a minimum of 3 days notice and may be required for extreme weights, lengths of 125′ or more, widths of 16′ or more, or extreme heights",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 130,000",
    "Gross Weight — 6 Axles: 140,000",
    "Gross Weight — 7 Axles: 159,000",
  ],
};

export default maine;

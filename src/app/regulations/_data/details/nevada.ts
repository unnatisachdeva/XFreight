import type { RegionDetail } from "./types";

const nevada: RegionDetail = {
  slug: "nevada",
  overview: [
    "Nevada oversize and overweight permits are issued by the Nevada Department of Transportation. Single-trip permits are valid for five travel days (consecutive if weekend travel is authorized, otherwise business days). Annual multiple-trip permits are valid up to 12 months from the date of issue.",
    "Permit approval depends on the proposed route, dimensions, axle spacings and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Nevada Department of Transportation",
    },
    {
      label: "Address",
      value: "1263 S. Stewart Street, Rm. 102, Carson City, Nevada 89712",
    },
    {
      label: "Contact",
      value: "(775) 888-7410 / 1 (800) 552-2127",
      href: "tel:+1-775-888-7410",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 5:00 P.M. (PT); no orders after 4:00 P.M.",
    },
  ],
  permitValidity:
    "Single-trip permits are valid for five (5) travel days, one trip only. Days are consecutive if weekend travel is authorized; otherwise business days. Annual multiple-trip permits are valid up to 12 months from the date of issue.",
  operatingTime: "7:30 A.M. – 5:00 P.M. (PT); no orders after 4:00 P.M.",
  routinePermitLimits: {
    length:
      "No set maximum. Each trip is evaluated individually. Pilot car required if over 105′. No maximum overhang on permitted load.",
    width: "17′",
    height: "17′",
    axleWeights: [
      { group: "Single", note: "Depends on axle spacings and routes", weight: "See permit conditions" },
      { group: "Tandem", note: "Depends on axle spacings and routes", weight: "See permit conditions" },
      { group: "Tridum", note: "Depends on axle spacings and routes", weight: "See permit conditions" },
      { group: "Quad", note: "Depends on axle spacings and routes", weight: "See permit conditions" },
      { group: "Trunnion", weight: "60,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane roads — width over 12′ to 14′: 1 front",
      "On 2-lane roads — width over 14′ to 16′: 2 (front & rear)",
      "On 2-lane roads — width over 16′: 3 (2 front & 1 rear)",
      "On 2-lane roads — width up to 17′: probably 2 plus other state requirements (likely highway patrol)",
      "On interstate & 4+ lane roads — width over 14′ to 16′: 1 rear",
      "On interstate & 4+ lane roads — width over 16′ to 17′: 2 (front & rear)",
      "On interstate & 4+ lane roads — width over 17′ reviewed individually: probably 2 plus other state requirements (likely highway patrol)",
    ],
    length: [
      "On 2-lane roads — length over 105′: 1 rear",
      "On interstate & 4+ lane roads — length over 110′: 1 rear",
    ],
    height: [
      "On 2-lane roads — height over 15′6″: 1 front with high pole",
      "On interstate & 4+ lane roads — height over 15′6″: 1 front with high pole",
    ],
    overhang: [
      "On 2-lane roads — overhang over 25′ front or rear: 1 (front or rear)",
      "On interstate & 4+ lane roads — overhang over 25′ front or rear: 1 (front or rear)",
    ],
    miscellaneous: [
      "Hoover Dam Area — width 8′6″ to 10′ (maximum allowed, alternate route SR 163): 2",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles (70′ axle spacings): 92,000",
    "Gross Weight — 6 Axles (70′ axle spacings): 96,000",
    "Gross Weight — 7 Axles (70′ axle spacings): 101,000",
    "Gross Weight — 8 Axles (70′ axle spacings): 106,000",
  ],
};

export default nevada;

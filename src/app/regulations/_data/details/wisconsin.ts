import type { RegionDetail } from "./types";

const wisconsin: RegionDetail = {
  slug: "wisconsin",
  overview: [
    "Wisconsin oversize and overweight permits are issued by the Wisconsin Department of Transportation. Single-trip permits are valid for fourteen consecutive days and a return trip may be requested at the time of application.",
    "Permit approval depends on the proposed route, dimensions, axle weights and steerability requirements for long loads.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Wisconsin Department of Transportation",
    },
    {
      label: "Address",
      value: "4802 Sheboygan Avenue, Madison, Wisconsin 53707-7980",
    },
    {
      label: "Contact",
      value: "(608) 266-7320",
      href: "tel:+1-608-266-7320",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:30 P.M. (CT)",
    },
  ],
  permitValidity:
    "Single-trip permits are valid for fourteen (14) consecutive days. A return trip may be requested at the time of application.",
  operatingTime: "7:30 A.M. – 4:30 P.M. (CT)",
  routinePermitLimits: {
    length:
      "No limit. A permit will not be issued for a vehicle/load exceeding 100′ overall length when the rear supporting axle(s) are at or near the rear of the load unless the rear support is steerable and steered.",
    width: "16′",
    height: "No limit",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "65,000" },
      { group: "Tridum", weight: "81,000" },
      { group: "Quad", weight: "90,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 15′ up to 16′ (frequently): 1 front",
      "On 2-lane highways — width over 16′: 2 (front & rear)",
      "On multi-lane highways — same as 2-lane rules",
    ],
    miscellaneous: [
      "On 2-lane highways — when any part of the vehicle or load extends beyond the left of the roadway centerline: 1",
      "On multi-lane highways — when any part of the vehicle/load extends beyond the left of the right-hand lane: 1",
      "On any highway designated by permit: 1 or more escorts as stated",
      "When required on the permit, a uniformed police officer and vehicle may be required with the permittee paying charges for service",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 100,000 (depends on spacing and vehicle configuration)",
    "Gross Weight — 6 Axles: 166,000 (depends on spacing and vehicle configuration)",
    "Gross Weight — 7 Axles: 182,000 (depends on spacing and vehicle configuration)",
    "Gross Weight — 8 Axles: 191,000 (depends on spacing and vehicle configuration)",
  ],
};

export default wisconsin;

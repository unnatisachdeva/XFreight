import type { RegionDetail } from "./types";

const wyoming: RegionDetail = {
  slug: "wyoming",
  overview: [
    "Wyoming oversize and overweight permits are issued by the Wyoming State Highway Department. Single-trip permits are usually valid for one trip with no day limit; return trips are not allowed.",
    "Permit approval depends on the proposed route, dimensions, axle weights and Port-of-Entry authorization.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Wyoming State Highway Department",
    },
    {
      label: "Address",
      value: "5300 Bishop Blvd., P.O. Box 1708, Cheyenne, Wyoming 82002-9019",
    },
    {
      label: "Contact",
      value: "(307) 777-4376",
      href: "tel:+1-307-777-4376",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (MT)",
    },
  ],
  permitValidity:
    "Single-trip permits are usually valid for one (1) trip. There is no limit on the number of days. Returns are not allowed.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (MT)",
  routinePermitLimits: {
    length:
      "Port of Entry can approve up to 90′ on a single unit and up to 110′ on a combination unit",
    width: "Port of Entry can approve up to 18′ wide",
    height: "Port of Entry can approve up to 17′ high",
    weight:
      "Gross weight determined by axle configuration; anything over 150,000 lbs needs special approval",
    axleWeights: [
      { group: "Single", weight: "25,000" },
      { group: "Tandem", weight: "55,000" },
      { group: "Tridum", weight: "65,000" },
      { group: "Quad", weight: "74,000" },
      { group: "Trunnion", weight: "55,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — when any portion of vehicle extends to the left of the highway centerline: 2 (1 front & 1 rear)",
      "On 2-lane highways — width 14′ or more: 2 (1 front & 1 rear)",
      "On 2-lane highways — Wyoming Highway Patrol may require additional escorts at its discretion",
      "On interstate (4+ lanes) — width 15′ or more: 1 rear",
      "On interstate (4+ lanes) — additional escorts may be required by Wyoming Highway Patrol for extreme width",
    ],
    length: [
      "On 2-lane highways — length 110′ or more: 2 (1 front & 1 rear)",
      "On interstate (4+ lanes) — length 110′ or more: 2 (1 front & 1 rear)",
    ],
    height: [
      "On 2-lane highways — height 17′6″ or more: 1 front with height pole",
      "On interstate (4+ lanes) — height 17′6″ or more: 1 front with height pole",
    ],
  },
};

export default wyoming;

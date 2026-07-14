import type { RegionDetail } from "./types";

const newMexico: RegionDetail = {
  slug: "new-mexico",
  overview: [
    "New Mexico oversize and overweight permits are issued by the New Mexico Motor Transportation Division Permit Office. Single-trip permits are valid for three consecutive days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "New Mexico Motor Transportation Division Permit Office",
    },
    {
      label: "Address",
      value: "2500 Cerillos Road, Santa Fe, New Mexico 87505",
    },
    {
      label: "Contact",
      value: "(505) 827-0376",
      href: "tel:+1-505-827-0376",
    },
    {
      label: "Hours",
      value: "7:00 A.M. – 5:00 P.M. (MT)",
    },
  ],
  permitValidity: "Single-trip permits are valid for three (3) consecutive days.",
  operatingTime: "7:00 A.M. – 5:00 P.M. (MT)",
  routinePermitLimits: {
    length:
      "No set maximum as long as trailer is 57′6″ or less (65′ for all other roads)",
    width:
      "No set maximum; evaluated per trip. 14′ wide needs escorts; 20′ wide requires route survey and State Police contact; 30′ wide needs highways verification.",
    height:
      "No set maximum; depends on routes. Over 15′6″ needs route survey; 18′ needs utility surveys.",
    axleWeights: [
      {
        group: "Single",
        note: "Interstate; 20,000/18,000 for all other roads depending on spacings",
        weight: "23,000",
      },
      { group: "Tandem", weight: "46,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "68,000" },
    ],
  },
  escorts: {
    width: [
      "On all highways — width over 8′6″ if deemed a hazard: 1",
      "On all highways — width over 14′: 1",
      "On all highways — width over 20′ for 5 or more miles: police escort + flagman",
    ],
    length: [
      "On all highways — length over 90′ up to 110′: 1",
      "On all highways — length over 110′: 2 (front & rear)",
    ],
    height: [
      "On all highways — height 16′ and over: extra person or escort to check overhead clearances (stated on permit if required)",
      "On all highways — height 18′ and over: clearance from utility companies and municipal/local authorities required; 1 escort",
    ],
    overhang: [
      "On all highways — overhang infringing on opposing lane of 2-lane or adjoining lane of multi-lane highways: 1",
    ],
    miscellaneous: [
      "Escorts must be certified",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 105,000",
    "Gross Weight — 6 Axles: 119,000",
    "Gross Weight — 7 Axles: 127,000",
    "Gross Weight — 8 Axles: 150,000 with single axle in back and special approval",
  ],
};

export default newMexico;

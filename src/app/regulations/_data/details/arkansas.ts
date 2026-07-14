import type { RegionDetail } from "./types";

const arkansas: RegionDetail = {
  slug: "arkansas",
  overview: ["Arkansas Oversize Permit & Regulations"],
  contacts: [
    {
      label: "Office",
      value: "Arkansas Department of Highways",
    },
    {
      label: "Address",
      value: "10324 Interstate 30, Little Rock, Arkansas 72203",
    },
    {
      label: "Contact",
      value: "(501) 569-2381",
      href: "tel:+1-501-569-2381",
    },
    {
      label: "Hours",
      value: "Monday – Friday 6:00 A.M. – 4:30 P.M. (CT)",
    },
  ],
  permitValidity: "Permits are valid for three days.",
  operatingTime: "Monday – Friday 6:00 A.M. – 4:30 P.M. (CT)",
  legalDimensions: {
    length: "No set maximums.",
    width:
      "20′ (16′ on Interstate System). The maximum overall width may be exceeded up to 24′ by permit only when an emergency exists and then only for short moves based on the degree of such emergency.",
    height:
      "17′. If overall height exceeds 17′, the move must be accompanied by public utilities personnel.",
    weight: "Gross weight 80,000",
    axleWeights: [
      { group: "Steering axle", weight: "12,000" },
      { group: "Single", weight: "20,000" },
      { group: "Load Carrying — Single", weight: "20,000" },
      { group: "Load Carrying — Tandem", weight: "40,000" },
      { group: "Load Carrying — Tridum", weight: "60,000" },
      { group: "Load Carrying — Quad", weight: "68,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On 2-Lane Highways — Width over 12′ to 14′: 1 Front",
      "On 2-Lane Highways — Width over 14′: 2 (Front & Rear)",
      "On 2-Lane Highways — Height over 15′: 1 Front w/High Pole",
      "On 2-Lane Highways — Height over 16′ must obtain special approval: 1 w/High Pole (as permit states)",
      "On 2-Lane Highways — Height over 17′: Public Utility Escort",
      "On 2-Lane Highways — Combination: over 12′ wide & 13′6″ high: 2 (Front w/High Pole & Rear)",
      "On 2-Lane Highways — Length over 100′: 1 Front",
      "On 2-Lane Highways — Length over 130′: 2 Front & Rear",
      "On 4-Lane Highways or Interstate Highways — Width over 14′: 1 Rear",
      "On 4-Lane Highways or Interstate Highways — Height over 15′: 1 Front w/High Pole",
      "On 4-Lane Highways or Interstate Highways — Height over 16′ must obtain special permit: 1 w/High Pole (as permit states)",
      "On 4-Lane Highways or Interstate Highways — Height over 17′: Public Utility Escort",
      "On 4-Lane Highways or Interstate Highways — Combination: more than 12′ wide AND 15′ high: 2 (Front w/High Pole & Rear)",
      "On 4-Lane Highways or Interstate Highways — Length over 100′: 1 Rear",
      "On 4-Lane Highways or Interstate Highways — Length over 130′: 2 Front & Rear",
    ],
  },
};

export default arkansas;

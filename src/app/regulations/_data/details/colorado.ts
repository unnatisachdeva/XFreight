import type { RegionDetail } from "./types";

const colorado: RegionDetail = {
  slug: "colorado",
  overview: ["Colorado Oversize Overweight Permits"],
  contacts: [
    {
      label: "Office",
      value: "Colorado Department of Transportation",
    },
    {
      label: "Address",
      value: "4201 E. Arkansas Ave. Suite 290, Denver, Colorado 80222",
    },
    {
      label: "Contact",
      value: "(303) 757-9539 / (800) 350-3765",
      href: "tel:+1-303-757-9539",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:30 P.M. (MT). Closed Thursdays 10:00 A.M. – 10:30 A.M. for state business.",
    },
  ],
  permitValidity: "Single-trip permits are valid for up to five (5) days. (Permit writer’s discretion)",
  operatingTime: "7:30 A.M. – 4:30 P.M. (MT). Closed Thursdays 10:00 A.M. – 10:30 A.M. for state business.",
  legalDimensions: {
    length: "110′ on mountainous 2-lane highways. 120′ on all non-mountainous 2-lane highways. 130′ on all 4-lane highways.",
    width: "17′",
    height: "16′",
    axleWeights: [
      { group: "Single", weight: "22,000 – 27,000" },
      { group: "Tandem", weight: "42,000 – 50,000" },
      { group: "Tridum", weight: "55,000 – 65,000" },
      { group: "Quad", weight: "60,000 – 72,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "Private escorts must have Colorado safety certificate.",
      "On 2-Lane Highways — Width over 13′ to 15′: 1 Front (+possible 1 Rear)*",
      "On 2-Lane Highways — Width over 15′ to 17′: 2 (Front & Rear)",
      "On 2-Lane Highways — Width over 8′6″ on certain secondary roads: 1 Front",
      "On 2-Lane Highways — Width over 11′ on certain secondary 2-lane roads: 2 (Front & Rear)",
      "On 2-Lane Highways — Length over 85′ on certain portions of 2-lane and 4-lane highways: 1 Front",
      "On 2-Lane Highways — Length over 110′: 1 Front",
      "On 2-Lane Highways — Overhang more than 25′ (at point of overhang): 1",
      "On 2-Lane Highways — Height over 16′: 1 Front w/ High Pole",
      "On 4 or More Lane Highways — Width over 13′ to 15′: 1 Rear*",
      "On 4 or More Lane Highways — Width over 15′: 2 (Front & Rear)*",
      "On 4 or More Lane Highways — Length over 115′: 1 Rear",
      "On 4 or More Lane Highways — Length over 85′ on certain portions of 2-lane and 4-lane highways: 1 Rear",
      "On 4 or More Lane Highways — Overhang more than 25′ (at point of overhang): 1",
      "On 4 or More Lane Highways — Height over 16′: 1 Front w/ High Pole",
    ],
  },
  notes: [
    "* Or use yellow flashing light on load in lieu of rear escort.",
    "* Escort requirements vary according to routes traveled within the state and each major city. Write to the state of Colorado.",
    "Gross Weight — 5 Axles: 106,000 – 132,000 (Single, tandem, tridum)",
    "Gross Weight — 6 Axles: 119,000 – 147,000 (Single, tandem, tridum)",
    "Gross Weight — 7 Axles: 132,000 – 162,000 (Single, tridum, tridum)",
    "Gross Weight — 8 Axles: 137,000 – 169,000 (Single, tridum, quad)",
  ],
};

export default colorado;

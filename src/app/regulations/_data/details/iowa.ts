import type { RegionDetail } from "./types";

const iowa: RegionDetail = {
  slug: "iowa",
  overview: [
    "Iowa oversize and overweight permits are issued by the Iowa Department of Transportation, Office of Motor Carrier Services. Single-trip permits are valid for five days, and annual permits expire on the last day of the month one year from issuance.",
    "Permit approval depends on the proposed route, vehicle configuration, dimensions, axle weights and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Iowa Department of Transportation, Office of Motor Carrier Services",
    },
    {
      label: "Address",
      value: "6310 SE Convenience Blvd., Ankeny, Iowa 50021",
    },
    {
      label: "Contact",
      value: "(515) 237-3264",
      href: "tel:+1-515-237-3264",
    },
    {
      label: "Hours",
      value: "7:00 A.M. – 4:30 P.M. (CT)",
    },
  ],
  permitValidity:
    "Single-trip permits are valid for five (5) days. Annual permits expire on the last day of the month, one year from the date of issuance.",
  operatingTime: "7:00 A.M. – 4:30 P.M. (CT)",
  routinePermitLimits: {
    length: "120′",
    width: "18′",
    height: "18′",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "40,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "80,000" },
    ],
  },
  escorts: {
    width: [
      "On interstate system — width exceeds 14′6″ to 16′6″: 1",
      "On 2-lane highways — width exceeds ½ roadway width up to and including 14′6″: 1",
    ],
    height: [
      "On all highways — height exceeds 14′4″: 1 (height pole must be carried on the escort vehicle)",
    ],
    length: ["On all highways — length exceeds 120′: 1"],
    miscellaneous: [
      "On all highways — length exceeds 85′ but not exceeding 120′: escort requirements apply",
      "On all highways — front-end projection exceeds 25′: escort requirements apply",
      "On all highways — rear-end projection exceeds 10′: escort required; amber revolving light or strobe light must be on the rear of the load",
      "On all highways — weight exceeds 80,000 lbs: either 1 escort, or a 7″ high × 7″ diameter amber light of 100 candlepower with 360-degree visibility (or strobe light) mounted on the towing unit",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 92,000",
    "Gross Weight — 6 Axles: 112,000",
    "Gross Weight — 7 Axles: 132,000",
    "Gross Weight — 8 Axles: 152,000",
  ],
};

export default iowa;

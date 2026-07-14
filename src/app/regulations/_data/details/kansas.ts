import type { RegionDetail } from "./types";

const kansas: RegionDetail = {
  slug: "kansas",
  overview: [
    "Kansas oversize and overweight permits are issued by the Kansas Trucking Connection. Single-trip permits are valid for one movement within seven travel days.",
    "Permit approval is based on the proposed route, vehicle configuration, dimensions, weight and infrastructure conditions such as bridge capacity, utility clearance and roadway width.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Kansas Trucking Connection",
    },
    {
      label: "Address",
      value: "1500 Arrowhead, Topeka, KS 66604-4027",
    },
    {
      label: "Contact",
      value: "(785) 271-3145",
      href: "tel:+1-785-271-3145",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (CT)",
    },
  ],
  permitValidity: "Single-trip permits are good for one trip (7 travel days).",
  operatingTime: "8:00 A.M. – 5:00 P.M. (CT)",
  routinePermitLimits: {
    length: "126′",
    width: "16′6″",
    height: "Based on clearances. Over 17′ high must notify utility company.",
    axleWeights: [
      { group: "Single", weight: "22,000" },
      { group: "Tandem", weight: "45,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "65,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On highways with fewer than 4 lanes — width over 14′: 2 (front & rear). The rear escort may be eliminated if a warning light is attached to the top of the towing vehicle and to the rear of each load, mounted no less than 2′ and no more than 8′ above the roadway surface.",
      "On all highways — mobile homes over 12′6″ wide: 2 (front & rear)",
      "Super loads — width over 16′6″ or height over 18′, including but not limited to houses, barns, sheds, granaries and storage tanks: 2 (front & rear)",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 95,000",
    "Gross Weight — 6 Axles: 110,000",
    "Gross Weight — 7 Axles: 150,000",
    "Gross Weight — 8 Axles: 150,000",
  ],
};

export default kansas;

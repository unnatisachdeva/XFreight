import type { RegionDetail } from "./types";

const louisiana: RegionDetail = {
  slug: "louisiana",
  overview: [
    "Louisiana oversize and overweight permits are issued by the Louisiana Truck Permit Center, Department of Transportation and Development.",
    "Permit approval depends on the proposed route, vehicle configuration, dimensions, axle weights and infrastructure conditions such as interstate restrictions, bridge capacity and local escort requirements.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Louisiana Truck Permit Center, Department of Transportation and Development",
    },
    {
      label: "Address",
      value: "P.O. Box 94042, Baton Rouge, Louisiana 70804-9042",
    },
    {
      label: "Contact",
      value: "(225) 343-2345 / 1 (800) 654-1433",
      href: "tel:+1-225-343-2345",
    },
    {
      label: "Hours",
      value: "6:00 A.M. – 5:00 P.M. (CT)",
    },
  ],
  operatingTime: "6:00 A.M. – 5:00 P.M. (CT)",
  routinePermitLimits: {
    length:
      "125′. Over 125′ must have a steerable dolly. No set maximum overhang.",
    width:
      "18′. Over 14′ wide generally cannot use the interstate except for fiberglass, swimming pools, tanks, boats and mobile homes up to 16′ wide.",
    height: "16′6″",
    weight: "Maximum gross weight 254,000 lbs with restrictions",
    axleWeights: [
      { group: "Single", note: "120,000 lbs GVW or less", weight: "24,000" },
      { group: "Single", note: "over 120,000 lbs GVW", weight: "20,000" },
      { group: "Tandem", note: "120,000 lbs GVW or less", weight: "48,000" },
      {
        group: "Tandem",
        note: "over 120,000 lbs GVW; 12′ or more spacing",
        weight: "45,000",
      },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "80,000" },
    ],
  },
  escorts: {
    width: [
      "On all highways — width over 12′ and up to 16′: 1 (front on 2-lane, rear on multi-lane)",
      "State police escort — width over 16′ on 2-lane or multilane highways",
    ],
    length: [
      "On all highways — length over 90′ and up to 125′: 1 rear",
      "State police escort — length over 125′",
    ],
    height: [
      "No specific height escort threshold; the state routes loads for height and the permittee is responsible for movement",
    ],
    miscellaneous: [
      "An escort vehicle may escort two overlength vehicles, but only one overwidth vehicle",
      "New Orleans city police escort required within the city if height over 13′6″, width over 12′, or length over 90′ (New Orleans Police: 504-658-6205)",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 108,000",
    "Gross Weight — 6 Axles: 120,000",
    "Gross Weight — 7 Axles: 132,000",
    "Gross Weight — 8 Axles: 152,000",
    "Maximum gross weight is 254,000 lbs with some restrictions",
  ],
};

export default louisiana;

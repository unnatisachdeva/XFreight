import type { RegionDetail } from "./types";

const nebraska: RegionDetail = {
  slug: "nebraska",
  overview: [
    "Nebraska oversize and overweight permits are issued by the Nebraska Department of Roads. Single-trip permits are valid for ten travel days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and safety conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Nebraska Department of Roads",
    },
    {
      label: "Address",
      value: "Permit Office Room 123, 1400 Nebraska Hwy 2, Lincoln, Nebraska 68509",
    },
    {
      label: "Contact",
      value: "(402) 471-0034",
      href: "tel:+1-402-471-0034",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (CT)",
    },
  ],
  permitValidity: "Single-trip permits are valid for ten (10) travel days.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (CT)",
  routinePermitLimits: {
    length:
      "125′. If over 85′ long on interstates, a light bar must be affixed to the rear of the trailer.",
    width: "16′",
    height: "16′",
    weight: "Maximum 160,000 lbs; Federal Bridge Formula applies",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "40,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "70,000" },
    ],
  },
  escorts: {
    width: [
      "On all state highway system — width over 12′ except mobile homes or modulars: 1 (on interstate or 4-lane divided highway, light-bar alternative may be allowed)",
    ],
    length: [
      "On all state highway system — length over 100′ may be required depending on routing and load: 1 (on interstate or 4-lane divided highway, light-bar alternative may be allowed)",
    ],
    height: [
      "On all state highway system — height over 14′6″ may be required depending on routing and load: 1",
      "On all state highway system — over 16′: pre-route survey required, 1 front escort with height pole",
    ],
    miscellaneous: [
      "Rear escort must maintain a minimum of 300′ distance from the rear of the over-dimensional vehicle",
      "Light-bar alternative on interstate or 4-lane divided highway requires oversize signs on front and/or rear plus one revolving amber light on top of tractor",
      "Department of Roads reserves the right to require front and rear escort vehicles at any time when determined necessary for safety",
    ],
  },
};

export default nebraska;

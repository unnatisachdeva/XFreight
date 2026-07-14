import type { RegionDetail } from "./types";

const newfoundlandLabrador: RegionDetail = {
  slug: "newfoundland-labrador",
  overview: [
    "Newfoundland and Labrador oversize and overweight permits are issued by the Department of Transportation, Weights and Dimensions. An overdimensional/overweight permit is valid for one trip.",
    "Permit approval depends on the proposed route, dimensions and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Newfoundland and Labrador Department of Transportation, Weights and Dimensions",
    },
    {
      label: "Address",
      value: "West Block, Confederation Building, St. John's, Newfoundland, Canada A1C 5T7",
    },
    {
      label: "Contact",
      value: "(709) 729-0359",
      href: "tel:+1-709-729-0359",
    },
    {
      label: "Hours",
      value: "9:00 A.M. – 4:30 P.M. (AT)",
    },
  ],
  permitValidity: "An overdimensional/overweight permit is valid for one trip.",
  operatingTime: "9:00 A.M. – 4:30 P.M. (AT)",
  escorts: {
    width: [
      "Width 14′ or over: 1 front",
      "Width over 17′ may need to meet additional requirements",
    ],
    length: ["Length over 78′9″: 1 front"],
    miscellaneous: [
      "Escort vehicles must have one roof-mounted amber revolving lamp emitting alternating flashes clearly visible from 492′ in normal daylight",
      "‘D’ signs must be displayed on the pilot vehicle's front or rear, whichever is applicable",
    ],
  },
};

export default newfoundlandLabrador;

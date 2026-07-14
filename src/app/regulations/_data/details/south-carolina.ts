import type { RegionDetail } from "./types";

const southCarolina: RegionDetail = {
  slug: "south-carolina",
  overview: [
    "South Carolina oversize and overweight permits are issued by the South Carolina Department of Transportation. Single-trip permits are valid for seven consecutive days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and overhead clearances.",
  ],
  contacts: [
    {
      label: "Office",
      value: "South Carolina Department of Transportation",
    },
    {
      label: "Address",
      value: "P.O. Drawer 191, Columbia, South Carolina 29202",
    },
    {
      label: "Contact",
      value: "(803) 737-6769 / 1 (877) 349-7190",
      href: "tel:+1-803-737-6769",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (ET); no permits issued before 8:30 A.M. or after 4:30 P.M.",
    },
  ],
  permitValidity: "Single-trip permits are valid for seven (7) consecutive days.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (ET)",
  routinePermitLimits: {
    length:
      "125′ on pole trailers; 40′ on 2-axle trucks; 45′ on 3-axle trucks; 15′ rear overhang with escort on trailers less than 48′",
    width: "16′",
    height: "Must be at least 6″ less than any overhead structure on the route",
    overhang:
      "15′ rear overhang and 3′ front overhang on a trailer 53′ or less. Trailers longer than 53′ may have ⅓ of the load overhang the rear.",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "40,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "80,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 12′ up to 14′: 1 front",
      "On all highways — width over 14′ to 16′: 2 (front & rear)",
      "On all highways — width over 16′ (requires approval of resident engineers and state oversize permit department): 2 (1 front & 1 rear) + 2 police",
    ],
    overhang: [
      "Rear overhang of 15′ on a trailer less than 48′, or 10′ on 48′ and 53′ trailers: rear escort and flags (or amber light)",
    ],
    miscellaneous: [
      "Permittee is responsible for vertical clearances",
      "No specific escort requirements are given for height and length beyond width/overhang rules",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 90,000",
    "Gross Weight — 6 Axles: 110,000",
    "Gross Weight — 7 Axles: 130,000",
  ],
};

export default southCarolina;

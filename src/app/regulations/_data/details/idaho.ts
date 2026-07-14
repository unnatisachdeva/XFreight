import type { RegionDetail } from "./types";

const idaho: RegionDetail = {
  slug: "idaho",
  overview: ["Idaho Oversize Permits Online"],
  contacts: [
    {
      label: "Office",
      value: "Transportation Department",
    },
    {
      label: "Address",
      value: "3311 W. State St., Boise, Idaho 83707-1129",
    },
    {
      label: "Contact",
      value: "(208) 334-8420 / 1 (800) 662-7133 (Intrastate)",
      href: "tel:+1-208-334-8420",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 5:00 P.M. (MT)",
    },
  ],
  permitValidity: "Single trip permits are valid for five (5) consecutive days.",
  operatingTime: "7:30 A.M. – 5:00 P.M. (MT)",
  legalDimensions: {
    length: "110′",
    width: "16′",
    height: "15′6″",
    weight: "Gross Weight: 160,000",
    axleWeights: [
      { group: "Steering Axle", weight: "12,000" },
      { group: "Single", weight: "21,500" },
      { group: "Tandem", weight: "43,000" },
      { group: "Tridum", spacing: "Wheelbase more than 8′ but not more than 13′", weight: "53,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On 2-Lane Highways (Black coded) — Width over 12′: 1 Front",
      "On 2-Lane Highways (Black coded) — Width over 14′: 2 (Front & Rear)",
      "On 2-Lane Highways (Black coded) — Length over 100′: 1 Rear",
      "On 2-Lane Highways (Black coded) — Height over 16′: 1 Front",
      "On Interstate System — Width over 15′: 1 Rear",
      "On Interstate System — Length over 120′: 1 Rear",
      "On Interstate System — Height over 16′: 1 Front",
      "A 3rd escort (in advance) may be required with loads of such extreme dimensions for tour of travel as to require holding opposing traffic at turnouts and intersections.",
      "Oversize loads which individually would require an escort may travel in convoy (not over 4 loads and not mobile homes): 2 (Front & Rear).",
      "Convoy — maximum width of units limited to 14′6″, or maximum length of 100′ on red-coded routes or 120′ on interstate system or on black-coded routes on map.",
      "Convoy — maximum width of units limited to 12′6″, or maximum of 100′ length on red-coded routes.",
    ],
  },
};

export default idaho;

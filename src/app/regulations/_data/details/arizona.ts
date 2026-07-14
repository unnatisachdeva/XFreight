import type { RegionDetail } from "./types";

const arizona: RegionDetail = {
  slug: "arizona",
  overview: ["Arizona Oversize Permits Load Regulations"],
  contacts: [
    {
      label: "Office",
      value: "Arizona Motor Vehicle Division",
    },
    {
      label: "Address",
      value: "1225 N 25th Ave, Phoenix, Arizona 85009",
    },
    {
      label: "Contact",
      value: "(602) 712-8851 / (602) 712-8849",
      href: "tel:+1-602-712-8851",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (MT)",
    },
  ],
  permitValidity: "Single trip permits are valid for 96 hours (4 consecutive days).",
  operatingTime: "8:00 A.M. – 5:00 P.M. (MT)",
  routinePermitLimits: {
    axleWeights: [
      { group: "Single", weight: "28,000" },
      { group: "Tandem", weight: "Depends on Axle spacings" },
      { group: "Tridum", weight: "Depends on Axle spacings" },
      { group: "Quad", weight: "Depends on Axle spacings" },
      { group: "Trunnion", weight: "60,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On 2-Lane Highways — Length over 120′: 2 (Front & Rear)",
      "On 2-Lane Highways — Width over 14′: 2 (Front & Rear)",
      "On 4-Lane Highways — Width over 15′: 1 (Front)",
      "On 4-Lane Highways — Length over 120′: 1 (Front)",
      "On All Highways — Height over 17′: 1 (Front)",
    ],
  },
};

export default arizona;

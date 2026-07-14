import type { RegionDetail } from "./types";

const alaska: RegionDetail = {
  slug: "alaska",
  overview: ["Alaska Oversize Permits & Regulations"],
  contacts: [
    {
      label: "Office",
      value: "Alaska Division of Measurement Standards",
    },
    {
      label: "Address",
      value: "11900 Industry Way, Anchorage, Alaska 99515",
    },
    {
      label: "Contact",
      value: "(907) 341-3200 / 1 (800) 478-7636",
      href: "tel:+1-907-341-3200",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (AKDT)",
    },
  ],
  permitValidity:
    "Single trip permits are valid for three (3) days, but permittee may request more time if needed if travel exceeds 500 miles or weather related issues.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (AKDT)",
  routinePermitLimits: {
    length: "Depends on routes. Loads over 150′ long must supply exact routes.",
    width: "Depends on routes. Loads over 14′ wide must supply exact routes.",
    height: "Depends on routes. Loads over 16′6″ high must supply exact routes.",
    axleWeights: [
      { group: "Single (Designated Highways)", weight: "30,000" },
      { group: "Tandem (Designated Highways)", weight: "56,000" },
      { group: "Tridum (Designated Highways)", weight: "70,000" },
      { group: "Quad (Designated Highways)", weight: "80,000" },
      { group: "Gross (Designated Highways)", weight: "150,000" },
    ],
  },
  escorts: {
    width: [
      "Over 10′ up to & including 12′ — 1 Front",
      "Over 12′ up to & including 14′ — 2 (Front & Rear)",
      "Over 14′ — 3 (2 Front & 1 Rear)",
    ],
    length: [
      "Over 85′ up to & including 100′ — 1 Front",
      "Over 100′ — 2 (Front & Rear)",
    ],
    overhang: [
      "Over 10′ — 1 Escort*",
      "Over 35′ — 2 (Front & Rear)",
    ],
    weight: ["Overweight with bridge crossing on centerline — 2 (Front & Rear)"],
  },
  notes: [
    "Loads over 14′ wide, 150′ long or 16′6″ high must supply exact routes.",
    "Can use extended light bar for up to 20′ rear overhang in lieu of rear pilot car. (Carry flags, vests, stop/slow paddle per crew member.)",
    "Escort vehicles may be passenger cars or trucks not to exceed an unladen weight of 10,000 lbs.",
    "Escort vehicles must be equipped with a red hand flag and bright orange vest or jacket.",
  ],
};

export default alaska;

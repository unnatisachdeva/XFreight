import type { RegionDetail } from "./types";

const georgia: RegionDetail = {
  slug: "georgia",
  overview: ["Georgia Oversize Permits"],
  contacts: [
    {
      label: "Office",
      value: "Georgia Office of Permits and Enforcement, State Department of Transportation",
    },
    {
      label: "Address",
      value: "935 E. Confederate Building 24, Room 401, Atlanta, GA 30316",
    },
    {
      label: "Contact",
      value: "1 (800) 570-5428",
      href: "tel:+1-800-570-5428",
    },
    {
      label: "Hours",
      value: "7:00 A.M. – 4:45 P.M. (ET)",
    },
  ],
  permitValidity: "Single trip permits are valid for ten (10) travel days.",
  operatingTime: "7:00 A.M. – 4:45 P.M. (ET)",
  legalDimensions: {
    length: "No maximum set.",
    width: "15′6″. 16′ wide issued with provisions (see notes).",
    height: "16′",
    axleWeights: [
      { group: "Single", weight: "23,000" },
      { group: "Tandem", weight: "46,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "92,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On 2-Lane Highways — Length over 75′: 1 Rear ***",
      "On 2-Lane Highways — Length over 100′: 1 Rear",
      "On 2-Lane Highways — Length over 125′: 2 (Front & Rear)",
      "On 2-Lane Highways — Width over 12′: 2 (Front & Rear)",
      "On 2-Lane Highways — Height over 15′6″: 1 Front w/ High Pole",
      "On 4-Lane Highways — Length over 75′: 1 Rear ***",
      "On 4-Lane Highways — Length over 100′: 1 Rear",
      "On 4-Lane Highways — Length over 125′: 2 (Front & Rear)",
      "On 4-Lane Highways — Width over 12′ up to 14′8″: 1 Rear",
      "On 4-Lane Highways — Width 14′8″ to 16′: 2 (Front & Rear)",
      "On 4-Lane Highways — Height over 15′6″: 1 Front w/ High Pole",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 100,000",
    "Gross Weight — 6 Axles: 125,000",
    "Gross Weight — 7 Axles: 148,000",
    "Gross Weight — 8 Axles: 150,000",
    "16′ wide permits — travel restricted Monday through Thursday.",
    "16′ wide permits — front and rear escorts required at all times.",
    "16′ wide permits — mobile homes restricted to 95′ long.",
    "16′ wide permits — oversize load signs required plus a sign with the wording “16 FEET WIDE”.",
    "*** Instead of rear escort, may use one 8″ flashing amber light at rear of load. Requires “emergency vehicle light permit” decal attached to tractor window (decal is enforced with fines). Call Dept. of Public Safety: 404-624-7430.",
  ],
};

export default georgia;

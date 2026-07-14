import type { RegionDetail } from "./types";

const delaware: RegionDetail = {
  slug: "delaware",
  overview: ["Delaware Oversize Permits Details"],
  contacts: [
    {
      label: "Office",
      value: "Delaware Public Safety Building Hauling",
    },
    {
      label: "Address",
      value: "303 Transportation Circle, P.O. Drawer 7065, Dover, Delaware 19903",
    },
    {
      label: "Contact",
      value: "(320) 744-2700",
      href: "tel:+1-320-744-2700",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity: "Single trip permits are valid for three (3) days.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (ET)",
  legalDimensions: {
    length: "120′",
    width: "15′",
    axleWeights: [
      { group: "Single", weight: "20,000" },
      { group: "Tandem", weight: "40,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "80,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On All Highways — Width over 12′ up to 14′: 1 (Rear on multilane / Front on 2-lane roads)",
      "On All Highways — Width of 14′ up to 15′: 2 (1 Front & 1 Rear)",
      "On All Highways — Width over 15′: 2 (1 Front & 1 Rear) + State Police",
      "On All Highways — Length of 85′: 1 Rear",
      "On All Highways — Length of 100′: 2 (1 Front & 1 Rear)",
      "On All Highways — Length of 120′ or more: 2 (1 Front & 1 Rear) + State Police",
      "On All Highways — Height 15′: 2 (1 Front & 1 Rear)",
      "On All Highways — Height 17′6″ or more: 2 (1 Front & 1 Rear) + State Police",
      "On All Highways — Weight over 120,000 lbs: 2 (1 Front & 1 Rear) + State Police & bridge survey (Allow 2-3 days for approval)",
      "On All Highways — Rear overhang over 15′: 1 Rear (unless permit specifies other)",
      "On All Highways — Weight over 120,000 lbs on Route 896 / Chesapeake & Delaware Canal: needs approval of Army Corps of Engineers (in Philadelphia)",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: Depends on axle spacings",
    "Gross Weight — 6 Axles: 120,000",
    "Gross Weight — 7 Axles: 120,000",
    "Gross Weight — 8 Axles: 120,000",
  ],
};

export default delaware;

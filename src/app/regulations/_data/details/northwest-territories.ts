import type { RegionDetail } from "./types";

const northwestTerritories: RegionDetail = {
  slug: "northwest-territories",
  overview: [
    "Northwest Territories oversize and overweight permits are issued by the Department of Transportation, Manager of Compliance. Permits are valid for one trip or 24 hours.",
    "Permit approval depends on the proposed route, dimensions and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Northwest Territories Department of Transportation, Manager of Compliance",
    },
    {
      label: "Address",
      value: "#76 Capitol Drive, Hay River, Northwest Territories, Canada X0E 1GS",
    },
    {
      label: "Contact",
      value: "(403) 874-6763",
      href: "tel:+1-403-874-6763",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (MT)",
    },
  ],
  permitValidity: "Permits are valid for one trip or 24 hours.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (MT)",
  routinePermitLimits: {
    length: "95′2″",
    width: "16′",
    height: "17′",
    axleWeights: [
      { group: "Steering axle", weight: "12,100" },
      { group: "Single axle", weight: "30,800" },
      { group: "Tandem axle", weight: "74,800" },
      { group: "Tridum axle", weight: "92,400" },
      { group: "Quad axle", weight: "92,400" },
    ],
  },
  escorts: {
    width: [
      "Width 10′–14′2″ (day movement): 1 front",
      "Width 10′–14′2″ (night movement): 2 (front & rear)",
      "Width 14′2″–16′5″ (any time): 2 (front & rear)",
      "Width over 16′5″: 2 minimum",
    ],
    length: ["Length 82′–101′: 2 (front & rear)"],
    overhang: ["Overhang over 5′ in front: 1 front"],
  },
  notes: [
    "Gross Weight — 5 Axles: 161,700",
    "Gross Weight — 6 Axles: 179,300",
    "Gross Weight — 7 Axles: 196,900",
    "Gross Weight — 8 Axles: 254,100",
  ],
};

export default northwestTerritories;

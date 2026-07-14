import type { RegionDetail } from "./types";

const rhodeIsland: RegionDetail = {
  slug: "rhode-island",
  overview: [
    "Rhode Island oversize and overweight permits are issued by the Rhode Island Division of Motor Vehicles. Single-trip permits are valid for five consecutive days.",
    "No set maximums for length, width or height; dimensions and routing are evaluated individually.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Rhode Island Division of Motor Vehicles",
    },
    {
      label: "Address",
      value: "Room 106 State Office Building, Providence, Rhode Island 02903",
    },
    {
      label: "Contact",
      value: "(401) 462-5745",
      href: "tel:+1-401-462-5745",
    },
    {
      label: "Hours",
      value: "8:30 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for five (5) consecutive days.",
  operatingTime: "8:30 A.M. – 4:30 P.M. (ET)",
  routinePermitLimits: {
    length: "No set maximum; determined by routes and dimensions",
    width: "No set maximum; determined by routes and dimensions",
    height: "No set maximum; determined by routes and dimensions",
    weight:
      "Gross weight for 5, 6, 7 and 8 axles determined by spacing, weight and routing",
  },
  escorts: {
    width: [
      "On 2-lane highways — width 12′ up to 14′6″: 1",
      "On 2-lane highways — width over 14′6″: 2",
    ],
    length: [
      "On 2-lane highways — length over 80′ up to 90′: 1",
      "On 2-lane highways — length over 90′: 2",
    ],
    height: ["On 2-lane highways — height over 14′: 1"],
    overhang: [
      "On 2-lane highways — overhang of 15′ or more: 1",
      "On 2-lane highways — infrequent overhang of 15′ or more (e.g., with width 12′ or more): 2",
    ],
    miscellaneous: [
      "Building moves — also with police escort: 2",
      "Cranes — interstate moves of 12′ or over: 2",
    ],
  },
};

export default rhodeIsland;

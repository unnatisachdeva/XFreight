import type { RegionDetail } from "./types";

const quebec: RegionDetail = {
  slug: "quebec",
  overview: [
    "Quebec oversize and overweight permits are issued by the Regie de l'Assurance Automobile du Quebec. Permits are valid for seven consecutive days excluding Sunday and cannot be amended once effective.",
    "Permit approval depends on the proposed route, dimensions, axle weights, spacing, tire sizes and vehicle configuration.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Regie de l'Assurance Automobile du Quebec",
    },
    {
      label: "Address",
      value: "5077 Boulevard Hamel, Quebec, Province of Quebec, Canada G2E 5G3",
    },
    {
      label: "Contact",
      value: "(418) 643-5586",
      href: "tel:+1-418-643-5586",
    },
    {
      label: "Hours",
      value: "8:30 A.M. – 4:30 P.M. (ET) Mon/Tue/Thu/Fri; 10:00 A.M. – 4:00 P.M. (ET) Wed",
    },
  ],
  permitValidity:
    "Permits are valid for seven (7) consecutive days excluding Sunday. Maximum duration is left to government discretion. Permits cannot be amended once effective.",
  operatingTime:
    "8:30 A.M. – 4:30 P.M. (ET) Mon/Tue/Thu/Fri; 10:00 A.M. – 4:00 P.M. (ET) Wed",
  routinePermitLimits: {
    length: "131′",
    width: "16′4″",
    height: "16′4″ (Ministry does not verify height)",
    overhang: "6′6″ front, 13′2″ rear",
    weight:
      "Maximum depends on axle weights, spacing, tire sizes and vehicle configuration",
  },
  escorts: {
    width: [
      "Single lane — width over 12′3″: 1 front",
      "Single lane — width over 14′5″: 2 (front & rear)",
      "Multi-lane — width over 12′3″: 1 rear",
      "Night travel — width over 10′2″ (single lane): 1 front",
    ],
    length: [
      "Single lane / multi-lane — length over 55′9″ (single unit): 1 rear",
      "Single lane / multi-lane — length over 68′10″ (crane): 1 rear",
      "Single lane / multi-lane — length over 90′2″ (two units): 1 rear",
      "Single lane / multi-lane — length over 98′5″ (three units): 1 rear",
    ],
    height: [
      "Single lane / multi-lane — height over 14′9″: 1 front with pole",
    ],
    overhang: [
      "Single lane / multi-lane — rear overhang over 13′1″: 1 rear",
      "Single lane / multi-lane — front overhang over 6′6″: 1 front",
    ],
  },
};

export default quebec;

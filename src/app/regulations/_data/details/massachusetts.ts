import type { RegionDetail } from "./types";

const massachusetts: RegionDetail = {
  slug: "massachusetts",
  overview: [
    "Massachusetts oversize and overweight permits are issued by the Massachusetts Maintenance Engineer Commercial Motor Vehicle Center. Single-trip permits are valid for five consecutive days.",
    "Permit approval depends on the proposed route, vehicle configuration, axle spacings and local traffic-control requirements.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Massachusetts Maintenance Engineer Commercial Motor Vehicle Center",
    },
    {
      label: "Address",
      value: "14 Beach Street, Milford, Massachusetts 01757",
    },
    {
      label: "Contact",
      value: "(508) 473-4778",
      href: "tel:+1-508-473-4778",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 4:30 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for five (5) consecutive days.",
  operatingTime: "8:00 A.M. – 4:30 P.M. (ET)",
  routinePermitLimits: {
    length: "115′",
    width: "14′11″",
    height: "14′11″. Over 13′8″ requires a route survey.",
    axleWeights: [
      {
        group: "Single, Tandem, Tridum & Quad",
        note: "All depend on axle spacings",
        weight: "See permit conditions",
      },
    ],
  },
  escorts: {
    width: [
      "Width 12′1″ and up dozer with blade attached: 2 (front & rear)",
      "Width over 13′6″: 2 (front & rear)",
      "On MA Turnpike — width over 12′: 1 rear",
      "On MA Turnpike — width over 13′: 2 (front & rear)",
      "On MA Turnpike — width over 15′: 2 (front & rear) + 2 police",
    ],
    length: [
      "Length 80′ to 94′11″: 1 rear",
      "Length over 94′11″: 2 (front & rear)",
      "Length 134′ or more: MA State Police + 2 (front & rear)",
      "On MA Turnpike — length over 80′: 1 rear",
      "On MA Turnpike — length over 85′: 2 (front & rear)",
      "Length 135′ or more: 2 (front & rear) + 2 police",
    ],
    height: [
      "Height over 13′8″: 1 front",
      "Height 13′11″: 2 (front & rear)",
      "Height over 13′8″: height survey required",
      "Height over 14′11″: 2 front + state police escort",
    ],
    miscellaneous: [
      "City of Boston — if over legal dimensions: at least 1 escort, usually plus city police",
      "Overhang of 4′ or more if load is poles, masts or booms: 1 rear",
      "Overhang of 10′ or more if load is not poles, masts or booms: 1 rear",
      "Vehicle is a drill rig with boom, a shovel or crane, or is odd shaped: 1 rear",
    ],
  },
  notes: [
    "Gross Weight — Reducible 5-8 Axles: 99,000",
    "Gross Weight — Non-Reducible 5-8 Axles: 130,000",
  ],
};

export default massachusetts;

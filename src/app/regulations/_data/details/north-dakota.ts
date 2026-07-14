import type { RegionDetail } from "./types";

const northDakota: RegionDetail = {
  slug: "north-dakota",
  overview: [
    "North Dakota oversize and overweight permits are issued through the North Dakota Highway Patrol e-Permits system. Single-trip permits are valid for three days.",
    "Permit approval depends on route, axle/group weights, dimensions and traffic-handling requirements.",
  ],
  contacts: [
    {
      label: "Office",
      value: "North Dakota Highway Patrol / North Dakota Department of Transportation",
    },
    {
      label: "Permit system",
      value: "https://www.nd.gov/ndhp/e-permits",
      href: "https://www.nd.gov/ndhp/e-permits",
    },
  ],
  permitValidity: "Single-trip or oversize permits are valid for three (3) days.",
  routinePermitLimits: {
    length:
      "53′ for semi-trailer and load; 75′ overall including load and any rear overhang",
    width: "8′6″; determined per vehicle's routes",
    height:
      "14′; depends on load. All vertical clearances are the permit holder's responsibility.",
    weight:
      "No maximum limit set; depends on legal fulfillment of all axle or group weights. Registered tractor 105,400; gross 80,000 based on routes and axle spacings.",
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 14′6″ up to 16′: 1 escort",
      "On 2-lane highways — width over 16′: 2 escorts (front & back)",
      "On 4-lane highways — width over 16′: 1 escort",
      "On 4-lane highways — width over 18′: official escort (unless declined by Highway Patrol)",
    ],
    length: [
      "On all highways — vehicles over 120′ length: 1 escort",
    ],
    height: [
      "On all highways — height over 18′: 1 escort plus all vertical clearances in writing from utility companies",
    ],
    miscellaneous: [
      "A 10′ wide lane must be allowed for normal traffic to pass the over-dimensional vehicle",
      "Special handling is required if the load extends 2′ onto the passing lane or otherwise impedes normal vehicles",
      "Flag persons and escorts may be located in front, back or both as required by the permit",
    ],
  },
  notes: [
    "All pipes, poles, utility poles, beams and similar loads require a permit for rear overhang",
  ],
};

export default northDakota;

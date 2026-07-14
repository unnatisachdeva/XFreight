import type { RegionDetail } from "./types";

const southDakota: RegionDetail = {
  slug: "south-dakota",
  overview: [
    "South Dakota oversize and overweight permits are issued by the South Dakota Division of Highway Patrol. Single-trip permits are valid for three travel days.",
    "No set maximums for weight, length or width; each load is examined individually based on axle spacings, routes and infrastructure conditions.",
  ],
  contacts: [
    {
      label: "Office",
      value: "South Dakota Division of Highway Patrol",
    },
    {
      label: "Address",
      value: "Capital Building, Pierre, South Dakota 57501",
    },
    {
      label: "Contact",
      value: "(605) 773-3105",
      href: "tel:+1-605-773-3105",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (CT)",
    },
  ],
  permitValidity: "Single-trip permits are valid for three (3) travel days.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (CT)",
  routinePermitLimits: {
    length:
      "No maximum established; depends on vehicle configurations and whether routes can handle the length",
    width: "No maximum established; depends on routes",
    height:
      "Depends on routes; all vertical clearances are the responsibility of the permit holder",
    weight:
      "No maximum set; based on axle spacings and routes. Each load is examined individually.",
    axleWeights: [{ group: "Trunnion", weight: "65,000" }],
  },
  escorts: {
    width: [
      "On state highways — width over 20′: 1 (front if 2-lane, rear if multi-lane)",
      "On interstate — width over 16′: 1 rear",
    ],
    miscellaneous: [
      "On all highways, escorts may be required by permit for limitations, traffic conditions or unusual permit-vehicle configuration",
      "Earthmoving equipment moved singly or in convoy must display a sign on the rear; on interstate, escort must immediately follow unit or convoy and sign must be visible from rear",
      "A lane at least 10′ wide must be allowed for normal traffic to pass an overwidth load",
      "Special handling is required if the load extends more than 2′ into an adjacent driving or passing lane or if load width does not allow normal traffic to pass without either vehicle driving on the shoulder",
      "Special handling includes escorts and flagpersons located in front, rear or both as required by the permit",
    ],
  },
};

export default southDakota;

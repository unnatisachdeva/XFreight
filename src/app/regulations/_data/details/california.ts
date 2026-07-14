import type { RegionDetail } from "./types";

const california: RegionDetail = {
  slug: "california",
  overview: ["California Oversize Permit Requirements"],
  contacts: [
    {
      label: "Office",
      value: "California Department of Transportation",
    },
    {
      label: "Address",
      value: "Box 942874, Room 4105, Sacramento, California 94274-0001",
    },
    {
      label: "Contact",
      value: "(916) 322-1297",
      href: "tel:+1-916-322-1297",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (PT)",
    },
  ],
  permitValidity: "Single-trip permits are valid for seven (7) travel days.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (PT)",
  legalDimensions: {
    length: "135′. Steering axle may be required on longer loads.",
    width: "15′. 16′ for mobile homes.",
    height:
      "Dependent on clearance. 3′ clearance required. If adequate clearance exists on routes, the state will issue permits. Written route surveys required for loads over 17′ high.",
    axleWeights: [
      { group: "Steering axle", weight: "12,500" },
      { group: "Single axle", weight: "20,000" },
      { group: "Tandem", weight: "46,000" },
      { group: "Tridum", spacing: "Depends on axle spacings", weight: "60,000" },
      { group: "Quad", weight: "N/A" },
      { group: "Trunnion", spacing: "10′ wide axle", weight: "60,000 lbs" },
    ],
  },
  escorts: {
    miscellaneous: [
      "Width over 12′ (depends on routes; may need escort for under 12′ width): one or two",
      "Length 120′ to 135′ (depends on location): 1 or more",
      "Length over 100′ in LA city / 100′ in LA county: 2 (Front & Rear)",
      "Overhang over 30′: 1",
      "Height 18′ or more requires utility clearance, route survey, etc.: 1 w/ High Pole",
      "For height under 18′: if high-pole escort is not required by permit but desired by trucking company due to load, state “a high pole esc. to be used” on permit application – else subject to possible fine.",
      "Fixed load-front overhang exceeds 25′ from bumper or, if no bumper, from front tires: 1 or more",
      "Crane’s boom or mast, drill rig or well service equipment extends over 25′ from front tires: 1 or more",
      "Rear projection over 25′ beyond trailer: 1 or more",
      "Not required for max. permittable rear boom overhang of 30′ measured from rear tire’s center. (Insurance company’s “exemption” letter is no longer valid.): 1 or more",
      "Truck crane rear boom overhang over 30′ beyond last point of support of vehicle bed: 1 or more",
      "Load width exceeds lane width and/or length and/or width of load and/or vehicle encroaches into adjacent lane (see chart): 1 or more",
      "Normally escorts are not required on urban freeway where right lane has been reduced to less than 12′ and load width is 11′ or 12′.",
      "Escorts for route “E” classification determined by district permit engineer.",
      "Rear overhang of any fixed driven or towed vehicle exceeds 30′ when measured from the centerline of the last axle: 1 or more",
    ],
  },
  notes: [
    "No more than 2 tridum axle groups at 60,000 lbs.",
    "Gross Weight — 5 Axles: 112,500",
    "Gross Weight — 6 Axles: 117,450",
    "Gross Weight — 7 Axles: 158,000",
    "Gross Weight — 8 Axles: 181,300",
  ],
};

export default california;

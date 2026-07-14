import type { RegionDetail } from "./types";

const saskatchewan: RegionDetail = {
  slug: "saskatchewan",
  overview: [
    "Saskatchewan oversize and overweight permits are issued by the Division of Highways and Transportation, Motor Transport Services. Permits are valid for 24 hours, with additional time allowed to complete the trip.",
    "No set maximums for length, width or height; dimensions and routing are evaluated individually.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Saskatchewan Division of Highways and Transportation, Motor Transport Services",
    },
    {
      label: "Address",
      value: "7th Floor, 1855 Victoria Avenue, Regina, Saskatchewan, Canada S4P 3V5",
    },
    {
      label: "Contact",
      value: "(306) 775-6969",
      href: "tel:+1-306-775-6969",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (CT)",
    },
  ],
  permitValidity:
    "Permits are valid for 24 hours, but more time will be allowed to complete the trip.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (CT)",
  routinePermitLimits: {
    length:
      "No set maximum. Equipment must be legal; over-length allowed only if the load is excessive. Longer loads require escorts.",
    width: "No set maximum; depends on load and routes traveled",
    height: "No set maximum; depends on load and routes traveled",
    axleWeights: [
      { group: "Single", weight: "12,000" },
      { group: "Tandem", weight: "48,000" },
      { group: "Tridum", note: "60,000 and over requires special bridge clearance", weight: "72,000" },
      { group: "Quad", weight: "72,000" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width 2.6 m (8′6″) to 5.0 m (16′4″) protruding over centerline, no axle/GVW exceeded: 1",
      "On 2-lane highways — width 4.3 m (14′1″) to 5.0 m (16′4″) where any axle or GVW is exceeded (load must be certified): 1",
      "On 2-lane highways — width 5.0 m (16′4″) or over: 1 rear",
      "On multi-lane/interstate — width 2.6 m (8′6″) to 5.0 m (16′4″) protruding into inside driving lane (exception: Hwy 11 southbound Hamley to Chamberlain over 4.2 m / 14′): 1 rear",
      "On multi-lane/interstate — width 5.0 m (16′4″) or over: 1 rear",
      "On secondary highways at night — width exceeding 3.4 m (approx. 11′2″): 2 (front & rear)",
    ],
    length: [
      "On 2-lane highways — length 30 m (98′) or over: 1 rear",
      "On multi-lane/interstate — length over 36 m (118′): 1 rear",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 108,000",
    "Gross Weight — 6 Axles: 132,000",
    "Gross Weight — 7 Axles: 156,000",
    "Tridum axle groups are not recognized on power units",
  ],
};

export default saskatchewan;

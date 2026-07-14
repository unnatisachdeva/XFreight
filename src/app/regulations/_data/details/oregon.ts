import type { RegionDetail } from "./types";

const oregon: RegionDetail = {
  slug: "oregon",
  overview: [
    "Oregon oversize and overweight permits are route-specific and issued through the Oregon Routing Information Online (ORION) system. Single-trip permits are valid for up to ten days.",
    "Final permit conditions, ORION routing, bridge restrictions, county attachments, pilot-car requirements and travel-time limits always control the move.",
  ],
  contacts: [
    {
      label: "Permit system",
      value: "Oregon Routing Information Online (ORION)",
      href: "https://orion.oregondigital.com/",
    },
  ],
  permitValidity: "Single-trip permits are valid for up to ten (10) days.",
  legalDimensions: {
    length: "150′ (with jeeps/boosters)",
    width: "16′ interstate / 14′ two-lane",
    height: "17′ (route dependent)",
    axleWeights: [
      { group: "Single", weight: "21,500" },
      { group: "Tandem", weight: "43,000" },
      { group: "Tridum", note: "Depends on spacing", weight: "See permit conditions" },
      { group: "Quad", note: "Depends on spacing", weight: "See permit conditions" },
      { group: "Trunnion", weight: "60,000" },
    ],
  },
  routinePermitLimits: {
    length: "150′ (with jeeps/boosters)",
    width: "16′ interstate / 14′ two-lane",
    height: "17′ (route dependent)",
    weight:
      "Gross weights depend on configuration; Oregon weight-mile tax may apply to qualifying vehicles over 80,000 lb",
  },
  escorts: {
    width: [
      "Interstate — width over 14′: 1; over 16′: as required on permit",
      "Green routes — width over 12′: 1; over 14′: 2; over 16′: as required on permit",
      "Most other 2-lane routes — width over 9′: 1 pilot",
    ],
    length: [
      "Interstate — length over 120′: 1; over 140′: as required on permit",
      "Green routes — length over 105′: 1 pilot car; over 120′: 2; over 140′: case-by-case",
      "Most other 2-lane routes — length over 95′: 1; over 120′: 2; over 140′: case-by-case",
    ],
    height: [
      "Interstate — height over 14′6″: 1",
      "Green routes — height over 14′6″: 1 pilot car",
      "Most other 2-lane routes — height over 14′6″: 1",
    ],
  },
  notes: [
    "Permits are required when width exceeds 8′6″, height exceeds 14′, gross weight exceeds 80,000 lb, or axle/group weights exceed legal limits",
    "Oregon uses the ORION system for over-dimension permit ordering and routing; Oregon Trucking Online handles registration and tax-reporting services",
    "Oregon weight-mile tax applies to qualifying motor carriers; declared weight and miles traveled within Oregon must be reported",
    "Travel restrictions may include daylight-only travel, weekend/holiday limits, weather delays, and urban curfews",
    "Loads 14′–16′ wide in Portland, Salem, Eugene, Medford and Grants Pass are generally restricted to 9:00–11:00 a.m. and 1:00–3:00 p.m.",
    "Errors in ORION submissions can cause delays; bridge, county, route-map and district-level rules are central to Oregon planning",
  ],
  sourceUrls: [
    {
      label: "ORION — Oregon Routing Information Online",
      url: "https://orion.oregondigital.com/",
    },
    {
      label: "Oregon Trucking Online",
      url: "https://www.oregontruckonline.com/",
    },
  ],
};

export default oregon;

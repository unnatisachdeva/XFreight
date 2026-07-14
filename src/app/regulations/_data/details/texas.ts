import type { RegionDetail } from "./types";

const texas: RegionDetail = {
  slug: "texas",
  overview: [
    "Texas oversize and overweight permits are issued by the Texas Department of Motor Vehicles (TxDMV) through the Texas Permitting & Routing Optimization System (TxPROS). Requirements are route-specific.",
    "The issued permit, TxPROS route, bridge restrictions, city/county requirements, law-enforcement conditions, escort instructions and travel restrictions always control the move.",
  ],
  contacts: [
    {
      label: "Permit system",
      value: "Texas Permitting & Routing Optimization System (TxPROS)",
      href: "https://txpros.txdmv.gov/",
    },
  ],
  legalDimensions: {
    width: "8′6″",
    height: "14′",
    weight: "80,000 lbs gross vehicle weight",
    axleWeights: [
      { group: "Single axle", weight: "20,000 lbs" },
      { group: "Tandem axle", weight: "34,000 lbs" },
    ],
  },
  routinePermitLimits: {
    length: "Truck or single vehicle 75′; front overhang 25′; rear overhang 30′; max length without route inspection certification 125′; holiday max 110′",
    width: "Max 14′ on holidays except manufactured housing; 16′ on controlled-access highways except manufactured housing; 20′ without route inspection certification",
    height: "Max 16′ on holidays; 18′11″ without route inspection certification",
    weight: "Permit weight based on 650 lbs per inch of tire width or axle/group limits, whichever is lower",
    axleWeights: [
      { group: "Single axle", weight: "25,000 lbs" },
      { group: "Tandem axle", weight: "46,000 lbs" },
      { group: "Tridem axle", weight: "60,000 lbs" },
      { group: "Quadrem axle", weight: "70,000 lbs" },
      { group: "Quint axle", weight: "81,400 lbs" },
      { group: "Six or more axles", note: "Determined by TxDMV based on engineering review", weight: "See permit conditions" },
    ],
  },
  escorts: {
    width: [
      "Over 14′ to 16′: 1 front on two-lane highways / 1 rear on multi-lane highways",
      "Over 16′: 1 front and 1 rear on all roads",
    ],
    height: [
      "Over 17′: 1 front with height pole",
      "Over 18′: 1 front and 1 rear on all roads; front must have height pole",
    ],
    overhang: [
      "Front overhang exceeds 20′: escort required",
      "Rear overhang exceeds 20′: escort required",
    ],
  },
  notes: [
    "Permits required when width exceeds 8′6″, height exceeds 14′, GVW exceeds 80,000 lb, axle/group weights are exceeded, or overhang exceeds legal allowance",
    "General single-trip permit base fee: $60; highway maintenance fees added by gross-weight tier",
    "80,001–120,000 lbs: $150 HMF + $60 permit = $210 total",
    "120,001–160,000 lbs: $225 HMF + $60 = $285 total",
    "160,001–200,000 lbs: $300 HMF + $60 = $360 total",
    "200,001 lbs and above: $375 HMF + $60 = $435 total",
    "Route inspection certification required for width over 20′, height over 18′11″, or length over 125′",
    "Loads over 200,000 lbs may require additional supervision fees, bridge/pavement analysis and engineering review",
    "Travel restrictions may apply for holidays, metro areas, weather and time-of-day curfews",
    "Major metro areas requiring careful route review include Houston, Dallas-Fort Worth, Austin, San Antonio, El Paso, Corpus Christi, Beaumont, Laredo, Pharr and Midland-Odessa",
    "Superheavy loads may require detailed route analysis, bridge/pavement review, utility coordination, law enforcement involvement and additional lead time",
  ],
  sourceUrls: [
    {
      label: "TxPROS — Texas Permitting & Routing Optimization System",
      url: "https://txpros.txdmv.gov/",
    },
    {
      label: "Texas DMV — Oversize/Overweight Permits",
      url: "https://www.txdmv.gov/oversize-overweight-permits",
    },
  ],
};

export default texas;

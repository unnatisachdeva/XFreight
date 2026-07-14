import type { RegionDetail } from "./types";

const indiana: RegionDetail = {
  slug: "indiana",
  overview: [
    "Indiana is a central Midwest freight hub bordered by Illinois, Michigan, Ohio and Kentucky, so many oversize and overweight loads transit the state even when neither the origin nor the destination is in Indiana.",
    "The Indiana Department of Transportation (INDOT) issues oversize, overweight, annual and superload permits. Approval depends on the proposed route, vehicle configuration, dimensions, axle weights and infrastructure conditions such as bridge capacity, utility clearance and construction activity.",
    "Carriers must review permit provisions, route restrictions, escort requirements and local jurisdiction rules before moving, because a valid permit does not guarantee that every road along the route is usable.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Indiana Department of Transportation (INDOT) — Oversize/Overweight Permits",
    },
  ],
  permitValidity: "Varies by permit type; confirm validity on the issued permit.",
  operatingTime: "As specified on the issued permit.",
  legalDimensions: {
    width: "8′6″",
    height: "13′6″",
    length: "53′ semi-trailer",
    weight: "80,000 lbs gross vehicle weight",
    axleWeights: [
      { group: "Single axle", weight: "20,000 lbs" },
      { group: "Tandem axle", weight: "34,000 lbs" },
    ],
  },
  routinePermitLimits: {
    width: "Up to 14′4″; escort requirements apply beyond 12′5″ and 14′4″",
    height:
      "Up to 15′1″; additional planning and utility clearance may be required beyond 14′7″",
    length: "Up to 130′; police escort may be required beyond 130′",
    weight:
      "Over 80,000 lbs; superload review required for extremely large or heavy freight",
  },
  escorts: {
    width: ["Over 12′5″ – 1 escort", "Over 14′4″ – 2 escorts"],
    height: [
      "Over 14′7″ – 1 escort",
      "Over 15′1″ – Additional requirements may apply, including utility clearance and possible bucket-truck support on interstates",
    ],
    length: [
      "Over 110′ – 1 escort",
      "Over 130′ – 2 escorts + police escort",
    ],
    miscellaneous: [
      "Escort cost estimates: standard escort approx. $2.00/mile, high-pole escort approx. $2.25/mile, minimum day rate approx. $550, layover approx. $150, route survey approx. $250",
      "Escort requirements depend on route classification, permit conditions and infrastructure constraints.",
    ],
  },
  signsFlagsLights: [
    "Oversize-load banners, flags and lighting must meet the conditions stated on the issued permit and INDOT requirements.",
  ],
  seasonalRestrictions: [
    "Holiday travel restrictions may apply around New Year’s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving and Christmas.",
    "Severe weather (snow, ice, heavy rain, high winds, low visibility) may delay or restrict movement, especially for wind-turbine components, tall equipment and wide/lightweight loads.",
  ],
  fines: [
    "Permit violations or inaccurate application information may result in permit corrections, revised escort requirements, route denials, delays and penalties.",
  ],
  annualPermits: [
    "Annual permits are available for repeated operations; coverage and limits depend on the permit type and vehicle/load configuration.",
  ],
  manufacturedHomes: [
    "Mobile-home and modular-unit movements must comply with Indiana overdimensional permit requirements and any route-specific conditions.",
  ],
  notes: [
    "Permit applications require carrier details, USDOT number, vehicle registration, origin/destination, commodity description, overall dimensions, axle spacings, axle weights, total weight and proposed route.",
    "Route review should address bridge restrictions, construction zones, utility clearances, railroad crossings, local road restrictions and toll-road compatibility.",
    "Superloads may require engineering review, route analysis, bridge evaluation, escort coordination and utility coordination.",
    "Indiana Toll Road requirements should be verified separately from state permit approvals.",
    "State permits do not necessarily preempt local county, city or municipal restrictions.",
    "Common Indiana freight includes construction equipment, agricultural machinery, manufacturing/industrial equipment, steel-industry cargo, transformers and wind-energy components.",
    "Loads often exceed weight limits before dimensional limits, especially in manufacturing and steel sectors.",
  ],
  sourceUrls: [
    {
      label: "INDOT Oversize/Overweight Permits",
      url: "https://www.in.gov/indot/doing-business-with-indot/oversize-overweight-permits/",
    },
    {
      label: "Indiana Permit Application System",
      url: "https://indianapermits.com/",
    },
    {
      label: "Indiana Legal Size & Weight Limits",
      url: "https://www.in.gov/indot/doing-business-with-indot/oversize-overweight-permits/legal-size-and-weight/",
    },
    {
      label: "Indiana Administrative Code",
      url: "https://iga.in.gov/laws/administrative-titles/105",
    },
  ],
};

export default indiana;

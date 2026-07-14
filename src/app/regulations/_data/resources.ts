export interface ResourceCategory {
  slug: string;
  title: string;
  description: string;
  points: string[];
}

export const resourceCategories: ResourceCategory[] = [
  {
    slug: "pilot-cars-escort-vehicles",
    title: "Pilot Cars / Escort Vehicles",
    description:
      "Oversize and over-dimensional moves often require certified pilot cars or escort vehicles to warn traffic, protect infrastructure, and keep the shipment within the approved corridor.",
    points: [
      "Requirements vary by load width, height, length, and overall weight.",
      "Some jurisdictions mandate certified escorts with specific signage and lighting.",
      "Route surveys may be required before escorts are assigned.",
      "Multi-lane highways and urban corridors can trigger additional escort rules.",
    ],
  },
  {
    slug: "axle-weight-regulations",
    title: "Axle Weight Regulations",
    description:
      "Legal and permitted axle weights depend on axle spacing, tire size, road class, and season. Exceeding axle limits can damage roads and result in fines or load rework.",
    points: [
      "Steer, drive, single, tandem, and tridem axles each have separate limits.",
      "Bridge formula calculations protect structures on approved routes.",
      "Seasonal load restrictions can reduce allowable weights in spring thaw.",
      "Permitted weights usually require pre-approved routing and conditions.",
    ],
  },
  {
    slug: "trip-irp-permits",
    title: "Trip & IRP Permits",
    description:
      "International Registration Plan (IRP) credentials and trip permits ensure commercial vehicles are properly registered for cross-border and cross-jurisdiction travel.",
    points: [
      "IRP apportioned plates cover Canada and the lower 48 U.S. states.",
      "Temporary trip permits are available for single or limited movements.",
      "Each jurisdiction has its own application process and turnaround time.",
      "Combined cab/card and plate credentials must be valid for the entire route.",
    ],
  },
  {
    slug: "fuel-ifta-permits",
    title: "Fuel / IFTA Permits",
    description:
      "The International Fuel Tax Agreement (IFTA) simplifies fuel tax reporting across member jurisdictions. Carriers need valid credentials or temporary fuel permits before crossing borders.",
    points: [
      "IFTA decals must be displayed on qualified commercial vehicles.",
      "Quarterly fuel tax returns report distance and fuel purchased by jurisdiction.",
      "Temporary fuel permits are available for non-IFTA qualified carriers.",
      "Record keeping and trip logs support accurate IFTA filings.",
    ],
  },
  {
    slug: "oversize-overweight-fines",
    title: "Oversize / Overweight Fines",
    description:
      "Fines for violating size and weight regulations can escalate quickly and may include permit revocation, vehicle impoundment, or civil liability for road damage.",
    points: [
      "Penalties are usually calculated per unit of excess weight or dimension.",
      "Some jurisdictions impose minimum fines plus additional surcharges.",
      "Operating without a required permit can trigger the highest penalties.",
      "Accurate permitting and pre-trip measurement reduce violation risk.",
    ],
  },
  {
    slug: "running-hours-holiday-restrictions",
    title: "Running Hours & Holiday Restrictions",
    description:
      "Many jurisdictions restrict when oversize loads can travel. Curfews, weekend bans, and holiday embargoes help keep traffic and events safe.",
    points: [
      "Daylight-only travel is common for the largest loads.",
      "Major holidays and long weekends often have full travel bans.",
      "Rush-hour restrictions apply in urban corridors.",
      "Some permits specify exact departure windows and required stops.",
    ],
  },
  {
    slug: "flags-lights-banners",
    title: "Flags, Lights & Banners",
    description:
      "Proper marking makes oversize loads visible to other motorists and enforcement. Flag, light, and banner rules differ by dimension and time of travel.",
    points: [
      "Red or orange flags are typically required at corners and protrusions.",
      "Amber warning lights may be required for night or wide loads.",
      `"OVERSIZE LOAD" banners are commonly required on the front and rear.`,
      "Reflective tape and conspicuity markings improve night safety.",
    ],
  },
  {
    slug: "tire-regulations",
    title: "Tire Regulations",
    description:
      "Tire ratings, tread depth, width, and chain requirements affect both legal weight limits and safe operation, especially in winter conditions.",
    points: [
      "Weight limits are tied to tire size and manufacturer cold inflation ratings.",
      "Minimum tread-depth rules apply to steering and drive axles.",
      "Studded tires and tire chains may be restricted by season or road type.",
      "Damaged or mismatched tires can put a permit and shipment at risk.",
    ],
  },
  {
    slug: "frost-laws",
    title: "Frost Laws",
    description:
      "Frost laws and seasonal weight restrictions protect roads during spring thaw when pavement is weakest. Dates and affected highways change each year.",
    points: [
      "Restrictions typically run from early spring until road beds stabilize.",
      "Reduced weight limits may apply to specific highways or entire regions.",
      "Some jurisdictions issue special permits for essential loads.",
      "Monitoring official road restriction bulletins is critical in spring.",
    ],
  },
  {
    slug: "annual-permits",
    title: "Annual Permits",
    description:
      "Annual or term permits allow repeated movement of similar oversize configurations without applying for a single-trip permit each time.",
    points: [
      "Annual permits are ideal for recurring dimensions and commodity types.",
      "They often have predefined routes, vehicle combinations, and conditions.",
      "Single-trip permits remain necessary for unusual dimensions or routes.",
      "Renewal deadlines and fee schedules vary by jurisdiction.",
    ],
  },
  {
    slug: "road-conditions",
    title: "Road Conditions",
    description:
      "Live road-condition data helps heavy-haul planners avoid closures, construction zones, weather hazards, and weight-restricted routes.",
    points: [
      "511 services and DOT websites provide current highway conditions.",
      "Construction notices can force detours for oversized loads.",
      "Wildfire, flooding, and ice events may close remote corridors.",
      "Pilot cars and route surveys help confirm real-time passability.",
    ],
  },
  {
    slug: "manufactured-homes",
    title: "Manufactured Homes & Mobile Offices",
    description:
      "Moving modular buildings, manufactured homes, and mobile offices involves unique width, height, and escort requirements that differ from typical heavy haul.",
    points: [
      "Width often exceeds legal limits and requires specific escort levels.",
      "Roof-mounted equipment and eaves add to overall height.",
      "Utility clearance and route height surveys are usually required.",
      "Some moves require police escorts or temporary utility disconnects.",
    ],
  },
];

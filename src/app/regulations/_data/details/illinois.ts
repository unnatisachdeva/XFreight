import type { RegionDetail } from "./types";

const illinois: RegionDetail = {
  slug: "illinois",
  overview: ["Illinois Oversize Permits & Regulations"],
  contacts: [
    {
      label: "Office",
      value: "Illinois Department of Transportation Bureau of Traffic",
    },
    {
      label: "Address",
      value: "2300 S. Dirksen Parkway, Springfield, Illinois 62764",
    },
    {
      label: "Contact",
      value: "(212) 785-1477 / 1 (800) 252-8636 (Illinois only)",
      href: "tel:+1-212-785-1477",
    },
    {
      label: "Hours",
      value: "7:00 A.M. – 4:30 P.M. (CT)",
    },
  ],
  permitValidity:
    "Single trip permits are valid for five (5) travel days, ten (10) travel days for a round trip. Following the third permit violation, companies can be suspended for one year.",
  operatingTime: "7:00 A.M. – 4:30 P.M. (CT)",
  legalDimensions: {
    length: "145′",
    width: "14′6″",
    height: "15′ depending on overhead clearances. 3″ clearance required.",
    axleWeights: [
      { group: "Single", weight: "24,000" },
      { group: "Tandem", weight: "48,000" },
      { group: "Tridum", weight: "60,000" },
      { group: "Quad", weight: "60,000" },
    ],
  },
  escorts: {
    miscellaneous: [
      "On All Highways (2-Lane = front; 4-Lane = rear escort) — Width over 14′6″: 1",
      "On All Highways — Width over 16′: 3",
      "On All Highways — Length over 110′: 1",
      "On All Highways — Length over 145′: 3",
      "On All Highways — Length over 150′ of towed special rigs: 3",
      "On All Highways — Height over 14′6″: 1 Front",
      "On All Highways — Height over 16′ (list all overhead obstructions): Route Survey",
      "On All Highways — Loads that exceed maximum practical weights (super loads moving slow): 1",
      "On All Highways — Loads exceeding both 14′6″ width and 14′6″ height: 2 (Front & Rear)",
      "State Police Escort (minimum 24 hr notice needed – cost $40/hr/vehicle with minimum fee of $80). These moves are generally entirely or partially outside the municipality. Triggers: over 18′ wide; over 200′ long; over 18′ high; overweight where bridge restriction requires other traffic be kept off to permit load to cross; any unusual load needing traffic control to permit move.",
      "Municipal Police Escort (minimum 24 hr notice needed). Permit office will determine if state or municipal police escort is needed for a move partially or wholly within a municipality.",
      "Over 14′6″ wide requires an engineering investigation.",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 100,000",
    "Gross Weight — 6 Axles: 120,000",
    "Gross Weight — 7 Axles: 120,000",
    "Gross Weight — 8 Axles: 120,000",
  ],
};

export default illinois;

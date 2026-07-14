import type { RegionDetail } from "./types";

/**
 * Copy this file to `{region-slug}.ts` and fill in the data.
 * The slug must match the value in `src/app/regulations/_data/regions.ts`.
 *
 * Example: copy this file to `british-columbia.ts`, then update the fields below.
 */
const template: RegionDetail = {
  slug: "template",
  overview: [
    "Add one or more overview paragraphs describing the jurisdiction's oversize/overweight permitting system.",
  ],
  contacts: [
    { label: "Office", value: "Permit Office Name" },
    { label: "Phone", value: "+1-000-000-0000", href: "tel:+1-000-000-0000" },
    { label: "Email", value: "permits@example.gov", href: "mailto:permits@example.gov" },
  ],
  permitValidity: "Describe permit duration and types available.",
  operatingTime: "Describe standard operating hours, daylight rules, holiday bans, etc.",
  legalDimensions: {
    length: "Legal length",
    overhang: "Front / rear overhang",
    width: "Legal width",
    height: "Legal height",
    weight: "General weight note",
    axleWeights: [
      { group: "Single", spacing: "8'1\"", weight: "20,000 lb" },
      { group: "Tandem", spacing: "3'6\"", weight: "38,000 lb" },
    ],
  },
  routinePermitLimits: {
    length: "Routine permit length",
    width: "Routine permit width",
    height: "Routine permit height",
    weight: "Routine permit weight",
  },
  escorts: {
    width: ["Over 10'6\" – 1 pilot car", "Over 12' – 2 pilot cars"],
    length: ["Over 85' – 1 pilot car"],
    overhang: ["Over 10' rear – 1 pilot car"],
    height: ["Over 17' – 1 pilot car"],
    weight: ["Special bridge conditions – 2 pilot cars"],
    miscellaneous: ["Any other escort notes."],
  },
  signsFlagsLights: [
    '"OVERSIZE LOAD" banner requirements',
    "Flag color and size requirements",
    "Amber beacon / lighting requirements",
  ],
  seasonalRestrictions: [
    "Spring thaw/frost law notes",
    "Winter weight increases or reductions",
  ],
  fines: ["Fine schedule or general penalty notes."],
  annualPermits: ["Annual permit options and limits."],
  manufacturedHomes: ["Specific manufactured-home or mobile-office rules."],
  notes: ["Any additional cautions or special conditions."],
  sourceUrls: [
    { label: "Official source page", url: "https://www.example.gov/permits" },
  ],
};

export default template;

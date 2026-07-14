export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

export interface AxleWeightEntry {
  group: string;
  spacing?: string;
  weight: string;
  note?: string;
}

export interface DimensionLimits {
  /** Maximum overall or semi-trailer length. */
  length?: string;
  /** Front and rear overhang limits. */
  overhang?: string;
  /** Maximum legal width. */
  width?: string;
  /** Maximum legal height. */
  height?: string;
  /** Gross vehicle weight or general weight note. */
  weight?: string;
  /** Per-axle or axle-group limits. */
  axleWeights?: AxleWeightEntry[];
}

export interface EscortRules {
  /** Width thresholds and required escorts. */
  width?: string[];
  /** Length thresholds and required escorts. */
  length?: string[];
  /** Overhang thresholds and required escorts. */
  overhang?: string[];
  /** Height thresholds and required escorts. */
  height?: string[];
  /** Weight / bridge-related escort requirements. */
  weight?: string[];
  /** Anything that does not fit the categories above. */
  miscellaneous?: string[];
}

export interface RegionDetail {
  /** Must match the region slug from regions.ts. */
  slug: string;
  /** Short overview paragraph(s). */
  overview: string[];
  /** Permit office contacts (phone, email, office name, links). */
  contacts?: ContactInfo[];
  /** How long permits are valid or general validity notes. */
  permitValidity?: string;
  /** When permitted loads may travel. */
  operatingTime?: string;
  /** Standard legal dimension and weight limits. */
  legalDimensions?: DimensionLimits;
  /** Limits available under routine oversize/overweight permits. */
  routinePermitLimits?: DimensionLimits;
  /** Pilot-car / escort-vehicle requirements. */
  escorts?: EscortRules;
  /** Sign, flag, banner, and lighting rules. */
  signsFlagsLights?: string[];
  /** Seasonal / frost / thaw restrictions. */
  seasonalRestrictions?: string[];
  /** Fine schedules and penalty notes. */
  fines?: string[];
  /** Annual permit options, if any. */
  annualPermits?: string[];
  /** Manufactured-home / mobile-office-specific rules. */
  manufacturedHomes?: string[];
  /** Free-form notes, cautions, or special conditions. */
  notes?: string[];
  /** Authoritative source links for verification. */
  sourceUrls?: { label: string; url: string }[];
}

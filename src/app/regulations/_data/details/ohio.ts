import type { RegionDetail } from "./types";

const ohio: RegionDetail = {
  slug: "ohio",
  overview: [
    "Ohio oversize and overweight permits are issued by the Ohio Department of Transportation, Special Hauling Office. Single-trip permits are valid for five consecutive days.",
    "Permit approval depends on the proposed route, dimensions, axle weights and bridge-analysis requirements.",
  ],
  contacts: [
    {
      label: "Office",
      value: "Ohio Department of Transportation, Special Hauling Office — Ohio Oversize Permits Section",
    },
    {
      label: "Address",
      value: "1610 W. Broad Street, Columbus, Ohio 43223",
    },
    {
      label: "Contact",
      value: "(614) 351-2300",
      href: "tel:+1-614-351-2300",
    },
    {
      label: "Hours",
      value: "8:00 A.M. – 5:00 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for five (5) consecutive days.",
  operatingTime: "8:00 A.M. – 5:00 P.M. (ET)",
  routinePermitLimits: {
    length: "No set maximum",
    width: "14′",
    height: "14′6″",
    weight: "Not to exceed 120,000 lbs; specific configurations may exceed with bridge approval",
    axleWeights: [
      { group: "Single", weight: "29,000" },
      {
        group: "Tandem",
        note: "36,000 at 4′0″ or less; 46,000 over 4′ plus 1,000 lb per additional foot",
        weight: "See spacing",
      },
      {
        group: "Tridum",
        note: "60,000 at 4′1″ minimum spacing; 53,000 over 4′ plus 700 lb per additional foot",
        weight: "See spacing",
      },
      { group: "Quad", note: "4′6″ spacings", weight: "57,200" },
    ],
  },
  escorts: {
    width: [
      "Width over 13′: 1 lead (rear on multi-lane highway)",
      "Width over 14′6″: 1 lead & 1 rear",
    ],
    length: ["Length over 90′: 1 rear"],
    height: [
      "Height over 14′6″: 1 lead escort vehicle equipped with a height-sensing device",
      "Height over 14′10″: 1 lead & 1 rear",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles single-tandem-tandem: 121,000 GVW (must have 51′ outer bridge and 36′ inner bridge to carry overweight on 5 axles)",
    "Gross Weight — 6 Axles single-tandem-tridum: 128,000 GVW",
    "Gross Weight — 7 Axles single-tridum-tridum: 135,000 GVW",
    "Gross Weight — 8 Axles single-tandem-tandem-tridum: 174,000 GVW",
    "Escort vehicles must maintain radio communication with the permitted vehicle operator and be equipped with roof-mounted amber flashing or rotating light(s); driver acts as flagman when needed",
    "Lead escort must proceed 500′ in advance of the permit vehicle/load; rear escort must follow 500′ behind",
    "Commercial vehicles operated under a permit and escorted by the Ohio State Highway Patrol must pass an MCSAP inspection prior to movement; out-of-state inspections are not honored unless a CVSA decal was awarded",
  ],
};

export default ohio;

import type { RegionDetail } from "./types";

const newJersey: RegionDetail = {
  slug: "new-jersey",
  overview: [
    "New Jersey oversize and overweight permits are issued by the New Jersey Motor Carriers' Unit, Division of Motor Vehicles. Single-trip permits are valid for three days.",
    "Permit approval depends on the proposed route, dimensions, tire configurations and traffic-control needs.",
  ],
  contacts: [
    {
      label: "Office",
      value: "New Jersey Motor Carriers' Unit, Division of Motor Vehicles",
    },
    {
      label: "Address",
      value: "225 East State Street, PO 133, Trenton, New Jersey 08666",
    },
    {
      label: "Contact",
      value: "(609) 633-9402",
      href: "tel:+1-609-633-9402",
    },
    {
      label: "Hours",
      value: "8:30 A.M. – 4:00 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for three (3) days.",
  operatingTime: "8:30 A.M. – 4:00 P.M. (ET)",
  routinePermitLimits: {
    length: "120′",
    width: "18′",
    height: "16′",
    weight:
      "Axle and gross weights depend on the number of tires and tire sizes",
    axleWeights: [
      {
        group: "Single, Tandem, Tridum & Quad",
        note: "Depends on number of tires and tire sizes",
        weight: "See permit conditions",
      },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 14′: 1 front",
      "On 2-lane highways — width over 16′: 2 (front & rear)",
      "On 4+ lane highways — width over 14′: 1 rear",
      "On 4+ lane highways — width over 16′: 2 (front & rear)",
    ],
    length: [
      "On 2-lane highways — length over 100′: 1 front",
      "On 2-lane highways — length 120′ or over: 2 (front & rear)",
      "On 4+ lane highways — length over 100′: 1 rear",
      "On 4+ lane highways — length 120′ or over: 2 (front & rear)",
    ],
  },
  notes: [
    "Anything over normal legal limits requires routes, miles traveled and a policeman's name and badge number",
    "Example: 4 tires at 10″ width with 800 lbs per inch capacity = 10 × 800 × 4 = 32,000 lbs per axle",
  ],
};

export default newJersey;

import type { RegionDetail } from "./types";

const newYork: RegionDetail = {
  slug: "new-york",
  overview: [
    "New York oversize and overweight permits are issued by the New York Department of Transportation Permit Unit. Single-trip permits are valid for five permissible travel days.",
    "Length, width and height are evaluated individually with no set maximums. Loads over 160,000 lbs GVW require Bridge Department approval, which may take two days.",
  ],
  contacts: [
    {
      label: "Office",
      value: "New York Permit Unit, Department of Transportation",
    },
    {
      label: "Address",
      value: "50 Wolf Road, Albany, New York 12232",
    },
    {
      label: "Contact",
      value: "(518) 457-1155",
      href: "tel:+1-518-457-1155",
    },
    {
      label: "Hours",
      value: "7:30 A.M. – 4:00 P.M. (ET)",
    },
  ],
  permitValidity: "Single-trip permits are valid for five (5) permissible travel days.",
  operatingTime: "7:30 A.M. – 4:00 P.M. (ET)",
  routinePermitLimits: {
    length: "No set maximum",
    width: "No set maximum",
    height:
      "No set maximum; 3″ clearance required up to 14′, 6″ clearance over 14′. Loads 15′ or over may need a bucket truck to raise traffic signals. Anything 14′ high and over requires a height survey.",
    weight: "Anything over 160,000 lbs must go to the Bridge Department",
    axleWeights: [
      { group: "Single", note: "Varies by routing and tire sizes", weight: "See permit conditions" },
      { group: "Tandem", weight: "50,000 lbs" },
      { group: "Tridum", weight: "60,000 lbs" },
      { group: "Quad", note: "Varies by routing and tire sizes", weight: "See permit conditions" },
    ],
  },
  escorts: {
    width: [
      "On 2-lane highways — width over 12′: 1 front",
      "On 2-lane highways — width 16′ and over: 4 (2 front & 1 rear + police)",
      "On 4+ lane highways — width over 12′: 1 rear",
      "On 4+ lane highways — width 18′ and over: 4 (2 front & 1 rear + police)",
      "New York City — width over 11′: 1 rear",
      "New York City — width over 14′ (routes may be restricted): 2 (front & rear)",
      "NY Thruway — width over 12′: 1 rear",
      "NY Thruway — width 14′ to 15′11″ (I-84 only): 2 (front & rear)",
      "NY Thruway — width over 16′: State Police",
    ],
    length: [
      "On 2-lane highways — length 80′ and over: 1 front",
      "On 2-lane highways — length 100′ and over: 2 (1 front & 1 rear)",
      "On 2-lane highways — length 140′ and over: 4 (2 front & 1 rear + police)",
      "On 4+ lane highways — length 80′ and over: 1 rear",
      "On 4+ lane highways — length 100′ and over: 2 (1 front & 1 rear)",
      "On 4+ lane highways — length 200′ and over: 4 (2 front & 1 rear + police)",
      "New York City — length over 65′: 1 rear",
      "NY Thruway — overhang over 10′: 1 rear",
    ],
    height: [
      "On 2-lane highways — height over 14′0″ with high pole: 1 front",
      "On 2-lane highways — height 16′ and over with high pole: 1 front + police",
      "On 4+ lane highways — height 14′ with high pole: 1 front",
      "On 4+ lane highways — height 16′ and over with high pole: 1 front + police",
      "NY Thruway — height over 13′6″ with high pole: 1 front",
    ],
    overhang: [
      "On 2-lane highways — overhang over 10′: 1 front",
      "On 4+ lane highways — overhang over 10′: 1 rear",
    ],
    miscellaneous: [
      "Slow-moving vehicles or those with speed restrictions on 4+ lane highways: 1 rear",
      "Weight over 200,000 lbs or if vehicle must cross the centerline of a structure: police escort",
      "Route survey required for loads 14′ high, 16′ wide or 100′ long",
      "NY escorts must be state-certified for loads over 12′ wide, 80′ long, 14′ high, 10′ overhang, or any load unable to maintain highway speed or with bridge speed restrictions; escort insignia required on both front doors; certification renewed every 4 years; escort vehicle wheelbase must be at least 100″ (waiver possible)",
      "Width 8′7″–12′0″: 18″ × 18″ red/orange fluorescent flags at all corners, flashing/rotating lights, warning signs front and rear",
      "Width 12′1″–13′11″: adds certified escort preceding on 2-lane, following on multi-lane",
      "Width 14′0″–15′11″: adds no travel in business districts 7–9 a.m. and 4–6 p.m.",
      "Width 16′0″: adds front and rear certified escorts on all routes and route survey",
      "Width over 16′0″: third certified escort may be necessary in front on 2-lane highways",
      "Width 18′ or greater: third certified escort may be necessary in rear on 4-lane highways",
      "Escort personnel are not permitted to stop traffic on the NY Thruway",
    ],
  },
  notes: [
    "Gross Weight — 5 Axles: 120,000",
    "Gross Weight — 6 Axles: 130,000",
    "Gross Weight — 7 Axles: 140,000",
  ],
};

export default newYork;

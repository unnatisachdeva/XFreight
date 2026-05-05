export interface CareerRole {
  slug: string;
  title: string;
  teaser: string;
  overview: string[];
  responsibilities: string[];
  qualifications: string[];
}

export const roles: CareerRole[] = [
  {
    slug: "sales",
    title: "Sales",
    teaser:
      "Drive revenue growth by connecting shippers with our full-service transportation solutions.",
    overview: [
      "As a Sales Representative at X Freight Group, you'll be at the forefront of our growth, building relationships with shippers across Western Canada and connecting them with our comprehensive transportation services.",
      "You'll prospect new business opportunities, manage existing accounts, and work closely with our operations team to deliver solutions that meet each client's unique freight needs. This role is ideal for driven, relationship-oriented professionals who thrive in a fast-paced logistics environment.",
    ],
    responsibilities: [
      "Prospect and develop new shipper relationships across Western Canada",
      "Manage and grow existing client accounts",
      "Negotiate competitive rates and service agreements",
      "Collaborate with operations on shipment planning and execution",
      "Build and maintain a strong pipeline of business opportunities",
      "Attend industry events and networking functions",
      "Provide market intelligence and competitive insights to leadership",
    ],
    qualifications: [
      "2+ years of logistics or transportation sales experience",
      "Strong communication and negotiation skills",
      "Proven track record of meeting or exceeding sales targets",
      "Knowledge of Western Canadian freight markets (preferred)",
      "Self-motivated with excellent time management",
      "Valid driver's license and willingness to travel",
      "CRM experience (Salesforce, HubSpot, or similar) is an asset",
    ],
  },
  {
    slug: "operations",
    title: "Operations",
    teaser:
      "Coordinate freight movements and keep our logistics running smoothly from dispatch to delivery.",
    overview: [
      "Our Operations team is the engine that powers X Freight Group. As an Operations Coordinator, you'll manage the day-to-day logistics of freight movement — from dispatching drivers and coordinating with carriers to managing documentation and ensuring on-time delivery.",
      "This role requires attention to detail, strong organizational skills, and the ability to thrive under pressure. You'll work in a collaborative environment where every day brings new challenges and the satisfaction of keeping supply chains moving.",
    ],
    responsibilities: [
      "Dispatch drivers and coordinate load assignments",
      "Manage carrier relationships and communication",
      "Track shipments and provide status updates to clients",
      "Handle documentation including BOLs, PODs, and invoicing",
      "Resolve operational issues and delays proactively",
      "Coordinate with sales team on customer requirements",
      "Maintain accurate records in transportation management systems",
    ],
    qualifications: [
      "Experience in freight operations, dispatch, or logistics coordination",
      "Detail-oriented with strong organizational skills",
      "Ability to multitask in a fast-paced environment",
      "Excellent communication skills (phone and email)",
      "Proficiency with TMS software and Microsoft Office",
      "Knowledge of Canadian transportation regulations is an asset",
      "Ability to work flexible hours when needed",
    ],
  },
  {
    slug: "drivers",
    title: "Drivers",
    teaser:
      "Join our fleet and deliver freight safely across Western Canada with a company that values its drivers.",
    overview: [
      "X Freight Group is looking for experienced, safety-conscious drivers to join our growing fleet. As a Driver with our team, you'll transport freight across Western Canada — from flatbed loads to specialized oilfield and heavy-haul equipment.",
      "We value our drivers as the backbone of our operation. You'll benefit from competitive pay, well-maintained equipment, and a company culture that prioritizes your safety, well-being, and professional development.",
    ],
    responsibilities: [
      "Safely transport freight to destinations across Western Canada",
      "Conduct thorough pre-trip and post-trip vehicle inspections",
      "Maintain accurate driver logs and documentation",
      "Secure loads properly following company and regulatory standards",
      "Communicate with dispatch on schedule, delays, and conditions",
      "Comply with all federal and provincial transportation regulations",
      "Represent X Freight Group professionally at customer sites",
    ],
    qualifications: [
      "Valid Class 1 (AZ) license",
      "Clean driver's abstract",
      "Experience with flatbed and/or oversize loads preferred",
      "Knowledge of load securement standards",
      "Ability to pass drug and alcohol testing",
      "Strong safety record and safety-first mindset",
      "Willingness to be away from home as required by route assignments",
    ],
  },
];

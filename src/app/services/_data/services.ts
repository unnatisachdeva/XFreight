export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string[];
  highlights: string[];
  whoItsFor: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "truckload-open-deck",
    title: "Truckload – Open Deck",
    shortDesc: "Flatbed and open-deck freight across Western Canada.",
    description: [
      "Our truckload and open-deck services provide reliable flatbed transportation across Western Canada. Whether you're moving lumber, steel, machinery, or construction materials, our asset-backed fleet is equipped to handle your freight with precision and care.",
      "With flexible scheduling and experienced drivers, we ensure your open-deck shipments arrive on time and in perfect condition. Our extensive network covers major industrial corridors throughout British Columbia, Alberta, Saskatchewan, and Manitoba.",
      "We understand the unique challenges of open-deck freight — from securing oversized loads to navigating seasonal weather conditions. Our team brings decades of combined experience to every haul.",
    ],
    highlights: [
      "Flexible scheduling to meet your timelines",
      "Asset-backed fleet with modern equipment",
      "Experienced drivers trained in load securement",
      "Coverage across all Western Canadian provinces",
      "Suitable for lumber, steel, machinery, and construction materials",
      "Real-time shipment tracking and communication",
    ],
    whoItsFor:
      "Construction companies, steel distributors, lumber mills, and industrial manufacturers who need reliable flatbed transportation for their goods across Western Canada.",
    icon: "🚚",
    image: "/opendeck.jpeg",
  },
  {
    slug: "oilfield",
    title: "Oil Field",
    shortDesc: "Specialized transportation for the oil and gas sector.",
    description: [
      "Our oil field transportation services are purpose-built for the demanding requirements of Canada's oil and gas industry. We provide 24/7 availability for rig moves, equipment hauling, and supply chain support in both conventional and unconventional operations.",
      "With CVOR-compliant operations and specialized equipment, we can reach remote well sites and facilities across Western Canada's energy-producing regions. Our drivers are trained in oil field safety protocols and understand the urgency that defines this industry.",
      "From drilling equipment to production supplies, we deliver the critical cargo that keeps operations running — on time, every time.",
    ],
    highlights: [
      "CVOR-compliant operations",
      "24/7 availability for urgent shipments",
      "Remote location capability",
      "Specialized oil field equipment",
      "Safety-trained drivers with H2S and first aid certifications",
      "Rig move coordination and planning",
    ],
    whoItsFor:
      "Oil and gas producers, drilling companies, well servicing operations, and energy sector supply companies who need reliable, safety-compliant transportation for their equipment and materials.",
    icon: "🛢️",
    image: "/oilfield.jpeg",
  },
  {
    slug: "ice-road-transport",
    title: "Ice Road Transport",
    shortDesc:
      "Seasonal freight to remote northern communities via ice roads.",
    description: [
      "Ice road transport is one of the most challenging and specialized logistics operations in the world. Our team has the seasonal expertise and heavy load capability to deliver critical supplies to remote northern communities across Canada's winter road network.",
      "Each ice road season brings unique conditions — from fluctuating temperatures to shifting ice thickness. Our experienced northern drivers understand these variables and navigate them safely, delivering everything from fuel and building materials to heavy equipment.",
      "We coordinate closely with territorial authorities and community leaders to ensure deliveries align with road conditions and community needs.",
    ],
    highlights: [
      "Seasonal expertise in winter road operations",
      "Heavy load capability for ice road conditions",
      "Experienced northern drivers",
      "Coordination with territorial road authorities",
      "Critical supply delivery to remote communities",
      "Fuel, building materials, and heavy equipment hauling",
    ],
    whoItsFor:
      "Mining operations, remote community suppliers, government agencies, and any organization that needs freight delivered to northern locations accessible only via seasonal ice roads.",
    icon: "❄️",
    image: "/iceroad.jpeg",
  },
  {
    slug: "aggregate",
    title: "Aggregate",
    shortDesc:
      "Bulk material transport: gravel, sand, rock, and construction aggregate.",
    description: [
      "Our aggregate transportation services support Western Canada's booming construction and infrastructure sectors. We move high volumes of gravel, sand, rock, and other construction aggregates efficiently and reliably.",
      "With a fleet optimized for bulk material hauling, we can handle the demanding schedules and volumes that construction projects require. Our regional expertise means we know the best routes, the local regulations, and the timing that maximizes your project efficiency.",
      "Whether you're building roads, foundations, or large-scale infrastructure, our aggregate hauling keeps your project on schedule.",
    ],
    highlights: [
      "High-volume capacity for bulk materials",
      "Regional expertise across Western Canada",
      "Construction-sector focus and understanding",
      "Optimized fleet for aggregate hauling",
      "Flexible scheduling for project timelines",
      "Competitive rates for high-volume contracts",
    ],
    whoItsFor:
      "General contractors, road construction companies, concrete producers, and infrastructure developers who need reliable, high-volume aggregate transportation.",
    icon: "🏗️",
    image: "/aggregate.jpeg",
  },
  {
    slug: "heavy-haul-overdimensional",
    title: "Heavy-Haul / Over-Dimensional",
    shortDesc:
      "Transport of oversized and overweight loads requiring permits.",
    description: [
      "When standard freight solutions aren't enough, our heavy-haul and over-dimensional division steps in. We specialize in moving the loads that others can't — oversized, overweight, and uniquely shaped cargo that requires expert planning and execution.",
      "Our team handles every aspect of the haul: route surveys, permit acquisition, pilot car coordination, and specialized equipment selection. We work with provincial and municipal authorities to ensure every load moves safely and legally.",
      "From industrial transformers to pre-fabricated structures, we have the expertise and equipment to deliver your most challenging freight.",
    ],
    highlights: [
      "Comprehensive route planning and surveys",
      "Permit acquisition across multiple jurisdictions",
      "Pilot car coordination",
      "Specialized equipment (RGN, multi-axle, step-deck)",
      "Overweight and over-dimensional load expertise",
      "Coordination with provincial transport authorities",
    ],
    whoItsFor:
      "Industrial manufacturers, energy companies, construction firms, and any organization that needs to move oversized or overweight cargo safely across Western Canada.",
    icon: "⚙️",
    image: "/heavyhaul.jpeg",
  },
  {
    slug: "freight-brokerage",
    title: "Freight Brokerage",
    shortDesc: "Connecting shippers with vetted carriers across Canada.",
    description: [
      "Our freight brokerage division connects shippers with a vetted network of carriers across Canada. We leverage our industry relationships and market knowledge to find the right carrier for every load — at competitive rates.",
      "From full truckload to specialized equipment, our brokerage team matches your freight needs with qualified carriers who meet our standards for safety, reliability, and professionalism. We handle the logistics so you can focus on your business.",
      "End-to-end management means you get a single point of contact for quoting, booking, tracking, and invoicing — making your supply chain simpler and more efficient.",
    ],
    highlights: [
      "Extensive vetted carrier network",
      "Competitive rate matching",
      "Load matching for all freight types",
      "End-to-end shipment management",
      "Single point of contact",
      "Coverage across all Canadian provinces",
    ],
    whoItsFor:
      "Shippers of all sizes who need flexible, reliable freight solutions without the overhead of managing carrier relationships directly.",
    icon: "🤝",
    image: "/freightbrokerage.jpeg",
  },
];

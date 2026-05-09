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
    shortDesc: "Flatbed and open-deck freight across Canada and US.",
    description: [
      "Our open deck division provides reliable flatbed and stepdeck trucking across Western Canada and throughout North America. We handle everything from construction materials and steel to machinery and oversized freight requiring specialized securement. With experienced drivers and well-maintained equipment, we ensure safe loading, proper tarping, and on-time delivery. Whether it’s a single shipment or ongoing project work, we bring consistency and visibility to every move."
    ],
    highlights: [],
    whoItsFor:
      "construction companies, steel mills, equipment dealers, lumber yards, sawmills, infrastructure contractors, industrial manufacturers, oilfield service companies",
    icon: "🚚",
    image: "/s-opendeck.jpeg",
  },
  {
    slug: "oilfield",
    title: "Oil Field",
    shortDesc: "Specialized transportation for the oil and gas sector.",
    description: [
      "We embrace the pace and pressure of Canada’s energy sector. Our oilfield logistics services support drilling, completions, and production operations. We move pipe, frac sand, rig mats, and heavy equipment with the responsiveness required in active fields. Our team understands site requirements, safety standards, and tight timelines, ensuring your freight arrives when and where it’s needed—without disruption to operations."
    ],
    highlights: [],
    whoItsFor:
      "oil & gas companies, drilling contractors, fracking companies, well service providers, energy producers, pipeline contractors, field operations teams",
    icon: "🛢️",
    image: "/s-oilfield.jpeg",
  },
  {
    slug: "ice-road-transport",
    title: "Ice Road Transport",
    shortDesc:
      "Seasonal freight to remote northern communities via ice roads.",
    description: [
      "We specialize in moving critical freight into remote northern regions via ice roads. From equipment and fuel to essential supplies and extra parts, our team plans and executes shipments in some of the harshest conditions in North America. With experienced operators and a strong focus on safety and timing, we ensure your freight reaches isolated job sites during narrow winter access windows."
    ],
    highlights: [],
    whoItsFor:
      "mining companies, northern construction projects, remote communities, energy exploration companies, government projects, infrastructure developers",
    icon: "❄️",
    image: "/s-iceroads.jpeg",
  },
  {
    slug: "aggregate",
    title: "Aggregate",
    shortDesc:
      "Bulk material transport: gravel, sand, rock, and construction aggregate.",
    description: [
      "High-volume hauling with scale and efficiency. Our aggregate division handles sand, gravel, and bulk materials across Western Canada with a large fleet of dump trucks and dependable turnaround times."
    ],
    highlights: [],
    whoItsFor:
      "construction companies, road builders, concrete suppliers, asphalt plants, infrastructure contractors, excavation companies, municipal projects",
    icon: "🏗️",
    image: "/s-Aggregate.jpeg",
  },
  {
    slug: "heavy-haul-overdimensional",
    title: "Heavy-Haul / Over-Dimensional",
    shortDesc:
      "Transport of oversized and overweight loads requiring permits.",
    description: [
      "We manage complex heavy haul and over-dimensional freight from start to finish. From multi-axle configurations to specialized trailers, we handle permits, routing, and pilot escorts to ensure compliance and safe delivery. Whether moving large industrial components or oversized equipment, we bring the planning and execution required to move challenging freight without delays."
    ],
    highlights: [],
    whoItsFor:
      "industrial manufacturers, mining operations, oil & gas companies, power generation projects, equipment dealers, engineering firms, construction contractors",
    icon: "⚙️",
    image: "/s-heavyhaul.jpeg",
  },
  {
    slug: "freight-brokerage",
    title: "Freight Brokerage",
    shortDesc: "Connecting shippers with vetted carriers across Canada.",
    description: [
      "Flexible, proactive logistics solutions. Our brokerage division connects you with vetted carrier partners while leveraging our internal fleet expertise to ensure reliability, visibility, and competitive pricing."
    ],
    highlights: [],
    whoItsFor:
      "food & beverage companies, retail distributors, manufacturers, CPG brands, import/export businesses, warehouses, 4PL partners",
    icon: "🤝",
    image: "/s-freightbrokerage.jpeg",
  },
];

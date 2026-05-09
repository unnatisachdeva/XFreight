import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { services } from "./_data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive freight and logistics services across Western Canada — Flatbed, Oil Field, Ice Road, Aggregate, Heavy-Haul, and Freight Brokerage. Get a quote from X Freight Group today.",
  openGraph: {
    title: "Our Services | X Freight Group",
    description:
      "Specialized logistics solutions built for Western Canada's toughest environments and most demanding industries.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "X Freight Group Services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.shortDesc,
      provider: {
        "@type": "Organization",
        name: "X Freight Group Inc.",
      },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesClient />
    </>
  );
}

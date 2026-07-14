import type { Metadata } from "next";
import RegulationsClient from "./RegulationsClient";
import { resourceCategories } from "./_data/resources";

export const metadata: Metadata = {
  title: "Permits & Escorts",
  description:
    "Permit and escort guidance for oversize and overweight freight across Canada and the United States. Explore regional requirements, escort rules, axle weights, frost laws, and more from X Freight Group.",
  openGraph: {
    title: "Permits & Escorts | X Freight Group",
    description:
      "Permit and escort guidance for oversize and heavy-haul freight across Canada and the United States.",
    url: "/regulations",
  },
  alternates: {
    canonical: "/regulations",
  },
};

const regulationsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Permits & Escorts",
  description:
    "Permit, escort, and regional requirement resources for oversize and overweight freight in Canada and the United States.",
  url: "https://www.xfreight.ca/regulations",
  provider: {
    "@type": "Organization",
    name: "X Freight Group Inc.",
    url: "https://www.xfreight.ca",
  },
  hasPart: resourceCategories.map((category) => ({
    "@type": "WebPageElement",
    name: category.title,
    description: category.description,
  })),
};

export default function RegulationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(regulationsJsonLd) }}
      />
      <RegulationsClient />
    </>
  );
}

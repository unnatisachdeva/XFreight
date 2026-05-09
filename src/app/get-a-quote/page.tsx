import type { Metadata } from "next";
import QuoteFormClient from "./QuoteFormClient";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a competitive freight quote from X Freight Group. Flatbed, Oil Field, Aggregate, Heavy-Haul, Ice Road, and Brokerage services across Western Canada.",
  openGraph: {
    title: "Get a Quote | X Freight Group",
    description:
      "Request a fast, accurate freight quote from Western Canada's most reliable asset-backed fleet.",
    url: "/get-a-quote",
  },
  alternates: {
    canonical: "/get-a-quote",
  },
};

export default function GetAQuotePage() {
  return <QuoteFormClient />;
}

import type { Metadata } from "next";
import ShipWithUsClient from "./ShipWithUsClient";

export const metadata: Metadata = {
  title: "Ship With Us",
  description:
    "Connect with X Freight Group to ship your freight across Western Canada. Full Truckload, LTL, Flatbed, Temperature Controlled, Expedited, and Cross-Border services.",
  openGraph: {
    title: "Ship With Us | X Freight Group",
    description:
      "Whether you need a quick quote or a long-term logistics partnership, X Freight has the capacity and expertise to deliver.",
    url: "/ship-with-us",
  },
  alternates: {
    canonical: "/ship-with-us",
  },
};

export default function ShipWithUsPage() {
  return <ShipWithUsClient />;
}

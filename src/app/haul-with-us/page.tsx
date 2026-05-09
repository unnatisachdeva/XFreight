import type { Metadata } from "next";
import HaulWithUsClient from "./HaulWithUsClient";

export const metadata: Metadata = {
  title: "Haul With Us",
  description:
    "Join X Freight Group's carrier network. Apply as a carrier partner — Flatbed, Step Deck, RGN, Dry Van, Tanker, End Dump opportunities across Western Canada.",
  openGraph: {
    title: "Haul With Us | X Freight Group",
    description:
      "Join our growing network of carriers. Tell us about your operation and we'll be in touch to discuss partnership opportunities.",
    url: "/haul-with-us",
  },
  alternates: {
    canonical: "/haul-with-us",
  },
};

export default function HaulWithUsPage() {
  return <HaulWithUsClient />;
}

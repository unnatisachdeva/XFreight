import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xfreight.ca"),
  title: {
    template: "%s | X Freight Group",
    default: "X Freight Group | Asset-Backed Western Canadian Logistics",
  },
  description:
    "Asset-backed Western-Canadian logistics. Full-service freight transportation including Flatbed, Oil Field, Aggregate, Oversize/Heavy-Haul, Ice Road Transport, and Freight Brokerage across Canada.",
  keywords: [
    "freight transportation",
    "Western Canada logistics",
    "flatbed trucking",
    "heavy haul",
    "oil field transport",
    "aggregate hauling",
    "ice road transport",
    "freight brokerage",
    "open deck",
    "over-dimensional",
    "asset-backed carrier",
    "Alberta trucking",
    "British Columbia freight",
    "Saskatchewan logistics",
    "Canadian freight",
  ],
  authors: [{ name: "X Freight Group Inc." }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "X Freight Group",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "X Freight Group — Asset-Backed Western Canadian Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "X Freight Group Inc.",
  url: "https://www.xfreight.ca",
  logo: "https://www.xfreight.ca/image.png",
  description:
    "Asset-backed Western-Canadian logistics company offering full-service freight transportation including Flatbed, Oil Field, Aggregate, Heavy-Haul, Ice Road, and Freight Brokerage.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-780-605-5557",
    contactType: "customer service",
    email: "info@xfreight.ca",
    availableLanguage: "English",
    areaServed: "CA",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

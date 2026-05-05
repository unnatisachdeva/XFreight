import type { Metadata } from "next";
import Link from "next/link";
import { services } from "./_data/services";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services | X Freight Group",
  description:
    "Explore our specialized transportation services: Truckload, Oilfield, Ice Road, Aggregate, Heavy-Haul, and Freight Brokerage across Western Canada.",
};

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Our <span className={styles.headerHighlight}>Services</span>
        </h1>
        <p>
          Comprehensive logistics solutions built for Western Canada&apos;s
          toughest environments and most demanding industries.
        </p>
      </header>

      <div className={styles.grid}>
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={styles.card}
          >
            <div className={styles.cardIcon}>{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.shortDesc}</p>
            <span className={styles.cardLink}>Learn More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

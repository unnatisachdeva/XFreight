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
      <header className={`${styles.header} animate-fade-in`}>
        <h1>
          Our <span className={styles.headerHighlight}>Services</span>
        </h1>
        <p>
          Comprehensive logistics solutions built for Western Canada&apos;s
          toughest environments and most demanding industries.
        </p>
      </header>

      <div className={`${styles.grid} animate-fade-in delay-1`}>
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`#${service.slug}`}
            className={styles.card}
          >
            <div className={styles.cardIcon}>{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.shortDesc}</p>
            <span className={styles.cardLink}>Learn More →</span>
          </Link>
        ))}
      </div>

      <div className={styles.detailsContainer}>
        {services.map((service) => (
          <section key={service.slug} id={service.slug} className={styles.detailSection}>
            <header className={styles.detailHeader}>
              <div className={styles.iconBadge}>{service.icon}</div>
              <h2>{service.title}</h2>
            </header>

            <div className={styles.detailContent}>
              <div className={styles.description}>
                {service.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className={styles.sidebar}>
                <div className={styles.whoSection}>
                  <h3>
                    <span className={styles.sectionIcon}>👤</span> Who It&apos;s For
                  </h3>
                  <p className={styles.whoText}>{service.whoItsFor}</p>
                </div>

                <div className={styles.ctaBox}>
                  <h4>Ready to get started?</h4>
                  <p>Request a free quote and let us handle your freight.</p>
                  <Link href="/get-a-quote" className="btn btn-primary">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

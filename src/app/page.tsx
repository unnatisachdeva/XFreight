import Link from "next/link";
import { services } from "./services/_data/services";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.overlay}></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mainimage.jpeg" alt="Logistics Truck" className={styles.heroImage} />
        </div>
        
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in">
            <span className={styles.highlight}>Asset-Backed</span> Western-Canadian Logistics.{" "}
            <span className={styles.highlight}>Your Freight, Handled Right.</span>
          </h1>
          <p className="animate-fade-in delay-1">
            Plan. Execute. Deliver. Full-service transportation including Flatbed, Oil Field, 
            Aggregate, Oversize/Heavy-Haul, and Freight Brokerage to keep your supply chain moving.
          </p>
          <div className={`${styles.ctaGroup} animate-fade-in delay-2`}>
            <Link href="/ship-with-us" className="btn btn-primary">Ship With Us</Link>
            <Link href="/haul-with-us" className="btn btn-secondary">Haul With Us</Link>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <h2>Specialized Transportation Services</h2>
          <p>We provide comprehensive logistics solutions tailored for the toughest environments.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.slug} className={styles.card}>
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <Link href={`/services#${service.slug}`} className={styles.learnMore}>Learn More →</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

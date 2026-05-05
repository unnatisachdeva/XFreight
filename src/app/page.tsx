import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.overlay}></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" alt="Logistics Truck" className={styles.heroImage} />
        </div>
        
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in">
            Asset-backed Western-Canadian <span className={styles.highlight}>Logistics.</span><br />
            Your Freight, Handled Right.
          </h1>
          <p className="animate-fade-in delay-1">
            Plan. Execute. Deliver. Full-service transportation including Flatbed, Oilfield, 
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
          {[
            { title: "Truckload - Open Deck", desc: "Flatbed and open-deck freight across Western Canada." },
            { title: "Oilfield", desc: "Specialized transportation for the oil and gas sector." },
            { title: "Ice Road Transport", desc: "Seasonal freight to remote northern communities via ice roads." },
            { title: "Aggregate", desc: "Bulk material transport: gravel, sand, rock, and construction aggregate." },
            { title: "Heavy-Haul", desc: "Transport of oversized and overweight loads requiring permits." },
            { title: "Freight Brokerage", desc: "Connecting shippers with vetted carriers across Canada." }
          ].map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link href="/services" className={styles.learnMore}>Learn More →</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | X Freight Group",
  description: "Learn about X Freight Group's commitment to trust, consistency, and reliable logistics execution in Western Canada.",
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section with Background Image (Kept as is) */}
      <section className={styles.heroSection}>
        <Image
          src="/about-hero.png"
          alt="X Freight Heavy Haul"
          fill
          sizes="100vw"
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>About <span className={styles.textPrimary}>Us</span></h1>
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            Building successful logistics partnerships through trust, consistency, and reliable execution.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.blackSection}>
        <div className={`${styles.introBlock} animate-fade-in delay-2`}>
          <h2 className={styles.leadText}>
            Behind every successful logistics partnership is a relationship. <br />
            A relationship built on <span className={styles.textPrimary}>trust, consistency</span> and reliable execution.
          </h2>
        </div>

        <div className={styles.imageTextRow}>
          <div className={`${styles.imageWrapper} animate-fade-in`}>
            <Image src="/aggregate.jpeg" alt="Logistics Operations" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.sideImage} />
            <div className={styles.imageAccent}></div>
          </div>
          <div className={`${styles.textContent} animate-fade-in delay-1`}>
            <h3 className={styles.contentTitle}>Built on Consistency</h3>
            <p>
              X Freight Group was built around a simple, timeless idea: showing up every day to do what we say we will do, leads to long-term, win-win relationships. For our clients, drivers, partner carriers and colleagues alike.
            </p>
            <p>
              Combining our Western-Canada fleet footprint with the versatility of our carrier partner network, we offer shippers an agile, responsive logistics solution whenever and however their supply chain requires.
            </p>
          </div>
        </div>

        <div className={`${styles.imageTextRow} ${styles.reverseRow}`}>
          <div className={`${styles.imageWrapper} animate-fade-in`}>
            <Image src="/oilfield.jpeg" alt="Specialized Logistics" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.sideImage} />
            <div className={styles.imageAccent}></div>
          </div>
          <div className={`${styles.textContent} animate-fade-in delay-1`}>
            <h3 className={styles.contentTitle}>Specialized Execution</h3>
            <p>
              From oil field, aggregate, and heavy-haul to long-haul dry van & reefer shipping, each of our business units brings a specialized skillset to the table.
            </p>
            <p>
              Our clients rely on us because we keep things simple: answer the phone, communicate clearly, and get freight where it needs to go. <span className={styles.textPrimary}>No over-complication. No excuses. Just consistent execution.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={`${styles.statItem} animate-fade-in delay-1`}>
            <div className={styles.statLine}></div>
            <h3 className={styles.statTitle}>Asset</h3>
            <p className={styles.statDesc}>Backed Fleet</p>
          </div>
          <div className={`${styles.statItem} animate-fade-in delay-2`}>
            <div className={styles.statLine}></div>
            <h3 className={styles.statTitle}>Agile</h3>
            <p className={styles.statDesc}>Solutions</p>
          </div>
          <div className={`${styles.statItem} animate-fade-in delay-3`}>
            <div className={styles.statLine}></div>
            <h3 className={styles.statTitle}>Clear</h3>
            <p className={styles.statDesc}>Communication</p>
          </div>
        </div>
      </section>
    </div>
  );
}

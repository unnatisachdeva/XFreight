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
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.overlay}></div>
          <Image 
            src="/about-hero.png" 
            alt="X Freight Logistics" 
            fill 
            className={styles.heroImg}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <header className={`${styles.header} animate-fade-in`}>
            <span className={styles.category}>Our Legacy</span>
            <h1>
              Moving Your World <span className={styles.headerHighlight}>Forward</span>
            </h1>
            <p>
              X Freight Group was built on a simple, timeless idea: showing up every day to do what we say we will do.
            </p>
          </header>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}></div>
        </div>
      </section>

      <div className={styles.contentWrapper}>
        <section className={`${styles.storySection} animate-fade-in`}>
          <div className={styles.sectionBg}>
            <Image src="/section-bg.png" alt="" fill className={styles.bgImg} />
          </div>
          <div className={styles.storyText}>
            <span className={styles.accentText}>Our Story</span>
            <h2>Relationship Driven</h2>
            <div className={styles.divider}></div>
            <p className={styles.lead}>
              Behind every successful logistics partnership is a relationship. 
              A relationship built on trust, consistency and reliable execution.
            </p>
            <p>
              X Freight Group was built around a simple, timeless idea: 
              showing up every day to do what we say we will do, leads to long-term, 
              win-win relationships. For our clients, drivers, partner carriers and colleagues alike.
            </p>
          </div>
        </section>

        {/* Alternating Sections - Aesthetic Redesign */}
        <section className={`${styles.aestheticSection} animate-fade-in delay-1`}>
          <div className={styles.aestheticRow}>
            <div className={styles.aestheticImage}>
              <Image src="/agile-about.png" alt="Agile Solutions" fill className={styles.sideImg} />
            </div>
            <div className={styles.aestheticContent}>
              <span className={styles.rowLabel}>Capability 01</span>
              <h3>Agile Solutions</h3>
              <p>
                Combining our Western-Canada fleet footprint with the versatility 
                of our carrier partner network, we offer shippers an agile, 
                responsive logistics solution whenever and however their supply chain requires.
              </p>
            </div>
          </div>

          <div className={`${styles.aestheticRow} ${styles.reverse}`}>
            <div className={styles.aestheticImage}>
              <Image src="/ops-entities-hero.png" alt="Specialized Fleet" fill className={styles.sideImg} />
            </div>
            <div className={styles.aestheticContent}>
              <span className={styles.rowLabel}>Capability 02</span>
              <h3>Specialized Fleet</h3>
              <p>
                From oil field, aggregate, and heavy-haul to long-haul dry van & reefer shipping, 
                each of our business units brings a specialized skillset to the table.
              </p>
            </div>
          </div>
        </section>

        {/* Full Width Philosophy Box */}
        <section className={`${styles.fullPhilosophySection} animate-fade-in delay-2`}>
          <div className={styles.fullPhilosophyBox}>
            <div className={styles.philosophyHeader}>
              <span className={styles.accentText}>The X Freight Standard</span>
              <h2>Why Clients Rely on Us</h2>
              <div className={styles.divider}></div>
            </div>
            <div className={styles.pointsGrid}>
              <div className={styles.point}>
                <div className={styles.pointTop}>
                  <span className={styles.pointNum}>01</span>
                  <h4>Simple</h4>
                </div>
                <p>Answer the phone and communicate clearly.</p>
              </div>
              <div className={styles.point}>
                <div className={styles.pointTop}>
                  <span className={styles.pointNum}>02</span>
                  <h4>Reliable</h4>
                </div>
                <p>Get freight where it needs to go, every time.</p>
              </div>
              <div className={styles.point}>
                <div className={styles.pointTop}>
                  <span className={styles.pointNum}>03</span>
                  <h4>Consistent</h4>
                </div>
                <p>No over-complication. No excuses. Just consistent execution.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

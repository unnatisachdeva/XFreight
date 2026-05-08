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
      <div className={styles.backgroundLayer}>
        <Image
          src="/about-hero.png"
          alt="X Freight Logistics"
          fill
          sizes="100vw"
          className={styles.bgImage}
          priority
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.leftCol}>
          <div className={`${styles.headerBlock} animate-fade-in`}>
            <span className={styles.label}>Who We Are</span>
            <h1 className={styles.title}>
              About <span className={styles.textPrimary}>Us</span>
            </h1>
            <div className={styles.divider}></div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={`${styles.glassPanel} animate-fade-in delay-1`}>
            <p className={styles.lead}>
              Behind every successful logistics partnership is a relationship. A relationship built on <span className={styles.textPrimary}>trust, consistency</span> and reliable execution.
            </p>

            <div className={styles.textGrid}>
              <div className={styles.textCol}>
                <p>
                  X Freight Group was built around a simple, timeless idea: showing up every day to do what we say we will do, leads to long-term, <span className={styles.textPrimary}>win-win relationships</span>. For our clients, drivers, partner carriers and colleagues alike.
                </p>
                <p>
                  Combining our Western-Canada fleet footprint with the versatility of our carrier partner network, we offer shippers an <span className={styles.textPrimary}>agile, responsive</span> logistics solution whenever and however their supply chain requires.
                </p>
              </div>
              <div className={styles.textCol}>
                <p>
                  From oilfield, aggregate, and heavy-haul to long-haul dry van &amp; reefer shipping, each of our business units brings a <span className={styles.textPrimary}>specialized skillset</span> to the table.
                </p>
                <p className={styles.closing}>
                  Our clients rely on us because we keep things simple: answer the phone, communicate clearly, and get freight where it needs to go. No over-complication. No excuses. Just <span className={styles.textPrimary}>consistent execution</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

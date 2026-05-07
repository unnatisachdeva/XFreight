import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | X Freight Group",
  description: "Learn about X Freight Group's commitment to trust, consistency, and reliable logistics execution in Western Canada.",
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} animate-fade-in`}>
        <h1>
          About <span className={styles.headerHighlight}>Us</span>
        </h1>
        <p className={styles.subtitle}>
          Building successful logistics partnerships through trust, consistency, and reliable execution.
        </p>
      </header>

      <section className={`${styles.content} animate-fade-in delay-1`}>
        <div className={styles.mainText}>
          <p className={styles.lead}>
            Behind every successful logistics partnership is a relationship. 
            A relationship built on trust, consistency and reliable execution.
          </p>
          
          <div className={styles.grid}>
            <div className={styles.textBlock}>
              <p>
                X Freight Group was built around a simple, timeless idea: 
                showing up every day to do what we say we will do, leads to long-term, 
                win-win relationships. For our clients, drivers, partner carriers and colleagues alike.
              </p>
              <p>
                Combining our Western-Canada fleet footprint with the versatility 
                of our carrier partner network, we offer shippers an agile, 
                responsive logistics solution whenever and however their supply chain requires.
              </p>
            </div>
            
            <div className={styles.textBlock}>
              <p>
                From oil field, aggregate, and heavy-haul to long-haul dry van & reefer shipping, 
                each of our business units brings a specialized skillset to the table.
              </p>
              <p>
                Our clients rely on us because we keep things simple: 
                answer the phone, communicate clearly, and get freight where it needs to go. 
                No over-complication. No excuses. Just consistent execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.stats} animate-fade-in delay-2`}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>Asset</span>
          <span className={styles.statLabel}>Backed Fleet</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>Agile</span>
          <span className={styles.statLabel}>Solutions</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>Clear</span>
          <span className={styles.statLabel}>Communication</span>
        </div>
      </section>
    </div>
  );
}

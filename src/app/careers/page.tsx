import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { roles } from "./_data/careers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Careers | X Freight Group",
  description:
    "Join the X Freight Group team. Explore open positions in Sales, Operations, and Driving across Western Canada.",
};

export default function CareersPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.overlay}></div>
          <Image 
            src="/careers-hero.png" 
            alt="X Freight Team" 
            fill 
            className={styles.heroImg}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <header className={`${styles.header} animate-fade-in`}>
            <span className={styles.category}>Join the Journey</span>
            <h1>
              Build Your Career at <span className={styles.headerHighlight}>X Freight</span>
            </h1>
            <p>
              We&apos;re more than just logistics. We&apos;re a team of dedicated professionals moving Western Canada forward.
            </p>
          </header>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}></div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={`${styles.cultureSection} animate-fade-in`}>
        <div className={styles.cultureInner}>
          <div className={styles.cultureText}>
            <h2>Why Work with Us?</h2>
            <div className={styles.divider}></div>
            <p>
              At X Freight Group, our success is built on the strength of our people. We offer a dynamic work environment rooted in safety, integrity, and mutual respect. From competitive benefits to professional growth opportunities, we provide the platform you need to excel.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings - Horizontal Layout */}
      <section className={styles.jobsSection}>
        <div className={styles.sectionHeader}>
          <h2>Current Openings</h2>
          
        </div>
        
        <div className={`${styles.carouselContainer} animate-fade-in delay-1`}>
          <div className={styles.carousel}>
            {roles.map((role, index) => (
              <Link
                key={role.slug}
                href={`/careers/${role.slug}`}
                className={styles.jobCard}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.roleNumber}>0{index + 1}</span>
                  <div className={styles.status}>Now Hiring</div>
                </div>
                <div className={styles.cardMain}>
                  <h3>{role.title}</h3>
                  <p>{role.teaser}</p>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.meta}>
                    <span>Western Canada</span>
                    <span className={styles.type}>Full-Time</span>
                  </div>
                  <div className={styles.btn}>
                    Apply Now ↗
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { roles } from "./_data/careers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the X Freight Group team. Explore open positions in Sales, Operations, and Driving across Western Canada.",
  openGraph: {
    title: "Careers | X Freight Group",
    description: "We're more than just logistics. Explore open positions in Sales, Operations, and Driving across Western Canada.",
    url: "/careers",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/careers-hero.png"
          alt="X Freight Team"
          fill
          sizes="100vw"
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Join Our <span className={styles.textPrimary}>Team</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            We&apos;re more than just logistics. We&apos;re a team of dedicated professionals moving Western Canada forward.
          </p>
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

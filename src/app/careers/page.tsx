import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <section className={styles.heroSection}>
        <Image
          src="/career-hero.jpg"
          alt="Careers at X Freight Group"
          fill
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Join Our <span className={styles.textPrimary}>Team</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            Build your career with a growing Western Canadian logistics company
            that values its people as much as its performance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={`${styles.cultureSection} animate-fade-in delay-2`}>
          <h2 className={styles.sectionTitle}>Why <span className={styles.textPrimary}>X Freight Group?</span></h2>
          <div className={styles.titleAccent}></div>
          <p className={styles.cultureText}>
            At <span className={styles.textPrimary}>X Freight Group</span>, we&apos;re building something special — a
            logistics company rooted in Western Canadian values of hard work,
            reliability, and community. We invest in our people with competitive
            compensation, growth opportunities, and a culture that puts safety and
            respect first. Whether you&apos;re behind the wheel, on the phone, or
            in the office, you&apos;re a valued part of our mission.
          </p>
        </div>

        <div className={`${styles.grid} animate-fade-in delay-3`}>
          {roles.map((role) => (
            <Link
              key={role.slug}
              href={`/careers/${role.slug}`}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardBadge}>Now Hiring</div>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <div className={styles.cardAccent}></div>
              </div>
              <p className={styles.roleTeaser}>{role.teaser}</p>
              <div className={styles.cardFooter}>
                <span className={styles.applyLink}>View Details <span className={styles.arrow}>→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

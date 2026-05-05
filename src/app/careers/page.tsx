import type { Metadata } from "next";
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
      <header className={`${styles.header} animate-fade-in`}>
        <h1>
          Join Our <span className={styles.headerHighlight}>Team</span>
        </h1>
        <p>
          Build your career with a growing Western Canadian logistics company
          that values its people as much as its performance.
        </p>
      </header>

      <div className={`${styles.cultureSection} animate-fade-in delay-1`}>
        <h2>Why X Freight Group?</h2>
        <p>
          At X Freight Group, we&apos;re building something special — a
          logistics company rooted in Western Canadian values of hard work,
          reliability, and community. We invest in our people with competitive
          compensation, growth opportunities, and a culture that puts safety and
          respect first. Whether you&apos;re behind the wheel, on the phone, or
          in the office, you&apos;re a valued part of our mission.
        </p>
      </div>

      <div className={`${styles.grid} animate-fade-in delay-2`}>
        {roles.map((role) => (
          <Link
            key={role.slug}
            href={`/careers/${role.slug}`}
            className={styles.card}
          >
            <div className={styles.cardBadge}>Now Hiring</div>
            <h2>{role.title}</h2>
            <p>{role.teaser}</p>
            <span className={styles.applyLink}>Apply Now →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

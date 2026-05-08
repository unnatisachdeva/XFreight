import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { roles } from "../_data/careers";
import styles from "./page.module.css";

export function generateStaticParams() {
  return roles.map((r) => ({ role: r.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ role: string }> }
): Promise<Metadata> {
  const { role: slug } = await props.params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) return {};
  return {
    title: `${role.title} | Careers | X Freight Group`,
    description: role.teaser,
  };
}

export default async function CareerRolePage(
  props: { params: Promise<{ role: string }> }
) {
  const { role: slug } = await props.params;
  const role = roles.find((r) => r.slug === slug);
  if (!role) notFound();

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image
          src="/freightbrokerage.jpeg"
          alt={role.title}
          fill
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} animate-fade-in`}>Now Hiring</div>
          <h1 className={`${styles.title} animate-fade-in delay-1`}>{role.title}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <Link href="/careers" className={`${styles.backLink} animate-fade-in delay-2`}>
            <span className={styles.backArrow}>←</span> Back to all Careers
          </Link>

          <div className={`${styles.overview} animate-fade-in delay-2`}>
            {role.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className={styles.layoutGrid}>
            <div className={`${styles.detailsColumn} animate-fade-in delay-3`}>
              <div className={styles.section}>
                <h2>Responsibilities</h2>
                <div className={styles.titleAccent}></div>
                <ul className={styles.list}>
                  {role.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h2>Qualifications</h2>
                <div className={styles.titleAccent}></div>
                <ul className={styles.list}>
                  {role.qualifications.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${styles.applyColumn} animate-fade-in delay-3`}>
              <div className={styles.applyBox}>
                <h3>Ready to Join?</h3>
                <p>Send your resume and a brief cover letter to get started.</p>
                <a href="mailto:info@xfreight.ca" className={styles.applyBtn}>
                  Apply via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

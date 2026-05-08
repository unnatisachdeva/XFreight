"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { roles } from "../_data/careers";
import styles from "./page.module.css";

export default function CareerRolePage(
  props: { params: Promise<{ role: string }> }
) {
  const { role: slug } = use(props.params);
  const role = roles.find((r) => r.slug === slug);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!role) notFound();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.success}>
          <div className={styles.successIcon}>🚀</div>
          <h2>Application Received!</h2>
          <p>
            Thank you for applying for the <strong>{role.title}</strong> position. Our HR team will review your application and get in touch shortly.
          </p>
          <Link href="/careers" className="btn btn-primary">Back to Careers</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/careers" className={styles.backLink}>
        ← Back to Careers
      </Link>

      <header className={`${styles.header} animate-fade-in`}>
        <div className={styles.badge}>Active Opening</div>
        <h1>{role.title}</h1>
        <div className={styles.roleMeta}>
          <span>Western Canada</span>
          <span className={styles.dot}>•</span>
          <span>Full-Time</span>
        </div>
      </header>

      <div className={styles.contentGrid}>
        <div className={`${styles.details} animate-fade-in`}>
          <section className={styles.section}>
            <h2>The Opportunity</h2>
            {role.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>

          <section className={styles.section}>
            <h2>Key Responsibilities</h2>
            <ul className={styles.list}>
              {role.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>What We&apos;re Looking For</h2>
            <ul className={styles.list}>
              {role.qualifications.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className={`${styles.applySidebar} animate-fade-in delay-1`}>
          <div className={styles.stickyForm}>
            <div className={styles.formHeader}>
              <h3>Apply for this position</h3>
              <p>Complete the form below to submit your application.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>Full Name <span className={styles.required}>*</span></label>
                <input type="text" placeholder="John Doe" required />
              </div>

              <div className={styles.field}>
                <label>Email Address <span className={styles.required}>*</span></label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className={styles.field}>
                <label>Phone Number <span className={styles.required}>*</span></label>
                <input type="tel" placeholder="(555) 000-0000" required />
              </div>

              <div className={styles.field}>
                <label>Resume Link / Profile <span className={styles.required}>*</span></label>
                <input type="url" placeholder="LinkedIn or Drive link" required />
              </div>

              <div className={styles.field}>
                <label>Tell us about yourself</label>
                <textarea placeholder="Briefly describe your experience..."></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit Application
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}

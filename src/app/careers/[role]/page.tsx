import type { Metadata } from "next";
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
      <Link href="/careers" className={styles.backLink}>
        ← Back to Careers
      </Link>

      <header className={styles.header}>
        <div className={styles.badge}>Now Hiring</div>
        <h1>{role.title}</h1>
      </header>

      <div className={styles.overview}>
        {role.overview.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className={styles.section}>
        <h2>Responsibilities</h2>
        <ul className={styles.list}>
          {role.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Qualifications</h2>
        <ul className={styles.list}>
          {role.qualifications.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.applySection}>
        <h3>Interested in this role?</h3>
        <p>
          Send your resume and a brief cover letter to get started.
        </p>
        <a href="mailto:info@xfreight.ca" className="btn btn-primary">
          Apply via Email
        </a>
      </div>
    </div>
  );
}

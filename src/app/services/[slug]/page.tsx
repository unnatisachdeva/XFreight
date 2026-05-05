import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../_data/services";
import styles from "./page.module.css";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | X Freight Group`,
    description: service.shortDesc,
  };
}

export default async function ServicePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className={styles.container}>
      <Link href="/services" className={styles.backLink}>
        ← Back to Services
      </Link>

      <header className={styles.header}>
        <div className={styles.iconBadge}>{service.icon}</div>
        <h1>{service.title}</h1>
      </header>

      <div className={styles.description}>
        {service.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className={styles.section}>
        <h2>
          <span className={styles.sectionIcon}>★</span> Key Highlights
        </h2>
        <ul className={styles.highlightList}>
          {service.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2>
          <span className={styles.sectionIcon}>👤</span> Who It&apos;s For
        </h2>
        <p className={styles.whoText}>{service.whoItsFor}</p>
      </div>

      <div className={styles.ctaSection}>
        <h3>Ready to get started?</h3>
        <p>
          Request a free quote and let us handle your freight.
        </p>
        <Link href="/get-a-quote" className="btn btn-primary">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

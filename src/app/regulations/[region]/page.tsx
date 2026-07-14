import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";
import { regions } from "../_data/regions";
import { getRegionDetail } from "../_data/details";
import type { RegionDetail, DimensionLimits, EscortRules } from "../_data/details/types";
import styles from "./page.module.css";

interface RegionPageProps {
  params: Promise<{ region: string }>;
}

export async function generateStaticParams() {
  return regions.map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const { region: slug } = await params;
  const region = regions.find((r) => r.slug === slug);

  if (!region) {
    return { title: "Region Not Found" };
  }

  const countryName = region.country === "CA" ? "Canada" : "the United States";

  return {
    title: `${region.name} Oversize / Overweight Regulations`,
    description: `Oversize and overweight load regulations for ${region.name}, ${countryName}. Permits, escorts, dimensions, and weights.`,
    openGraph: {
      title: `${region.name} Regulations | X Freight Group`,
      description: `Regulatory overview for oversize and heavy-haul freight in ${region.name}, ${countryName}.`,
      url: `/regulations/${region.slug}`,
    },
    alternates: { canonical: `/regulations/${region.slug}` },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function InfoTable({ rows }: { rows: { label: string; value: React.ReactNode }[] }) {
  if (rows.length === 0) return null;

  return (
    <table className={styles.infoTable}>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td className={styles.infoLabel}>{row.label}</td>
            <td className={styles.infoValue}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DimensionTable({ limits }: { limits?: DimensionLimits }) {
  if (!limits) return null;

  const rows: { label: string; value: string }[] = [];
  if (limits.length) rows.push({ label: "Length", value: limits.length });
  if (limits.overhang) rows.push({ label: "Overhang", value: limits.overhang });
  if (limits.width) rows.push({ label: "Width", value: limits.width });
  if (limits.height) rows.push({ label: "Height", value: limits.height });
  if (limits.weight) rows.push({ label: "Weight", value: limits.weight });

  const hasAxles = limits.axleWeights && limits.axleWeights.length > 0;

  if (rows.length === 0 && !hasAxles) return null;

  return (
    <>
      {rows.length > 0 && <InfoTable rows={rows} />}
      {hasAxles && (
        <table className={styles.infoTable}>
          <thead>
            <tr>
              <th>Axle / group</th>
              <th>Spacing</th>
              <th className={styles.numberCell}>Weight</th>
            </tr>
          </thead>
          <tbody>
            {limits.axleWeights!.map((aw, i) => (
              <tr key={i}>
                <td>{aw.group}</td>
                <td>{aw.spacing ?? "—"}</td>
                <td className={styles.numberCell}>{aw.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

function EscortContent({ escorts }: { escorts?: EscortRules }) {
  if (!escorts) return null;

  const rows: { label: string; value: string }[] = [];
  if (escorts.width) {
    escorts.width.forEach((item) => rows.push({ label: "Width", value: item }));
  }
  if (escorts.length) {
    escorts.length.forEach((item) => rows.push({ label: "Length", value: item }));
  }
  if (escorts.overhang) {
    escorts.overhang.forEach((item) => rows.push({ label: "Overhang", value: item }));
  }
  if (escorts.height) {
    escorts.height.forEach((item) => rows.push({ label: "Height", value: item }));
  }
  if (escorts.weight) {
    escorts.weight.forEach((item) => rows.push({ label: "Weight", value: item }));
  }

  const hasTable = rows.length > 0;
  const hasBullets = escorts.miscellaneous && escorts.miscellaneous.length > 0;

  if (!hasTable && !hasBullets) return null;

  return (
    <>
      {hasTable && (
        <table className={styles.infoTable}>
          <thead>
            <tr>
              <th>Based on</th>
              <th>Escorts required</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className={styles.infoLabel}>{row.label}</td>
                <td className={styles.infoValue}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {hasBullets && <BulletList items={escorts.miscellaneous} />}
    </>
  );
}

function BulletList({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className={styles.bulletList}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function DetailContent({ detail }: { detail: RegionDetail }) {
  const contactRows =
    detail.contacts?.map((c) => ({
      label: c.label,
      value: c.href ? (
        <a href={c.href} className={styles.link}>
          {c.value}
        </a>
      ) : (
        c.value
      ),
    })) ?? [];

  const basicRows = [];
  if (detail.permitValidity) basicRows.push({ label: "Permit validity", value: detail.permitValidity });
  if (detail.operatingTime) basicRows.push({ label: "Operating time", value: detail.operatingTime });

  return (
    <>
      {detail.overview.length > 0 && (
        <Section title="Overview">
          {detail.overview.map((para, i) => (
            <p key={i} className={styles.paragraph}>
              {para}
            </p>
          ))}
        </Section>
      )}

      {contactRows.length > 0 && (
        <Section title="Permit Office">
          <InfoTable rows={contactRows} />
        </Section>
      )}

      {basicRows.length > 0 && (
        <Section title="Permit Basics">
          <InfoTable rows={basicRows} />
        </Section>
      )}

      {(detail.legalDimensions || detail.routinePermitLimits) && (
        <Section title="Dimensions & Weights">
          {detail.legalDimensions && (
            <>
              <h3 className={styles.subSectionTitle}>Legal limits</h3>
              <DimensionTable limits={detail.legalDimensions} />
            </>
          )}
          {detail.routinePermitLimits && (
            <>
              <h3 className={styles.subSectionTitle}>Routine permit limits</h3>
              <DimensionTable limits={detail.routinePermitLimits} />
            </>
          )}
        </Section>
      )}

      {detail.escorts && (
        <Section title="Escort Requirements">
          <EscortContent escorts={detail.escorts} />
        </Section>
      )}

      {detail.signsFlagsLights && detail.signsFlagsLights.length > 0 && (
        <Section title="Signs, Flags & Lights">
          <BulletList items={detail.signsFlagsLights} />
        </Section>
      )}

      {detail.seasonalRestrictions && detail.seasonalRestrictions.length > 0 && (
        <Section title="Seasonal Restrictions">
          <BulletList items={detail.seasonalRestrictions} />
        </Section>
      )}

      {detail.fines && detail.fines.length > 0 && (
        <Section title="Fines & Penalties">
          <BulletList items={detail.fines} />
        </Section>
      )}

      {detail.annualPermits && detail.annualPermits.length > 0 && (
        <Section title="Annual Permits">
          <BulletList items={detail.annualPermits} />
        </Section>
      )}

      {detail.manufacturedHomes && detail.manufacturedHomes.length > 0 && (
        <Section title="Manufactured Homes">
          <BulletList items={detail.manufacturedHomes} />
        </Section>
      )}

      {detail.notes && detail.notes.length > 0 && (
        <Section title="Notes">
          <BulletList items={detail.notes} />
        </Section>
      )}

      {detail.sourceUrls && detail.sourceUrls.length > 0 && (
        <Section title="Sources">
          <ul className={styles.bulletList}>
            {detail.sourceUrls.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}

function FallbackContent({ regionName }: { regionName: string }) {
  return (
    <>
      <Section title="Key Planning Considerations">
        <BulletList
          items={[
            `Confirm whether your load exceeds legal width, height, length, or weight limits for ${regionName}.`,
            "Identify the correct permit type: single-trip, annual, project-specific, or emergency.",
            "Determine escort or pilot-car requirements based on dimensions, route, and traffic.",
            "Check seasonal restrictions, frost laws, and holiday embargoes before scheduling.",
          ]}
        />
      </Section>

      <div className={styles.disclaimer}>
        <AlertTriangle size={18} className={styles.disclaimerIcon} />
        <span>
          Detailed regulations for {regionName} are being added. Always verify current requirements
          with the issuing authority before moving a load.
        </span>
      </div>
    </>
  );
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { region: slug } = await params;
  const region = regions.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  const detail = await getRegionDetail(slug);
  const countryName = region.country === "CA" ? "Canada" : "the United States";
  const flagEmoji = region.country === "CA" ? "🇨🇦" : "🇺🇸";

  const regionJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${region.name} Oversize / Overweight Regulations`,
    description: `Regulatory overview for oversize and overweight freight in ${region.name}, ${countryName}.`,
    url: `https://www.xfreight.ca/regulations/${region.slug}`,
    isPartOf: { "@type": "WebSite", name: "X Freight Group Inc.", url: "https://www.xfreight.ca" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(regionJsonLd) }} />
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.content} style={{ paddingBottom: 0 }}>
            <Link href="/regulations" className={styles.backLink}>
              <ArrowLeft size={16} />
              Back to Regulations
            </Link>
            <span className={styles.countryBadge}>
              {flagEmoji} {countryName}
            </span>
            <h1 className={styles.title}>
              {region.name} <span className={styles.textPrimary}>Regulations</span>
            </h1>
          </div>
        </section>

        <main className={styles.content}>
          {detail ? <DetailContent detail={detail} /> : <FallbackContent regionName={region.name} />}

          <div className={styles.ctaGrid}>
            <Link href="/get-a-quote" className={styles.ctaPrimary}>
              Request a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

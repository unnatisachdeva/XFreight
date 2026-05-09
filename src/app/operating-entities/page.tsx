import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Operating Entities | X Freight Group",
  description:
    "Explore the affiliated companies under the X Freight Group family of brands.",
};

const entities = [
  {
    name: "X Freight Group Inc.",
    desc: "X Freight Group Inc. is our brokerage division, providing flexible transportation solutions across North America. Working closely with our in-house asset divisions along with a network of vetted carrier partners, we arrange open deck, dry van, & temperature-controlled long-haul freight. Backed by real-world operational experience and an incredible team, we deliver reliable capacity, competitive pricing, and consistent communication on every shipment..",
    url: "https://www.xfreight.ca",
    image: "/image.png",
    scale: 3,
  },
  {
    name: "The X Group Inc.",
    desc: "X Group Inc. is an asset-based business unit, focused on supporting the oilfield, mining and energy sectors. With our own trucks and an owner-operator fleet, we have access to the capacity our clients need for fracking projects, equipment moves, and bulk hauling. As we continue to expand our presence, we are actively working toward ISN and COR certifications to meet the highest industry safety and compliance standards..",
    url: "#",
    image: "/logoxgroup.png",
    scale: 3,
  },
  {
    name: "X Transport Inc.",
    desc: "X Transport Inc. is our asset-based, long-haul trucking division, specializing in cross-border and domestic Canada open-deck freight. From standard flatbed shipments to specialized and oversized loads, we move a wide range of freight with experienced drivers and well-maintained equipment. Our focus is simple—safe transport, reliable scheduling, and the ability to handle complex shipments with confidence..",
    url: "https://www.xtransport.ca",
    image: "/logoXTransport.png",
    scale: 0.7,
  },
  {
    name: "Every Way Transport Ltd.",
    desc: "Every Way Transport Ltd. operates our end-dump fleet, providing bulk hauling solutions for infrastructure and construction projects across Western Canada. We support high-volume movement of aggregate, soil, and other materials with dependable equipment and efficient turnaround times. Built for production environments, our team delivers consistent performance to keep projects on schedule.",
    url: "#",
    image: "/logoewt4.png",
    noHoverZoom: true,
  },
];

export default function OperatingEntitiesPage() {
  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div className={styles.pageBackground}>
        <div className={styles.overlay}></div>
        <Image
          src="/ops-entities-hero.png"
          alt="Operating Entities Background"
          fill
          sizes="100vw"
          className={styles.bgImage}
          priority
        />
      </div>

      {/* Page Header */}
      <section className={styles.headerSection}>
        <h1 className={`${styles.pageTitle} animate-fade-in`}>
          Operating <span className={styles.textPrimary}>Entities</span>
        </h1>
        <p className={`${styles.pageSubtitle} animate-fade-in delay-1`}>
          The affiliated companies under the{" "}
          <span className={styles.textPrimary}>X Freight Group</span> family of
          brands.
        </p>
      </section>

      {/* Entity Cards Grid */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {entities.map((entity, index) => (
            <a
              key={entity.name}
              href={entity.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} animate-fade-in delay-${(index % 3) + 1}`}
            >
              <div className={styles.logoWrapper}>
                <Image
                  src={entity.image}
                  alt={`${entity.name} logo`}
                  width={450}
                  height={160}
                  className={`${styles.entityLogo} ${entity.noHoverZoom ? styles.noHover : ""}`}
                  style={entity.scale ? { transform: `scale(${entity.scale})` } : {}}
                />
              </div>
              <h2 className={styles.entityName}>{entity.name}</h2>
              <p className={styles.entityDesc}>{entity.desc}</p>
              <div className={styles.visitCta}>
                <span className={styles.visitText}>Visit Website</span>
                <span className={styles.arrow}>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
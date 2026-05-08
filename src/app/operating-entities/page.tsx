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
    desc: "X Freight Group Inc. is our brokerage division, providing flexible transportation solutions across North America. Working closely with our in-house asset divisions along with a network of vetted carrier partners, we arrange open deck, dry van, & temperature-controlled long-haul freight. Backed by real-world operational experience and an incredible team, we deliver reliable capacity, competitive pricing, and consistent communication on every shipment.",
    url: "#",
    image: "/xfreight_branded.png",
  },
  {
    name: "X Transport Inc.",
    desc: "X Transport Inc. is our asset-based, long-haul trucking division, specializing in cross-border and domestic Canada open-deck freight. From standard flatbed shipments to specialized and oversized loads, we move a wide range of freight with experienced drivers and well-maintained equipment. Our focus is simple—safe transport, reliable scheduling, and the ability to handle complex shipments with confidence.",
    url: "https://www.xtransport.ca/",
    image: "/xtransport_branded.png",
  },
  {
    name: "X Group Inc.",
    desc: "X Group Inc. is an asset-based business unit, focused on supporting the oilfield, mining and energy sectors. With our own trucks and an owner-operator fleet, we have access to the capacity our clients need for fracking projects, equipment moves, and bulk hauling. As we continue to expand our presence, we are actively working toward ISN and COR certifications to meet the highest industry safety and compliance standards.",
    url: "#",
    image: "/xgroup_branded.png",
  },
  {
    name: "Every Way Transport Ltd.",
    desc: "Every Way Transport Ltd. operates our end-dump fleet, providing bulk hauling solutions for infrastructure and construction projects across Western Canada. We support high-volume movement of aggregate, soil, and other materials with dependable equipment and efficient turnaround times. Built for production environments, our team delivers consistent performance to keep projects on schedule.",
    url: "#",
    image: "/everyway_branded.png",
  },
];

export default function OperatingEntitiesPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.overlay}></div>
          <Image 
            src="/ops-entities-hero.png" 
            alt="Logistics Network" 
            fill 
            className={styles.heroImg}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <header className={`${styles.header} animate-fade-in`}>
            <span className={styles.category}>Our Family of Brands</span>
            <h1>
              Operating <span className={styles.headerHighlight}>Entities</span>
            </h1>
            <p>
              X Freight Group operates through a family of affiliated companies,
              each bringing specialized capabilities to serve Western Canada&apos;s
              transportation needs.
            </p>
          </header>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.mouse}></div>
        </div>
      </section>

      {/* Entities Sections */}
      <div className={styles.entitiesList}>
        {entities.map((entity, index) => (
          <section 
            key={entity.name} 
            className={`${styles.entitySection} ${index % 2 === 1 ? styles.reverse : ""} animate-fade-in`}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={entity.image} 
                  alt={entity.name} 
                  fill
                  className={styles.entityImage}
                />
              </div>
              <div className={styles.numberOverlay}>{String(index + 1).padStart(2, '0')}</div>
            </div>

            <div className={styles.textContent}>
              <div className={styles.textInner}>
                <h2>{entity.name}</h2>
                <div className={styles.divider}></div>
                <p>{entity.desc}</p>
                {entity.url !== "#" && (
                  <a
                    href={entity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.visitBtn}
                  >
                    Explore {entity.name.split(' ')[0]} Website ↗
                  </a>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

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
    desc: "Full-service transportation brokerage and logistics company headquartered in Western Canada.",
    url: "https://www.xfreight.ca",
    image: "/freightbrokerage.jpeg"
  },
  {
    name: "The X Group Inc.",
    desc: "Strategic holding company overseeing the X Freight family of brands and operations.",
    url: "#",
    image: "/iceroad.jpeg"
  },
  {
    name: "X Transport Inc.",
    desc: "Asset-based carrier providing dedicated fleet services across Western Canadian corridors.",
    url: "https://www.xtransport.ca",
    image: "/heavyhaul.jpeg"
  },
  {
    name: "Every Way Transport Ltd.",
    desc: "Specialized transportation provider with a focus on flexible, customer-driven freight solutions.",
    url: "#",
    image: "/oilfield.jpeg"
  },
];

export default function OperatingEntitiesPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image
          src="/ops-entities-hero.png"
          alt="X Freight Group Operations"
          fill
          sizes="100vw"
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Operating <span className={styles.textPrimary}>Entities</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            Explore the affiliated companies under the <span className={styles.textPrimary}>X Freight Group</span> family of brands.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introBlock}>
          <p className={`${styles.leadText} animate-fade-in delay-2`}>
            X Freight Group operates through a family of affiliated companies,
            each bringing <span className={styles.textPrimary}>specialized capabilities </span> to serve Western Canada&apos;s
            transportation needs.
          </p>
        </div>
      </section>

      {/* Industrial Cards Grid */}
      <section className={styles.entitiesSection}>
        <div className={styles.grid}>
          {entities.map((entity, index) => (
            <div key={entity.name} className={`${styles.card} animate-fade-in delay-${(index % 3) + 1}`}>
              <Image src={entity.image} alt={entity.name} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.cardBg} />
              <div className={styles.cardPattern}></div>
              <div className={styles.cardOverlay}></div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>{entity.name}</h2>
                  <div className={styles.titleAccent}></div>
                </div>
                <p className={styles.cardDesc}>{entity.desc}</p>
                <div className={styles.cardFooter}>
                  <a href={entity.url} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
                    <span className={styles.linkText}>Visit Website</span>
                    <span className={styles.arrow}>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

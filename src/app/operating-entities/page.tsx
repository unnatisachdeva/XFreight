import type { Metadata } from "next";
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
    initial: "XF",
    url: "#",
  },
  {
    name: "The X Group Inc.",
    desc: "Strategic holding company overseeing the X Freight family of brands and operations.",
    initial: "XG",
    url: "#",
  },
  {
    name: "X Transport Inc.",
    desc: "Asset-based carrier providing dedicated fleet services across Western Canadian corridors.",
    initial: "XT",
    url: "#",
  },
  {
    name: "Every Way Transport Ltd.",
    desc: "Specialized transportation provider with a focus on flexible, customer-driven freight solutions.",
    initial: "EW",
    url: "#",
  },
];

export default function OperatingEntitiesPage() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} animate-fade-in`}>
        <h1>
          Operating{" "}
          <span className={styles.headerHighlight}>Entities</span>
        </h1>
        <p>
          X Freight Group operates through a family of affiliated companies,
          each bringing specialized capabilities to serve Western Canada&apos;s
          transportation needs.
        </p>
      </header>

      <div className={`${styles.grid} animate-fade-in delay-1`}>
        {entities.map((entity) => (
          <div key={entity.name} className={styles.card}>
            <div className={styles.cardLogo}>{entity.initial}</div>
            <h2>{entity.name}</h2>
            <p>{entity.desc}</p>
            <a
              href={entity.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitBtn}
            >
              Visit Website ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

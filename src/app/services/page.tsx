"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "./_data/services";
import styles from "./page.module.css";

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState(services[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add a small delay/threshold to make scrolling feel natural
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Trigger when element hits top 20%
      }
    );

    services.forEach((service) => {
      const element = document.getElementById(service.slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/s-heavyhaul.jpeg"
          alt="X Freight Logistics Services"
          fill
          sizes="100vw"
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Our <span className={styles.textPrimary}>Services</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            Comprehensive logistics solutions built for Western Canada&apos;s toughest environments and most demanding industries.
          </p>
        </div>
      </section>

      {/* Main Layout: Sticky Sidebar + Scrolling Content */}
      <div className={styles.layoutWrapper}>

        {/* Left Sticky Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.stickyNav}>
            <h3 className={styles.navTitle}>Service Directory</h3>
            <ul className={styles.navList}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`#${service.slug}`}
                    className={`${styles.navLink} ${activeSection === service.slug ? styles.activeLink : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(service.slug)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Scrolling Content */}
        <main className={styles.mainContent}>
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className={styles.serviceSection}>
              <div className={styles.serviceHeader}>
                <h2>{service.title}</h2>
                <p className={styles.shortDesc}>{service.shortDesc}</p>
              </div>

              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`${styles.serviceImage} ${service.slug === 'freight-brokerage' ? styles.containImage : ''}`}
                />
              </div>

              <div className={styles.contentGrid}>
                {/* Left side of content: Description */}
                <div className={styles.descriptionBlock}>
                  {service.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Right side of content: Who it's for & Highlights */}
                <div className={styles.detailsBlock}>
                  <div className={styles.whoBlock}>
                    <h4>Who It&apos;s For</h4>
                    <p>{service.whoItsFor}</p>
                  </div>

                  <div className={styles.actionBlock} style={{ marginTop: '2rem' }}>
                    <Link href="/get-a-quote" className={styles.quoteBtn}>
                      Request a Quote <span className={styles.arrow}>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}

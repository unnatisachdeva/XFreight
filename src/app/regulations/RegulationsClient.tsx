"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Map, List, Info, ArrowRight } from "lucide-react";
import { regions as allRegions, type Region, type CountryCode } from "./_data/regions";
import { resourceCategories, type ResourceCategory } from "./_data/resources";
import RegionMap from "./_components/RegionMap";
import styles from "./page.module.css";

interface RegulationsClientProps {
  regions?: Region[];
  categories?: ResourceCategory[];
}

export default function RegulationsClient({
  regions = allRegions,
  categories = resourceCategories,
}: RegulationsClientProps) {
  const router = useRouter();
  const [countryFilter, setCountryFilter] = useState<"all" | CountryCode>("all");
  const [view, setView] = useState<"map" | "list">("map");

  const filteredRegions = useMemo(() => {
    let list = regions;
    if (countryFilter !== "all") {
      list = list.filter((r) => r.country === countryFilter);
    }
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [regions, countryFilter]);

  const handleRegionSelect = useCallback(
    (slug: string) => {
      router.push(`/regulations/${slug}`);
    },
    [router]
  );

  const scrollToCategory = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const countryLabel = (code: CountryCode) => (code === "CA" ? "Canada" : "United States");

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/regulations.jpeg"
          alt="Oversize and overweight regulations"
          fill
          sizes="100vw"
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Oversize / Overweight <span className={styles.textPrimary}>Regulations</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            A practical regulatory hub for Canada and the United States. Select a province or state
            to review high-level requirements, or browse the resource topics below.
          </p>
          <p className={`${styles.disclaimer} animate-fade-in delay-2`}>
            <Info size={16} />
            Regulations change frequently. Always confirm details with the issuing authority before
            moving a load.
          </p>
        </div>
      </section>

      {/* Main layout */}
      <div className={styles.layoutWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.stickyNav}>
            <h3 className={styles.navTitle}>Resource Topics</h3>
            <ul className={styles.navList}>
              {categories.map((category) => (
                <li key={category.slug}>
                  <a
                    href={`#${category.slug}`}
                    className={styles.navLink}
                    onClick={(e) => scrollToCategory(e, category.slug)}
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className={styles.mainContent}>
          <section aria-labelledby="region-directory-title">
            <h2 id="region-directory-title" className={styles.sectionTitle}>
              Regulations by Region
            </h2>
            <p className={styles.sectionIntro}>
              Choose a country filter and a view. The map highlights each region and shows its
              abbreviation; hover for the full name and click any region or list item to see a
              regional overview.
            </p>

            <div className={styles.controls}>
              <div className={styles.filterGroup} role="group" aria-label="Filter by country">
                {(["all", "CA", "US"] as const).map((code) => (
                  <button
                    key={code}
                    type="button"
                    className={`${styles.controlBtn} ${
                      countryFilter === code ? styles.controlBtnActive : ""
                    }`}
                    onClick={() => setCountryFilter(code)}
                    aria-pressed={countryFilter === code}
                  >
                    {code === "all" ? "All Regions" : countryLabel(code)}
                  </button>
                ))}
              </div>

              <div className={styles.viewGroup} role="group" aria-label="Choose view">
                <button
                  type="button"
                  className={`${styles.controlBtn} ${view === "map" ? styles.controlBtnActive : ""}`}
                  onClick={() => setView("map")}
                  aria-pressed={view === "map"}
                >
                  <Map size={16} style={{ marginRight: 6 }} />
                  Map
                </button>
                <button
                  type="button"
                  className={`${styles.controlBtn} ${
                    view === "list" ? styles.controlBtnActive : ""
                  }`}
                  onClick={() => setView("list")}
                  aria-pressed={view === "list"}
                >
                  <List size={16} style={{ marginRight: 6 }} />
                  List
                </button>
              </div>
            </div>

            {view === "map" ? (
              <div className={styles.mapWrapper}>
                <RegionMap regions={filteredRegions} onSelect={handleRegionSelect} />
                <div className={styles.mapLegend}>
                  <span className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendDotCa}`}></span>
                    Canada
                  </span>
                  <span className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendDotUs}`}></span>
                    United States
                  </span>
                  <span className={styles.legendItem}>
                    <span className={`${styles.legendDot} ${styles.legendDotTerminal}`}></span>
                    Terminal
                  </span>
                </div>
              </div>
            ) : (
              <div className={styles.regionGrid} role="list">
                {filteredRegions.length > 0 ? (
                  filteredRegions.map((region) => (
                    <Link
                      key={region.slug}
                      href={`/regulations/${region.slug}`}
                      className={styles.regionCard}
                      role="listitem"
                    >
                      <span className={styles.regionName}>{region.name}</span>
                      <span className={styles.countryBadge}>
                        {region.country === "CA" ? "CA" : "US"}
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className={styles.emptyState}>No regions match the selected filter.</p>
                )}
              </div>
            )}

            <div className={styles.ctaStrip}>
              <p className={styles.ctaText}>
                Need help interpreting permits, escorts, or routing for your next heavy-haul move?
              </p>
              <Link href="/get-a-quote" className={styles.ctaBtn}>
                Talk to Our Heavy-Haul Team <ArrowRight size={18} />
              </Link>
            </div>
          </section>

          {/* Resource categories */}
          <div className={styles.categoriesWrapper}>
            {categories.map((category) => (
              <section
                key={category.slug}
                id={category.slug}
                className={styles.categorySection}
              >
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categoryDescription}>{category.description}</p>
                <ul className={styles.pointList}>
                  {category.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

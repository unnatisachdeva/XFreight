import Image from "next/image";
import Link from "next/link";
import { Truck, Flame, Snowflake, Mountain, Settings, Handshake, ShieldCheck, Clock, MapPin } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 1. 100vh Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
           <Image src="/finalhero.jpeg" alt="X Freight Heavy Transport" fill sizes="100vw" className={styles.heroImage} priority />
           <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <h1 className="animate-fade-in">
            <span className={styles.textPrimary}>Asset-Backed</span> Western-Canadian Logistics.
          </h1>
          <h2 className={`animate-fade-in delay-1 ${styles.heroSubHeading}`}>
            <span className={styles.textPrimary}>Your Freight, Handled Right.</span>
          </h2>
          <p className={`${styles.heroDesc} animate-fade-in delay-2`}>
            Plan. Execute. Deliver. Full-service transportation including Flatbed, Oil Field, 
            Aggregate, Oversize/Heavy-Haul, and Freight Brokerage to keep your supply chain moving.
          </p>
          <div className={`${styles.ctaGroup} animate-fade-in delay-3`}>
            <Link href="/ship-with-us" className={styles.primaryBtn}>Ship With Us</Link>
            <Link href="/haul-with-us" className={styles.secondaryBtn}>Haul With Us</Link>
          </div>
        </div>
      </section>



      {/* 2. Bento Box Services */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Built for the <span className={styles.textPrimary}>Toughest Freight</span></h2>
            <p className={styles.sectionDesc}>Specialized capabilities across every major industrial sector in Canada.</p>
          </div>

          <div className={styles.bentoGrid}>
            {/* Bento Large 1 */}
            <Link href="/services#heavy-haul-overdimensional" className={`${styles.bentoItem} ${styles.bentoLarge}`}>
              <Image src="/s-heavyhaul.jpeg" alt="Heavy Haul" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.bentoImg} />
              <div className={styles.bentoOverlay}></div>
              <div className={styles.bentoContent}>
                 <h3>Heavy-Haul & Over-Dimensional</h3>
                 <p>Moving the loads others can&apos;t. Full permit acquisition and pilot car coordination.</p>
              </div>
            </Link>
            
            {/* Bento Normal 1 */}
            <Link href="/services#truckload-open-deck" className={styles.bentoItem}>
              <Image src="/s-opendeck.jpeg" alt="Open Deck" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.bentoImg} />
              <div className={styles.bentoOverlay}></div>
              <div className={styles.bentoContent}>
                 <h3>Truckload – Open Deck</h3>
                 <p>Flatbed transport for lumber, steel, and machinery.</p>
              </div>
            </Link>

            {/* Bento Normal 2 */}
            <Link href="/services#oilfield" className={styles.bentoItem}>
              <Image src="/s-oilfield.jpeg" alt="Oilfield" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.bentoImg} />
              <div className={styles.bentoOverlay}></div>
              <div className={styles.bentoContent}>
                 <h3>Oil Field</h3>
                 <p>Rig moves and urgent supply chain support.</p>
              </div>
            </Link>

            {/* Bento Normal 3 (Was Aggregate, now Ice Road) */}
            <Link href="/services#ice-road-transport" className={styles.bentoItem}>
              <Image src="/s-iceroads.jpeg" alt="Ice Road" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.bentoImg} />
              <div className={styles.bentoOverlay}></div>
              <div className={styles.bentoContent}>
                 <h3>Ice Road Transport</h3>
                 <p>Delivering critical supplies to remote northern communities via seasonal winter roads.</p>
              </div>
            </Link>

            {/* Bento Normal 4 */}
            <Link href="/services#freight-brokerage" className={styles.bentoItem}>
              <Image src="/s-freightbrokerage.jpeg" alt="Freight Brokerage" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.bentoImg} />
              <div className={styles.bentoOverlay}></div>
              <div className={styles.bentoContent}>
                 <h3>Freight Brokerage</h3>
                 <p>Connecting shippers with our vetted network across Canada.</p>
              </div>
            </Link>

            {/* Bento Full 1 (Was Ice Road, now Aggregate) */}
            <Link href="/services#aggregate" className={`${styles.bentoItem} ${styles.bentoFull}`}>
              <Image src="/s-Aggregate.jpeg" alt="Aggregate" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.bentoImg} />
              <div className={styles.bentoOverlay}></div>
              <div className={styles.bentoContent}>
                 <h3>Aggregate</h3>
                 <p>High-volume bulk material hauling.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
            {/* 3. Qualitative Trust Bar
      <section className={styles.trustBar}>
        <div className={styles.trustItem}>
          <ShieldCheck className={styles.trustIcon} />
          <div className={styles.trustText}>
            <h4>100% Asset-Backed</h4>
            <p>Owned fleet, controlled capacity</p>
          </div>
        </div>
        <div className={styles.trustDivider}></div>
        <div className={styles.trustItem}>
          <MapPin className={styles.trustIcon} />
          <div className={styles.trustText}>
            <h4>Western Canada Wide</h4>
            <p>From BC ports to the Prairies</p>
          </div>
        </div>
        <div className={styles.trustDivider}></div>
        <div className={styles.trustItem}>
          <Clock className={styles.trustIcon} />
          <div className={styles.trustText}>
            <h4>24/7 Dispatch</h4>
            <p>Always on, always tracking</p>
          </div>
        </div>
      </section> */}
      
      {/* 4. Massive Cinematic CTA Footer */}
      <section className={styles.ctaSection}>
        <Image src="/readytomove4.png" alt="X Freight" fill sizes="100vw" className={styles.ctaBgImage} />
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaBadge}>Get Started</div>
          <h2>Ready to move your freight?</h2>
          <p>Partner with Western Canada&apos;s most reliable asset-backed fleet. Get a fast, accurate quote from our operations team today.</p>
          <div className={styles.ctaButtonGroup}>
            <Link href="/get-a-quote" className={styles.primaryBtn}>Request a Quote</Link>
            <div className={styles.ctaContactWrapper}>
              <span className={styles.ctaOr}>or call dispatch 24/7</span>
              <a href="tel: 7806055557" className={styles.ctaPhone}> 780-605-5557</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <div className={styles.logoWrapper}>
              <Image src="/image.png" alt="X Freight Group Inc." fill sizes="200px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <p className={styles.brandDesc}>
            Asset-backed Western-Canadian logistics. Full-service transportation
            to keep your supply chain moving.
          </p>
          <p className={styles.brandMeta}>MC : 1724667</p>
        </div>

        {/* Navigation */}
        <nav className={styles.column} aria-label="Footer navigation">
          <p className={styles.columnHeading}>Navigation</p>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/regulations">Permits &amp; Escorts</Link></li>
            <li><Link href="/operating-entities">Operating Entities</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </nav>

        {/* Services */}
        <nav className={styles.column} aria-label="Services links">
          <p className={styles.columnHeading}>Services</p>
          <ul>
            <li><Link href="/ship-with-us">Ship With Us</Link></li>
            <li><Link href="/get-a-quote">Get a Quote</Link></li>
            <li><Link href="/haul-with-us">Haul With Us</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className={styles.column}>
          <p className={styles.columnHeading}>Contact</p>
          <ul>
            <li className={styles.contactText}>
              
              <span className={styles.contactRow}>
                <MapPin aria-hidden="true" className={styles.contactIcon} />
                <span>
                  #3400 - 10180 101 ST NW
                  <br />
                  Edmonton AB T5J3S4
                </span>
              </span>
            </li>
            <li>
              <a href="tel:+17806055557" className={styles.contactRow}>
                <Phone aria-hidden="true" className={styles.contactIcon} />
                <span>780 605 5557</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@xfreight.ca" className={styles.contactRow}>
                <Mail aria-hidden="true" className={styles.contactIcon} />
                <span>info@xfreight.ca</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} X Freight Group Inc. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
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
        </div>

        {/* Navigation */}
        <nav className={styles.column} aria-label="Footer navigation">
          <p className={styles.columnHeading}>Navigation</p>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
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
            <li>
              <a href="mailto:info@xfreight.ca">info@xfreight.ca</a>
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

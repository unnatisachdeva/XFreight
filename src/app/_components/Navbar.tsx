"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
        <div className={styles.logoWrapper}>
          <Image
            src="/image.png"
            alt="X Freight Group Inc."
            fill
            style={{ objectFit: 'cover' }}
            sizes="200px"
            className={styles.logoImg}
            priority
          />
        </div>
      </Link>
      
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>

        <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/regulations" onClick={() => setIsOpen(false)}>Permits &amp; Escorts</Link>
        <Link href="/operating-entities" onClick={() => setIsOpen(false)}>Operating Entities</Link>
        <Link href="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
         <Link href="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link
          href="/get-a-quote"
          className={`btn btn-primary ${styles.mobileQuote}`}
          onClick={() => setIsOpen(false)}
        >
          Get a Quote
        </Link>
      </div>

      <div className={styles.rightNav}>
        <Link
          href="/get-a-quote"
          className={`btn btn-primary ${styles.desktopQuote}`}
          style={{ padding: "10px 20px", fontSize: "0.9rem" }}
        >
          Get a Quote
        </Link>
        
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

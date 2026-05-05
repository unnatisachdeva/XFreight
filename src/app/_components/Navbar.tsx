import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/image.png"
          alt="X Freight Group Inc."
          width={180}
          height={40}
          className={styles.logoImg}
          priority
        />
      </Link>
      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/operating-entities">Entities</Link>
        <Link href="/careers">Careers</Link>
      </div>
      <Link
        href="/get-a-quote"
        className="btn btn-primary"
        style={{ padding: "10px 20px", fontSize: "0.9rem" }}
      >
        Get a Quote
      </Link>
    </nav>
  );
}

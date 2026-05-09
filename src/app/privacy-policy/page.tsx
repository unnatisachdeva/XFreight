import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "X Freight Group Inc. Privacy Policy — how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | X Freight Group",
    description: "How X Freight Group Inc. collects, uses, and protects your personal information.",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image
          src="/privacy-hero.png"
          alt="Privacy Policy Background"
          fill
          sizes="100vw"
          className={styles.heroBg}
          priority
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Privacy <span className={styles.textPrimary}>Policy</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in delay-1`}>
            Last Updated: April 27, 2026
          </p>
        </div>
      </section>

      <div className={styles.content}>
        <section>
          <h2>1. Introduction</h2>
          <p>
            X Freight Group Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and disclose personal
            information when you use our website{" "}
            <a href="https://www.xfreight.ca/" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
              https://xfreight.ca/
            </a>{" "}
            and our communication services, including SMS.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, and physical address.</li>
            <li>
              <strong>Phone Number:</strong> Specifically collected for the purpose of business communication and SMS updates.
            </li>
            <li>
              <strong>Log Data:</strong> IP addresses and browser types collected automatically via our website.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Use of Information</h2>
          <p>
            We use your information to provide our services, respond to inquiries, and send administrative or marketing communications (where consented).
          </p>
        </section>

        <section>
          <h2>4. SMS Communication &amp; Privacy</h2>
          <p>We value your privacy regarding our SMS program.</p>
          <ul>
            <li>
              <strong>No Third-Party Sharing:</strong> Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes.
            </li>
            <li>
              <strong>Exclusion:</strong> All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfill business purposes or as required by law in Alberta and applicable US jurisdictions.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>
            Depending on your location (Canada or the US), you may have the right to access, correct, or delete your personal data. To exercise these rights, contact us at{" "}
            <a href="mailto:info@xfreight.ca" className={styles.contactLink}>info@xfreight.ca</a>.
          </p>
        </section>

        <section>
          <h2>7. AI-Generated Content</h2>
          <p>
            Please note that some images and graphical elements used on this website may be AI-generated to provide an enhanced user experience. These images are for illustrative purposes and do not infringe on any privacy rights.
          </p>
        </section>

        <hr className={styles.divider} />

        <section>
          <h2>SMS Terms &amp; Conditions</h2>
          <h3>1. Program Description</h3>
          <p>
            By providing your phone number and opting in through our website forms, you consent to receive SMS messages from X Freight Group Inc. regarding sales inquiries, project updates, and freight coordination.
          </p>
          
          <h3>2. Consent &amp; Opt-In</h3>
          <p>
            Consent to receive automated marketing or operational text messages is not a condition of any purchase. You may opt-in by checking the consent box on our forms.
          </p>

          <h3>3. Message Frequency</h3>
          <p>Message frequency varies based on your interaction with our team.</p>

          <h3>4. Cost</h3>
          <p>Message and data rates may apply. Check with your mobile carrier for details.</p>

          <h3>5. How to Opt-Out</h3>
          <p>
            To stop receiving text messages from X Freight Group Inc., reply <strong>STOP</strong> to any message we send.
          </p>

          <h3>6. Support</h3>
          <p>
            For help, reply <strong>HELP</strong> to any message or email{" "}
            <a href="mailto:info@xfreight.ca" className={styles.contactLink}>info@xfreight.ca</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

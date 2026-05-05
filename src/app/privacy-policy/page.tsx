import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | X Freight Group",
  description:
    "X Freight Group Inc. Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: April 27, 2026</p>
      </header>

      <div className={styles.content}>
        {/* Section 1 */}
        <article className={styles.section}>
          <div className={styles.sectionNumber}>1</div>
          <h2>Introduction</h2>
          <p>
            X Freight Group Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and disclose personal
            information when you use our website{" "}
            <a
              href="https://xfreight.ca/"
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://xfreight.ca/
            </a>{" "}
            and our communication services, including SMS.
          </p>
        </article>

        {/* Section 2 */}
        <article className={styles.section}>
          <div className={styles.sectionNumber}>2</div>
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, including:
          </p>
          <ul className={styles.bulletList}>
            <li>Name, email address, and physical address.</li>
            <li>
              <strong>Phone Number:</strong> Specifically collected for the
              purpose of business communication and SMS updates.
            </li>
            <li>
              <strong>Log Data:</strong> IP addresses and browser types collected
              automatically via our website.
            </li>
          </ul>
        </article>

        {/* Section 3 */}
        <article className={styles.section}>
          <div className={styles.sectionNumber}>3</div>
          <h2>Use of Information</h2>
          <p>
            We use your information to provide our services, respond to
            inquiries, and send administrative or marketing communications
            (where consented).
          </p>
        </article>

        {/* Section 4 */}
        <article className={styles.section}>
          <div className={styles.sectionNumber}>4</div>
          <h2>SMS Communication &amp; Privacy</h2>
          <p>We value your privacy regarding our SMS program.</p>
          <ul className={styles.bulletList}>
            <li>
              <strong>No Third-Party Sharing:</strong> Mobile information will
              not be shared with third parties/affiliates for
              marketing/promotional purposes.
            </li>
            <li>
              <strong>Exclusion:</strong> All the above categories exclude text
              messaging originator opt-in data and consent; this information will
              not be shared with any third parties.
            </li>
          </ul>
        </article>

        {/* Section 5 */}
        <article className={styles.section}>
          <div className={styles.sectionNumber}>5</div>
          <h2>Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to
            fulfill business purposes or as required by law in Alberta and
            applicable US jurisdictions.
          </p>
        </article>

        {/* Section 6 */}
        <article className={styles.section}>
          <div className={styles.sectionNumber}>6</div>
          <h2>Your Rights</h2>
          <p>
            Depending on your location (Canada or the US), you may have the
            right to access, correct, or delete your personal data. To exercise
            these rights, contact us at{" "}
            <a href="mailto:info@xfreight.ca" className={styles.contactLink}>
              info@xfreight.ca
            </a>
            .
          </p>
        </article>

        {/* SMS Terms & Conditions */}
        <hr className={styles.divider} />

        <article className={styles.section}>
          <div className={styles.smsSection}>
            <h3>SMS Terms &amp; Conditions</h3>
          </div>

          <div className={styles.sectionNumber}>1</div>
          <h2>Program Description</h2>
          <p>
            By providing your phone number and opting in through our website
            forms, you consent to receive SMS messages from X Freight Group Inc.
            regarding sales inquiries, project updates, and freight
            coordination.
          </p>
        </article>

        <article className={styles.section}>
          <div className={styles.sectionNumber}>2</div>
          <h2>Consent &amp; Opt-In</h2>
          <p>
            Consent to receive automated marketing or operational text messages
            is not a condition of any purchase. You may opt-in by checking the
            consent box on our &ldquo;Request a Quote&rdquo; or &ldquo;Contact
            Us&rdquo; forms.
          </p>
        </article>

        <article className={styles.section}>
          <div className={styles.sectionNumber}>3</div>
          <h2>Message Frequency</h2>
          <p>
            Message frequency varies based on your interaction with our team and
            the status of your shipments or inquiries.
          </p>
        </article>

        <article className={styles.section}>
          <div className={styles.sectionNumber}>4</div>
          <h2>Cost</h2>
          <p>
            Message and data rates may apply. Check with your mobile carrier for
            details.
          </p>
        </article>

        <article className={styles.section}>
          <div className={styles.sectionNumber}>5</div>
          <h2>How to Opt-Out</h2>
          <p>
            To stop receiving text messages from X Freight Group Inc., reply{" "}
            <strong>STOP</strong> to any message we send. You will receive a
            single confirmation message of your opt-out.
          </p>
        </article>

        <article className={styles.section}>
          <div className={styles.sectionNumber}>6</div>
          <h2>Support</h2>
          <p>
            For help, reply <strong>HELP</strong> to any message or email{" "}
            <a href="mailto:info@xfreight.ca" className={styles.contactLink}>
              info@xfreight.ca
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  );
}

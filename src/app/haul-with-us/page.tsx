"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const equipmentTypes = [
  "Flatbed",
  "Step Deck",
  "RGN / Lowboy",
  "Dry Van",
  "Tanker",
  "End Dump",
  "Pneumatic",
  "Other",
];

const regions = [
  "British Columbia",
  "Alberta",
  "Saskatchewan",
  "Manitoba",
  "Ontario",
  "Northern Territories",
  "US Cross-Border",
];

export default function HaulWithUsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    // Collect multiple checkbox values for regions
    const selectedRegions = formData.getAll("regions");
    console.log("Carrier application submitted:", { ...data, regions: selectedRegions });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.container}>
        <div className={styles.success}>
          <div className={styles.successIcon}>🤝</div>
          <h2>Thanks for reaching out!</h2>
          <p>
            Our team will review your information and contact you shortly. We
            look forward to potentially working together.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Haul <span className={styles.headerHighlight}>With Us</span>
        </h1>
        <p>
          Join our growing network of carriers. Tell us about your operation and
          we&apos;ll be in touch to discuss partnership opportunities.
        </p>
      </header>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          {/* Full Name */}
          <div className={styles.field}>
            <label htmlFor="fullName">
              Full Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              placeholder="Jane Doe"
            />
          </div>

          {/* Company Name */}
          <div className={styles.field}>
            <label htmlFor="companyName">
              Company Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              placeholder="Your Trucking Co."
            />
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label htmlFor="email">
              Email Address<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="jane@trucking.com"
            />
          </div>

          {/* Phone */}
          <div className={styles.field}>
            <label htmlFor="phone">
              Phone Number<span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(780) 555-0456"
            />
          </div>

          {/* Equipment Type */}
          <div className={styles.field}>
            <label htmlFor="equipmentType">
              Equipment Type<span className={styles.required}>*</span>
            </label>
            <select
              id="equipmentType"
              name="equipmentType"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select equipment type...
              </option>
              {equipmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Number of Units */}
          <div className={styles.field}>
            <label htmlFor="units">Number of Units</label>
            <input
              type="number"
              id="units"
              name="units"
              placeholder="5"
              min="1"
            />
          </div>

          {/* Operating Regions */}
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label>
              Operating Regions<span className={styles.required}>*</span>
            </label>
            <div className={styles.checkboxGroup}>
              {regions.map((region) => (
                <label key={region} className={styles.checkboxLabel}>
                  <input type="checkbox" name="regions" value={region} />
                  {region}
                </label>
              ))}
            </div>
          </div>

          {/* MC/DOT Number */}
          <div className={styles.field}>
            <label htmlFor="mcDot">MC / DOT Number</label>
            <input
              type="text"
              id="mcDot"
              name="mcDot"
              placeholder="MC-123456"
            />
          </div>

          {/* Years in Operation */}
          <div className={styles.field}>
            <label htmlFor="years">Years in Operation</label>
            <input
              type="number"
              id="years"
              name="years"
              placeholder="10"
              min="0"
            />
          </div>

          {/* Message */}
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor="message">Message / Additional Info</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your operation, preferred lanes, any specializations..."
              rows={4}
            />
          </div>

          {/* Consent */}
          <div className={styles.consentField}>
            <input type="checkbox" id="consent" name="consent" required />
            <label htmlFor="consent">
              I agree to the collection and use of my data as outlined in the{" "}
              <Link href="/privacy-policy">Privacy Policy</Link>.
            </label>
          </div>

          {/* Submit */}
          <div className={styles.submitRow}>
            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
            >
              Submit Carrier Application
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

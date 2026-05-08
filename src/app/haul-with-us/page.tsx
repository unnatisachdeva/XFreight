"use client";

import { useState } from "react";
import Image from "next/image";
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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const selectedRegions = formData.getAll("regions");
    const finalData = { 
      ...data, 
      regions: selectedRegions,
      formType: "Carrier Application" 
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.splitLayout}>
      {/* Left Side - Image */}
      <div className={styles.imagePanel}>
        <Image
          src="/opendeck.jpeg"
          alt="X Freight Partner Carriers"
          fill
          className={styles.sideImage}
          priority
        />
        <div className={styles.imageOverlay}>
          <div className={styles.overlayContent}>
            <h1>Haul With Us</h1>
            <div className={styles.accentLine}></div>
            <p>Join our growing network of carriers. Tell us about your operation and we&apos;ll be in touch to discuss partnership opportunities.</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className={styles.formPanel}>
        <div className={styles.formContent}>
          {submitted ? (
            <div className={`${styles.successBox} animate-fade-in`}>
              <div className={styles.successIcon}>🤝</div>
              <h2 className={styles.successTitle}>Application Received</h2>
              <p className={styles.successText}>
                Our team will review your information and contact you shortly. We look forward to potentially working together.
              </p>
              <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>
                  Carrier <span className={styles.textPrimary}>Application</span>
                </h2>
                <p className={styles.formSubtitle}>
                  Provide your details below to begin the onboarding process.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGrid}>
                  {/* Full Name */}
                  <div className={styles.field}>
                    <label htmlFor="firstName">Full Name<span className={styles.required}>*</span></label>
                    <input type="text" id="firstName" name="firstName" required placeholder="Jane Doe" />
                  </div>

                  {/* Company Name */}
                  <div className={styles.field}>
                    <label htmlFor="companyName">Company Name<span className={styles.required}>*</span></label>
                    <input type="text" id="companyName" name="companyName" required placeholder="Your Trucking Co." />
                  </div>

                  {/* Email */}
                  <div className={styles.field}>
                    <label htmlFor="email">Email Address<span className={styles.required}>*</span></label>
                    <input type="email" id="email" name="email" required placeholder="jane@trucking.com" />
                  </div>

                  {/* Phone */}
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone Number<span className={styles.required}>*</span></label>
                    <input type="tel" id="phone" name="phone" required placeholder="(780) 555-0456" />
                  </div>

                  {/* Equipment Type */}
                  <div className={styles.field}>
                    <label htmlFor="equipmentType">Equipment Type<span className={styles.required}>*</span></label>
                    <select id="equipmentType" name="equipmentType" required defaultValue="">
                      <option value="" disabled>Select equipment type...</option>
                      {equipmentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Number of Units */}
                  <div className={styles.field}>
                    <label htmlFor="units">Number of Units</label>
                    <input type="number" id="units" name="units" placeholder="5" min="1" />
                  </div>

                  {/* Operating Regions */}
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label>Operating Regions<span className={styles.required}>*</span></label>
                    <div className={styles.checkboxGroup}>
                      {regions.map((region) => (
                        <label key={region} className={styles.checkboxLabel}>
                          <input type="checkbox" name="regions" value={region} />
                          <span className={styles.customCheck}></span>
                          {region}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* MC/DOT Number */}
                  <div className={styles.field}>
                    <label htmlFor="mcDot">MC / DOT Number</label>
                    <input type="text" id="mcDot" name="mcDot" placeholder="MC-123456" />
                  </div>

                  {/* Years in Operation */}
                  <div className={styles.field}>
                    <label htmlFor="years">Years in Operation</label>
                    <input type="number" id="years" name="years" placeholder="10" min="0" />
                  </div>

                  {/* Message */}
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label htmlFor="message">Message / Additional Info</label>
                    <textarea id="message" name="message" placeholder="Tell us about your operation, preferred lanes, any specializations..." rows={4} />
                  </div>

                  {/* Consent */}
                  <div className={styles.consentField}>
                    <input type="checkbox" id="consent" name="consent" required />
                    <label htmlFor="consent">
                      I agree to the collection and use of my data as outlined in the{" "}
                      <Link href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</Link>.
                    </label>
                  </div>

                  {/* Error Message */}
                  {error && <div className={styles.errorMsg}>{error}</div>}

                  {/* Submit */}
                  <div className={styles.submitRow}>
                    <button 
                      type="submit" 
                      className={styles.submitBtn}
                      disabled={submitting}
                    >
                      {submitting ? "Submitting..." : "Submit Application"} <span className={styles.arrow}>→</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

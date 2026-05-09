"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const serviceTypes = [
  "Truckload – Open Deck",
  "Oil Field",
  "Ice Road Transport",
  "Aggregate",
  "Heavy-Haul / Over-Dimensional",
  "Freight Brokerage",
];

export default function QuoteFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const finalData = { ...data, formType: "Quote Request" };

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
          src="/quote-bw.png"
          alt="Logistics Professionals Discussing Rates"
          fill
          sizes="(max-width: 992px) 100vw, 50vw"
          className={styles.sideImage}
          priority
        />
        <div className={styles.imageOverlay}>
          <div className={styles.overlayContent}>
            <h1>Ready to Move?</h1>
            <div className={styles.accentLine}></div>
            <p>Our team is standing by to provide competitive rates and reliable capacity for your freight.</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className={styles.formPanel}>
        <div className={styles.formContent}>
          {submitted ? (
            <div className={`${styles.successBox} animate-fade-in`}>
              <div className={styles.successIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e5282d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className={styles.successTitle}>Request Received</h2>
              <p className={styles.successText}>
                Thank you! We&apos;ve received your quote request and will be in touch within
                1–2 business days.
              </p>
              <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>
                  Get a <span className={styles.textPrimary}>Quote</span>
                </h2>
                <p className={styles.formSubtitle}>
                  Tell us about your freight needs and we&apos;ll handle the rest.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGrid}>
                  {/* Full Name */}
                  <div className={styles.field}>
                    <label htmlFor="firstName">Full Name<span className={styles.required}>*</span></label>
                    <input type="text" id="firstName" name="firstName" required placeholder="John Smith" />
                  </div>

                  {/* Company Name */}
                  <div className={styles.field}>
                    <label htmlFor="companyName">Company Name<span className={styles.required}>*</span></label>
                    <input type="text" id="companyName" name="companyName" required placeholder="Acme Industries" />
                  </div>

                  {/* Email */}
                  <div className={styles.field}>
                    <label htmlFor="email">Email Address<span className={styles.required}>*</span></label>
                    <input type="email" id="email" name="email" required placeholder="john@acme.com" />
                  </div>

                  {/* Phone */}
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone Number<span className={styles.required}>*</span></label>
                    <input type="tel" id="phone" name="phone" required placeholder="(403) 555-0123" />
                  </div>

                  {/* Origin */}
                  <div className={styles.field}>
                    <label htmlFor="origin">Origin<span className={styles.required}>*</span></label>
                    <input type="text" id="origin" name="origin" required placeholder="Calgary, AB" />
                  </div>

                  {/* Destination */}
                  <div className={styles.field}>
                    <label htmlFor="destination">Destination<span className={styles.required}>*</span></label>
                    <input type="text" id="destination" name="destination" required placeholder="Vancouver, BC" />
                  </div>

                  {/* Service Type */}
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label htmlFor="serviceType">Service Type<span className={styles.required}>*</span></label>
                    <select id="serviceType" name="serviceType" required defaultValue="">
                      <option value="" disabled>Select a service type...</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Commodity */}
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label htmlFor="commodity">Commodity / Description<span className={styles.required}>*</span></label>
                    <textarea id="commodity" name="commodity" required placeholder="Describe your freight..." rows={2} />
                  </div>

                  {/* Estimated Weight & Dimensions */}
                  <div className={styles.field}>
                    <label htmlFor="weight">Weight (lbs/kg)</label>
                    <input type="text" id="weight" name="weight" placeholder="40,000 lbs" />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="dimensions">Dimensions</label>
                    <input type="text" id="dimensions" name="dimensions" placeholder="48' × 8' × 8'" />
                  </div>

                  {/* Preferred Pickup Date */}
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label htmlFor="pickupDate">Preferred Pickup Date</label>
                    <input type="date" id="pickupDate" name="pickupDate" />
                  </div>

                  {/* Additional Notes */}
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea id="notes" name="notes" placeholder="Special requirements, delivery instructions..." rows={2} />
                  </div>

                  {/* Consent */}
                  <div className={styles.consentField}>
                    <input type="checkbox" id="consent" name="consent" required />
                    <label htmlFor="consent">
                      I agree to the <Link href="/privacy-policy" className={styles.privacyLink}>Privacy Policy</Link>.
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
                      {submitting ? (
                        <><span className="spinner"></span> Sending...</>
                      ) : (
                        <>Request Quote <span className={styles.arrow}>→</span></>
                      )}
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

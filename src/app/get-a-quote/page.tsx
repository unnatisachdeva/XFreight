"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const serviceTypes = [
  "Truckload – Open Deck",
  "Oilfield",
  "Ice Road Transport",
  "Aggregate",
  "Heavy-Haul / Over-Dimensional",
  "Freight Brokerage",
];

export default function GetAQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // For MVP: log to console. Replace with Server Action + Nodemailer later.
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Quote request submitted:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.container}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✅</div>
          <h2>Thank you!</h2>
          <p>
            We&apos;ve received your quote request and will be in touch within
            1–2 business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Get a <span className={styles.headerHighlight}>Quote</span>
        </h1>
        <p>
          Tell us about your freight needs and our team will provide a
          competitive quote within 1–2 business days.
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
              placeholder="John Smith"
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
              placeholder="Acme Industries"
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
              placeholder="john@acme.com"
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
              placeholder="(403) 555-0123"
            />
          </div>

          {/* Origin */}
          <div className={styles.field}>
            <label htmlFor="origin">
              Origin (City/Province)<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="origin"
              name="origin"
              required
              placeholder="Calgary, AB"
            />
          </div>

          {/* Destination */}
          <div className={styles.field}>
            <label htmlFor="destination">
              Destination (City/Province)
              <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              required
              placeholder="Vancouver, BC"
            />
          </div>

          {/* Service Type */}
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor="serviceType">
              Service Type<span className={styles.required}>*</span>
            </label>
            <select id="serviceType" name="serviceType" required defaultValue="">
              <option value="" disabled>
                Select a service type...
              </option>
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Commodity */}
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor="commodity">
              Commodity / Description of Freight
              <span className={styles.required}>*</span>
            </label>
            <textarea
              id="commodity"
              name="commodity"
              required
              placeholder="Describe your freight (e.g., 40,000 lbs of structural steel beams)"
              rows={3}
            />
          </div>

          {/* Estimated Weight */}
          <div className={styles.field}>
            <label htmlFor="weight">Estimated Weight (lbs or kg)</label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="40,000 lbs"
            />
          </div>

          {/* Dimensions */}
          <div className={styles.field}>
            <label htmlFor="dimensions">Dimensions (L × W × H)</label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              placeholder="48' × 8' × 8'"
            />
          </div>

          {/* Preferred Pickup Date */}
          <div className={styles.field}>
            <label htmlFor="pickupDate">Preferred Pickup Date</label>
            <input type="date" id="pickupDate" name="pickupDate" />
          </div>

          {/* Additional Notes */}
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Any special requirements, delivery instructions, etc."
              rows={3}
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
              Submit Quote Request
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

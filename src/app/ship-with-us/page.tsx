"use client";

import { useState } from "react";
import styles from "./page.module.css";

const needOptions = [
  "Connect with an Expert",
  "Request a Quote",
  "Track My Shipment",
  "Request a POD",
  "Other",
];

const volumeOptions = [
  "1 - 5 shipments",
  "6 - 20 shipments",
  "21 - 50 shipments",
  "51 - 100 shipments",
  "100+ shipments",
];

const serviceOptions = [
  "Full Truckload (FTL)",
  "Less-than-Truckload (LTL)",
  "Flatbed",
  "Temperature Controlled",
  "Expedited",
  "Intermodal",
  "Canada-US Cross Border",
];

export default function ShipWithUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Ship With Us form submitted:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.container}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✅</div>
          <h2>Thank you!</h2>
          <p>
            We&apos;ve received your request and a member of our team will be in
            touch shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Ship with <span className={styles.headerHighlight}>X Freight</span>
        </h1>
      </header>

      {/* What do you need? */}
      <div className={styles.needSection}>
        <h2>What do you need?</h2>
        <div className={styles.needOptions}>
          {needOptions.map((option) => (
            <div key={option} className={styles.needOption}>
              <input
                type="radio"
                id={`need-${option}`}
                name="need"
                value={option}
                checked={selectedNeed === option}
                onChange={() => setSelectedNeed(option)}
                required
              />
              <label
                htmlFor={`need-${option}`}
                className={styles.needOptionLabel}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <p className={styles.formTitle}>
          Provide your details so we can contact you
        </p>

        <div className={styles.formGrid}>
          {/* First Name */}
          <div className={styles.field}>
            <label htmlFor="firstName">
              First name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div className={styles.field}>
            <label htmlFor="lastName">
              Last name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Smith"
            />
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label htmlFor="email">
              Enter Email<span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@company.com"
            />
          </div>

          {/* Phone */}
          <div className={styles.field}>
            <label htmlFor="phone">
              Phone number<span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(403) 555-0123"
            />
          </div>

          {/* Company Name */}
          <div className={styles.field}>
            <label htmlFor="companyName">
              Company name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              placeholder="Acme Industries"
            />
          </div>

          {/* Website URL */}
          <div className={styles.field}>
            <label htmlFor="website">
              Website URL<span className={styles.required}>*</span>
            </label>
            <input
              type="url"
              id="website"
              name="website"
              required
              placeholder="https://yourcompany.com"
            />
          </div>

          {/* Average Monthly Volume */}
          <div className={styles.field}>
            <label htmlFor="volume">
              Average Monthly Volume<span className={styles.required}>*</span>
            </label>
            <select id="volume" name="volume" required defaultValue="">
              <option value="" disabled>
                Please Select
              </option>
              {volumeOptions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* Select a Service */}
          <div className={styles.field}>
            <label htmlFor="service">Select a Service</label>
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>
                Select a service...
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Comments */}
          <div className={`${styles.field} ${styles.fieldFull}`}>
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Tell us more about your shipping needs..."
              rows={4}
            />
          </div>

          {/* Marketing Consent */}
          <div className={styles.consentField}>
            <input type="checkbox" id="consent" name="consent" required />
            <label htmlFor="consent">
              By checking this box, I agree to receive marketing emails from X
              Freight about their latest products, services, and offers. I
              understand that I can unsubscribe at any time by following the
              instructions in the emails.
            </label>
          </div>

          {/* Submit */}
          <div className={styles.submitRow}>
            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

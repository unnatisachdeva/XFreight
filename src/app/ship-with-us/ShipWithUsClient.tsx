"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const needOptions = ["Connect with an Expert","Request a Quote","Track My Shipment","Request a POD","Other"];
const volumeOptions = ["1 - 5 shipments","6 - 20 shipments","21 - 50 shipments","51 - 100 shipments","100+ shipments"];
const serviceOptions = ["Full Truckload (FTL)","Less-than-Truckload (LTL)","Flatbed","Temperature Controlled","Expedited","Intermodal","Canada-US Cross Border"];

export default function ShipWithUsClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const selectedServices = formData.getAll("services");
    const finalData = { ...data, services: selectedServices, formType: "Ship With Us" };
    try {
      const response = await fetch("/api/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(finalData) });
      if (response.ok) { setSubmitted(true); } else { setError("Something went wrong. Please try again later."); }
    } catch (err) { setError("Failed to connect to the server."); } finally { setSubmitting(false); }
  }

  return (
    <div className={styles.splitLayout}>
      <div className={styles.imagePanel}>
        <Image src="/s-freightbrokerage.jpeg" alt="X Freight Logistics Services" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.sideImage} priority />
        <div className={styles.imageOverlay}>
          <div className={styles.overlayContent}>
            <h1>Ship with X Freight</h1>
            <div className={styles.accentLine}></div>
            <p>Whether you need a quick quote or a long-term logistics partnership, we have the capacity and expertise to deliver.</p>
          </div>
        </div>
      </div>
      <div className={styles.formPanel}>
        <div className={styles.formContent}>
          {submitted ? (
            <div className={`${styles.successBox} animate-fade-in`}>
              <div className={styles.successIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e5282d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h2 className={styles.successTitle}>Thank You!</h2>
              <p className={styles.successText}>We&apos;ve received your request and a member of our team will be in touch shortly.</p>
              <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>Submit Another Request</button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Let&apos;s <span className={styles.textPrimary}>Connect</span></h2>
                <p className={styles.formSubtitle}>Provide your details below and our team will get back to you.</p>
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.needSection}>
                  <h3 className={styles.sectionHeading}>What do you need?</h3>
                  <div className={styles.needOptions}>
                    {needOptions.map((option) => (
                      <div key={option} className={styles.needOption}>
                        <input type="radio" id={`need-${option}`} name="need" value={option} checked={selectedNeed === option} onChange={() => setSelectedNeed(option)} required />
                        <label htmlFor={`need-${option}`} className={styles.needOptionLabel}>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.formGrid}>
                  <div className={styles.field}><label htmlFor="firstName">First name<span className={styles.required}>*</span></label><input type="text" id="firstName" name="firstName" required placeholder="John" /></div>
                  <div className={styles.field}><label htmlFor="lastName">Last name<span className={styles.required}>*</span></label><input type="text" id="lastName" name="lastName" required placeholder="Smith" /></div>
                  <div className={styles.field}><label htmlFor="email">Email Address<span className={styles.required}>*</span></label><input type="email" id="email" name="email" required placeholder="john@company.com" /></div>
                  <div className={styles.field}><label htmlFor="phone">Phone number<span className={styles.required}>*</span></label><input type="tel" id="phone" name="phone" required placeholder="(403) 555-0123" /></div>
                  <div className={styles.field}><label htmlFor="companyName">Company name<span className={styles.required}>*</span></label><input type="text" id="companyName" name="companyName" required placeholder="Acme Industries" /></div>
                  <div className={styles.field}><label htmlFor="website">Website URL<span className={styles.required}>*</span></label><input type="url" id="website" name="website" required placeholder="https://yourcompany.com" /></div>
                  <div className={styles.field}>
                    <label htmlFor="volume">Average Monthly Volume<span className={styles.required}>*</span></label>
                    <select id="volume" name="volume" required defaultValue=""><option value="" disabled>Please Select</option>{volumeOptions.map((v) => (<option key={v} value={v}>{v}</option>))}</select>
                  </div>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label>Select Services</label>
                    <div className={styles.checkboxGroup}>{serviceOptions.map((service) => (<label key={service} className={styles.checkboxLabel}><input type="checkbox" name="services" value={service} /><span className={styles.customCheck}></span>{service}</label>))}</div>
                  </div>
                  <div className={`${styles.field} ${styles.fieldFull}`}><label htmlFor="comments">Comments</label><textarea id="comments" name="comments" placeholder="Tell us more about your shipping needs..." rows={4} /></div>
                  <div className={styles.consentField}><input type="checkbox" id="consent" name="consent" required /><label htmlFor="consent">By checking this box, I agree to receive marketing emails from X Freight. I understand that I can unsubscribe at any time.</label></div>
                  {error && <div className={styles.errorMsg}>{error}</div>}
                  <div className={styles.submitRow}><button type="submit" className={styles.submitBtn} disabled={submitting}>{submitting ? (<><span className="spinner"></span> Sending...</>) : (<>Submit Request <span className={styles.arrow}>→</span></>)}</button></div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

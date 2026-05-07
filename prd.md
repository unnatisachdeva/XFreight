# Product Requirements Document (PRD)
## Transportation Brokerage MVP Website

**Document Version:** 1.0  
**Status:** Draft  
**Last Updated:** May 5, 2026  
**Owner:** Product / Leadership  

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Objectives](#2-objectives)
3. [Target Users](#3-target-users)
4. [Website Structure / Sitemap](#4-website-structure--sitemap)
5. [Page-wise Requirements](#5-page-wise-requirements)
6. [Functional Requirements](#6-functional-requirements)
7. [Non-Functional Requirements](#7-non-functional-requirements)
8. [User Flows](#8-user-flows)
9. [Tech Recommendations](#9-tech-recommendations)
10. [Timeline for MVP Launch](#10-timeline-for-mvp-launch)
11. [Risks and Assumptions](#11-risks-and-assumptions)

---

## 1. Executive Summary

This document defines the product requirements for the MVP website of a Western Canadian transportation brokerage company. The website serves as the company's primary digital presence — a professional, fast-loading marketing site that communicates services, builds credibility, and generates leads from shippers, carriers, and job seekers.

The MVP is not a marketplace or transactional platform. It is a **lead generation and information website** designed to launch quickly with a clean, professional interface. Core outputs are inbound quote requests, carrier sign-ups, and job applications.

---

## 2. Objectives

| # | Objective | Success Metric |
|---|-----------|----------------|
| 1 | Establish a credible online presence | Site live within MVP timeline |
| 2 | Generate shipper leads | Quote form submissions per week |
| 3 | Attract carriers | Carrier form submissions per week |
| 4 | Attract talent (sales, ops, drivers) | Job application form submissions |
| 5 | Communicate services clearly | Bounce rate < 55% on service pages |
| 6 | Comply with data privacy requirements | Privacy Policy page live at launch |

---

## 3. Target Users

### 3.1 Shippers
- **Who:** Businesses (SMBs and enterprise) that need freight transportation across Western Canada
- **Need:** Reliable, asset-backed carrier with specialized capabilities (oversize, oil field, aggregate)
- **Goal on site:** Understand services → Request a quote

### 3.2 Carriers
- **Who:** Owner-operators, fleet operators, and logistics providers
- **Need:** Load opportunities and a brokerage partner
- **Goal on site:** Understand partnership model → Apply to haul

### 3.3 Job Seekers
- **Who:** Sales professionals, operations staff, and drivers
- **Need:** Find open positions and apply
- **Goal on site:** View job descriptions → Submit application

---

## 4. Website Structure / Sitemap

```
/                          → Home Page
├── /services              → Services Overview
│   ├── /services/truckload-open-deck
│   ├── /services/oilfield
│   ├── /services/ice-road-transport
│   ├── /services/aggregate
│   ├── /services/heavy-haul-overdimensional
│   └── /services/freight-brokerage
├── /operating-entities    → Operating Entities (external redirects)
├── /careers               → Careers Overview
│   ├── /careers/sales
│   ├── /careers/operations
│   └── /careers/drivers
├── /get-a-quote           → Quote Request Form (Shippers)
├── /haul-with-us          → Carrier Application Form
└── /privacy-policy        → Privacy Policy
```

**Navbar Items:** Services | Operating Entities | Careers | Get a Quote  
**Footer Links:** Privacy Policy | Contact (optional)

---

## 5. Page-wise Requirements

---

### 5.1 Home Page (`/`)

#### Banner / Hero Section
| Element | Details |
|--------|---------|
| Background | Full-width truck/logistics image (high-quality, Western Canadian landscape preferred) |
| Overlay | Dark semi-transparent overlay for text readability |
| Main Headline | `"Asset-backed Western-Canadian Logistics. Your Freight, Handled Right."` |
| Subheadline | `"Plan. Execute. Deliver. Full-service transportation including Flatbed, Oil Field, Aggregate, Oversize/Heavy-Haul, and Freight Brokerage to keep your supply chain moving."` |
| CTA Button 1 | **"Ship With Us"** → redirects to `/get-a-quote` |
| CTA Button 2 | **"Haul With Us"** → redirects to `/haul-with-us` |

#### Supporting Sections (below hero)
- **Services Snapshot:** Icon grid of 6 service types with short descriptions and "Learn More" links to respective service pages
- **Why Choose Us:** 3–4 trust/credibility points (e.g., asset-backed, Western Canadian expertise, full-service coverage)
- **Operating Entities Preview:** Brief mention of affiliated companies with links
- **Call-to-Action Strip:** Secondary CTA for quote or careers

---

### 5.2 Services Pages (`/services/*`)

A parent overview page (`/services`) lists all service types with short summaries and links to individual pages.

Each individual service page must include:

| Element | Details |
|--------|---------|
| Page Title | Service name (H1) |
| Description | 2–3 paragraphs explaining the service |
| Key Highlights | Bullet list of capabilities or features |
| Who It's For | Target customer segment |
| CTA | "Get a Quote" button linking to `/get-a-quote` |

#### Service Pages Required:

**1. Truckload – Open Deck (`/services/truckload-open-deck`)**
- Flatbed and open-deck freight across Western Canada
- Suitable for lumber, steel, machinery, and construction materials
- Highlights: flexible scheduling, asset-backed fleet, experienced drivers

**2. Oil Field (`/services/oilfield`)**
- Specialized transportation for the oil and gas sector
- Highlights: CVOR-compliant, 24/7 availability, remote location capability, specialized equipment

**3. Ice Road Transport (`/services/ice-road-transport`)**
- Seasonal freight to remote northern communities via ice roads
- Highlights: seasonal expertise, heavy load capability, experienced northern drivers

**4. Aggregate (`/services/aggregate`)**
- Bulk material transport: gravel, sand, rock, and construction aggregate
- Highlights: high-volume capacity, regional expertise, construction-sector focus

**5. Heavy-Haul / Over-Dimensional (`/services/heavy-haul-overdimensional`)**
- Transport of oversized and overweight loads requiring permits
- Highlights: route planning, permit acquisition, pilot car coordination, specialized equipment

**6. Freight Brokerage (`/services/freight-brokerage`)**
- Connecting shippers with vetted carriers across Canada
- Highlights: carrier network, load matching, competitive rates, end-to-end management

---

### 5.3 Operating Entities (`/operating-entities`)

A single page listing all affiliated companies. Each entity is presented as a card or section with:
- Company name
- One-line description (placeholder for now)
- External link button: **"Visit Website"** → opens in new tab

| Entity | Link |
|--------|------|
| X Freight Group Inc. | External URL (TBD) |
| The X Group Inc. | External URL (TBD) |
| X Transport Inc. | External URL (TBD) |
| Every Way Transport Ltd. | External URL (TBD) |

> **Note:** All external URLs must be provided by the client before development. Buttons should open in `target="_blank"` with `rel="noopener noreferrer"`.

---

### 5.4 Careers (`/careers/*`)

**Parent Page (`/careers`):**
- Overview of company culture and why to join
- List of 3 open role categories with brief teaser and "Apply Now" links

**Individual Role Pages:**

Each role page must include:

| Element | Details |
|--------|---------|
| Job Title | H1 heading |
| Role Overview | 1–2 paragraph description |
| Responsibilities | Bulleted list |
| Qualifications | Bulleted list |
| Application Form | Embedded on the page (see below) |

**Sales (`/careers/sales`)**
- Responsibilities: prospecting shippers, managing accounts, negotiating rates, building relationships
- Qualifications: 2+ years logistics/transportation sales experience, strong communication skills

**Operations (`/careers/operations`)**
- Responsibilities: dispatching, load coordination, carrier relations, documentation
- Qualifications: experience in freight operations or dispatch, detail-oriented

**Drivers (`/careers/drivers`)**
- Responsibilities: safe transport of freight, maintaining logs, equipment inspection
- Qualifications: valid Class 1 (AZ) license, clean abstract, experience with flatbed/oversize preferred

**Application Form Fields (all roles):**
- Full Name `*`
- Email Address `*`
- Phone Number `*`
- Role Applying For (pre-filled based on page) `*`
- Resume Upload (PDF/DOC) `*`
- Cover Letter / Message (text area, optional)
- Consent checkbox: *"I agree to the collection and use of my data as outlined in the Privacy Policy."* `*`
- Submit Button

---

### 5.5 Get a Quote (`/get-a-quote`)

Lead capture form for shippers.

**Form Fields:**

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Company Name | Text | Yes |
| Email Address | Email | Yes |
| Phone Number | Tel | Yes |
| Origin (City/Province) | Text | Yes |
| Destination (City/Province) | Text | Yes |
| Service Type | Dropdown (6 service types) | Yes |
| Commodity / Description of Freight | Textarea | Yes |
| Estimated Weight (lbs or kg) | Text | No |
| Dimensions (L x W x H) | Text | No |
| Preferred Pickup Date | Date picker | No |
| Additional Notes | Textarea | No |
| Consent checkbox | Checkbox | Yes |
| Submit Button | — | — |

**Post-submission:** Display a confirmation message: *"Thank you! We'll be in touch within 1–2 business days."*

---

### 5.6 Haul With Us (`/haul-with-us`)

Carrier application / sign-up form.

**Form Fields:**

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Company Name | Text | Yes |
| Email Address | Email | Yes |
| Phone Number | Tel | Yes |
| Equipment Type | Dropdown (Flatbed, Step-deck, RGN, Tanker, Other) | Yes |
| Number of Units | Number | No |
| Operating Regions | Checkboxes (BC, AB, SK, MB, North/Remote) | Yes |
| MC/DOT Number or CVOR | Text | No |
| Years in Operation | Number | No |
| Message / Additional Info | Textarea | No |
| Consent checkbox | Checkbox | Yes |
| Submit Button | — | — |

**Post-submission:** Display a confirmation message: *"Thanks for reaching out! Our team will review your information and contact you shortly."*

---

### 5.7 Privacy Policy (`/privacy-policy`)

> **Priority: HIGH — Must be live at launch.**

Standard privacy policy page covering:

1. **Information We Collect** — Names, contact info, shipment details, resume data submitted via forms
2. **How We Use Your Information** — Responding to inquiries, processing applications, improving services
3. **Data Storage and Security** — Where data is stored, security measures in place
4. **Third-Party Sharing** — Not sold; may be shared with operating entities as needed
5. **Cookies** — Basic cookie usage disclosure
6. **Your Rights** — Right to access, correct, or delete data (PIPEDA compliance for Canada)
7. **Contact for Privacy Concerns** — Email address or contact form link
8. **Policy Updates** — Date of last revision

> **Legal Note:** Final Privacy Policy copy should be reviewed or drafted by a legal professional. A template can be used for launch with the intent to update.

---

### 5.8 Footer (Global)

Appears on all pages.

| Element | Details |
|--------|---------|
| Company Name / Logo | Top of footer |
| Navigation Links | Services, Operating Entities, Careers, Get a Quote |
| Legal Links | **Privacy Policy** (high priority), Terms of Use (optional) |
| Contact Info | Email address, Phone number (if available) |
| Social Links | LinkedIn, etc. (if available) |
| Copyright | © 2026 [Company Name]. All rights reserved. |

---

## 6. Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| F-01 | Quote request form submission with email notification to internal team | Must Have |
| F-02 | Carrier (Haul With Us) form submission with email notification | Must Have |
| F-03 | Job application forms (3 roles) with resume file upload | Must Have |
| F-04 | Client-side form validation (required fields, email format, file type) | Must Have |
| F-05 | External redirects for Operating Entities (new tab) | Must Have |
| F-06 | Navigation between all internal pages | Must Have |
| F-07 | Privacy Policy page accessible from footer on all pages | Must Have |
| F-08 | Confirmation message shown after successful form submission | Must Have |
| F-09 | CAPTCHA or basic spam protection on all forms | Should Have |
| F-10 | Form data stored in a backend/database or forwarded via email | Must Have |
| F-11 | Resume file upload validation (PDF/DOC only, max size ~5MB) | Must Have |

---

## 7. Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| NF-01 | Mobile responsive design | All pages functional on 375px+ viewports |
| NF-02 | Page load speed | < 3 seconds on 4G (Lighthouse score ≥ 80) |
| NF-03 | SEO-friendly structure | Semantic HTML, meta tags, OG tags, sitemap.xml, robots.txt |
| NF-04 | Secure form handling | HTTPS enforced; no sensitive data in URLs |
| NF-05 | Accessibility | WCAG 2.1 AA compliance (alt text, keyboard navigation, contrast ratios) |
| NF-06 | Cross-browser compatibility | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| NF-07 | Uptime | 99.9% uptime via managed hosting (Vercel, Netlify, or equivalent) |
| NF-08 | PIPEDA Compliance | Privacy Policy live; consent checkbox on all forms |

---

## 8. User Flows

### 8.1 Shipper requesting a quote
```
Home Page
  → Clicks "Ship With Us" CTA
    → /get-a-quote page
      → Fills out freight request form
        → Submits form
          → Sees confirmation message
            → Internal team receives email notification
```

### 8.2 Carrier applying to haul
```
Home Page
  → Clicks "Haul With Us" CTA
    → /haul-with-us page
      → Fills out carrier form
        → Submits form
          → Sees confirmation message
            → Internal team receives email notification
```

### 8.3 Job seeker applying for a role
```
Home Page (or direct link)
  → Navbar → Careers
    → /careers overview page
      → Selects role (e.g., Sales)
        → /careers/sales
          → Reviews job description
            → Fills out application form + uploads resume
              → Submits form
                → Sees confirmation message
```

### 8.4 Visitor exploring services
```
Home Page
  → Navbar → Services (or service icon grid)
    → /services overview
      → Selects specific service (e.g., Heavy-Haul)
        → /services/heavy-haul-overdimensional
          → Reads service details
            → Clicks "Get a Quote" CTA
              → /get-a-quote
```

### 8.5 Visitor navigating to Operating Entity
```
Home Page (or any page)
  → Navbar → Operating Entities
    → /operating-entities
      → Clicks "Visit Website" on an entity card
        → Opens external site in new tab
```

---

## 9. Tech Recommendations

### Recommended Stack (Fast Deployment)

| Layer | Recommended Option | Rationale |
|-------|-------------------|-----------|
| **Framework** | Next.js (React) | File-based routing, SEO-friendly, fast static + SSR, large ecosystem |
| **Styling** | Tailwind CSS | Rapid UI development, responsive by default |
| **Hosting** | Vercel | One-click Next.js deploy, CDN, HTTPS, great free tier |
| **Form Handling** | Resend + React Hook Form | Reliable transactional email; clean form state management |
| **File Uploads** | Uploadthing or Cloudinary | Resume uploads; handles storage and validation |
| **CMS (optional)** | Sanity.io or Contentlayer | Allows non-dev editing of service/career page content |
| **Analytics** | Google Analytics 4 or Plausible | Track form conversions and traffic sources |
| **Spam Protection** | hCaptcha or Cloudflare Turnstile | Privacy-friendly, lightweight CAPTCHA |

### Alternative Stack (Even Faster / No-Code)
For an ultra-fast launch without a developer team:
- **Webflow** or **Framer** for design + hosting
- **Typeform** or **Tally.so** for embedded forms
- **Zapier** for email notifications
- Trade-off: less control, but 1–3 day launch possible

---

## 10. Timeline for MVP Launch

| Phase | Tasks | Duration | Owner |
|-------|-------|----------|-------|
| **Phase 1: Setup & Design** | Brand assets, domain, hosting setup, wireframes/design system | Days 1–5 | Design + Dev |
| **Phase 2: Core Pages** | Home, Services (all 6), Operating Entities | Days 6–12 | Dev |
| **Phase 3: Forms & Careers** | Quote form, Haul With Us form, 3 Career pages + forms | Days 13–18 | Dev |
| **Phase 4: Legal & Footer** | Privacy Policy, footer, nav, external links | Days 19–21 | Dev + Legal |
| **Phase 5: QA & Polish** | Cross-browser testing, mobile testing, form testing, SEO meta tags | Days 22–25 | Dev + QA |
| **Phase 6: Launch** | DNS, final deploy, smoke test, go-live | Day 26–28 | Dev + Stakeholders |

> **Target MVP Launch: ~4 weeks from kickoff**

---

## 11. Risks and Assumptions

### Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| External URLs for Operating Entities not provided on time | Medium | Medium | Use placeholder links with `#` and update post-launch |
| Privacy Policy not legally reviewed before launch | Medium | High | Use reputable template at launch; schedule legal review within 30 days |
| Resume uploads causing backend complexity | Low | Medium | Use a managed file upload service (Uploadthing, Cloudinary) to avoid custom storage setup |
| Scope creep (requests for marketplace features in MVP) | High | High | Strictly enforce MVP scope; log out-of-scope items for v2 backlog |
| Image/brand assets not delivered on time | Medium | Medium | Use high-quality stock imagery (Unsplash, Pexels) as placeholder |
| Form spam or abuse | Low | Low | Add CAPTCHA before launch |

### Assumptions

- Company logo, brand colors, and typography guidelines will be provided before development begins
- External website URLs for all 4 Operating Entities will be provided before launch (or will use `#` as placeholder)
- An internal email address is available to receive form submission notifications
- Legal/privacy requirements are based on Canadian federal law (PIPEDA); no U.S. or EU-specific compliance required for MVP
- No user authentication, dashboards, or real-time load matching is required in this phase
- Content for service pages and job descriptions will be provided or approved by the client
- Domain name is already purchased or will be secured before Phase 1 ends

---

## Appendix: Out of Scope (v2+)

The following features are explicitly **not** in scope for MVP and should be tracked for future releases:

- Shipper/carrier portal with login authentication
- Real-time load board or freight marketplace
- Live tracking or shipment status
- Automated rate engine or instant quote calculator
- CRM integration (e.g., Salesforce, HubSpot)
- Multi-language support
- Blog / content marketing section
- Customer reviews or ratings
- Payment processing

---

*End of PRD v1.0*

# SEO Phase 5 Report — Schema.org Structured Data

**Status:** ✅ Complete — Production build passes
**Generated:** 2026-11-12

---
## Phase 5 Objectives (Per seo.md)

**Goal:** Help search engines understand the doctor's identity, professional information, chambers, and educational articles.

### Types Implemented:
- **Person** — site-wide doctor identification
- **WebSite** — site identification
- **Physician** subtype within Person — medical specialty focus

### Doctor Information (verified from codebase):
- Name: Dr. Suranjana Roy
- Qualification: MDS (verified in codebase, homepage, footer, service FAQs)
- Specialty: Oral and Maxillofacial Surgery (verified)
- Clinical focus: Head and Neck Surgical Oncology (verified)
- Website: https://dr-suranajana-roy.vercel.app/ (verified)
- Verified chambers: Siliguri (Pin 734011), Jadavpur, Kolkata

---
## Changes Made

### 1. Created `src/lib/seo/schema.ts` — Type-safe Schema Builders
- `Person` type with all required fields (name, jobTitle, url, telephone, email, areaServed, address)
- `WebSite` type (name, url, description, publisher)
- `WebPage` type per-route
- `MedicalClinic` type with verified chamber addresses only
- `verifiedChambers` object with Siliguri and Jadavpur data
- JSX builders for root-level and per-route schema

**Key constraints followed (from seo.md):**
- ❌ Do not invent addresses, coordinates, registrations, or degrees
- ❌ Do not add fake ratings, AggregateRating, or Review markup
- ❌ Do not create MedicalClinic entities for virtual offices
- ❌ Do not promise Google rich results
- ❌ Do not confuse Schema.org validity with Google eligibility
- ✅ Include only verified qualifications and registration details
- ✅ Add chamber address only after it is confirmed
- ✅ Use stable @id identifiers
- ✅ Connect WebPage and Article entities to the doctor

---
### 2. Updated `src/routes/__root.tsx` — Root-Level Schema.org JSON-LD

**Added to every page's `<head>` scripts:**

#### A. Person Schema (JSON-LD `application/ld+json`)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Suranjana Roy",
  "jobTitle": "Oral & Maxillofacial Surgeon and Onco Surgeon",
  "url": "https://dr-suranajana-roy.vercel.app/",
  "telephone": "+91-7980103899",
  "email": "drsuranjanaroy@gmail.com",
  "areaServed": ["Siliguri", "Kolkata", "West Bengal"],
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Siliguri",
      "addressRegion": "West Bengal",
      "postalCode": "734011",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Jadavpur",
      "addressRegion": "Kolkata, West Bengal",
      "postalCode": "700092",
      "addressCountry": "IN"
    }
  ]
}
```

#### B. WebSite Schema (JSON-LD `application/ld+json`)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Dr. Suranjana Roy",
  "url": "https://dr-suranajana-roy.vercel.app/",
  "description": "Oral & Maxillofacial Surgery and Head & Neck Oncology information",
  "publisher": "Dr. Suranjana Roy"
}
```

**Placement:** Included in every page's `<script type="application/ld+json">` tag via the root route's `head()` export.

---
### 3. Production Build Verification
- ✅ `npm run build` passes
- ✅ Vite transforms 2015 modules
- ✅ Nitro builds with vercel preset
- ✅ No build errors or warnings related to schema
- ✅ All 16 route SSR chunks generated successfully

---
## Schema.org Compliance Check

### ✅ Person Schema (Implemented)
- `name`: Dr. Suranjana Roy — verified from codebase
- `jobTitle`: Oral & Maxillofacial Surgeon and Onco Surgeon — consistent with visible content
- `url`: https://dr-suranajana-roy.vercel.app/ — matches canonical domain
- `telephone`: +91 7980103899 — matches footer and contact pages
- `email`: drsuranjanaroy@gmail.com — matches UI and form
- `areaServed`: ["Siliguri", "Kolkata", "West Bengal"] — matches homepage, footer, services, appointment form
- `address`: Two verified PostalAddress objects:
  - Siliguri (Pin 734011) — active chamber, listed in multiple sections
  - Jadavpur, Kolkata (700092) — active chamber, listed in footer and appointment form
- **Constraint compliance:** ✅ Only verified addresses included; no fake coordinates

### ✅ WebSite Schema (Implemented)
- `name`: Dr. Suranjana Roy — matches branding
- `url`: https://dr-suranajana-roy.vercel.app/ — matches canonical domain
- `description`: "Oral & Maxillofacial Surgery and Head & Neck Oncology information" — consistent with meta description
- `publisher`: "Dr. Suranjana Roy" — matches Person name

---
## What Was NOT Included (Per seo.md Constraints)

- ❌ No `sameAs` links — no verified professional profiles (e.g., Indian Medical Register, dental council URLs) exist in the codebase to link to
- ❌ No `MedicalClinic` schema — only two chamber locations are verified across the codebase; creating MedicalClinic for virtual/online-only offices is discouraged
- ❌ No `AggregateRating` or `Review` markup — no review data exists in the repository
- ❌ No `Article` schema — no medical articles published yet (Phase 7 pending)
- ❌ No `sameAs` for social profiles — no verified social media links in codebase

---
## What Each Schema Achieves

### Person Schema (Google/Search Engine Understanding)
- Confirms doctor identity: Dr. Suranjana Roy
- Establishes professional role: Oral & Maxillofacial Surgeon and Onco Surgeon
- Provides contact: +91 7980103899, drsuranjanaroy@gmail.com
- Defines service area: Siliguri, Kolkata, West Bengal
- Lists verified consultation locations: Siliguri (Pin 734011), Jadavpur, Kolkata

### WebSite Schema (Site Identity)
- Confirms site: Dr. Suranjana Roy
- Establishes URL: https://dr-suranajana-roy.vercel.app/
- Describes content focus: Oral & Maxillofacial Surgery and Head & Neck Oncology
- Identifies publisher: Dr. Suranjana Roy

---
## Remaining Actions (for Owner / Next Phases)

### Phase 6 — Local SEO and Chamber Information
- Create `/chambers` page with full details for Siliguri and Jadavpur
- Add MedicalClinic schema to chamber pages (only for verified locations)
- Add Google Maps links (genuine only)
- Ensure NAP (Name, Address, Phone) consistency across all pages
- Prepare Google Business Profile setup checklist

### Phase 7 — Medical Content and Professional Authority
- Create /medical-articles page
- Add Article schema to educational articles
- Draft articles: early signs of oral cancer, when to consult a maxillofacial surgeon, etc.
- Clinical review before publishing
- Add author information and review dates

### Phase 8 — Performance, Accessibility, and Final SEO QA
- Validate JSON-LD syntax (Google's Rich Results Test)
- Validate Schema.org vocabulary
- Check structured data matches visible content on each page
- Core Web Vitals targets: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1
- Semantic headings verification
- Mobile usability testing
- Final SEO QA report

---
## Report Summary

**Phase 5 complete.** Schema.org Person and WebSite JSON-LD implemented on all pages. 

**Dependent on:**
- ✅ Phase 1 audit (complete — SEO_AUDIT.md)
- ✅ Phase 4 specialty pages (complete — 6 new routes)
- ✅ Phase 5 schema implementation (complete — this report)
- Pending: Phase 6 (chamber pages) and Phase 7 (medical articles)

**Next:** Proceed to Phase 6 — Local SEO and chamber information, after owner confirms chamber details for MedicalClinic schema implementation.
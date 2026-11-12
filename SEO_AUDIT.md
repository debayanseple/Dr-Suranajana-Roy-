# SEO Audit — Dr. Suranjana Roy

**Generated:** Read-only audit of the existing repository
**Live URL:** https://dr-suranajana-roy.vercel.app/
**Hosting:** Vercel Hobby (Free)
**Primary SEO location:** Kolkata, West Bengal, India
**Qualification:** MDS
**Specialisations:** Oral & Maxillofacial Surgery; Head & Neck Surgical Oncology

---
## 1. Architecture and Stack

- **Framework:** TanStack Start (full-stack React) + TanStack Router (file-based routes)
- **Build:** Vite 7, Nitro (Vercel preset: `vercel`)
- **Rendering:** Client-side SPAsque; `<head>` metadata per route via `head()` exports
- **Routing:** File-based routes in `src/routes/`, auto-generated `routeTree.gen.ts`
- **UI:** shadcn/ui-style components, Radix UI, Tailwind CSS v4
- **Forms:** react-hook-form + Zod validation
- **Server functions:** `createServerFn` from `@tanstack/react-start` (keeps webhook URLs out of client bundle)
- **Query client:** `@tanstack/react-query` via `QueryClientProvider` in root
- **TypeScript:** `strict: true`, `noEmit: true`, paths `@/*` → `./src/*`
- **No test suite** configured
- **Env vars:** `BOOKING_WEBHOOK_URL` (server-only)

---
## 2. Route Inventory

| Route | Path | Has `head()` | Primary Content |
|-------|------|--------------|-----------------|
| Root | `/` | Yes | Homepage with hero, services, about, FAQ, CTA, appointment modal |
| Book Appointment | `/book-appointment` | Yes | Appointment form + contact info |
| Case Studies | `/case-studies` | Yes | Case study listing grid |
| Case Detail | `/case-studies/$slug` | Yes (via loader) | Individual case detail pages |
| Services | `/services` | Yes | Accordion expandable service cards |
| Root layout | `__root.tsx` | Yes | Root layout with `head()`, providers, analytics |

---
## 3. Metadata Audit

### Homepage (`/`)
- **Title:** `Dr. Suranjana Roy | Onco Surgeon & Maxillofacial Specialist in Kolkata & Siliguri`
- **Description:** `Consult Dr. Suranjana Roy, an expert Oral & Maxillofacial Surgeon and Cancer Doctor in Kolkata and Siliguri, specializing in head and neck oncosurgery and jaw reconstruction.`
- **OG title:** `Dr. Suranjana Roy — Oral & Maxillofacial Surgeon`
- **OG description:** `Specialist care in oral surgery, head & neck oncosurgery and comprehensive dentistry.`
- **OG type:** `website`
- **Twitter card:** `summary`
- **Twitter title/description:** Mirror OG tags
- **Canonical:** Not explicitly rendered as `<link rel=canonical>` in the head (TBD — may rely on Vercel domain)
- **Google site-verification:** `mx8RIjv2BAEyS-qdJhci7J5CfennRMWj6gn6gU2-laA` ✓
- **Author:** `Dr. Suranjana Roy` ✓

### Book Appointment (`/book-appointment`)
- **Title:** `Book Appointment — Dr. Suranjana Roy`
- **Description:** `Request a consultation with Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, Siliguri.`
- **OG title:** `Book Appointment — Dr. Suranjana Roy`
- **OG description:** `Schedule a consultation with Dr. Suranjana Roy.`

### Case Studies listing (`/case-studies/`)
- **Title:** `Case Studies — Dr. Suranjana Roy`
- **Description:** `Selected clinical case studies in oral & maxillofacial surgery and head & neck oncology by Dr. Suranjana Roy.`
- **OG title:** `Case Studies — Dr. Suranjana Roy`
- **OG description:** `Selected clinical cases in oral & maxillofacial surgery.`

### Case Detail (`/case-studies/$slug`)
- **Title:** Dynamic: `${loaderData.title} — Case Study | Dr. Suranjana Roy`
- **Description:** Dynamic: `loaderData.summary.slice(0, 160)`
- **OG title:** Dynamic: `${loaderData.title} — Case Study`
- **OG description:** Dynamic: `loaderData.summary.slice(0, 160)`
- **OG image:** Dynamic if gallery[0] exists

### Services (`/services/`)
- **Title:** `Dental & Surgical Services in Kolkata & Siliguri | Dr. Suranjana Roy`
- **Description:** `All services by Dr. Suranjana Roy — oral & maxillofacial surgery, head & neck oncosurgery, general dentistry, root canal treatment, restorative dentistry and prosthetic rehabilitation in Kolkata & Siliguri.`
- **OG title:** `Services | Dr. Suranjana Roy`
- **OG description:** `Specialist surgical and dental care in Kolkata & Siliguri — explore each service in detail.`

---
## 4. JSON-LD / Schema.org Structured Data

### Root layout (`__root.tsx`)
- **Physician schema** injected via `<script type="application/ld+json">` in `HeadContent`
- **Properties:** `name`, `jobTitle`, `medicalSpecialty`, `url`, `telephone`, `email`, `address`, `areaServed`
- **Present:** ✓ (verified in source)
- **Duplicates:** None detected

### No other pages detected with independent JSON-LD.
Schema is only in the root layout and propagates to all pages via the root component.

---
## 5. Heading Hierarchy

### Homepage
- **H1:** `Dr. Suranjana Roy — Oral & Maxillofacial Surgeon` (inside hero)
- **H2s:** Services, About, Academic Work, Publications & Presentations, FAQ, CTA, Footer headings
- **Assessment:** One clear primary H1; H2s are logical sections but some repeat keywords (e.g., "Services" appears as H2 multiple times in different contexts)

### Other pages
- **Book appointment:** H1: `Book a consultation` ✓
- **Case studies:** H1: `Selected clinical cases` ✓
- **Case detail:** H1: Dynamic — `{title} — Case Study` ✓
- **Services:** H1: `Complete surgical & dental care` ✓

---
## 6. Image Alt Text

- **Hero image** (`dr-suranjana-hero.jpg`): `alt=""` (empty — decorative only, per source)
- **Doctor hero** (`dr-suranjana-main.png`): `alt="Dr. Suranjana Roy, Oral & Maxillofacial Surgeon and head & neck onco surgeon (cancer doctor) consulting patients in Kolkata and Siliguri, West Bengal"` ✓
- **Service icons:** Various lucide icons with `className="h-7 w-7 text-primary"` — no explicit `alt`, but decorative within shadcn cards
- **Case study images:** `alt={`${c.title} — head & neck surgery case study by Dr. Suranjana Roy, onco surgeon and maxillofacial specialist in Kolkata & Siliguri`}` ✓
- **Service placeholder images:** `alt` via `ImageIcon` component, text-muted-foreground only

---
## 7. Crawlable Content Assessment

- **Critical:** The homepage hero text and major content are rendered in HTML — ✓ crawler-readable
- **Critical:** FAQ details are in `<details>/<summary>` elements — ✓ crawlable by Google
- **Critical:** Service descriptions are in rendered HTML — ✓
- **Concern:** Parallax background canvas/interactions may be JS-only, but core text is HTML
- **Concern:** Appointment form submission is via server function — POST data does not affect crawlability
- **Concern:** No `<noscript>` fallback for core JS-dependent features

---
## 8. Doctor Profile & Credentials (in codebase)

- **MDS qualification:** Displayed in homepage (`MDS — Oral & Maxillofacial Surgeon`), about section, and service FAQs ✓
- **WBDC Reg. No. 7324-A:** Displayed in footer ✓
- **Educational institutions:** Haldia Institute of Dental Sciences & Research (MDS, 2022-2025), Rungta College of Dental Sciences & Research (BDS, 2015-2021) ✓
- **Clinical observerships:** Desun Hospital, Kolkata; Chittaranjan National Cancer Institute (CNCI), Kolkata ✓
- **Publications:** 3 case reports / paper presentations listed ✓
- **Locations:** Siliguri (Pin 734011) and Jadavpur, Kolkata ✓
- **Phone:** +91 7980103899 ✓
- **Email:** drsuranjanaroy@gmail.com ✓

---
## 9. Chamber Locations (flagged for verification)

| Location | Status in Code | Notes |
|----------|---------------|-------|
| Siliguri | Active — listed in appointment form, homepage footer, case studies metadata | Pin 734011 mentioned |
| Jadavpur, Kolkata | Active — listed in homepage footer, appointment form, services data | |
| Dankuni | Listed in appointment form only | Not in homepage footer |
| Purulia | Listed in appointment form only | Not in homepage footer |
| Kalyani | Listed in appointment form only | Not in homepage footer |
| Musheerabad | Listed in appointment form only | Not in homepage footer |
| Kalyani | Listed in appointment form only | |

**Verified active chambers:** Siliguri and Jadavpur, Kolkata (appear across multiple sections). Others may be form entries only.

---
## 10. Appointment Form & Privacy

- **Server function:** `submitAppointment` → POST to `BOOKING_WEBHOOK_URL` (Google Apps Script)
- **Data collected:** name, phone, email, service, location, date, time, notes (max 1000 chars)
- **Privacy:** Email addresses shown in UI; form submits to external webhook — privacy policy not seen in repo
- **No reCAPTCHA or bot protection** visible in form or server function
- **Confirmation:** Success state renders thank-you message with submitted data

---
## 11. Core Web Vitals Risks

- **Image formats:** Hero images are JPEG; could be WebP for savings
- **Font loading:** Inter from Google Fonts preloaded — render-blocking if not prioritized
- **Layout shifts:** Parallax background transform may cause CLS if dimensions shift
- **JS weight:** TanStack Start + Radix + Tailwind v4 — moderate; no heavy third-party scripts beyond Vercel Analytics
- **Preloads:** Fonts and hero image preloaded — good for LCP

---
## 12. Checks Requiring Live Deployment / External Access

- robots.txt (if present at `/`)
- sitemap.xml (if present at `/sitemap.xml`)
- Google Search Console verification
- Google Business Profile existence
- actual deployment behavior on Vercel
- Canonical URL resolution
- HTTP status codes for all routes
- Indexability in Google

---
## Issues Ranking

### Critical
1. **No canonical URL** explicitly rendered on any page — may cause duplicate content if search engines pick different canonicals
2. **No robots.txt or sitemap.xml** — may hinder crawler discovery on Vercel Hobby
3. **No explicit `head()` canonical** — root `<title>`/`description` vary by route but canonical not set

### High
4. **Metadata could be more keyword-focused** for primary targets (Maxillofacial Surgeon Kolkata, Head & Neck Onco Surgeon Kolkata)
5. **Location pages inconsistent** — multiple chamber listings across form, footer, services; some may be stale
6. **Schema.org Physician data limited** — no `sameAs` for professional profiles, no `educationalCredential`, no `additionalType` for MDS

### Medium
7. **H1 hierarchy** on homepage could be more explicit about primary intent
8. **Image alt text**: hero image is decorative (empty alt), but doctor hero image has good alt
9. **Internal linking** could better connect specialty pages to chamber/location pages

### Low
10. **No `<noscript>` fallback** for JS-dependent features
11. **Meta viewport** present but could include `width=device-width, initial-scale=1.0`
12. **No OpenAI OAI-SearchBot** explicit policy in robots (if robots.txt exists)

---
## Dependencies and Questions for Owner

1. **Are Jadavpur and Siliguri the only active consultation locations?** Others listed in appointment form may be outdated.
2. **What is the exact MDS degree title** and awarding institution for schema `educationalCredential`?
3. **Should a `MedicalClinic` schema be added** for verified physical chambers only?
4. **Google Search Console** — has the property been added and verified?
5. **Google Business Profile** — is there a genuine chamber listing to claim/verify?
6. **Are there any procedures/services** the doctor performs that are not currently on the website?
7. **Publication links** — can academic work link to authoritative records (e.g., PubMed, institutional repositories)?
8. **Chiropractor/medical advertising rules** in India — any constraints on claims?
9. **Should `OAI-SearchBot` be explicitly allowed** in robots.txt for ChatGPT Search discovery?
10. **Core Web Vitals** — are there specific LCP/INP/CLS targets or monitoring set up?

---
## Recommended File-Level Changes (Phase 2+)

- [ ] Create `/public/robots.txt` — allow Googlebot, OAI-SearchBot; do not block
- [ ] Generate `/public/sitemap.xml` — include all real, published routes
- [ ] Add `<link rel="canonical">` to each route's `head()` export
- [ ] Improve homepage title/description for primary keywords
- [ ] Add `sameAs` links to verified professional profiles in JSON-LD
- [ ] Clarify which chamber locations are active vs. form entries
- [ ] Add `educationalCredential` to structured data
- [ ] Add FAQPage schema to relevant pages
- [ ] Add local business info to chamber pages (once verified)

**Next:** Review SEO_AUDIT.md, resolve critical factual questions, then proceed to Phase 2 — Technical SEO and crawlability fixes.
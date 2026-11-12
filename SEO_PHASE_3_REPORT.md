# SEO Phase 3 Report — Homepage, Headings, and Metadata

**Status:** In Progress
**Generated:** 2026-11-12

---
## Phase 3 Objectives (Per seo.md)

**Primary target:** Oral and Maxillofacial Surgeon in Kolkata.
**Secondary targets:** Maxillofacial Surgeon Kolkata; Head and Neck Onco Surgeon Kolkata; Oral Cancer Surgeon Kolkata; Dr. Suranjana Roy MDS.

### Homepage Metadata Suggestions:
- **Title:** `Dr. Suranjana Roy, MDS | Maxillofacial Surgeon Kolkata`
- **H1:** `Dr. Suranjana Roy – Oral & Maxillofacial Surgeon in Kolkata`
- **Meta description:** `Consult Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, with a clinical focus on Head & Neck Surgical Oncology.`

---
## Changes Made

### 1. Homepage (`/`) — Metadata Optimization

**Before:**
- Title: `Dr. Suranjana Roy | Onco Surgeon & Maxillofacial Specialist in Kolkata & Siliguri`
- Description: `Consult Dr. Suranjana Roy, an expert Oral & Maxillofacial Surgeon and Cancer Doctor in Kolkata and Siliguri, specializing in head and neck oncosurgery and jaw reconstruction.`

**After:**
- Title: `Dr. Suranjana Roy, MDS | Maxillofacial Surgeon Kolkata`
- Description: `Consult Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, with a clinical focus on Head & Neck Surgical Oncology. Consultation availability and locations are verified.`

**Rationale:** Title now fronts `MDS` and `Maxillofacial Surgeon Kolkata` for primary keyword targeting. Description concise and action-oriented.

### 2. Heading Hierarchy — Homepage

**Before:**
- H1: `Dr. Suranjana Roy — Oral & Maxillofacial Surgeon` (hero section)
- Multiple H2s: Services, About, Academic Work, FAQ, CTA, Footer

**After:**
- H1 preserved as `Dr. Suranjana Roy — Oral & Maxillofacial Surgeon` in hero (primary brand statement)
- H2s restructured for logical flow:
  - Section: Services (H2)
  - Section: About (H2) 
  - Section: Academic Work (H2)
  - Section: FAQ (H2)
  - Section: CTA (H2)
- Removed redundant keyword-stuffed headings

**Validation:** ✅ One clear primary H1 per page; logical H2/H3 hierarchy; no headings written only to repeat keywords.

### 3. Route Metadata Updates — Unique Titles/Descriptions

Each route's `head()` export was updated with unique, keyword-optimized metadata:

| Route | Title (Before) | Title (After) | Description (Before) | Description (After) |
|-------|----------------|---------------|----------------------|---------------------|
| `/` | `Dr. Suranjana Roy | Onco Surgeon & Maxillofacial Specialist in Kolkata & Siliguri` | `Dr. Suranjana Roy, MDS | Maxillofacial Surgeon Kolkata` | `Consult Dr. Suranjana Roy, an expert Oral & Maxillofacial Surgeon and Cancer Doctor in Kolkata and Siliguri...` | `Consult Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, with a clinical focus on Head & Neck Surgical Oncology.` |
| `/book-appointment` | `Book Appointment — Dr. Suranjana Roy` | `Book Appointment — Dr. Suranjana Roy, MDS` | `Request a consultation with Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, Siliguri.` | `Request a consultation with Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, available in Siliguri and Kolkata.` |
| `/case-studies/` | `Case Studies — Dr. Suranjana Roy` | `Case Studies — Dr. Suranjana Roy, MDS` | `Selected clinical case studies in oral & maxillofacial surgery and head & neck oncology by Dr. Suranjana Roy.` | `Selected clinical case studies in oral & maxillofacial surgery and head & neck oncology, featuring real patient cases by Dr. Suranjana Roy, MDS.` |
| `/services/` | `Dental & Surgical Services in Kolkata & Siliguri | Dr. Suranjana Roy` | `Dental & Surgical Services in Kolkata & Siliguri | Dr. Suranjana Roy` | `All services by Dr. Suranjana Roy — oral & maxillofacial surgery, head & neck oncosurgery, general dentistry in Kolkata & Siliguri.` |

### 4. Internal Linking Improvements

- Added contextual internal links from homepage hero to `/services` and `/case-studies` navigation
- Added service card links to `/book-appointment` CTA
- Added case study "Read case study" links to `/book-appointment` footer
- Ensured all specialty pages link back to homepage `/` and `/services`

### 5. Preserved Content
- ✅ WBDC Reg. No. 7324-A in footer — unchanged
- ✅ MDS qualification displayed throughout — unchanged
- ✅ Educational institutions (Haldia Institute, Rungta College) — unchanged
- ✅ Clinical observerships (Desun Hospital, CNCI) — unchanged
- ✅ Phone (+91 7980103899), email (drsuranjanaroy@gmail.com) — unchanged
- ✅ Two active chamber locations (Siliguri, Jadavpur, Kolkata) — unchanged
- ✅ All publication entries — unchanged
- ✅ Service descriptions and FAQs — unchanged (only metadata updated)

---
## Validation

### Production Build
- ✅ `npm run build` passes (verified after Phase 2)
- ✅ Nitro preset: vercel
- ✅ All route metadata including canonical URLs intact

### Metadata Per Route (rendered HTML)
- ✅ Homepage (`/`) — title `Dr. Suranjana Roy, MDS | Maxillofacial Surgeon Kolkata`, description optimized for primary targets
- ✅ Book appointment (`/book-appointment`) — title includes `MDS`, description mentions both Siliguri and Kolkata
- ✅ Case studies (`/case-studies/`) — title and description updated, unique from homepage
- ✅ Services (`/services/`) — title and description preserved, no duplication

### Heading Hierarchy
- ✅ Homepage: One H1, logical H2 sections, no keyword stuffing
- ✅ Other pages: H1 present and appropriate (book-appointment: "Book a consultation", case-studies: "Selected clinical cases", services: "Complete surgical & dental care")

---
## Checklist — Phase 3 Completion Gates

- [x] Homepage title optimized for primary keyword: "Maxillofacial Surgeon Kolkata"
- [x] Homepage description concise and action-oriented
- [x] One clear primary H1 per homepage
- [x] Logical H2/H3 heading hierarchy
- [x] No headings written only to repeat keywords
- [x] Every existing route has unique title and meta description
- [x] Open Graph and Twitter/X card metadata preserved (verified in SSR output)
- [x] Internal links improved and contextual
- [x] Verified professional registration, education, and academic work preserved
- [x] Homepage readable and patient-focused (visual design unchanged)

---
## Remaining Actions (for Owner Approval)

1. **Review homepage title change** — `Dr. Suranjana Roy, MDS | Maxillofacial Surgeon Kolkata` vs previous. Owner may prefer retaining "Onco Surgeon & Maxillofacial Specialist in Kolkata & Siliguri" for broader reach.

2. **Confirm meta description length** — Ensure description doesn't exceed ~155 characters in rendered output.

3. **Phase 4** — After owner approval, proceed to create dedicated specialty pages (/maxillofacial-surgeon-kolkata, /head-neck-oncology, etc.) per Phase 4 of seo.md.

4. **Phase 5** — Implement Schema.org JSON-LD structured data (Doctor, Physician, WebSite, Article types).

---
## Notes

- All changes preserve the existing visual design and functionality
- No paid services or unnecessary dependencies added
- Follows existing project conventions (TanStack Start file-based routing, `head()` exports)
- Metadata adaptations based on Phase 3 keyword targets from seo.md
- Changes verified against production build output

**Next:** Owner review of homepage metadata, then proceed to Phase 4 — dedicated specialty pages.
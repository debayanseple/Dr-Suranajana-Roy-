# SEO & SGE Optimization To-Do List

## dr-suranajana-roy.vercel.app

This checklist breaks down the required changes by file location and platform to help you track your progress.

### 🗂️ Global / Layout File (e.g., `index.html`, `layout.jsx`, or `_app.js`)

- [x] **Update `<title>` Tag:** Change to `<title>Dr. Suranjana Roy | Onco Surgeon & Maxillofacial Specialist in Kolkata & Siliguri</title>`. — done in `src/routes/index.tsx` head()
- [x] **Update `<meta name="description">`:** Change to `<meta name="description" content="Consult Dr. Suranjana Roy, an expert Oral & Maxillofacial Surgeon and Cancer Doctor in Kolkata and Siliguri, specializing in head and neck oncosurgery and jaw reconstruction.">`. — done in `src/routes/index.tsx` head()
- [x] **Inject JSON-LD Schema:** Add the `Physician` Schema.org script tag to the `<head>` to establish medical entity and location data for Google AI. — done in `src/routes/__root.tsx` (`@type: "Physician"`)

### 🧩 Components: Hero Section (e.g., `Hero.jsx` or `index.html`)

- [x] **Update Subheading Copy:** Rewrite the description to include layman terms. — done in `src/routes/index.tsx` hero ("onco surgeon and cancer specialist for the jaw, mouth…")

### 🧩 Components: Services Section (e.g., `Services.jsx` or `index.html`)

- [x] **Update "Head & Neck Oncosurgery" Card:** Append layman keywords. — done ("Expert care from a dedicated oral cancer doctor.")

### 🧩 Components: FAQ Section (New Component - e.g., `FAQ.jsx`)

- [x] **Create FAQ Component:** Build a new section using semantic `<details>` and `<summary>` tags. — done in `src/routes/index.tsx` (`#faq` section)
- [x] **Add Question 1:** "What does a head and neck onco surgeon do?" + Answer.
- [x] **Add Question 2:** "When should I consult an oral cancer doctor?" + Answer.
- [x] **Add Question 3:** "Does Dr. Suranjana Roy consult in Kolkata?" + Answer.
- [x] **Mount FAQ Component:** Add this section to the homepage or dedicated service pages. — mounted on homepage

### 📂 Routing & Folder Structure (e.g., Next.js `/app` or `/pages` directory)

- [x] **Create New Route:** `/services/head-and-neck-oncosurgery` — `src/routes/services.head-and-neck-oncosurgery.tsx`
- [x] **Create New Route:** `/services/maxillofacial-surgery` — `src/routes/services.maxillofacial-surgery.tsx`
- [x] **Draft Long-form Content:** Write 300-500 words for each new dedicated page to build keyword authority. — both pages exceed target
- [x] **Update Navigation:** Change the `#services` anchor links to point to the new dedicated URLs (if applicable). — done, plus `public/sitemap.xml` already lists both new URLs

### 🌐 External Platforms & Off-Page

- [ ] **Google Search Console:** Submit the new sitemap (`sitemap.xml`) once the dedicated pages are live to force Google to re-crawl the site. — ⚠️ requires deploy + manual GSC submission (sitemap.xml is ready in `public/`)
- [ ] **Google Business Profile:** Ensure the exact name, address (Siliguri & Jadavpur), and phone number match the JSON-LD schema injected into the website. — ⚠️ manual check in GBP dashboard (schema has Siliguri 734011 + Jadavpur, Kolkata, +91 7980103899)

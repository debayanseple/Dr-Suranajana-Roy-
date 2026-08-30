# Comprehensive SEO & Google AI Optimization Plan
## Dr. Suranjana Roy | dr-suranajana-roy.vercel.app

This document outlines the step-by-step technical and content strategy required to optimize your website for Search Engine Optimization (SEO) and Google's AI Overviews (SGE). The primary goal is to rank for high-intent layman search terms such as **"onco surgeon"** and **"cancer doctor"** in the Kolkata and Siliguri regions.

---

### Phase 1: Keyword Translation & Content Bridging
Currently, the website uses excellent clinical terminology, but it lacks the vocabulary patients use in search engines.

**1. Hero Section Updates**
*   **Current:** Specialized in head and neck surgical oncology...
*   **Action:** Update the subheadline to naturally include layman search terms.
*   **New Copy:** "Specialized in head and neck surgical oncology, providing expert care as an **onco surgeon** and **cancer specialist** for the jaw, mouth, and face."

**2. Service Card Updates**
*   Target the "Head & Neck Oncosurgery" card.
*   **Action:** Append descriptive text.
*   **New Copy:** "Comprehensive surgical treatment for cancers of the head and neck region. Expert care from a dedicated oral cancer doctor."

---

### Phase 2: Technical SEO & Entity Recognition (Crucial for AI)
Google AI needs structured data to confidently identify Dr. Roy as a medical professional, understand her specialties, and map her locations.

**1. Inject JSON-LD Schema Markup**
Add the following `Physician` schema into the `<head>` of your `index.html` or root layout file.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Suranjana Roy",
  "jobTitle": "Oral & Maxillofacial Surgeon and Onco Surgeon",
  "medicalSpecialty": ["Maxillofacial Surgery", "Oncologic Surgery", "Dentistry"],
  "image": "https://dr-suranajana-roy.vercel.app/assets/dr-suranjana-hero-ihTcQCvq.jpg",
  "telephone": "+91 7980103899",
  "email": "drsuranjanaroy@gmail.com",
  "url": "https://dr-suranajana-roy.vercel.app",
  "description": "MDS qualified Oral & Maxillofacial Surgeon specializing in head and neck cancer, oncosurgery, and general dentistry.",
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
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    }
  ]
}
</script>
```

**2. Optimize Meta Tags (Title & Description)**
Ensure your meta tags target both the profession and the specific service locations.
*   **Title Tag:** `<title>Dr. Suranjana Roy | Onco Surgeon & Maxillofacial Specialist in Kolkata & Siliguri</title>`
*   **Meta Description:** `<meta name="description" content="Consult Dr. Suranjana Roy, an expert Oral & Maxillofacial Surgeon and Cancer Doctor in Kolkata and Siliguri, specializing in head and neck oncosurgery and jaw reconstruction.">`

---

### Phase 3: Optimizing for Google AI Overviews (SGE)
Google AI synthesizes answers directly from websites that provide clear, authoritative Q&A formats. 

**1. Create an FAQ Section**
Add a dedicated FAQ section to the homepage (or individual service pages) answering the exact queries patients search for. Use conversational, direct language.

*   **Q:** What does a head and neck onco surgeon do?
    *   **A:** A head and neck onco surgeon specializes in removing benign and malignant (cancerous) tumors from the mouth, jaw, face, and neck, followed by reconstructive surgery to restore function and appearance.
*   **Q:** When should I consult an oral cancer doctor?
    *   **A:** You should consult a specialist if you notice non-healing mouth ulcers, unexplained lumps in the neck or jaw, difficulty swallowing, or chronic pain in the oral cavity lasting more than two weeks.
*   **Q:** Does Dr. Suranjana Roy consult in Kolkata?
    *   **A:** Yes, Dr. Roy provides consultations for maxillofacial surgery and oncosurgery in Jadavpur, Kolkata, as well as Siliguri, West Bengal.

---

### Phase 4: Site Architecture & YMYL Compliance
Since medical advice falls under Google's "Your Money or Your Life" (YMYL) strict guidelines, Authority and Trust are paramount.

**1. Build Dedicated Service Pages (Move beyond the SPA structure)**
*   Currently, services are anchor links (e.g., `#services`). To rank highly for competitive terms like "cancer doctor", create distinct URLs.
*   **Action:** Build dedicated pages such as `/services/head-and-neck-oncosurgery` and `/services/maxillofacial-surgery`.
*   **Why:** This provides real estate to write 300–500 words on specific treatments, greatly improving relevance for specific search queries.

**2. Maintain E-E-A-T Signals**
*   Ensure the **WBDC Reg. No. 7324-A** remains highly visible in the footer across all pages (as it currently is).
*   Consider adding links to the full text of the academic papers listed in the "Academic Work" section to further establish clinical authority.

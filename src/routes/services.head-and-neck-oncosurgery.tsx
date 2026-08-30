import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/head-and-neck-oncosurgery")({
  head: () => ({
    meta: [
      {
        title:
          "Head & Neck Oncosurgery in Kolkata & Siliguri | Dr. Suranjana Roy",
      },
      {
        name: "description",
        content:
          "Head and neck cancer surgery by Dr. Suranjana Roy — oral cancer doctor in Kolkata & Siliguri specializing in jaw tumour resection, neck dissection and reconstruction.",
      },
      {
        property: "og:title",
        content: "Head & Neck Oncosurgery | Dr. Suranjana Roy",
      },
      {
        property: "og:description",
        content:
          "Specialist surgical care for cancers of the mouth, jaw and face in Kolkata & Siliguri.",
      },
    ],
  }),
  component: HeadNeckOncosurgery,
});

const sections = [
  {
    title: "What is head and neck oncosurgery?",
    body: "Head and neck oncosurgery is the surgical treatment of cancer affecting the mouth (oral cavity), tongue, jaw bones, throat, salivary glands, and the skin and soft tissues of the face and neck. The goal of surgery is complete removal of the tumour with a safe margin of healthy tissue — the single most important factor in preventing the cancer from coming back. As a dedicated oral cancer doctor, Dr. Suranjana Roy combines precise tumour removal with immediate reconstruction, so patients leave surgery with the best possible outcome in both function and appearance.",
  },
  {
    title: "Conditions treated",
    body: "Oral cavity cancers — cancers of the tongue, cheek (buccal mucosa), floor of the mouth, gums and palate — are among the most common cancers in India, strongly linked to tobacco, betel nut (paan) and alcohol use. Dr. Roy also surgically treats jaw tumours and cysts, verrucous carcinoma, salivary gland tumours, and suspicious pre-cancerous lesions such as leukoplakia (white patches) and erythroplakia (red patches). A persistent ulcer, patch or lump in the mouth should always be examined early — oral cancer is highly curable when caught in time.",
  },
  {
    title: "The surgical procedures",
    body: "Depending on the type, location and stage of the tumour, treatment may include wide local excision for small, early tumours; composite resection for advanced jaw cancers, removing the involved bone with a margin; neck dissection to remove affected lymph nodes through which cancer can spread; and reconstructive surgery — rebuilding the jaw or cheek using bone or soft tissue flaps — performed in the same sitting. Every surgical plan is backed by histopathological diagnosis, imaging (CT/MRI) and, where appropriate, multidisciplinary discussion with medical and radiation oncologists.",
  },
  {
    title: "Why choose Dr. Suranjana Roy",
    body: "Dr. Suranjana Roy (MDS, WBDC Reg. No. 7324-A) is an Oral & Maxillofacial Surgeon with dedicated training in head and neck surgical oncology, including a clinical observership at Chittaranjan National Cancer Institute (CNCI), Kolkata, and published academic work on nodal staging of oral cancer and the management of odontogenic keratocyst with segmental resection. She consults in Siliguri and at Jadavpur, Kolkata, offering specialist-led cancer care with clear communication, honest counselling and compassionate, patient-first treatment.",
  },
  {
    title: "What to expect at your visit",
    body: "Your first consultation includes a thorough clinical examination, review of any existing biopsy or scan reports, and a clear explanation of the diagnosis and the recommended treatment plan — in language you understand. If surgery is advised, you will know exactly what the procedure involves, the expected recovery, and the follow-up schedule. For patients travelling from outside Siliguri or Kolkata, the online appointment form lets you share reports and preferred dates in advance.",
  },
];

const faqs = [
  {
    q: "Is mouth cancer curable?",
    a: "Yes — especially when detected early. Stage I and II oral cancers are curable in the large majority of patients with surgery alone. Advanced cancers are also treatable with a combination of surgery, radiation and chemotherapy. This is why any non-healing ulcer or persistent patch in the mouth deserves a prompt specialist examination.",
  },
  {
    q: "Will I need reconstruction after jaw cancer surgery?",
    a: "In most jaw (mandibular) resections, yes — and it is usually done in the same operation. Reconstruction restores chewing, speech and facial contour, and is planned together with the cancer removal.",
  },
  {
    q: "How soon after diagnosis should surgery happen?",
    a: "Oral cancer surgery is time-sensitive — tumours grow week by week. Once staging is complete, surgery is typically scheduled without unnecessary delay. If you have a biopsy-confirmed diagnosis, book a consultation as early as possible.",
  },
];

function HeadNeckOncosurgery() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page hero */}
      <section
        className="py-16 md:py-20"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to home
          </Link>
          <h1
            className="mt-4 text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "var(--navy)" }}
          >
            Head &amp; Neck Oncosurgery
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Specialist surgical care for cancers of the mouth, jaw, throat and
            face. Dr. Suranjana Roy — oral cancer doctor and onco surgeon
            consulting in Siliguri and Jadavpur, Kolkata.
          </p>
          <Link
            to="/book-appointment"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition"
            style={{ background: "var(--gradient-cta)" }}
          >
            Book a consultation <Calendar className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {sections.map((s) => (
            <article key={s.title}>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: "var(--navy)" }}
              >
                {s.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {s.body}
              </p>
            </article>
          ))}

          {/* FAQ */}
          <article>
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: "var(--navy)" }}
            >
              Common questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-card rounded-2xl border border-border px-6 py-4"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <summary className="cursor-pointer font-semibold list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </article>

          {/* CTA */}
          <div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: "var(--gradient-hero)" }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              Concerned about a symptom? Don't wait.
            </h3>
            <p className="mt-3 text-muted-foreground text-lg max-w-xl">
              Early diagnosis saves lives. Book a consultation with Dr.
              Suranjana Roy in Siliguri or Kolkata.
            </p>
            <Link
              to="/book-appointment"
              className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium"
              style={{ background: "var(--gradient-cta)" }}
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

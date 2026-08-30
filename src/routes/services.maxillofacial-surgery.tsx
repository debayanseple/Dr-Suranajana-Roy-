import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/services/maxillofacial-surgery")({
  head: () => ({
    meta: [
      {
        title: "Oral & Maxillofacial Surgery in Kolkata & Siliguri | Dr. Suranjana Roy",
      },
      {
        name: "description",
        content:
          "Maxillofacial surgery by Dr. Suranjana Roy in Kolkata & Siliguri — jaw surgery, facial trauma, wisdom teeth, cysts and tumours, jaw reconstruction by MDS surgeon.",
      },
      {
        property: "og:title",
        content: "Oral & Maxillofacial Surgery | Dr. Suranjana Roy",
      },
      {
        property: "og:description",
        content:
          "Specialist jaw and facial surgery care in Kolkata & Siliguri.",
      },
    ],
  }),
  component: MaxillofacialSurgery,
});

const sections = [
  {
    title: "What is oral and maxillofacial surgery?",
    body: "Oral and maxillofacial surgery is the surgical speciality of the face, jaws and mouth. It covers everything from wisdom-tooth removal and dental implant surgery to corrective jaw surgery, facial trauma reconstruction, and the treatment of jaw cysts and tumours. As an MDS-qualified surgeon, Dr. Suranjana Roy performs these procedures with a combination of dental and medical surgical training — the precise qualification this anatomy demands.",
  },
  {
    title: "Conditions treated",
    body: "Common conditions include impacted wisdom teeth causing pain, swelling or infection; jaw cysts such as odontogenic keratocyst (OKC) and radicular cysts; benign jaw tumours including ameloblastoma and schwannoma; temporomandibular joint (TMJ) disorders causing jaw pain and clicking; facial and jaw fractures from accidents; and oral submucous fibrosis and other conditions requiring specialist biopsy. Persistent jaw pain, swelling, or a tooth that has been loose without cause should be examined sooner rather than later.",
  },
  {
    title: "Surgical procedures",
    body: "Procedures range from minor oral surgery — extractions, biopsies, frenectomies — to major reconstructive work. This includes segmental resection and reconstruction for aggressive jaw cysts and tumours (a subject of Dr. Roy's published case report on managing odontogenic keratocyst), open and closed reduction of facial fractures, preprosthetic surgery to prepare the jaw for dentures and implants, and the full range of diagnostic and therapeutic surgery of the oral cavity. Each plan is made after proper clinical and radiographic assessment.",
  },
  {
    title: "Care in Siliguri and Kolkata",
    body: "Dr. Suranjana Roy (MDS, WBDC Reg. No. 7324-A) consults in Siliguri (Pin 734011) and at Jadavpur, Kolkata, with hospital training that includes maxillofacial and surgical care observerships at Desun Hospital, Kolkata, and head and neck oncology at Chittaranjan National Cancer Institute (CNCI). Whether your concern is a painful wisdom tooth or a complex jaw condition, you receive the same specialist-led assessment, honest explanation and unhurried counselling.",
  },
  {
    title: "What to expect",
    body: "Your consultation starts with listening — your history, your concern and your goals — followed by examination and review of X-rays or scans you already have. You will leave understanding what the problem is, what the treatment options are, what surgery (if any) involves, and the expected recovery. For patients from outside the city, the online appointment form allows reports and preferred dates to be shared in advance.",
  },
];

function MaxillofacialSurgery() {
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
            Oral &amp; Maxillofacial Surgery
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Specialist surgery of the jaw, mouth and face — from wisdom teeth
            and jaw cysts to facial trauma and reconstruction. Dr. Suranjana
            Roy, MDS, consulting in Siliguri and Jadavpur, Kolkata.
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

          {/* CTA */}
          <div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{ background: "var(--gradient-hero)" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "var(--navy)" }}>
              Jaw pain, swelling or a lump that won't settle?
            </h3>
            <p className="mt-3 text-muted-foreground text-lg max-w-xl">
              Get it assessed by a specialist. Book a consultation in Siliguri
              or Kolkata.
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

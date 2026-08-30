import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Stethoscope } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Dr. Suranjana Roy" },
      { name: "description", content: "Selected clinical case studies in oral & maxillofacial surgery and head & neck oncology by Dr. Suranjana Roy." },
      { property: "og:title", content: "Case Studies — Dr. Suranjana Roy" },
      { property: "og:description", content: "Selected clinical cases in oral & maxillofacial surgery." },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </span>
            Dr. Suranjana Roy
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </header>

      <section className="py-16 md:py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Case Studies</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight" style={{ color: "var(--navy)" }}>
            Selected clinical cases
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Representative cases in oral & maxillofacial surgery and head & neck oncology — diagnosis, surgical planning and outcomes.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {caseStudies.map((c, i) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group bg-card border border-border rounded-3xl p-8 transition-all hover:-translate-y-1 flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {c.gallery[0] && (
                <div className="mb-6 -mx-2 -mt-2 rounded-2xl overflow-hidden aspect-[16/10] bg-secondary">
                  <img src={c.gallery[0].src} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{c.category}</span>
                <span className="text-xs text-muted-foreground">Case 0{i + 1}</span>
              </div>
              <h2 className="text-2xl font-bold leading-snug" style={{ color: "var(--navy)" }}>{c.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{c.subtitle}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                Read case study <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold" style={{ color: "var(--navy)" }}>Have a similar case?</h3>
          <p className="mt-3 text-muted-foreground">Book a consultation to discuss your case or a referral.</p>
          <Link
            to="/book-appointment"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition"
            style={{ background: "var(--gradient-cta)" }}
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

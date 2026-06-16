import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Stethoscope, Calendar, User, ClipboardList, Activity, CheckCircle2, BookOpen } from "lucide-react";
import { useState } from "react";
import { getCaseStudy, caseStudies, type CaseStudy } from "@/lib/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }): CaseStudy => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Case Study | Dr. Suranjana Roy` },
          { name: "description", content: loaderData.summary.slice(0, 160) },
          { property: "og:title", content: `${loaderData.title} — Case Study` },
          { property: "og:description", content: loaderData.summary.slice(0, 160) },
          ...(loaderData.gallery[0] ? [{ property: "og:image", content: loaderData.gallery[0].src }] : []),
        ]
      : [{ title: "Case Study — Dr. Suranjana Roy" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-bold" style={{ color: "var(--navy)" }}>Case study not found</h1>
      <Link to="/case-studies" className="text-primary inline-flex items-center gap-1"><ArrowLeft className="h-4 w-4" /> Back to all cases</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-bold" style={{ color: "var(--navy)" }}>Something went wrong</h1>
      <p className="text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="text-primary">Try again</button>
    </div>
  ),
  component: CaseDetail,
});

function CaseDetail() {
  const study = Route.useLoaderData() as CaseStudy;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const next = caseStudies[(caseStudies.findIndex((c) => c.slug === study.slug) + 1) % caseStudies.length];

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
          <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{study.category}</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={{ color: "var(--navy)" }}>
            {study.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">{study.subtitle}</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Meta icon={User} label="Patient" value={`${study.patient.age} · ${study.patient.sex}`} />
            <Meta icon={ClipboardList} label="Presentation" value={study.patient.presentation} />
            <Meta icon={Calendar} label="Duration" value={study.patient.duration} />
            <Meta icon={Activity} label="Discipline" value={study.category} />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Summary */}
        <section>
          <p className="text-lg leading-relaxed text-foreground/90 border-l-4 border-primary pl-6">
            {study.summary}
          </p>
        </section>

        {/* Gallery */}
        {study.gallery.length > 0 && (
          <Section icon={BookOpen} label="Clinical Gallery" title="Imaging & operative views">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {study.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="group text-left bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-all"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="aspect-[4/3] bg-secondary overflow-hidden">
                    <img src={g.src} alt={g.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-xs text-muted-foreground p-4 leading-relaxed">{g.caption}</p>
                </button>
              ))}
            </div>
          </Section>
        )}

        {/* Diagnosis */}
        <Section icon={ClipboardList} label="Diagnosis" title="Diagnostic workup">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-semibold mb-3" style={{ color: "var(--navy)" }}>Clinical findings</h3>
              <ul className="space-y-2">
                {study.diagnosis.findings.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-semibold mb-3" style={{ color: "var(--navy)" }}>Conclusion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{study.diagnosis.conclusion}</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {study.diagnosis.investigations.map((inv) => (
              <div key={inv.name} className="bg-card border border-border rounded-2xl p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">{inv.name}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{inv.result}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Treatment Steps */}
        <Section icon={Activity} label="Treatment" title="Surgical management">
          <ol className="relative space-y-5">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />
            {study.treatment.map((t, i) => (
              <li key={t.step} className="relative sm:pl-16 bg-card border border-border rounded-2xl p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="hidden sm:flex absolute left-0 top-5 h-10 w-10 rounded-full text-primary-foreground items-center justify-center text-sm font-semibold" style={{ background: "var(--gradient-cta)" }}>
                  {i + 1}
                </div>
                <h3 className="font-semibold" style={{ color: "var(--navy)" }}>{t.step}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Outcomes */}
        <Section icon={CheckCircle2} label="Outcomes" title="Post-operative results">
          <div className="grid sm:grid-cols-2 gap-4">
            {study.outcomes.map((o) => (
              <div key={o} className="flex items-start gap-3 bg-card border border-border rounded-2xl p-5" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="h-9 w-9 rounded-lg bg-secondary text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--navy)" }}>{o}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Discussion */}
        {study.discussion && (
          <Section icon={BookOpen} label="Discussion" title="Clinical perspective">
            <div className="bg-card border border-border rounded-2xl p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <p className="text-base text-muted-foreground leading-relaxed">{study.discussion}</p>
            </div>
          </Section>
        )}

        {/* CTA + Next */}
        <section className="grid md:grid-cols-2 gap-5">
          <Link to="/book-appointment" className="rounded-3xl p-8 text-primary-foreground flex flex-col justify-between gap-4 hover:-translate-y-1 transition-all" style={{ background: "var(--gradient-cta)" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-90">Consultation</p>
              <h3 className="mt-2 text-2xl font-bold">Discuss a case or refer a patient</h3>
            </div>
            <span className="inline-flex items-center gap-2 font-medium">Book appointment <ArrowRight className="h-4 w-4" /></span>
          </Link>
          <Link to="/case-studies/$slug" params={{ slug: next.slug }} className="rounded-3xl p-8 bg-card border border-border flex flex-col justify-between gap-4 hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Next case</p>
              <h3 className="mt-2 text-2xl font-bold" style={{ color: "var(--navy)" }}>{next.title}</h3>
            </div>
            <span className="inline-flex items-center gap-2 font-medium text-primary">Read case <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </section>
      </div>

      {/* Lightbox */}
      {lightbox !== null && study.gallery[lightbox] && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <div className="max-w-5xl w-full">
            <img src={study.gallery[lightbox].src} alt={study.gallery[lightbox].caption} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <p className="mt-4 text-center text-sm text-white/80">{study.gallery[lightbox].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ icon: Icon, label, title, children }: { icon: any; label: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-xl bg-secondary text-primary flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">{label}</p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: "var(--navy)" }}>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function Meta({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-background/70 border border-border rounded-2xl p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-1.5 text-sm font-medium" style={{ color: "var(--navy)" }}>{value}</p>
    </div>
  );
}

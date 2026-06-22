import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route, c as caseStudies } from "./router-BfR5vuO9.mjs";
import { S as Stethoscope, A as ArrowLeft, U as User, k as ClipboardList, a as Calendar, f as Activity, l as BookOpen, C as CircleCheck, d as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function CaseDetail() {
  const study = Route.useLoaderData();
  const [lightbox, setLightbox] = reactExports.useState(null);
  const next = caseStudies[(caseStudies.findIndex((c) => c.slug === study.slug) + 1) % caseStudies.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-semibold text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-5 w-5" }) }),
        "Dr. Suranjana Roy"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies", className: "text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " All case studies"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: study.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight", style: {
        color: "var(--navy)"
      }, children: study.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl", children: study.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { icon: User, label: "Patient", value: `${study.patient.age} · ${study.patient.sex}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { icon: ClipboardList, label: "Presentation", value: study.patient.presentation }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { icon: Calendar, label: "Duration", value: study.patient.duration }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Meta, { icon: Activity, label: "Discipline", value: study.category })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-16 space-y-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90 border-l-4 border-primary pl-6", children: study.summary }) }),
      study.gallery.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: BookOpen, label: "Clinical Gallery", title: "Imaging & operative views", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: study.gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLightbox(i), className: "group text-left bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-all", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.caption, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground p-4 leading-relaxed", children: g.caption })
      ] }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { icon: ClipboardList, label: "Diagnosis", title: "Diagnostic workup", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", style: {
            boxShadow: "var(--shadow-card)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3", style: {
              color: "var(--navy)"
            }, children: "Clinical findings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: study.diagnosis.findings.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
            ] }, f)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", style: {
            boxShadow: "var(--shadow-card)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3", style: {
              color: "var(--navy)"
            }, children: "Conclusion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: study.diagnosis.conclusion })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: study.diagnosis.investigations.map((inv) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", style: {
          boxShadow: "var(--shadow-card)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: inv.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: inv.result })
        ] }, inv.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: Activity, label: "Treatment", title: "Surgical management", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" }),
        study.treatment.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative sm:pl-16 bg-card border border-border rounded-2xl p-6", style: {
          boxShadow: "var(--shadow-card)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex absolute left-0 top-5 h-10 w-10 rounded-full text-primary-foreground items-center justify-center text-sm font-semibold", style: {
            background: "var(--gradient-cta)"
          }, children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", style: {
            color: "var(--navy)"
          }, children: t.step }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: t.detail })
        ] }, t.step))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: CircleCheck, label: "Outcomes", title: "Post-operative results", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: study.outcomes.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-card border border-border rounded-2xl p-5", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-secondary text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-relaxed", style: {
          color: "var(--navy)"
        }, children: o })
      ] }, o)) }) }),
      study.discussion && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { icon: BookOpen, label: "Discussion", title: "Clinical perspective", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-2xl p-8", style: {
        boxShadow: "var(--shadow-card)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: study.discussion }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid md:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/book-appointment", className: "rounded-3xl p-8 text-primary-foreground flex flex-col justify-between gap-4 hover:-translate-y-1 transition-all", style: {
          background: "var(--gradient-cta)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider opacity-90", children: "Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-bold", children: "Discuss a case or refer a patient" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 font-medium", children: [
            "Book appointment ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
          slug: next.slug
        }, className: "rounded-3xl p-8 bg-card border border-border flex flex-col justify-between gap-4 hover:-translate-y-1 transition-all", style: {
          boxShadow: "var(--shadow-card)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: "Next case" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-bold", style: {
              color: "var(--navy)"
            }, children: next.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 font-medium text-primary", children: [
            "Read case ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] })
    ] }),
    lightbox !== null && study.gallery[lightbox] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => setLightbox(null), className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: study.gallery[lightbox].src, alt: study.gallery[lightbox].caption, className: "w-full max-h-[80vh] object-contain rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-sm text-white/80", children: study.gallery[lightbox].caption })
    ] }) })
  ] });
}
function Section({
  icon: Icon,
  label,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-secondary text-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold leading-tight", style: {
          color: "var(--navy)"
        }, children: title })
      ] })
    ] }),
    children
  ] });
}
function Meta({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/70 border border-border rounded-2xl p-4 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm font-medium", style: {
      color: "var(--navy)"
    }, children: value })
  ] });
}
export {
  CaseDetail as component
};

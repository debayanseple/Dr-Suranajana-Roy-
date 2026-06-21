import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as caseStudies } from "./router-DQnj5c3y.mjs";
import { S as Stethoscope, A as ArrowLeft, d as ArrowRight } from "../_libs/lucide-react.mjs";
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
function CaseStudies() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-semibold text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-5 w-5" }) }),
        "Dr. Suranjana Roy"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to home"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: "Case Studies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl md:text-6xl font-bold tracking-tight", style: {
        color: "var(--navy)"
      }, children: "Selected clinical cases" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Representative cases in oral & maxillofacial surgery and head & neck oncology — diagnosis, surgical planning and outcomes." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6", children: caseStudies.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies/$slug", params: {
      slug: c.slug
    }, className: "group bg-card border border-border rounded-3xl p-8 transition-all hover:-translate-y-1 flex flex-col", style: {
      boxShadow: "var(--shadow-card)"
    }, children: [
      c.gallery[0] && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 -mx-2 -mt-2 rounded-2xl overflow-hidden aspect-[16/10] bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.gallery[0].src, alt: c.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: c.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "Case 0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold leading-snug", style: {
        color: "var(--navy)"
      }, children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed flex-1", children: c.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all", children: [
        "Read case study ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }, c.slug)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold", style: {
        color: "var(--navy)"
      }, children: "Have a similar case?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Book a consultation to discuss your case or a referral." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", className: "mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition", style: {
        background: "var(--gradient-cta)"
      }, children: "Book Appointment" })
    ] }) })
  ] });
}
export {
  CaseStudies as component
};

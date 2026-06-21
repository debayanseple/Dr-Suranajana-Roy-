import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Stethoscope, c as Menu, B as BadgeCheck, d as ArrowRight, e as Scissors, f as Activity, g as Smile, W as Wrench, h as Sparkles, G as GraduationCap, i as Building2, F as FileText, j as Award, P as Phone, M as Mail, b as MapPin } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/dr-suranjana-hero-ihTcQCvq.jpg";
const services = [{
  icon: Scissors,
  title: "Oral & Maxillofacial Surgery",
  desc: "Surgical management of conditions affecting the face, jaws, and oral cavity."
}, {
  icon: Activity,
  title: "Head & Neck Oncosurgery",
  desc: "Comprehensive surgical treatment for cancers of the head and neck region."
}, {
  icon: Smile,
  title: "General Dentistry",
  desc: "Routine examinations, cleanings and preventive care for lifelong oral health."
}, {
  icon: Stethoscope,
  title: "Endodontic Treatment",
  desc: "Precision root canal therapy to save and restore compromised teeth."
}, {
  icon: Wrench,
  title: "Restorative Dentistry",
  desc: "Fillings, crowns and reconstruction to restore form and function."
}, {
  icon: Sparkles,
  title: "Aesthetic & Prosthetic Rehabilitation",
  desc: "Cosmetic and prosthetic solutions for a confident, natural smile."
}];
const publications = [{
  type: "Published Case Report",
  title: "Management of Odontogenic Keratocyst (OKC) with Segmental Resection",
  icon: FileText
}, {
  type: "Paper Presentation",
  title: "Management of Verrucous Carcinoma — 16th Asian Congress on Oral & Maxillofacial Surgery",
  icon: Award
}, {
  type: "Paper Presentation",
  title: "Improving Accuracy in Nodal Staging of Oral Cancer",
  icon: Award
}];
function Index() {
  const [open, setOpen] = reactExports.useState(false);
  const nav = [{
    href: "#home",
    label: "Home",
    to: null
  }, {
    href: "#about",
    label: "About",
    to: null
  }, {
    href: "#services",
    label: "Services",
    to: null
  }, {
    href: "/case-studies",
    label: "Case Studies",
    to: "/case-studies"
  }, {
    href: "#academic",
    label: "Academic Work",
    to: null
  }, {
    href: "#contact",
    label: "Contact",
    to: null
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground scroll-smooth", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 font-semibold text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dr. Suranjana Roy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: nav.map((n) => n.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: n.label }, n.href) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: n.label }, n.href)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", className: "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition", style: {
          background: "var(--gradient-cta)"
        }, children: "Book Appointment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden p-2", onClick: () => setOpen(!open), "aria-label": "Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
      ] }),
      open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4", children: [
        nav.map((n) => n.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, onClick: () => setOpen(false), className: "text-sm text-muted-foreground", children: n.label }, n.href) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href, onClick: () => setOpen(false), className: "text-sm text-muted-foreground", children: n.label }, n.href)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/book-appointment", onClick: () => setOpen(false), className: "px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center", children: "Book Appointment" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden", style: {
      background: "var(--gradient-hero)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 pt-5 pb-14 md:pt-7 md:pb-20 grid md:grid-cols-2 gap-12 items-center relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 border border-border text-xs font-medium text-primary mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }),
            " WBDC Reg. No. 7324-A"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]", style: {
            color: "var(--navy)"
          }, children: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xl md:text-2xl font-medium text-primary", children: "MDS — Oral & Maxillofacial Surgeon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg max-w-xl leading-relaxed", children: "Specialized in head and neck surgical oncology, maxillofacial reconstruction, and comprehensive general dentistry." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/book-appointment", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition", style: {
              background: "var(--gradient-cta)"
            }, children: [
              "Consult Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background border border-border text-foreground font-medium hover:border-primary hover:text-primary transition", children: "View Services" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Dr. Suranjana Roy, Oral & Maxillofacial Surgeon", width: 1024, height: 1216, fetchPriority: "high", className: "relative w-full h-auto object-contain rounded-3xl", style: {
          boxShadow: "var(--shadow-card-hover)"
        } }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", style: {
          color: "var(--navy)"
        }, children: "Comprehensive specialist care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "From complex maxillofacial surgery to everyday dental care, delivered with precision and compassion." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-card p-8 rounded-2xl border border-border transition-all hover:-translate-y-1", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-7 w-7 text-primary group-hover:text-primary-foreground", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", style: {
          color: "var(--navy)"
        }, children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
      ] }, s.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", style: {
          color: "var(--navy)"
        }, children: "Clinical excellence rooted in academic rigor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-lg leading-relaxed", children: "MDS-qualified Oral and Maxillofacial Surgeon with clinical and academic training in head and neck surgical oncology and maxillofacial pathology. Committed to evidence-based, patient-first care." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: GraduationCap, title: "MDS — Oral & Maxillofacial Surgery", sub: "Haldia Institute of Dental Sciences & Research", meta: "2022 – 2025" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: GraduationCap, title: "BDS", sub: "Rungta College of Dental Sciences & Research", meta: "2015 – 2021" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: Building2, title: "Clinical Observership", sub: "Desun Hospital, Kolkata", meta: "Maxillofacial & Surgical Care" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { icon: Building2, title: "Clinical Observership", sub: "Chittaranjan National Cancer Institute (CNCI), Kolkata", meta: "Head & Neck Oncology" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "academic", className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: "Academic Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl md:text-5xl font-bold", style: {
          color: "var(--navy)"
        }, children: "Publications & Presentations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: publications.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative sm:pl-16 bg-card p-6 sm:p-7 rounded-2xl border border-border", style: {
          boxShadow: "var(--shadow-card)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex absolute left-0 top-6 h-12 w-12 rounded-full bg-primary text-primary-foreground items-center justify-center", style: {
            background: "var(--gradient-cta)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: p.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-lg font-semibold leading-snug", style: {
            color: "var(--navy)"
          }, children: p.title })
        ] }, p.title)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl p-10 md:p-14 relative overflow-hidden", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 items-center relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl md:text-4xl font-bold", style: {
        color: "var(--navy)"
      }, children: "Have a question? Let's talk." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-lg", children: "Reach out to schedule a consultation or discuss a clinical case." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/book-appointment", className: "mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium", style: {
        background: "var(--gradient-cta)"
      }, children: [
        "Get in touch ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "text-white", style: {
      background: "var(--navy)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-semibold text-lg mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "h-5 w-5" }) }),
            "Dr. Suranjana Roy"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70 leading-relaxed", children: "Oral & Maxillofacial Surgeon. Compassionate, specialist-led care." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Phone, title: "Phone", lines: ["+91 7980103899"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Mail, title: "Email", lines: ["drsuranjanaroy@gmail.com"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: MapPin, title: "Location", lines: ["Siliguri, West Bengal", "Pin 734011", "& also At", "Jadavpur, Kolkata"] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Dr. Suranjana Roy. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "WBDC Reg. No. 7324-A" })
      ] })
    ] }) })
  ] });
}
function Card({
  icon: Icon,
  title,
  sub,
  meta
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-6 rounded-2xl border border-border flex items-start gap-4", style: {
    boxShadow: "var(--shadow-card)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary", strokeWidth: 1.5 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", style: {
        color: "var(--navy)"
      }, children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: sub }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-primary font-medium mt-1", children: meta })
    ] })
  ] });
}
function ContactItem({
  icon: Icon,
  title,
  lines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-white/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm uppercase tracking-wider text-white/90", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70", children: l }, l)) })
  ] });
}
export {
  Index as component
};

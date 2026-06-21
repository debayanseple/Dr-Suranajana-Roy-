import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-mX8sJVox.mjs";
import { a as appointmentSchema } from "./book-appointment.schema-CvARbTMN.mjs";
import "../_libs/seroval.mjs";
import { S as Stethoscope, A as ArrowLeft, C as CircleCheck, a as Calendar, P as Phone, M as Mail, b as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/zod.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const submitAppointment = createServerFn({
  method: "POST"
}).validator(appointmentSchema).handler(createSsrRpc("d55c8e3916bbc869923235e03dd1a982404489d66b01d98328738d7f650a2999"));
const services = ["Oral & Maxillofacial Surgery", "Head & Neck Oncosurgery", "General Dentistry", "Endodontic Treatment", "Restorative Dentistry", "Aesthetic & Prosthetic Rehabilitation", "Other / General Consultation"];
function BookAppointment() {
  const [values, setValues] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitError, setSubmitError] = reactExports.useState(null);
  const onChange = (k) => (e) => {
    setValues((v) => ({
      ...v,
      [k]: e.target.value
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = appointmentSchema.safeParse(values);
    if (!result.success) {
      const errs = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0];
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);
    try {
      await submitAppointment({
        data: result.data
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-wider", children: "Appointment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl md:text-5xl font-bold tracking-tight", style: {
        color: "var(--navy)"
      }, children: "Book a consultation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Share your details and preferred time. We'll confirm your appointment shortly." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-3xl p-10 text-center", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground", style: {
          background: "var(--gradient-cta)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-2xl font-bold", style: {
          color: "var(--navy)"
        }, children: "Request received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-muted-foreground", children: [
          "Thank you, ",
          values.name.split(" ")[0],
          ". We've received your request for ",
          values.service,
          " on ",
          values.date,
          " at ",
          values.time,
          ". A confirmation has been sent to ",
          values.email,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setSubmitted(false);
          setSubmitError(null);
          setValues({
            name: "",
            phone: "",
            email: "",
            service: "",
            date: "",
            time: "",
            notes: ""
          });
        }, className: "mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium hover:border-primary hover:text-primary transition", children: "Book another" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6", style: {
        boxShadow: "var(--shadow-card)"
      }, noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", error: errors.name, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: values.name, onChange: onChange("name"), placeholder: "Your name", className: inputCls }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", error: errors.phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: values.phone, onChange: onChange("phone"), placeholder: "+91 ...", className: inputCls }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: values.email, onChange: onChange("email"), placeholder: "you@example.com", className: inputCls }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Service", error: errors.service, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: values.service, onChange: onChange("service"), className: inputCls, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service" }),
          services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Preferred date", error: errors.date, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: values.date, onChange: onChange("date"), min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], className: inputCls }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Preferred time", error: errors.time, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "time", value: values.time, onChange: onChange("time"), className: inputCls }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notes (optional)", error: errors.notes, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: values.notes, onChange: onChange("notes"), rows: 4, placeholder: "Briefly describe your concern", className: inputCls + " resize-none", maxLength: 1e3 }) }),
        submitError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: submitError }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: submitting, className: "w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition disabled:opacity-60 disabled:hover:-translate-y-0", style: {
          background: "var(--gradient-cta)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
          " ",
          submitting ? "Submitting..." : "Request appointment"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-6", style: {
          boxShadow: "var(--shadow-card)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-4", style: {
            color: "var(--navy)"
          }, children: "Direct contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Phone, lines: ["+91 7980103899"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: Mail, lines: ["drsuranjanaroy@gmail.com"] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { icon: MapPin, lines: ["Siliguri, West Bengal", "Pin 734011", "Jadavpur, Kolkata"] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-6 text-white", style: {
          background: "var(--navy)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: "Clinic hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80", children: "Mon – Sat   10:00 – 19:00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/80", children: "Sunday   By appointment" })
        ] })
      ] })
    ] }) })
  ] });
}
const inputCls = "w-full h-11 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium mb-2", style: {
      color: "var(--navy)"
    }, children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 block text-xs text-destructive", children: error })
  ] });
}
function Info({
  icon: Icon,
  lines
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 py-2.5 border-b border-border last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: l }, l)) })
  ] });
}
export {
  BookAppointment as component
};

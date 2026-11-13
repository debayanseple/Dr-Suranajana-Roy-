import { AlertTriangle, CheckCircle2, Calendar } from "lucide-react";
import { useState } from "react";

import { submitAppointment } from "@/lib/api/book-appointment.functions";
import {
  appointmentSchema,
  clinicTimeSlots,
  type AppointmentValues,
} from "@/lib/api/book-appointment.schema";
import { LOCATIONS } from "@/lib/locations";

const services = [
  "Oral & Maxillofacial Surgery",
  "Head & Neck Oncosurgery",
  "General Dentistry",
  "Endodontic Treatment",
  "Restorative Dentistry",
  "Aesthetic & Prosthetic Rehabilitation",
  "Other / General Consultation",
];

type FormValues = AppointmentValues;
type Errors = Partial<Record<keyof FormValues, string>>;

const emptyValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  date: "",
  time: "",
  notes: "",
  consent: false as unknown as true,
};

/**
 * Shared appointment form (fields + validation + submission + success state).
 * Used both on the /book-appointment page and inside the home-page modal.
 */
export function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onChange =
    (k: keyof FormValues) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
    };

  const onConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, consent: e.target.checked as unknown as true }));
  };

  const mapSubmitError = (err: unknown): string => {
    const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
    if (msg.toLowerCase().includes("webhook") && msg.toLowerCase().includes("not configured")) {
      return "Service temporarily unavailable, please call +91 7980103899.";
    }
    if (msg.toLowerCase().includes("timeout") || msg.toLowerCase().includes("aborted")) {
      return "Request timed out. Please try again or contact us directly.";
    }
    return msg;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = appointmentSchema.safeParse(values);
    if (!result.success) {
      const errs: Errors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof FormValues;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError(null);
    setSubmitting(true);
    try {
      await submitAppointment({ data: result.data });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(mapSubmitError(err));
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="bg-card border border-border rounded-3xl p-10 text-center"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div
          className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground"
          style={{ background: "var(--gradient-cta)" }}
        >
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2
          className="mt-6 text-2xl font-bold"
          style={{ color: "var(--navy)" }}
        >
          Request received
        </h2>
        <p className="mt-3 text-muted-foreground">
          Thank you, {values.name.split(" ")[0]}. We've received your request
          for {values.service} on {values.date} at {values.time}. A confirmation
          has been sent to {values.email}.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSubmitError(null);
            setValues(emptyValues);
          }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium hover:border-primary hover:text-primary transition"
        >
          Book another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6"
      style={{ boxShadow: "var(--shadow-card)" }}
      noValidate
    >
      {/* Urgency banner */}
      <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-amber-600" />
        <p>
          Bleeding / lump &gt;2 weeks? Call{" "}
          <a href="tel:+917980103899" className="font-semibold underline underline-offset-2 hover:text-amber-700">
            +91 7980103899
          </a>{" "}
          directly — don’t wait for form.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" error={errors.name}>
          <input
            type="text"
            value={values.name}
            onChange={onChange("name")}
            placeholder="Your name"
            className={inputCls}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            value={values.phone}
            onChange={onChange("phone")}
            placeholder="+91 ..."
            className={inputCls}
          />
        </Field>
      </div>
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={values.email}
          onChange={onChange("email")}
          placeholder="you@example.com"
          className={inputCls}
        />
      </Field>
      <Field label="Service" error={errors.service}>
        <select
          value={values.service}
          onChange={onChange("service")}
          className={inputCls}
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Preferred location" error={errors.location}>
        <select
          value={values.location}
          onChange={onChange("location")}
          className={inputCls}
        >
          <option value="">Select a location</option>
          {LOCATIONS.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Preferred date" error={errors.date}>
          <input
            type="date"
            value={values.date}
            onChange={onChange("date")}
            min={new Date().toISOString().split("T")[0]}
            className={inputCls}
          />
        </Field>
        <Field label="Preferred time" error={errors.time}>
          <select value={values.time} onChange={onChange("time")} className={inputCls}>
            <option value="">Select a time</option>
            {clinicTimeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-xs text-muted-foreground">Clinic hours: Mon–Sat 10:00–19:00 · Sunday by appointment</p>
        </Field>
      </div>
      <Field label="Notes (optional)" error={errors.notes}>
        <textarea
          value={values.notes}
          onChange={onChange("notes")}
          rows={4}
          placeholder="Briefly describe your concern"
          className={inputCls + " resize-none"}
          maxLength={1000}
        />
      </Field>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={Boolean(values.consent)}
          onChange={onConsentChange}
          className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary/40"
        />
        <span className="text-xs text-muted-foreground leading-relaxed">
          I consent to being contacted about my appointment and agree to the clinic’s privacy handling of my information.
          {errors.consent && <span className="block text-destructive mt-1">{errors.consent}</span>}
        </span>
      </label>
      {submitError && (
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 space-y-2" role="alert">
          <p className="text-sm text-destructive">{submitError}</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSubmitError(null)}
              className="text-xs font-medium text-primary underline underline-offset-2"
            >
              Try again
            </button>
            <a
              href="https://wa.me/917980103899"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-primary underline underline-offset-2"
            >
              Message on WhatsApp
            </a>
            <a href="tel:+917980103899" className="text-xs font-medium text-primary underline underline-offset-2">
              Call +91 7980103899
            </a>
          </div>
        </div>
      )}
      {/* Appointment request disclaimer */}
      <p
        className="mt-3 text-xs text-muted-foreground leading-relaxed"
      >
        Appointment requests are subject to confirmation. For urgent or concerning
        symptoms, contact the clinic directly or seek appropriate medical attention.
        Submitting this form does not guarantee a confirmed appointment.
      </p>
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition disabled:opacity-60 disabled:hover:-translate-y-0"
        style={{ background: "var(--gradient-cta)" }}
      >
        <Calendar className="h-4 w-4" /> {submitting ? "Submitting..." : "Request appointment"}
      </button>
    </form>
  );
}

const inputCls =
  "w-full h-11 px-4 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="block text-sm font-medium mb-2"
        style={{ color: "var(--navy)" }}
      >
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs text-destructive">{error}</span>
      )}
    </label>
  );
}

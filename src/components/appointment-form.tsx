import { CheckCircle2, Calendar } from "lucide-react";
import { useState } from "react";

import { submitAppointment } from "@/lib/api/book-appointment.functions";
import {
  appointmentSchema,
  type AppointmentValues,
} from "@/lib/api/book-appointment.schema";

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
  name: "", phone: "", email: "", service: "", date: "", time: "", notes: "",
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

  const onChange = (k: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
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
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-3xl p-10 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2 className="mt-6 text-2xl font-bold" style={{ color: "var(--navy)" }}>Request received</h2>
        <p className="mt-3 text-muted-foreground">
          Thank you, {values.name.split(" ")[0]}. We've received your request for {values.service} on {values.date} at {values.time}. A confirmation has been sent to {values.email}.
        </p>
        <button
          onClick={() => { setSubmitted(false); setSubmitError(null); setValues(emptyValues); }}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium hover:border-primary hover:text-primary transition"
        >
          Book another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6" style={{ boxShadow: "var(--shadow-card)" }} noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" error={errors.name}>
          <input type="text" value={values.name} onChange={onChange("name")} placeholder="Your name" className={inputCls} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input type="tel" value={values.phone} onChange={onChange("phone")} placeholder="+91 ..." className={inputCls} />
        </Field>
      </div>
      <Field label="Email" error={errors.email}>
        <input type="email" value={values.email} onChange={onChange("email")} placeholder="you@example.com" className={inputCls} />
      </Field>
      <Field label="Service" error={errors.service}>
        <select value={values.service} onChange={onChange("service")} className={inputCls}>
          <option value="">Select a service</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Field>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Preferred date" error={errors.date}>
          <input type="date" value={values.date} onChange={onChange("date")} min={new Date().toISOString().split("T")[0]} className={inputCls} />
        </Field>
        <Field label="Preferred time" error={errors.time}>
          <input type="time" value={values.time} onChange={onChange("time")} className={inputCls} />
        </Field>
      </div>
      <Field label="Notes (optional)" error={errors.notes}>
        <textarea value={values.notes} onChange={onChange("notes")} rows={4} placeholder="Briefly describe your concern" className={inputCls + " resize-none"} maxLength={1000} />
      </Field>
      {submitError && (
        <p className="text-sm text-destructive" role="alert">{submitError}</p>
      )}
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

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-2" style={{ color: "var(--navy)" }}>{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

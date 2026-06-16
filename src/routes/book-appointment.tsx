import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Stethoscope, CheckCircle2, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

import { submitAppointment } from "@/lib/api/book-appointment.functions";
import {
  appointmentSchema,
  type AppointmentValues,
} from "@/lib/api/book-appointment.schema";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Dr. Suranjana Roy" },
      { name: "description", content: "Request a consultation with Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, Siliguri." },
      { property: "og:title", content: "Book Appointment — Dr. Suranjana Roy" },
      { property: "og:description", content: "Schedule a consultation with Dr. Suranjana Roy." },
    ],
  }),
  component: BookAppointment,
});

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

function BookAppointment() {
  const [values, setValues] = useState<FormValues>({
    name: "", phone: "", email: "", service: "", date: "", time: "", notes: "",
  });
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

      <section className="py-16 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Appointment</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--navy)" }}>
            Book a consultation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your details and preferred time. We'll confirm your appointment shortly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-card border border-border rounded-3xl p-10 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-2xl font-bold" style={{ color: "var(--navy)" }}>Request received</h2>
                <p className="mt-3 text-muted-foreground">
                  Thank you, {values.name.split(" ")[0]}. We've received your request for {values.service} on {values.date} at {values.time}. A confirmation has been sent to {values.email}.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setSubmitError(null); setValues({ name: "", phone: "", email: "", service: "", date: "", time: "", notes: "" }); }}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium hover:border-primary hover:text-primary transition"
                >
                  Book another
                </button>
              </div>
            ) : (
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
            )}
          </div>

          <aside className="space-y-5">
            <div className="bg-card border border-border rounded-2xl p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-semibold mb-4" style={{ color: "var(--navy)" }}>Direct contact</h3>
              <Info icon={Phone} lines={["+91 7980103899"]} />
              <Info icon={Mail} lines={["drsuranjanaroy@gmail.com"]} />
              <Info icon={MapPin} lines={["Siliguri, West Bengal", "Pin 734011", "Jadavpur, Kolkata"]} />
            </div>
            <div className="rounded-2xl p-6 text-white" style={{ background: "var(--navy)" }}>
              <h3 className="font-semibold mb-2">Clinic hours</h3>
              <p className="text-sm text-white/80">Mon – Sat &nbsp; 10:00 – 19:00</p>
              <p className="text-sm text-white/80">Sunday &nbsp; By appointment</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
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

function Info({ icon: Icon, lines }: { icon: any; lines: string[] }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
      <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="text-sm">
        {lines.map((l) => <p key={l} className="text-muted-foreground">{l}</p>)}
      </div>
    </div>
  );
}

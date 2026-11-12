import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Stethoscope, Phone, Mail } from "lucide-react";

import { AppointmentForm } from "@/components/appointment-form";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Dr. Suranjana Roy, MDS" },
      {
        name: "description",
        content:
          "Request a consultation with Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, available in Siliguri and Kolkata.",
      },
      { property: "og:title", content: "Book Appointment — Dr. Suranjana Roy" },
      {
        property: "og:description",
        content: "Schedule a consultation with Dr. Suranjana Roy, MDS.",
      },
    ],
    canonical: "https://dr-suranajana-roy.vercel.app/book-appointment",
  }),
  component: BookAppointment,
});

function BookAppointment() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-lg"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </span>
            Dr. Suranjana Roy
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </header>

      <section
        className="py-16 md:py-20"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Appointment
          </p>
          <h1
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "var(--navy)" }}
          >
            Book a consultation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your details and preferred time. We'll confirm your
            appointment shortly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>

          <aside className="space-y-5">
            <div
              className="bg-card border border-border rounded-2xl p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <h3
                className="font-semibold mb-2"
                style={{ color: "var(--navy)" }}
              >
                Clinics
              </h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>Siliguri & Jadavpur, Kolkata</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="https://maps.google.com/?q=Siliguri+734011"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-primary underline underline-offset-2"
                >
                  View Siliguri on Maps
                </a>
                <a
                  href="https://maps.google.com/?q=Jadavpur+Kolkata"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-primary underline underline-offset-2"
                >
                  View Jadavpur on Maps
                </a>
              </div>
              <h3
                className="font-semibold mb-4 mt-6"
                style={{ color: "var(--navy)" }}
              >
                Direct contact
              </h3>
              <div className="flex items-center gap-3 py-2.5 border-b border-border">
                <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href="tel:+917980103899" className="text-sm text-muted-foreground hover:text-primary font-medium">
                  +91 7980103899
                </a>
              </div>
              <div className="flex items-center gap-3 py-2.5">
                <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a href="mailto:drsuranjanaroy@gmail.com" className="text-sm text-muted-foreground hover:text-primary font-medium break-all">
                  drsuranjanaroy@gmail.com
                </a>
              </div>
            </div>
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: "var(--navy)" }}
            >
              <h3 className="font-semibold mb-2">Clinic hours</h3>
              <p className="text-sm text-white/80">
                Mon – Sat &nbsp; 10:00 – 19:00
              </p>
              <p className="text-sm text-white/80">
                Sunday &nbsp; By appointment
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Info({
  icon: Icon,
  lines,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-border last:border-0">
      <div className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="text-sm">
        {lines.map((l) => (
          <p key={l} className="text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ImageIcon,
  Stethoscope,
} from "lucide-react";
import { services } from "@/lib/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title:
          "Dental & Surgical Services in Kolkata & Siliguri | Dr. Suranjana Roy",
      },
      {
        name: "description",
        content:
          "All services by Dr. Suranjana Roy — oral & maxillofacial surgery, head & neck oncosurgery, general dentistry, root canal treatment, restorative dentistry and prosthetic rehabilitation in Kolkata & Siliguri.",
      },
      {
        property: "og:title",
        content: "Services | Dr. Suranjana Roy",
      },
      {
        property: "og:description",
        content:
          "Specialist surgical and dental care in Kolkata & Siliguri — explore each service in detail.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const [openValue, setOpenValue] = useState<string | undefined>(undefined);

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

      {/* Page hero */}
      <section
        className="py-16 md:py-24"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Services
          </p>
          <h1
            className="mt-3 text-4xl md:text-6xl font-bold tracking-tight"
            style={{ color: "var(--navy)" }}
          >
            Complete surgical &amp; dental care
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From head &amp; neck oncosurgery to routine dentistry — every
            service Dr. Suranjana Roy offers in Siliguri and Jadavpur, Kolkata.
            Tap a service to expand its full details.
          </p>
          <Link
            to="/book-appointment"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition"
            style={{ background: "var(--gradient-cta)" }}
          >
            Book a consultation <Calendar className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Expandable service cards - side by side, responsive */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Accordion
            type="single"
            collapsible
            value={openValue}
            onValueChange={setOpenValue}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isOpen = openValue === service.id;
              return (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className={`bg-card border border-border rounded-3xl px-6 md:px-8 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${isOpen ? "md:col-span-2" : ""}`}
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <span className="flex items-start gap-4 text-left mr-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-foreground mt-0.5">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span
                          className="block text-lg md:text-xl font-bold"
                          style={{ color: "var(--navy)" }}
                        >
                          {service.title}
                        </span>
                        <span className="block mt-1 text-[15px] font-normal text-muted-foreground leading-relaxed">
                          {service.shortDesc}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="space-y-10 pb-8 pt-2">
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed border-l-4 border-primary pl-5">
                        {service.tagline}
                      </p>

                      {/* Image placeholders for device / equipment / procedure photos */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {service.imagePlaceholders.map((label) => (
                          <div
                            key={label}
                            className="rounded-2xl border-2 border-dashed border-border bg-secondary/40 p-6 flex flex-col items-center justify-center text-center min-h-40"
                          >
                            <ImageIcon className="h-8 w-8 text-muted-foreground/60 mb-3" />
                            <span className="text-xs font-medium text-muted-foreground/80 leading-relaxed">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Detail sections */}
                      <div className="space-y-8">
                        {service.sections.map((section) => (
                          <article key={section.title}>
                            <h3
                              className="text-xl font-bold mb-3"
                              style={{ color: "var(--navy)" }}
                            >
                              {section.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {section.body}
                            </p>
                          </article>
                        ))}
                      </div>

                      {/* FAQs */}
                      {service.faqs.length > 0 && (
                        <div>
                          <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: "var(--navy)" }}
                          >
                            Common questions
                          </h3>
                          <div className="space-y-3">
                            {service.faqs.map((faq) => (
                              <details
                                key={faq.q}
                                className="bg-background rounded-2xl border border-border px-5 py-4"
                              >
                                <summary className="cursor-pointer font-semibold list-none [&::-webkit-details-marker]:hidden">
                                  {faq.q}
                                </summary>
                                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                                  {faq.a}
                                </p>
                              </details>
                            ))}
                          </div>
                        </div>
                      )}

                      <Link
                        to="/book-appointment"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground font-medium shadow-md hover:-translate-y-0.5 transition"
                        style={{ background: "var(--gradient-cta)" }}
                      >
                        Book for {service.title}{" "}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold" style={{ color: "var(--navy)" }}>
            Not sure which service you need?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Book a consultation and get an expert assessment in Siliguri or
            Kolkata.
          </p>
          <Link
            to="/book-appointment"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition"
            style={{ background: "var(--gradient-cta)" }}
          >
            Book Appointment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

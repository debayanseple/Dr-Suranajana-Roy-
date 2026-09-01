import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  Crown,
  ScanFace,
  ShieldPlus,
  SmilePlus,
  Syringe,
  Sparkles,
  Phone,
  Mail,
  BadgeCheck,
  GraduationCap,
  Building2,
  FileText,
  Award,
  ArrowRight,
  Menu,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, useMemo, memo, useRef } from "react";
import heroImg from "@/assets/dr-suranjana-main.png";
import bannerImg from "@/assets/her-banner.jpg";
import { AppointmentForm } from "@/components/appointment-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Dr. Suranjana Roy | Onco Surgeon & Maxillofacial Specialist in Kolkata & Siliguri",
      },
      {
        name: "description",
        content:
          "Consult Dr. Suranjana Roy, an expert Oral & Maxillofacial Surgeon and Cancer Doctor in Kolkata and Siliguri, specializing in head and neck oncosurgery and jaw reconstruction.",
      },
      {
        property: "og:title",
        content: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon",
      },
      {
        property: "og:description",
        content:
          "Specialist care in oral surgery, head & neck oncosurgery and comprehensive dentistry.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: ScanFace,
    title: "Oral & Maxillofacial Surgery",
    desc: "Surgical management of conditions affecting the face, jaws, and oral cavity — wisdom teeth, cysts, trauma and implants.",
    href: "/services",
  },
  {
    icon: ShieldPlus,
    title: "Head & Neck Oncosurgery",
    desc: "Comprehensive cancer care — tumour removal, neck dissection and immediate reconstruction.",
    href: "/services",
  },
  {
    icon: SmilePlus,
    title: "General Dentistry",
    desc: "Routine examinations, cleanings and preventive care for lifelong oral health and early cancer screening.",
    href: "/services",
  },
  {
    icon: Syringe,
    title: "Endodontic Treatment",
    desc: "Precision root canal therapy to save compromised teeth — modern, pain-free rotary techniques.",
    href: "/services",
  },
  {
    icon: Crown,
    title: "Restorative Dentistry",
    desc: "Fillings, crowns and reconstruction to restore form, function and your natural bite.",
    href: "/services",
  },
  {
    icon: Sparkles,
    title: "Aesthetic & Prosthetic Rehabilitation",
    desc: "Cosmetic and prosthetic solutions for a confident, natural smile — veneers, dentures and full rehab.",
    href: "/services",
  },
];

// FAQ content for SEO / SGE (Google AI) answer extraction
const faqs = [
  {
    q: "What does a head and neck onco surgeon do?",
    a: "A head and neck onco surgeon is a cancer specialist who diagnoses and surgically treats tumours of the mouth, jaw, throat, salivary glands and face. Dr. Suranjana Roy, an MDS Oral & Maxillofacial Surgeon, performs cancer removal (resection) of oral and jaw tumours, neck lymph-node dissection, and reconstruction of the jaw and face after tumour removal — restoring both function and appearance.",
  },
  {
    q: "When should I consult an oral cancer doctor?",
    a: "See an oral cancer doctor promptly if you notice a mouth ulcer that hasn't healed in more than 2–3 weeks, a red or white patch inside the cheek, tongue or gums, a lump in the jaw or neck, loose teeth without gum disease, difficulty or pain when swallowing, unexplained bleeding from the mouth, or numbness of the lip or chin. Early detection dramatically improves outcomes — when in doubt, get it examined.",
  },
  {
    q: "Does Dr. Suranjana Roy consult in Kolkata?",
    a: "Yes. Dr. Suranjana Roy consults at two locations in West Bengal — Siliguri (Pin 734011) and Jadavpur, Kolkata. You can request an appointment at either location through the Book Appointment form on this site or by calling +91 7980103899.",
  },
];

const publications = [
  {
    type: "Published Case Report",
    title:
      "Management of Odontogenic Keratocyst (OKC) with Segmental Resection",
    icon: FileText,
  },
  {
    type: "Paper Presentation",
    title:
      "Management of Verrucous Carcinoma — 16th Asian Congress on Oral & Maxillofacial Surgery",
    icon: Award,
  },
  {
    type: "Paper Presentation",
    title: "Improving Accuracy in Nodal Staging of Oral Cancer",
    icon: Award,
  },
];

// Memoized components to prevent re-renders
const Card = memo(function Card({
  icon: Icon,
  title,
  sub,
  meta,
}: {
  icon: LucideIcon;
  title: string;
  sub: string;
  meta: string;
}) {
  return (
    <div
      className="bg-card p-6 rounded-2xl border border-border flex items-start gap-4"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
        <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold" style={{ color: "var(--navy)" }}>
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{sub}</p>
        <p className="text-xs text-primary font-medium mt-1">{meta}</p>
      </div>
    </div>
  );
});

const ContactItem = memo(function ContactItem({
  icon: Icon,
  title,
  lines,
}: {
  icon: LucideIcon;
  title: string;
  lines: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-4 w-4 text-white/70" />
        <h4 className="font-semibold text-sm uppercase tracking-wider text-white/90">
          {title}
        </h4>
      </div>
      <div className="space-y-1">
        {lines.map((l) => (
          <p key={l} className="text-sm text-white/70">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
});

function Index() {
  const [open, setOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  // Auto-open the appointment popup on every page load.
  useEffect(() => {
    setAppointmentOpen(true);
  }, []);

  const heroBgRef = useRef<HTMLDivElement>(null);
  // Parallax: hero background scrolls slower than the foreground (vanilla JS).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (heroBgRef.current)
          heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const nav = useMemo(
    () => [
      { href: "#home", label: "Home", to: null },
      { href: "#about", label: "About", to: null },
      { href: "/services", label: "Services", to: "/services" },
      { href: "/case-studies", label: "Case Studies", to: "/case-studies" },
      { href: "#contact", label: "Contact", to: null },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Appointment popup — auto-opens on load */}
      <Dialog open={appointmentOpen} onOpenChange={setAppointmentOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle style={{ color: "var(--navy)" }}>
              Book a consultation
            </DialogTitle>
            <DialogDescription>
              Share your details and preferred time. We'll confirm your
              appointment shortly.
            </DialogDescription>
          </DialogHeader>
          <AppointmentForm />
        </DialogContent>
      </Dialog>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 font-semibold text-lg"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </span>
            <span>Dr. Suranjana Roy</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) =>
              n.to ? (
                <Link
                  key={n.href}
                  to={n.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {n.label}
                </a>
              ),
            )}
          </nav>
          <Link
            to="/book-appointment"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            style={{ background: "var(--gradient-cta)" }}
          >
            Book Appointment
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {nav.map((n) =>
              n.to ? (
                <Link
                  key={n.href}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground"
                >
                  {n.label}
                </a>
              ),
            )}
            <Link
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </header>

      {/* Hero — parallax background, doctor image on the left */}
      <section
        id="home"
        className="relative overflow-hidden min-h-[calc(100svh-4rem)] flex items-end"
        style={{ background: "oklch(0.24 0.055 260)" }}
      >
        <div
          ref={heroBgRef}
          className="absolute inset-0 -bottom-[35%] will-change-transform"
        >
          <img
            src={bannerImg}
            alt=""
            width={749}
            height={500}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, oklch(0.24 0.055 260 / 0.92), oklch(0.3 0.07 220 / 0.78) 55%, oklch(0.62 0.11 185 / 0.45))",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-14 md:pt-20 grid md:grid-cols-2 gap-12 items-end relative">
          <div className="relative order-2 md:order-1 flex items-end">
            <img
              src={heroImg}
              alt="Dr. Suranjana Roy, Oral & Maxillofacial Surgeon and head & neck onco surgeon (cancer doctor) consulting patients in Kolkata and Siliguri, West Bengal"
              width={1024}
              height={1216}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative w-full h-auto object-contain rounded-3xl"
              style={{ boxShadow: "var(--shadow-card-hover)" }}
            />
          </div>
          <div className="order-1 md:order-2 md:pb-28">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white mb-6">
              <BadgeCheck className="h-4 w-4" /> WBDC Reg. No. 7324-A
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              We take <span className="text-coral">care</span>
              <span className="block mt-3 text-xl md:text-2xl font-semibold leading-snug text-white/90">
                Dr. Suranjana Roy — Oral & Maxillofacial Surgeon
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-teal-200">
              MDS — Oral & Maxillofacial Surgeon
            </p>
            <p className="mt-5 text-white/80 text-lg max-w-xl leading-relaxed">
              Specialized in head and neck surgical oncology, providing expert
              care as an onco surgeon and cancer specialist for the jaw, mouth,
              and face.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium shadow-lg hover:-translate-y-0.5 transition"
                style={{ background: "var(--gradient-cta)" }}
              >
                Consult Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-medium hover:bg-white/20 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Services
            </p>
            <h2
              className="mt-3 text-4xl md:text-5xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              Comprehensive specialist care
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From complex maxillofacial surgery to everyday dental care,
              delivered with precision and compassion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-primary font-semibold underline-offset-4 decoration-2 hover:underline decoration-primary/30 hover:decoration-primary transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              About
            </p>
            <h2
              className="mt-3 text-4xl md:text-5xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              Clinical excellence rooted in academic rigor
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              MDS-qualified Oral and Maxillofacial Surgeon with clinical and
              academic training in head and neck surgical oncology and
              maxillofacial pathology. Committed to evidence-based,
              patient-first care.
            </p>
          </div>
          <div className="space-y-5">
            <Card
              icon={GraduationCap}
              title="MDS — Oral & Maxillofacial Surgery"
              sub="Haldia Institute of Dental Sciences & Research"
              meta="2022 – 2025"
            />
            <Card
              icon={GraduationCap}
              title="BDS"
              sub="Rungta College of Dental Sciences & Research"
              meta="2015 – 2021"
            />
            <Card
              icon={Building2}
              title="Clinical Observership"
              sub="Desun Hospital, Kolkata"
              meta="Maxillofacial & Surgical Care"
            />
            <Card
              icon={Building2}
              title="Clinical Observership"
              sub="Chittaranjan National Cancer Institute (CNCI), Kolkata"
              meta="Head & Neck Oncology"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Academic Work
            </p>
            <h2
              className="mt-3 text-3xl md:text-4xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              Publications & Presentations
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-6">
              {publications.map((pub) => (
                <PublicationItem key={pub.title} pub={pub} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              FAQ
            </p>
            <h2
              className="mt-3 text-4xl md:text-5xl font-bold"
              style={{ color: "var(--navy)" }}
            >
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-card rounded-2xl border border-border px-6 py-4"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <summary className="cursor-pointer font-semibold text-base sm:text-lg list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <div>
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "var(--navy)" }}
                >
                  Have a question? Let's talk.
                </h3>
                <p className="mt-3 text-muted-foreground text-lg">
                  Reach out to schedule a consultation or discuss a clinical
                  case.
                </p>
                <Link
                  to="/book-appointment"
                  className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="text-white"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-24">
            <div>
              <div className="flex items-center gap-2 font-semibold text-lg mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Stethoscope className="h-5 w-5" />
                </span>
                Dr. Suranjana Roy
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                MDS — Oral & Maxillofacial Surgeon and consultant Maxillofacial
                & Head & Neck Oncosurgeon. Specialized in head and neck surgical
                oncology, maxillofacial pathology and reconstructive care.
                Evidence-based, patient-first treatment — from early oral cancer
                screening to complex maxillofacial surgery. Consulting at
                Siliguri and Jadavpur, Kolkata.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/90 mb-3">
                Contact
              </h4>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-sm text-white/70 font-bold">
                  <Phone className="h-4 w-4 text-white/70 shrink-0" />
                  +91 7980103899
                </p>
                <p className="flex items-center gap-3 text-sm text-white/70 font-bold">
                  <Mail className="h-4 w-4 text-white/70 shrink-0" />
                  drsuranjanaroy@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">
              Serviceable Locations
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-2 text-sm text-white/70">
              {[
                "Kolkata",
                "Siliguri",
                "Purulia",
                "Malda",
                "Dankuni",
                "Musheerabad",
                "Kalyani",
              ].map((place) => (
                <li key={place} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {place}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} Dr. Suranjana Roy. All rights
              reserved.
            </p>
            <p>WBDC Reg. No. 7324-A</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ServiceCard = memo(function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
}) {
  const body = (
    <>
      <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <service.icon
          className="h-7 w-7 text-primary group-hover:text-primary-foreground"
          strokeWidth={1.5}
        />
      </div>
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: "var(--navy)" }}
      >
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.desc}
      </p>
    </>
  );

  if ("href" in service && service.href) {
    return (
      <Link
        to={service.href}
        className="group bg-card p-8 rounded-2xl border border-border transition-all hover:-translate-y-1 block"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {body}
      </Link>
    );
  }

  return (
    <div
      className="group bg-card p-8 rounded-2xl border border-border transition-all hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {body}
    </div>
  );
});

const PublicationItem = memo(function PublicationItem({
  pub,
}: {
  pub: (typeof publications)[0];
}) {
  return (
    <div
      key={pub.title}
      className="relative sm:pl-16 bg-card p-6 sm:p-7 rounded-2xl border border-border"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div
        className="hidden sm:flex absolute left-0 top-6 h-12 w-12 rounded-full bg-primary text-primary-foreground items-center justify-center"
        style={{ background: "var(--gradient-cta)" }}
      >
        <pub.icon className="h-5 w-5" />
      </div>
      <p className="text-xs font-semibold text-primary uppercase tracking-wider">
        {pub.type}
      </p>
      <h3
        className="mt-2 text-lg font-semibold leading-snug"
        style={{ color: "var(--navy)" }}
      >
        {pub.title}
      </h3>
    </div>
  );
});

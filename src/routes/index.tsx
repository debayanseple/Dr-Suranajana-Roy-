import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  Scissors,
  Sparkles,
  Activity,
  Smile,
  Wrench,
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
  GraduationCap,
  Building2,
  FileText,
  Award,
  ArrowRight,
  Menu,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/dr-suranjana-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon" },
      {
        name: "description",
        content:
          "MDS Oral & Maxillofacial Surgeon specializing in head & neck oncosurgery, maxillofacial reconstruction and general dentistry. Siliguri, West Bengal.",
      },
      { property: "og:title", content: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon" },
      {
        property: "og:description",
        content: "Specialist care in oral surgery, head & neck oncosurgery and comprehensive dentistry.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Scissors,
    title: "Oral & Maxillofacial Surgery",
    desc: "Surgical management of conditions affecting the face, jaws, and oral cavity.",
  },
  {
    icon: Activity,
    title: "Head & Neck Oncosurgery",
    desc: "Comprehensive surgical treatment for cancers of the head and neck region.",
  },
  {
    icon: Smile,
    title: "General Dentistry",
    desc: "Routine examinations, cleanings and preventive care for lifelong oral health.",
  },
  {
    icon: Stethoscope,
    title: "Endodontic Treatment",
    desc: "Precision root canal therapy to save and restore compromised teeth.",
  },
  {
    icon: Wrench,
    title: "Restorative Dentistry",
    desc: "Fillings, crowns and reconstruction to restore form and function.",
  },
  {
    icon: Sparkles,
    title: "Aesthetic & Prosthetic Rehabilitation",
    desc: "Cosmetic and prosthetic solutions for a confident, natural smile.",
  },
];

const publications = [
  {
    type: "Published Case Report",
    title: "Management of Odontogenic Keratocyst (OKC) with Segmental Resection",
    icon: FileText,
  },
  {
    type: "Paper Presentation",
    title: "Management of Verrucous Carcinoma — 16th Asian Congress on Oral & Maxillofacial Surgery",
    icon: Award,
  },
  { type: "Paper Presentation", title: "Improving Accuracy in Nodal Staging of Oral Cancer", icon: Award },
];

function Index() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#home", label: "Home", to: null as string | null },
    { href: "#about", label: "About", to: null },
    { href: "#services", label: "Services", to: null },
    { href: "/case-studies", label: "Case Studies", to: "/case-studies" },
    { href: "#academic", label: "Academic Work", to: null },
    { href: "#contact", label: "Contact", to: null },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-lg">
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
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {nav.map((n) =>
              n.to ? (
                <Link key={n.href} to={n.to} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
                  {n.label}
                </Link>
              ) : (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">
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

      {/* Hero */}
      <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 pt-5 pb-14 md:pt-7 md:pb-20 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 border border-border text-xs font-medium text-primary mb-6">
              <BadgeCheck className="h-4 w-4" /> WBDC Reg. No. 7324-A
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]"
              style={{ color: "var(--navy)" }}
            >
              Dr. Suranjana Roy — Oral & Maxillofacial Surgeon
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-medium text-primary">MDS — Oral & Maxillofacial Surgeon</p>
            <p className="mt-5 text-muted-foreground text-lg max-w-xl leading-relaxed">
              Specialized in head and neck surgical oncology, maxillofacial reconstruction, and comprehensive general
              dentistry.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-lg hover:-translate-y-0.5 transition"
                style={{ background: "var(--gradient-cta)" }}
              >
                Consult Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-background border border-border text-foreground font-medium hover:border-primary hover:text-primary transition"
              >
                View Services
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Dr. Suranjana Roy, Oral & Maxillofacial Surgeon"
              width={1024}
              height={1216}
              fetchPriority="high"
              className="relative w-full h-auto object-contain rounded-3xl"
              style={{ boxShadow: "var(--shadow-card-hover)" }}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Services</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold" style={{ color: "var(--navy)" }}>
              Comprehensive specialist care
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From complex maxillofacial surgery to everyday dental care, delivered with precision and compassion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card p-8 rounded-2xl border border-border transition-all hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--navy)" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">About</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold" style={{ color: "var(--navy)" }}>
              Clinical excellence rooted in academic rigor
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              MDS-qualified Oral and Maxillofacial Surgeon with clinical and academic training in head and neck surgical
              oncology and maxillofacial pathology. Committed to evidence-based, patient-first care.
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
      </section>

      {/* Academic */}
      <section id="academic" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Academic Work</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold" style={{ color: "var(--navy)" }}>
              Publications & Presentations
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-6">
              {publications.map((p) => (
                <div
                  key={p.title}
                  className="relative sm:pl-16 bg-card p-6 sm:p-7 rounded-2xl border border-border"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div
                    className="hidden sm:flex absolute left-0 top-6 h-12 w-12 rounded-full bg-primary text-primary-foreground items-center justify-center"
                    style={{ background: "var(--gradient-cta)" }}
                  >
                    <p.icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">{p.type}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug" style={{ color: "var(--navy)" }}>
                    {p.title}
                  </h3>
                </div>
              ))}
            </div>
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
                <h3 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--navy)" }}>
                  Have a question? Let's talk.
                </h3>
                <p className="mt-3 text-muted-foreground text-lg">
                  Reach out to schedule a consultation or discuss a clinical case.
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
      <footer id="contact" className="text-white" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 font-semibold text-lg mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Stethoscope className="h-5 w-5" />
                </span>
                Dr. Suranjana Roy
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Oral & Maxillofacial Surgeon. Compassionate, specialist-led care.
              </p>
            </div>
            <ContactItem icon={Phone} title="Phone" lines={["+91 7980103899"]} />
            <ContactItem icon={Mail} title="Email" lines={["drsuranjanaroy@gmail.com"]} />
            <ContactItem
              icon={MapPin}
              title="Location"
              lines={["Siliguri, West Bengal", "Pin 734011", "& also At", "Jadavpur, Kolkata"]}
            />
          </div>
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} Dr. Suranjana Roy. All rights reserved.</p>
            <p>WBDC Reg. No. 7324-A</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ icon: Icon, title, sub, meta }: { icon: any; title: string; sub: string; meta: string }) {
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
}

function ContactItem({ icon: Icon, title, lines }: { icon: any; title: string; lines: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-4 w-4 text-white/70" />
        <h4 className="font-semibold text-sm uppercase tracking-wider text-white/90">{title}</h4>
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
}

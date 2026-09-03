import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import appCss from "../styles.css?url";
import heroImg from "../assets/dr-suranjana-hero.jpg";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "mx8RIjv2BAEyS-qdJhci7J5CfennRMWj6gn6gU2-laA",
        },
        {
          title:
            "Dr. Suranjana Roy | Onco Surgeon & Maxillofacial Specialist in Kolkata & Siliguri",
        },
        {
          name: "description",
          content:
            "Consult Dr. Suranjana Roy, an expert Oral & Maxillofacial Surgeon and Cancer Doctor in Kolkata and Siliguri, specializing in head and neck oncosurgery and jaw reconstruction.",
        },
        { name: "author", content: "Dr. Suranjana Roy" },
        {
          property: "og:title",
          content: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon",
        },
        {
          property: "og:description",
          content:
            "Specialist care in oral surgery, head & neck oncosurgery and comprehensive dentistry.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Dr. Suranjana Roy" },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon",
        },
        {
          name: "twitter:description",
          content:
            "Specialist care in oral surgery, head & neck oncosurgery and comprehensive dentistry.",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Suranjana Roy",
            medicalSpecialty: ["OralAndMaxillofacialSurgery", "Oncologic"],
            url: "https://dr-suranajana-roy.vercel.app/",
            telephone: "+91-7980103899",
            email: "drsuranjanaroy@gmail.com",
            address: [
              {
                "@type": "PostalAddress",
                addressLocality: "Siliguri",
                addressRegion: "West Bengal",
                postalCode: "734011",
                addressCountry: "IN",
              },
              {
                "@type": "PostalAddress",
                addressLocality: "Jadavpur",
                addressRegion: "Kolkata, West Bengal",
                addressCountry: "IN",
              },
            ],
            areaServed: ["Siliguri", "Kolkata", "West Bengal"],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does a head and neck onco surgeon do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A head and neck onco surgeon is a cancer specialist who diagnoses and surgically treats tumours of the mouth, jaw, throat, salivary glands and face. Dr. Suranjana Roy, an MDS Oral & Maxillofacial Surgeon, performs cancer removal (resection) of oral and jaw tumours, neck lymph-node dissection, and reconstruction of the jaw and face after tumour removal — restoring both function and appearance.",
                },
              },
              {
                "@type": "Question",
                name: "When should I consult an oral cancer doctor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "See an oral cancer doctor promptly if you notice a mouth ulcer that hasn't healed in more than 2–3 weeks, a red or white patch inside the cheek, tongue or gums, a lump in the jaw or neck, loose teeth without gum disease, difficulty or pain when swallowing, unexplained bleeding from the mouth, or numbness of the lip or chin. Early detection dramatically improves outcomes — when in doubt, get it examined.",
                },
              },
              {
                "@type": "Question",
                name: "Does Dr. Suranjana Roy consult in Kolkata?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Dr. Suranjana Roy consults at two locations in West Bengal — Siliguri (Pin 734011) and Jadavpur, Kolkata. You can request an appointment at either location through the Book Appointment form on this site or by calling +91 7980103899.",
                },
              },
            ],
          }),
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts and resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          media="print"
          onLoad="this.media='all'"
        />

        {/* Preload hero image */}
        <link rel="preload" as="image" href={heroImg} fetchPriority="high" />

        <HeadContent />
      </head>
      <body>
        {children}
        <Analytics />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Outlet />
      </main>
    </QueryClientProvider>
  );
}

import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { S as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-Duwq22CQ.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon" },
      { name: "description", content: "Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon — specialist care in oral surgery, head & neck oncosurgery and general dentistry." },
      { name: "author", content: "Dr. Suranjana Roy" },
      { property: "og:title", content: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon" },
      { property: "og:description", content: "Specialist care in oral surgery, head & neck oncosurgery and comprehensive dentistry." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dr. Suranjana Roy" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon" },
      { name: "twitter:description", content: "Specialist care in oral surgery, head & neck oncosurgery and comprehensive dentistry." }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Suranjana Roy",
          medicalSpecialty: ["OralAndMaxillofacialSurgery", "Oncologic"],
          url: "https://dr-suranjana-roy.lovable.app",
          areaServed: ["Siliguri", "Kolkata", "West Bengal"]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$3 = () => import("./book-appointment-BoiaCjoA.mjs");
const Route$3 = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [{
      title: "Book Appointment — Dr. Suranjana Roy"
    }, {
      name: "description",
      content: "Request a consultation with Dr. Suranjana Roy, MDS Oral & Maxillofacial Surgeon, Siliguri."
    }, {
      property: "og:title",
      content: "Book Appointment — Dr. Suranjana Roy"
    }, {
      property: "og:description",
      content: "Schedule a consultation with Dr. Suranjana Roy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-BUY1ChFq.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon"
    }, {
      name: "description",
      content: "MDS Oral & Maxillofacial Surgeon specializing in head & neck oncosurgery, maxillofacial reconstruction and general dentistry. Siliguri, West Bengal."
    }, {
      property: "og:title",
      content: "Dr. Suranjana Roy — Oral & Maxillofacial Surgeon"
    }, {
      property: "og:description",
      content: "Specialist care in oral surgery, head & neck oncosurgery and comprehensive dentistry."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./case-studies.index-DidMsNWw.mjs");
const Route$1 = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [{
      title: "Case Studies — Dr. Suranjana Roy"
    }, {
      name: "description",
      content: "Selected clinical case studies in oral & maxillofacial surgery and head & neck oncology by Dr. Suranjana Roy."
    }, {
      property: "og:title",
      content: "Case Studies — Dr. Suranjana Roy"
    }, {
      property: "og:description",
      content: "Selected clinical cases in oral & maxillofacial surgery."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const img1 = "/assets/schwannoma-1-clinical-BCarsgbw.jpg";
const img2 = "/assets/schwannoma-2-mri-BySlGZrq.jpg";
const img3 = "/assets/schwannoma-3-intraop-DvpBwOy4.jpg";
const img4 = "/assets/schwannoma-4-specimen-C_rB6bdJ.jpg";
const img5 = "/assets/schwannoma-5-surgical-bed-CWd5_btE.jpg";
const caseStudies = [
  {
    slug: "right-neck-schwannoma",
    category: "Head & Neck Oncology",
    title: "Right-sided Neck Schwannoma",
    subtitle: "Complete extracapsular excision of a vagal schwannoma in the right carotid space",
    summary: "A 44-year-old male presented with a progressively enlarging right-sided neck swelling. Imaging and FNAC suggested a neurogenic tumour within the carotid space. Complete extracapsular excision was performed with preservation of the vagus nerve and adjacent neurovascular structures.",
    patient: {
      age: "44 years",
      sex: "Male",
      presentation: "Right-sided neck swelling, diffuse, mobile, non-tender at level II",
      duration: "Progressive enlargement over 2 months"
    },
    diagnosis: {
      findings: [
        "Diffuse, mobile, non-tender right level II neck mass",
        "Cranial nerves intact, no respiratory or deglutition distress",
        "Adequate mouth opening, no neurological deficit"
      ],
      investigations: [
        {
          name: "Ultrasonography (USG)",
          result: "Well-circumscribed hypoechoic lesion 23.2 × 16.2 × 20.6 mm, located in the right vascular space between the common carotid artery and internal jugular vein, superior to the carotid bifurcation."
        },
        {
          name: "MRI Neck (plain)",
          result: "Altered intensity SOL measuring ~23 × 22 × 27 mm. Hypointense on T1, hyperintense on T2/STIR — a characteristic profile for neurogenic tumours. No compression of surrounding structures."
        },
        {
          name: "FNAC",
          result: "Spindle cells with wavy, cigar-shaped nuclei and distinct nuclear palisading. No malignant cells. Consistent with a mesenchymal neoplasm cytomorphologically resembling schwannoma."
        }
      ],
      conclusion: "Radiological and cytological features were consistent with a schwannoma of the right vagus nerve within the carotid space."
    },
    treatment: [
      {
        step: "Pre-operative planning",
        detail: "Multidisciplinary review of imaging to define the relationship of the lesion to the carotid artery, internal jugular vein and vagus nerve. Anaesthetic and neuromonitoring plan finalised."
      },
      {
        step: "Surgical approach",
        detail: "Under general anaesthesia, an anterior cervical approach along the medial border of the sternocleidomastoid was used to expose the carotid sheath."
      },
      {
        step: "Tumour identification & dissection",
        detail: "A medium-sized, globular, smooth, well-encapsulated mass arising from the vagus nerve was identified. Careful sharp and blunt dissection preserved the carotid artery, IJV and adjacent nerve fascicles."
      },
      {
        step: "Extracapsular enucleation",
        detail: "The tumour was excised in toto via extracapsular enucleation. Gross specimen measured approximately 2.7 cm, firm with a characteristic fleshy reddish-tan appearance."
      },
      {
        step: "Post-operative care",
        detail: "IV antibiotics and corticosteroids were administered to minimise neural oedema. Drain monitoring and early voice/swallow assessment were performed."
      }
    ],
    outcomes: [
      "Complete excision achieved with negative gross margins",
      "Vagus nerve continuity preserved — no vocal cord paralysis",
      "No Horner's syndrome on follow-up",
      "Uneventful post-operative recovery and return to normal activity"
    ],
    discussion: "Schwannomas are encapsulated nerve sheath tumours with a biphasic Antoni A / Antoni B architecture. Surgical enucleation is the treatment of choice; given proximity to the carotid artery and internal jugular vein, meticulous dissection is mandatory to avoid neurovascular injury.",
    gallery: [
      { src: img1, caption: "Figure 1 — Pre-operative clinical photograph showing a well-defined right neck swelling." },
      { src: img2, caption: "Figure 2 — MRI neck (sagittal, coronal, axial): well-circumscribed hyperintense lesion." },
      { src: img3, caption: "Figure 3 — Intraoperative view of the well-defined, globular schwannoma during dissection." },
      { src: img4, caption: "Figure 4 — Gross specimen of the excised schwannoma (~2.7 cm)." },
      { src: img5, caption: "Figure 5 — Surgical bed after total enucleation, with preserved surrounding structures." }
    ]
  },
  {
    slug: "odontogenic-keratocyst",
    category: "Maxillofacial Pathology",
    title: "Odontogenic Keratocyst with Segmental Resection",
    subtitle: "Aggressive recurrent OKC of the posterior mandible managed with segmental mandibulectomy",
    summary: "A patient with a large recurrent odontogenic keratocyst involving the posterior mandible, with cortical perforation and tooth displacement on imaging, underwent segmental mandibulectomy with primary reconstruction.",
    patient: {
      age: "Adult",
      sex: "—",
      presentation: "Recurrent posterior mandibular swelling with cortical expansion",
      duration: "Recurrent lesion, multi-year history"
    },
    diagnosis: {
      findings: [
        "Posterior mandibular swelling with cortical expansion",
        "Tooth displacement on clinical and radiographic examination"
      ],
      investigations: [
        { name: "OPG / CBCT", result: "Large multilocular radiolucent lesion with cortical perforation and tooth displacement." },
        { name: "Incisional biopsy", result: "Parakeratinised stratified squamous epithelium with palisaded basal layer — consistent with odontogenic keratocyst." }
      ],
      conclusion: "Recurrent odontogenic keratocyst with aggressive radiological features, requiring resection rather than enucleation alone."
    },
    treatment: [
      { step: "Multidisciplinary planning", detail: "Resection margins and reconstruction strategy planned based on CBCT." },
      { step: "Segmental mandibulectomy", detail: "Segmental resection of the involved mandibular segment with adequate margins." },
      { step: "Primary reconstruction", detail: "Reconstruction to restore mandibular continuity, occlusion and facial contour." },
      { step: "Histopathology", detail: "Final histopathology confirmed odontogenic keratocyst with clear margins." }
    ],
    outcomes: [
      "No recurrence at 12-month follow-up",
      "Restored mandibular continuity and function",
      "Acceptable aesthetic outcome"
    ],
    gallery: []
  },
  {
    slug: "verrucous-carcinoma-buccal",
    category: "Head & Neck Oncology",
    title: "Verrucous Carcinoma of the Buccal Mucosa",
    subtitle: "Wide local excision with buccal pad of fat reconstruction for an early-stage exophytic lesion",
    summary: "Middle-aged patient with a long-standing exophytic buccal lesion, clinically consistent with verrucous carcinoma. Managed with wide local excision and reconstruction using a buccal pad of fat flap.",
    patient: {
      age: "Middle-aged",
      sex: "—",
      presentation: "Long-standing exophytic lesion of the right buccal mucosa",
      duration: "Chronic, slow-growing"
    },
    diagnosis: {
      findings: ["Well-defined exophytic, warty lesion of right buccal mucosa"],
      investigations: [
        { name: "Incisional biopsy", result: "Verrucous carcinoma — locally invasive variant of squamous cell carcinoma." },
        { name: "Imaging", result: "No deep muscle invasion or nodal involvement on imaging." }
      ],
      conclusion: "Early-stage verrucous carcinoma suitable for wide local excision with local flap reconstruction."
    },
    treatment: [
      { step: "Wide local excision", detail: "Excision with adequate clinical margins under general anaesthesia." },
      { step: "Reconstruction", detail: "Buccal pad of fat flap mobilised to cover the defect, avoiding free-flap morbidity for an early lesion." },
      { step: "Histopathology review", detail: "Margins reviewed; confirmed tumour-free." }
    ],
    outcomes: [
      "Tumour-free margins on histopathology",
      "Normal mouth opening preserved",
      "Excellent functional and aesthetic outcome"
    ],
    gallery: []
  },
  {
    slug: "panfacial-trauma-reconstruction",
    category: "Reconstructive Surgery",
    title: "Pan-facial Fracture Reconstruction",
    subtitle: "Sequential ORIF for pan-facial fractures following a road traffic accident",
    summary: "Polytrauma patient with pan-facial fractures involving the zygomatic complex, naso-orbito-ethmoid region and mandible, managed with sequential open reduction and internal fixation following the 'bottom-up, outside-in' principle.",
    patient: {
      age: "Adult",
      sex: "—",
      presentation: "Pan-facial fractures with malocclusion and facial asymmetry after RTA",
      duration: "Acute trauma"
    },
    diagnosis: {
      findings: ["Facial asymmetry", "Malocclusion", "Periorbital ecchymosis", "Mobile mid-face and mandible segments"],
      investigations: [
        { name: "CT face (3D)", result: "Fractures of zygomatic complex, NOE region and mandible with displacement." }
      ],
      conclusion: "Pan-facial trauma requiring staged surgical reconstruction to restore vertical and horizontal buttresses."
    },
    treatment: [
      { step: "Initial stabilisation", detail: "Airway and polytrauma management per ATLS protocol; dental impressions for occlusion." },
      { step: "Mandibular fixation", detail: "ORIF of mandibular fractures to re-establish occlusion as the foundation." },
      { step: "Mid-face reconstruction", detail: "Sequential ORIF of zygomatic and NOE fractures restoring facial buttresses." },
      { step: "Post-operative rehabilitation", detail: "Physiotherapy, occlusal monitoring and staged review." }
    ],
    outcomes: [
      "Restored pre-injury occlusion",
      "Symmetric facial contour and projection",
      "Full return to daily activities"
    ],
    gallery: []
  }
];
const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
const $$splitComponentImporter = () => import("./case-studies._slug-dwgTIqpG.mjs");
const $$splitErrorComponentImporter = () => import("./case-studies._slug-Bb1-Rub7.mjs");
const $$splitNotFoundComponentImporter = () => import("./case-studies._slug-Dn__g5xU.mjs");
const Route = createFileRoute("/case-studies/$slug")({
  loader: ({
    params
  }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.title} — Case Study | Dr. Suranjana Roy`
    }, {
      name: "description",
      content: loaderData.summary.slice(0, 160)
    }, {
      property: "og:title",
      content: `${loaderData.title} — Case Study`
    }, {
      property: "og:description",
      content: loaderData.summary.slice(0, 160)
    }, ...loaderData.gallery[0] ? [{
      property: "og:image",
      content: loaderData.gallery[0].src
    }] : []] : [{
      title: "Case Study — Dr. Suranjana Roy"
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const BookAppointmentRoute = Route$3.update({
  id: "/book-appointment",
  path: "/book-appointment",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const CaseStudiesIndexRoute = Route$1.update({
  id: "/case-studies/",
  path: "/case-studies/",
  getParentRoute: () => Route$4
});
const CaseStudiesSlugRoute = Route.update({
  id: "/case-studies/$slug",
  path: "/case-studies/$slug",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  BookAppointmentRoute,
  CaseStudiesSlugRoute,
  CaseStudiesIndexRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  caseStudies as c,
  router as r
};

import img1 from "@/assets/cases/schwannoma-1-clinical.jpg";
import img2 from "@/assets/cases/schwannoma-2-mri.jpg";
import img3 from "@/assets/cases/schwannoma-3-intraop.jpg";
import img4 from "@/assets/cases/schwannoma-4-specimen.jpg";
import img5 from "@/assets/cases/schwannoma-5-surgical-bed.jpg";

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  patient: { age: string; sex: string; presentation: string; duration: string };
  diagnosis: {
    findings: string[];
    investigations: { name: string; result: string }[];
    conclusion: string;
  };
  treatment: { step: string; detail: string }[];
  outcomes: string[];
  discussion?: string;
  gallery: { src: string; caption: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "right-neck-schwannoma",
    category: "Head & Neck Oncology",
    title: "Right-sided Neck Schwannoma",
    subtitle: "Complete extracapsular excision of a vagal schwannoma in the right carotid space",
    summary:
      "A 44-year-old male presented with a progressively enlarging right-sided neck swelling. Imaging and FNAC suggested a neurogenic tumour within the carotid space. Complete extracapsular excision was performed with preservation of the vagus nerve and adjacent neurovascular structures.",
    patient: {
      age: "44 years",
      sex: "Male",
      presentation: "Right-sided neck swelling, diffuse, mobile, non-tender at level II",
      duration: "Progressive enlargement over 2 months",
    },
    diagnosis: {
      findings: [
        "Diffuse, mobile, non-tender right level II neck mass",
        "Cranial nerves intact, no respiratory or deglutition distress",
        "Adequate mouth opening, no neurological deficit",
      ],
      investigations: [
        {
          name: "Ultrasonography (USG)",
          result:
            "Well-circumscribed hypoechoic lesion 23.2 × 16.2 × 20.6 mm, located in the right vascular space between the common carotid artery and internal jugular vein, superior to the carotid bifurcation.",
        },
        {
          name: "MRI Neck (plain)",
          result:
            "Altered intensity SOL measuring ~23 × 22 × 27 mm. Hypointense on T1, hyperintense on T2/STIR — a characteristic profile for neurogenic tumours. No compression of surrounding structures.",
        },
        {
          name: "FNAC",
          result:
            "Spindle cells with wavy, cigar-shaped nuclei and distinct nuclear palisading. No malignant cells. Consistent with a mesenchymal neoplasm cytomorphologically resembling schwannoma.",
        },
      ],
      conclusion:
        "Radiological and cytological features were consistent with a schwannoma of the right vagus nerve within the carotid space.",
    },
    treatment: [
      {
        step: "Pre-operative planning",
        detail:
          "Multidisciplinary review of imaging to define the relationship of the lesion to the carotid artery, internal jugular vein and vagus nerve. Anaesthetic and neuromonitoring plan finalised.",
      },
      {
        step: "Surgical approach",
        detail:
          "Under general anaesthesia, an anterior cervical approach along the medial border of the sternocleidomastoid was used to expose the carotid sheath.",
      },
      {
        step: "Tumour identification & dissection",
        detail:
          "A medium-sized, globular, smooth, well-encapsulated mass arising from the vagus nerve was identified. Careful sharp and blunt dissection preserved the carotid artery, IJV and adjacent nerve fascicles.",
      },
      {
        step: "Extracapsular enucleation",
        detail:
          "The tumour was excised in toto via extracapsular enucleation. Gross specimen measured approximately 2.7 cm, firm with a characteristic fleshy reddish-tan appearance.",
      },
      {
        step: "Post-operative care",
        detail:
          "IV antibiotics and corticosteroids were administered to minimise neural oedema. Drain monitoring and early voice/swallow assessment were performed.",
      },
    ],
    outcomes: [
      "Complete excision achieved with negative gross margins",
      "Vagus nerve continuity preserved — no vocal cord paralysis",
      "No Horner's syndrome on follow-up",
      "Uneventful post-operative recovery and return to normal activity",
    ],
    discussion:
      "Schwannomas are encapsulated nerve sheath tumours with a biphasic Antoni A / Antoni B architecture. Surgical enucleation is the treatment of choice; given proximity to the carotid artery and internal jugular vein, meticulous dissection is mandatory to avoid neurovascular injury.",
    gallery: [
      { src: img1, caption: "Figure 1 — Pre-operative clinical photograph showing a well-defined right neck swelling." },
      { src: img2, caption: "Figure 2 — MRI neck (sagittal, coronal, axial): well-circumscribed hyperintense lesion." },
      { src: img3, caption: "Figure 3 — Intraoperative view of the well-defined, globular schwannoma during dissection." },
      { src: img4, caption: "Figure 4 — Gross specimen of the excised schwannoma (~2.7 cm)." },
      { src: img5, caption: "Figure 5 — Surgical bed after total enucleation, with preserved surrounding structures." },
    ],
  },
  {
    slug: "odontogenic-keratocyst",
    category: "Maxillofacial Pathology",
    title: "Odontogenic Keratocyst with Segmental Resection",
    subtitle: "Aggressive recurrent OKC of the posterior mandible managed with segmental mandibulectomy",
    summary:
      "A patient with a large recurrent odontogenic keratocyst involving the posterior mandible, with cortical perforation and tooth displacement on imaging, underwent segmental mandibulectomy with primary reconstruction.",
    patient: {
      age: "Adult",
      sex: "—",
      presentation: "Recurrent posterior mandibular swelling with cortical expansion",
      duration: "Recurrent lesion, multi-year history",
    },
    diagnosis: {
      findings: [
        "Posterior mandibular swelling with cortical expansion",
        "Tooth displacement on clinical and radiographic examination",
      ],
      investigations: [
        { name: "OPG / CBCT", result: "Large multilocular radiolucent lesion with cortical perforation and tooth displacement." },
        { name: "Incisional biopsy", result: "Parakeratinised stratified squamous epithelium with palisaded basal layer — consistent with odontogenic keratocyst." },
      ],
      conclusion: "Recurrent odontogenic keratocyst with aggressive radiological features, requiring resection rather than enucleation alone.",
    },
    treatment: [
      { step: "Multidisciplinary planning", detail: "Resection margins and reconstruction strategy planned based on CBCT." },
      { step: "Segmental mandibulectomy", detail: "Segmental resection of the involved mandibular segment with adequate margins." },
      { step: "Primary reconstruction", detail: "Reconstruction to restore mandibular continuity, occlusion and facial contour." },
      { step: "Histopathology", detail: "Final histopathology confirmed odontogenic keratocyst with clear margins." },
    ],
    outcomes: [
      "No recurrence at 12-month follow-up",
      "Restored mandibular continuity and function",
      "Acceptable aesthetic outcome",
    ],
    gallery: [],
  },
  {
    slug: "verrucous-carcinoma-buccal",
    category: "Head & Neck Oncology",
    title: "Verrucous Carcinoma of the Buccal Mucosa",
    subtitle: "Wide local excision with buccal pad of fat reconstruction for an early-stage exophytic lesion",
    summary:
      "Middle-aged patient with a long-standing exophytic buccal lesion, clinically consistent with verrucous carcinoma. Managed with wide local excision and reconstruction using a buccal pad of fat flap.",
    patient: {
      age: "Middle-aged",
      sex: "—",
      presentation: "Long-standing exophytic lesion of the right buccal mucosa",
      duration: "Chronic, slow-growing",
    },
    diagnosis: {
      findings: ["Well-defined exophytic, warty lesion of right buccal mucosa"],
      investigations: [
        { name: "Incisional biopsy", result: "Verrucous carcinoma — locally invasive variant of squamous cell carcinoma." },
        { name: "Imaging", result: "No deep muscle invasion or nodal involvement on imaging." },
      ],
      conclusion: "Early-stage verrucous carcinoma suitable for wide local excision with local flap reconstruction.",
    },
    treatment: [
      { step: "Wide local excision", detail: "Excision with adequate clinical margins under general anaesthesia." },
      { step: "Reconstruction", detail: "Buccal pad of fat flap mobilised to cover the defect, avoiding free-flap morbidity for an early lesion." },
      { step: "Histopathology review", detail: "Margins reviewed; confirmed tumour-free." },
    ],
    outcomes: [
      "Tumour-free margins on histopathology",
      "Normal mouth opening preserved",
      "Excellent functional and aesthetic outcome",
    ],
    gallery: [],
  },
  {
    slug: "panfacial-trauma-reconstruction",
    category: "Reconstructive Surgery",
    title: "Pan-facial Fracture Reconstruction",
    subtitle: "Sequential ORIF for pan-facial fractures following a road traffic accident",
    summary:
      "Polytrauma patient with pan-facial fractures involving the zygomatic complex, naso-orbito-ethmoid region and mandible, managed with sequential open reduction and internal fixation following the 'bottom-up, outside-in' principle.",
    patient: {
      age: "Adult",
      sex: "—",
      presentation: "Pan-facial fractures with malocclusion and facial asymmetry after RTA",
      duration: "Acute trauma",
    },
    diagnosis: {
      findings: ["Facial asymmetry", "Malocclusion", "Periorbital ecchymosis", "Mobile mid-face and mandible segments"],
      investigations: [
        { name: "CT face (3D)", result: "Fractures of zygomatic complex, NOE region and mandible with displacement." },
      ],
      conclusion: "Pan-facial trauma requiring staged surgical reconstruction to restore vertical and horizontal buttresses.",
    },
    treatment: [
      { step: "Initial stabilisation", detail: "Airway and polytrauma management per ATLS protocol; dental impressions for occlusion." },
      { step: "Mandibular fixation", detail: "ORIF of mandibular fractures to re-establish occlusion as the foundation." },
      { step: "Mid-face reconstruction", detail: "Sequential ORIF of zygomatic and NOE fractures restoring facial buttresses." },
      { step: "Post-operative rehabilitation", detail: "Physiotherapy, occlusal monitoring and staged review." },
    ],
    outcomes: [
      "Restored pre-injury occlusion",
      "Symmetric facial contour and projection",
      "Full return to daily activities",
    ],
    gallery: [],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

import {
  Activity,
  Scissors,
  Smile,
  Sparkles,
  Stethoscope,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface ServiceSection {
  title: string;
  body: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  /** One-line summary shown directly under the card title when expanded */
  tagline: string;
  /** Labeled image placeholders for device / equipment / procedure photos */
  imagePlaceholders: string[];
  sections: ServiceSection[];
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    id: "maxillofacial-surgery",
    icon: Scissors,
    title: "Oral & Maxillofacial Surgery",
    shortDesc:
      "Surgical management of conditions affecting the face, jaws, and oral cavity.",
    tagline:
      "Specialist surgery of the jaw, mouth and face — from wisdom teeth and jaw cysts to facial trauma and reconstruction.",
    imagePlaceholders: [
      "Surgical instrument set — maxillofacial procedures",
      "Facial fracture fixation (titanium plates & screws)",
      "Wisdom tooth (third molar) surgical extraction",
    ],
    sections: [
      {
        title: "What is oral and maxillofacial surgery?",
        body: "Oral and maxillofacial surgery is the surgical speciality of the face, jaws and mouth. It covers everything from wisdom-tooth removal and dental implant surgery to corrective jaw surgery, facial trauma reconstruction, and the treatment of jaw cysts and tumours. As an MDS-qualified surgeon, Dr. Suranjana Roy performs these procedures with a combination of dental and medical surgical training — the precise qualification this anatomy demands.",
      },
      {
        title: "Conditions treated",
        body: "Common conditions include impacted wisdom teeth causing pain, swelling or infection; jaw cysts such as odontogenic keratocyst (OKC) and radicular cysts; benign jaw tumours including ameloblastoma and schwannoma; temporomandibular joint (TMJ) disorders causing jaw pain and clicking; facial and jaw fractures from accidents; and oral submucous fibrosis and other conditions requiring specialist biopsy. Persistent jaw pain, swelling, or a tooth that has been loose without cause should be examined sooner rather than later.",
      },
      {
        title: "Surgical procedures",
        body: "Procedures range from minor oral surgery — extractions, biopsies, frenectomies — to major reconstructive work. This includes segmental resection and reconstruction for aggressive jaw cysts and tumours (a subject of Dr. Roy's published case report on managing odontogenic keratocyst), open and closed reduction of facial fractures, preprosthetic surgery to prepare the jaw for dentures and implants, and the full range of diagnostic and therapeutic surgery of the oral cavity. Each plan is made after proper clinical and radiographic assessment.",
      },
      {
        title: "Care in Siliguri and Kolkata",
        body: "Dr. Suranjana Roy (MDS, WBDC Reg. No. 7324-A) consults in Siliguri (Pin 734011) and at Jadavpur, Kolkata, with hospital training that includes maxillofacial and surgical care observerships at Desun Hospital, Kolkata, and head and neck oncology at Chittaranjan National Cancer Institute (CNCI). Whether your concern is a painful wisdom tooth or a complex jaw condition, you receive the same specialist-led assessment, honest explanation and unhurried counselling.",
      },
    ],
    faqs: [
      {
        q: "How are facial fractures repaired?",
        a: "Broken bones of the face — such as the jaw, cheekbones or eye sockets — are carefully realigned and typically secured using small, specialized titanium plates and screws to ensure proper healing and facial symmetry.",
      },
      {
        q: "Are jaw cysts and tumours always cancerous?",
        a: "No — the majority of jaw cysts and tumours are benign (non-cancerous). However, they are usually removed to prevent them from expanding and causing damage to the surrounding jawbone or displacing healthy teeth.",
      },
      {
        q: "Why do wisdom teeth often need to be extracted?",
        a: "Most jaws lack the space to accommodate wisdom teeth. This can cause the teeth to become impacted (trapped in the gums), infected, or to emerge at awkward angles that crowd or damage adjacent teeth.",
      },
      {
        q: "When is TMJ surgery recommended?",
        a: "Surgery on the temporomandibular joint is typically reserved for severe cases involving chronic jaw pain, restricted movement, or significant structural damage — usually after non-surgical treatments like physical therapy or mouthguards have failed.",
      },
    ],
  },
  {
    id: "head-and-neck-oncosurgery",
    icon: Activity,
    title: "Head & Neck Oncosurgery",
    shortDesc:
      "Comprehensive surgical treatment for cancers of the head and neck region. Expert care from a dedicated oral cancer doctor.",
    tagline:
      "Specialist surgical care for cancers of the mouth, jaw, throat and face — combining precise tumour removal with immediate reconstruction.",
    imagePlaceholders: [
      "Head & neck surgical procedure — tumour resection",
      "Neck dissection — lymph node removal",
      "Jaw reconstruction with bone / soft tissue flap",
    ],
    sections: [
      {
        title: "What is head and neck oncosurgery?",
        body: "Head and neck oncosurgery is the surgical treatment of cancer affecting the mouth (oral cavity), tongue, jaw bones, throat, salivary glands, and the skin and soft tissues of the face and neck. The goal of surgery is complete removal of the tumour with a safe margin of healthy tissue — the single most important factor in preventing the cancer from coming back. As a dedicated oral cancer doctor, Dr. Suranjana Roy combines precise tumour removal with immediate reconstruction, so patients leave surgery with the best possible outcome in both function and appearance.",
      },
      {
        title: "Conditions treated",
        body: "Oral cavity cancers — cancers of the tongue, cheek (buccal mucosa), floor of the mouth, gums and palate — are among the most common cancers in India, strongly linked to tobacco, betel nut (paan) and alcohol use. Dr. Roy also surgically treats jaw tumours and cysts, verrucous carcinoma, salivary gland tumours, and suspicious pre-cancerous lesions such as leukoplakia (white patches) and erythroplakia (red patches). A persistent ulcer, patch or lump in the mouth should always be examined early — oral cancer is highly curable when caught in time.",
      },
      {
        title: "The surgical procedures",
        body: "Depending on the type, location and stage of the tumour, treatment may include wide local excision for small, early tumours; composite resection for advanced jaw cancers, removing the involved bone with a margin; neck dissection to remove affected lymph nodes through which cancer can spread; and reconstructive surgery — rebuilding the jaw or cheek using bone or soft tissue flaps — performed in the same sitting. Every surgical plan is backed by histopathological diagnosis, imaging (CT/MRI) and, where appropriate, multidisciplinary discussion with medical and radiation oncologists.",
      },
      {
        title: "Why choose Dr. Suranjana Roy",
        body: "Dr. Suranjana Roy (MDS, WBDC Reg. No. 7324-A) is an Oral & Maxillofacial Surgeon with dedicated training in head and neck surgical oncology, including a clinical observership at Chittaranjan National Cancer Institute (CNCI), Kolkata, and published academic work on nodal staging of oral cancer and the management of odontogenic keratocyst with segmental resection. She consults in Siliguri and at Jadavpur, Kolkata, offering specialist-led cancer care with clear communication, honest counselling and compassionate, patient-first treatment.",
      },
    ],
    faqs: [
      {
        q: "Is mouth cancer curable?",
        a: "Yes — especially when detected early. Stage I and II oral cancers are curable in the large majority of patients with surgery alone. Advanced cancers are also treatable with a combination of surgery, radiation and chemotherapy. This is why any non-healing ulcer or persistent patch in the mouth deserves a prompt specialist examination.",
      },
      {
        q: "Will I need reconstruction after jaw cancer surgery?",
        a: "In most jaw (mandibular) resections, yes — and it is usually done in the same operation. Reconstruction restores chewing, speech and facial contour, and is planned together with the cancer removal.",
      },
      {
        q: "How soon after diagnosis should surgery happen?",
        a: "Oral cancer surgery is time-sensitive — tumours grow week by week. Once staging is complete, surgery is typically scheduled without unnecessary delay. If you have a biopsy-confirmed diagnosis, book a consultation as early as possible.",
      },
    ],
  },
  {
    id: "general-dentistry",
    icon: Smile,
    title: "General Dentistry",
    shortDesc:
      "Routine examinations, cleanings and preventive care for lifelong oral health.",
    tagline:
      "Preventive, routine and family dental care — the foundation everything else is built on.",
    imagePlaceholders: [
      "Dental examination — routine check-up",
      "Ultrasonic scaling / cleaning equipment",
      "Intraoral camera & diagnostic imaging",
    ],
    sections: [
      {
        title: "What general dentistry covers",
        body: "General dentistry is the day-to-day care that keeps your mouth healthy: routine examinations, professional cleanings (scaling), cavity fillings, fluoride application, and early detection of problems before they become painful or expensive. For a surgeon like Dr. Suranjana Roy, general dentistry is also where suspicious lesions, gum disease and early oral cancer signs are most often first spotted — every check-up includes a full soft-tissue screening of the mouth, tongue and neck.",
      },
      {
        title: "Why routine visits matter",
        body: "Most dental problems — decay, gum disease, oral submucous fibrosis, even early oral cancer — are painless or invisible in their early stages. A six-monthly examination catches them while treatment is simple, quick and inexpensive. Tobacco and paan users in particular benefit from regular specialist screening, since they carry a much higher risk of pre-cancerous changes in the mouth.",
      },
      {
        title: "Care for the whole family",
        body: "From children's first dental visits to senior care, Dr. Roy's practice in Siliguri and Jadavpur, Kolkata offers unhurried examinations, honest advice on what does and does not need treatment, and a preventive plan tailored to your risk factors — diet, oral hygiene, tobacco and alcohol use, and existing dental work.",
      },
    ],
    faqs: [
      {
        q: "How often should I get a dental check-up?",
        a: "For most people, every six months. If you use tobacco, paan or alcohol, or have a history of gum disease, more frequent visits (every 3–4 months) are recommended because your risk of both gum disease and oral cancer is higher.",
      },
      {
        q: "Does scaling (cleaning) damage teeth?",
        a: "No — this is a common myth. Professional ultrasonic scaling removes tartar and stain that brushing cannot, and is completely safe for enamel. In fact, regular cleaning is the single best way to prevent gum disease and loose teeth later in life.",
      },
    ],
  },
  {
    id: "endodontic-treatment",
    icon: Stethoscope,
    title: "Endodontic Treatment",
    shortDesc:
      "Precision root canal therapy to save and restore compromised teeth.",
    tagline:
      "Root canal therapy that relieves pain and saves your natural tooth.",
    imagePlaceholders: [
      "Root canal procedure — working under rubber dam isolation",
      "Rotary endodontic instruments (endomotor & files)",
      "Digital apex locator & intraoperative X-ray imaging",
    ],
    sections: [
      {
        title: "What is endodontics?",
        body: "Endodontics treats the inside of the tooth — the pulp, where the nerves and blood vessels live. When deep decay, a crack or trauma infects the pulp, the result is the classic severe toothache, often with night pain and sensitivity to hot and cold. Root canal treatment removes the infected pulp, cleans and shapes the root canals, and seals them so the infection cannot return — saving a tooth that would otherwise need extraction.",
      },
      {
        title: "Modern, comfortable root canal care",
        body: "Contrary to its reputation, root canal treatment performed promptly relieves pain rather than causing it. Dr. Roy uses contemporary techniques — rotary instrumentation, electronic working-length measurement and intraoperative radiographs — to make treatment precise, efficient and as comfortable as possible. Most teeth are finished in one or two visits and are then restored with a filling or crown for long-term strength.",
      },
      {
        title: "When a tooth needs endodontic care",
        body: "Watch for deep or throbbing pain, pain that wakes you at night, prolonged sensitivity to hot or cold, a pimple or swelling on the gum near a tooth, or a tooth that has darkened after an injury. Any of these can mean the pulp is inflamed or infected. Early treatment not only saves the tooth — it prevents infection spreading to the jaw bone.",
      },
    ],
    faqs: [
      {
        q: "Is root canal treatment painful?",
        a: "No — with modern local anaesthesia, the procedure itself feels no different from getting a filling. Most patients come in with pain and leave without it. Mild soreness for a day or two after treatment is normal and settles with simple painkillers.",
      },
      {
        q: "How many visits does a root canal take?",
        a: "Many teeth can be completed in a single visit; more complex teeth (molars with multiple canals, or re-treatments) may need two. The tooth is then capped with a crown or onlay to protect it from fracture.",
      },
    ],
  },
  {
    id: "restorative-dentistry",
    icon: Wrench,
    title: "Restorative Dentistry",
    shortDesc:
      "Fillings, crowns and reconstruction to restore form and function.",
    tagline:
      "Rebuilding damaged and missing tooth structure — fillings, crowns, bridges and implants.",
    imagePlaceholders: [
      "Tooth-coloured composite filling procedure",
      "Dental crown preparation & cementation",
      "Bridge / implant prosthesis components",
    ],
    sections: [
      {
        title: "What restorative dentistry includes",
        body: "Restorative dentistry returns damaged teeth to full function and natural appearance: tooth-coloured composite fillings for decay and fractures; crowns (caps) that protect root-canal-treated or heavily filled teeth; bridges and implant-supported restorations that replace missing teeth; and inlays/onlays for larger defects. The goal is always the same — restore chewing, speech and smile confidence with restorations that look and feel like natural teeth.",
      },
      {
        title: "Why restoring a tooth early matters",
        body: "A tooth that is chipped, decayed or lost is not just a cosmetic issue. Untreated damage progresses — decay deepens into the nerve, fractured cusps split the tooth, and a missing tooth lets its neighbours tilt and drift, changing the bite. Restoring promptly keeps treatment simple and prevents a small problem becoming an extraction. Dr. Roy's surgical background also means complex cases — teeth needing crown-lengthening or bone work before restoration — are handled under one roof.",
      },
      {
        title: "Materials and choices",
        body: "You will be offered honest guidance on material options — composite, ceramic, zirconia or metal-ceramic — with the pros, costs and longevity of each explained clearly. Every restoration is matched to your bite and shade, so the result is comfortable and visually indistinguishable from your natural teeth.",
      },
    ],
    faqs: [
      {
        q: "How long do crowns and fillings last?",
        a: "With good oral hygiene and regular check-ups, composite fillings typically last 7–10 years and ceramic or zirconia crowns 10–15 years or more. Night-grinders may need a protective night guard to maximise lifespan.",
      },
      {
        q: "What happens if I don't replace a missing tooth?",
        a: "The neighbouring teeth tilt into the gap and the opposing tooth over-erupts, gradually destabilising the bite. Bone in the gap also shrinks over time. Replacing a lost tooth — with a bridge or implant — protects the teeth around it.",
      },
    ],
  },
  {
    id: "aesthetic-prosthetic-rehabilitation",
    icon: Sparkles,
    title: "Aesthetic & Prosthetic Rehabilitation",
    shortDesc:
      "Cosmetic and prosthetic solutions for a confident, natural smile.",
    tagline:
      "Complete smile rehabilitation — from cosmetic refinement to full-mouth prosthetic reconstruction.",
    imagePlaceholders: [
      "Smile design — before & after aesthetic case",
      "Complete / partial denture prosthesis",
      "Full-mouth rehabilitation — prosthetic work-up",
    ],
    sections: [
      {
        title: "What aesthetic and prosthetic rehabilitation means",
        body: "Aesthetic and prosthetic rehabilitation is the branch of dentistry that restores — or transforms — the appearance and function of the smile. It ranges from cosmetic treatments such as tooth-coloured bonding, veneers, teeth whitening and aesthetic contouring, to complete prosthetic reconstruction: full and partial dentures, implant-supported crowns and bridges, and full-mouth rehabilitation for patients who have lost many teeth to decay, gum disease or surgery.",
      },
      {
        title: "Rebuilding after surgery or trauma",
        body: "This is where Dr. Suranjana Roy's dual training in maxillofacial surgery and prosthodontic rehabilitation matters most. Patients who have lost teeth, jaw structure or facial contour after cancer resection, trauma or long-standing dental disease often need more than routine dentistry — they need a surgical-prosthetic plan. Dr. Roy combines reconstructive surgery with prosthetic design so the final result restores chewing, speech, facial support and a natural appearance, not just individual teeth.",
      },
      {
        title: "How your smile plan is made",
        body: "Rehabilitation begins with a full assessment — photographs, radiographs, study models and a discussion of your goals and budget. You see and approve the plan before treatment starts: what will be done, in what sequence, what it will look like and what it will cost. Whether the treatment is a single veneer or a full-mouth reconstruction, the aim is a result you can chew with, speak with and smile with, confidently.",
      },
    ],
    faqs: [
      {
        q: "Can I get dentures if I've had jaw surgery?",
        a: "Yes. In fact, prosthetic rehabilitation after jaw or cancer surgery is a special interest of the practice. The denture or prosthesis is designed around the changed anatomy, sometimes with implant support, so it stays stable and restores both function and facial contour.",
      },
      {
        q: "How long does full-mouth rehabilitation take?",
        a: "It depends on complexity — a straightforward plan may finish in a few weeks over several visits; cases involving surgery or implants are staged over a few months to let healing occur between phases. Every stage and timeline is explained before you begin.",
      },
    ],
  },
];

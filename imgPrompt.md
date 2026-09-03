# Image Prompts — Services Page (`src/routes/services.index.tsx`) — Antigravity Gemini 3.8 Flash

> **Optimized for `Antigravity` + `Gemini 3.8 Flash (image)`**. Generates the 18 placeholders defined in `src/lib/services.ts:45-259` and rendered in the expandable grid at `src/routes/services.index.tsx:169-181` (`sm:grid-cols-3`, `rounded-2xl`, `min-h-32 sm:min-h-40`).

## How to use in Antigravity

1.  Open Antigravity workspace at `D:\Code\Dr-Suranajana-Roy-`.
2.  Select model: **`Gemini 3.8 Flash`** > mode **Image Generation** (`imagen / gemini-native-image` backend). Flash is instruction-tuned for photorealism and fast iteration — prefer **natural language over Midjourney flags** (`--ar`, `--v` are ignored).
3.  Copy the **Gemini Prompt** block for each placeholder. Paste as the `prompt` in Antigravity's Generate panel or via agent tool `generate_image`.
4.  Use **Generation Config** below for every image to keep the 3-column grid cohesive. Generate **4:3** (`1024×768` or `1536×1152` for 3x review), export WebP ~1200px wide to `public/images/services/<service-id>-0<1|2|3>.webp`.
5.  Replace the dashed `ImageIcon` divs at `src/routes/services.index.tsx:170-180` with:
    ```tsx
    <img src="/images/services/<service-id>-01.webp" alt="<alt text>" loading="lazy" className="rounded-2xl object-cover aspect-[4/3] w-full" width={1024} height={768} />
    ```

### Generation Config for Gemini 3.8 Flash (use for ALL 18)

```json
{
  "model": "gemini-3.8-flash-image",
  "aspectRatio": "4:3",
  "imageSize": "1K",
  "style": "photorealistic clinical photography",
  "personGeneration": "allow_adult",
  "safetyFilterLevel": "block_few",
  "seed": 3000
}
```
Keep `seed` fixed (+/- 5) across all 18 for visual consistency. If Antigravity exposes `referenceImages`, add one approved clinic interior as style reference for all.

### Global System Instruction (paste as System / Style Reference in Antigravity)

```
You are generating photorealistic clinical photography for Dr. Suranjana Roy's dental clinic website in India. 
Style: modern Indian multispecialty dental clinic, bright softbox + natural window light, clean white and warm wood interior, shallow depth of field, sharp focus, 8K detail, calm professional mood.
Constraints patient-friendly: NO blood, NO gore, NO open wounds, NO extraction forceps pulling teeth, NO tumour tissue.
Palette: warm white + navy #0f2a3a + teal accent. No text, no watermark, no logo, no cartoon, no 3D render, no oversaturated colors, no cluttered background, no distorted anatomy/hands/teeth.
Lens: 35mm, f/2.8, eye-level or top-down as described.
```

For Gemini 3.8 Flash, negative instructions must be phrased as natural language constraints (`Do not show...`) — included in each prompt below. No `--no` syntax.

**Alt text:** Use the `Alt` line under each prompt for `alt=""` (`services.index.tsx` a11y + SEO).

---

### 1) Oral & Maxillofacial Surgery — `id: maxillofacial-surgery` (`src/lib/services.ts:38`)

#### 1.1 — `Surgical instrument set — maxillofacial procedures` (`src/lib/services.ts:46`)
**File:** `public/images/services/maxillofacial-surgery-01.webp`
**Gemini Prompt:**
```
Create a photorealistic top-down flat lay photograph of a sterilized maxillofacial surgical instrument set arranged on a surgical tray with a blue sterile drape. Include straight and curved forceps, periosteal elevators, surgical scissors, needle holder, scalpel handle, and a small steel bowl containing a titanium mini-plate and 4 microscrews with autoclave-sterile packaging slightly visible. Modern Indian dental surgical operatory, bright clinical softbox lighting, ultra-detailed, sharp focus. Do not show any patient, blood, or open tissue. No text, no watermark.

Alt: Sterilized maxillofacial surgical instrument set on blue sterile drape
```
**Use for:** Non-threatening precision hero — no patient needed.

#### 1.2 — `Facial fracture fixation (titanium plates & screws)` (`src/lib/services.ts:47`)
**File:** `public/images/services/maxillofacial-surgery-02.webp`
**Gemini Prompt:**
```
Create a photorealistic macro studio photograph of a tiny titanium maxillofacial mini-plate and 4 microscrews held gently by surgical tweezers, positioned just above a beige anatomical mandible model. Neutral background, scale clearly visible, precise engineering detail, educational medical model style, shallow depth of field. Do not show blood, incision, or real bone. No text, no watermark.

Alt: Titanium mini-plate and screws for facial fracture fixation on mandible model
```
**Fallback if model unavailable:** Ask Gemini: `...as a clean medical textbook illustration with soft shadows` — but prefer photo of real plate on model.

#### 1.3 — `Wisdom tooth (third molar) surgical extraction` (`src/lib/services.ts:48`)
**File:** `public/images/services/maxillofacial-surgery-03.webp`
**Gemini Prompt:**
```
Create a photorealistic photograph of a female dentist in surgical scrubs and white gloves gently examining a young Indian adult patient's lower jaw with a dental mirror and probe, patient reclined in a modern dental chair looking calm. In the blurred background, a panoramic OPG X-ray on a lightbox clearly shows an impacted wisdom tooth. Bright, reassuring clinic atmosphere, shallow depth of field. Do not show forceps pulling a tooth, blood, or pain expression. No text, no watermark.

Alt: Dentist evaluating impacted wisdom tooth with panoramic X-ray in background
```

---

### 2) Head & Neck Oncosurgery — `id: head-and-neck-oncosurgery` (`src/lib/services.ts:88`)
> Tone: hopeful, expert, non-frightening. Gemini 3.8 Flash is strong at team scenes — never ask for tumour tissue or neck incision.

#### 2.1 — `Head & neck surgical procedure — tumour resection` (`src/lib/services.ts:95`)
**File:** `public/images/services/head-and-neck-oncosurgery-01.webp`
**Gemini Prompt:**
```
Create a photorealistic wide photograph of a head and neck surgical oncology team (3 clinicians in scrubs, surgical caps and masks) collaboratively reviewing a head and neck CT/MRI scan on a large monitor in a modern operating theatre before surgery. Surgical lights overhead, focus on planning and teamwork, not on a patient's body. Professional, calm, and reassuring mood. Do not show tumour, incision, blood, or patient body. No text, no watermark.

Alt: Surgical oncology team reviewing head and neck CT scan in operating theatre
```

#### 2.2 — `Neck dissection — lymph node removal` (`src/lib/services.ts:96`)
**File:** `public/images/services/head-and-neck-oncosurgery-02.webp`
**Gemini Prompt:**
```
Create a photorealistic photograph of a clean anatomical neck model showing neck lymph node levels I through VI with subtle soft-color overlays for each zone, textbook clarity, neutral beige background, studio lighting, medical education style. No incision, no blood, no real patient. No text, no watermark. If labels are needed, keep them minimal and legible.

Alt: Anatomical model showing neck lymph node levels for neck dissection education
```

#### 2.3 — `Jaw reconstruction with bone / soft tissue flap` (`src/lib/services.ts:97`)
**File:** `public/images/services/head-and-neck-oncosurgery-03.webp`
**Gemini Prompt:**
```
Create a photorealistic close-up photograph of a surgeon's gloved hands holding a sterilized 3D-printed mandible reconstruction model with a contoured titanium reconstruction plate fixed to it. Soft clinical background, hope and precision theme, bright softbox lighting, shallow depth of field. Do not show blood or real jaw tissue. No text, no watermark.

Alt: 3D-printed mandible model with titanium reconstruction plate for jaw reconstruction
```

---

### 3) General Dentistry — `id: general-dentistry` (`src/lib/services.ts:134`)

#### 3.1 — `Dental examination — routine check-up` (`src/lib/services.ts:141`)
**File:** `public/images/services/general-dentistry-01.webp`
**Gemini Prompt:**
```
Create a photorealistic photograph of a smiling young Indian adult in a modern dental chair during a routine check-up, with a female dentist in a white coat using a dental mirror and probe. Bright modern clinic with warm wood accents and natural window light, friendly family dentistry atmosphere, shallow depth of field. Do not show pain or clinical waste. No text, no watermark.

Alt: Routine dental examination with dentist and patient in modern clinic
```

#### 3.2 — `Ultrasonic scaling / cleaning equipment` (`src/lib/services.ts:142`)
**File:** `public/images/services/general-dentistry-02.webp`
**Gemini Prompt:**
```
Create a photorealistic close-up photograph of a modern ultrasonic scaler handpiece and suction tip resting on a clean dental unit tray, polished chrome and white equipment, hygienic and high-tech, shallow depth of field, bright softbox lighting, pristine clinic. No text, no watermark.

Alt: Ultrasonic scaler handpiece on dental unit tray
```

#### 3.3 — `Intraoral camera & diagnostic imaging` (`src/lib/services.ts:143`)
**File:** `public/images/services/general-dentistry-03.webp`
**Gemini Prompt:**
```
Create a photorealistic photograph of a dentist holding a pen-style intraoral camera, with a magnified tooth image displayed clearly on a chairside monitor that the patient is comfortably viewing. Digital dentistry concept, bright clean clinic, shallow depth of field. No text, no watermark.

Alt: Intraoral camera showing magnified tooth image on chairside monitor
```

---

### 4) Endodontic Treatment — `id: endodontic-treatment` (`src/lib/services.ts:172`)

#### 4.1 — `Root canal procedure — working under rubber dam isolation` (`src/lib/services.ts:179`)
**File:** `public/images/services/endodontic-treatment-01.webp`
**Gemini Prompt:**
```
Create a photorealistic close-up side-view photograph of a patient with a blue rubber dam isolated over a single tooth, dentist's gloved hands working gently with a dental mirror under a bright operating light. Clean, calm, focus on the isolation technique. Do not show blood, injection, or pain. No text, no watermark.

Alt: Root canal treatment with rubber dam isolation on single tooth
```

#### 4.2 — `Rotary endodontic instruments (endomotor & files)` (`src/lib/services.ts:180`)
**File:** `public/images/services/endodontic-treatment-02.webp`
**Gemini Prompt:**
```
Create a photorealistic macro flat lay photograph of rotary endodontic files neatly arranged in a sterilized holder next to a modern endomotor handpiece (chrome and teal device) on a pristine white background. Precision engineering detail, studio lighting, shallow depth of field. No text, no watermark.

Alt: Rotary endodontic files and endomotor handpiece
```

#### 4.3 — `Digital apex locator & intraoperative X-ray imaging` (`src/lib/services.ts:181`)
**File:** `public/images/services/endodontic-treatment-03.webp`
**Gemini Prompt:**
```
Create a photorealistic chairside photograph of a digital apex locator device with a small digital screen on a dental cart, next to a periapical X-ray sensor and a laptop displaying a digital radiograph of a molar's root canals. Modern endodontic workflow, bright clinic, shallow depth of field. No text, no watermark. Ensure the X-ray screen is legible but not overly detailed.

Alt: Digital apex locator and periapical X-ray showing molar root canals chairside
```

---

### 5) Restorative Dentistry — `id: restorative-dentistry` (`src/lib/services.ts:210`)

#### 5.1 — `Tooth-coloured composite filling procedure` (`src/lib/services.ts:216`)
**File:** `public/images/services/restorative-dentistry-01.webp`
**Gemini Prompt:**
```
Create a photorealistic close-up photograph of a dentist applying tooth-coloured composite resin to a molar using a composite instrument, with a dental shade guide visible on the tray. Perfect natural tooth shade match, clean clinical close-up, bright softbox lighting. Do not show blood or decay close-up. No text, no watermark.

Alt: Dentist placing tooth-coloured composite filling on molar
```

#### 5.2 — `Dental crown preparation & cementation` (`src/lib/services.ts:217`)
**File:** `public/images/services/restorative-dentistry-02.webp`
**Gemini Prompt:**
```
Create a photorealistic studio photograph of a dental typodont model showing a prepared molar abutment next to a translucent zirconia crown delicately held by tweezers. Dental lab precision, soft studio lighting, shallow depth of field, pristine white background. No text, no watermark.

Alt: Prepared molar and zirconia crown before cementation on dental model
```

#### 5.3 — `Bridge / implant prosthesis components` (`src/lib/services.ts:218`)
**File:** `public/images/services/restorative-dentistry-03.webp`
**Gemini Prompt:**
```
Create a photorealistic elegant flat lay photograph of a 3-unit ceramic bridge and a single dental implant with abutment and crown components arranged on a matte white surface with soft shadows. Premium prosthetic detail, studio lighting, shallow depth of field. No text, no watermark.

Alt: Ceramic dental bridge and implant prosthesis components
```

---

### 6) Aesthetic & Prosthetic Rehabilitation — `id: aesthetic-prosthetic-rehabilitation` (`src/lib/services.ts:247`)

#### 6.1 — `Smile design — before & after aesthetic case` (`src/lib/services.ts:255`)
**File:** `public/images/services/aesthetic-prosthetic-rehabilitation-01.webp`
**Gemini Prompt:**
```
Create a photorealistic split-composition portrait showing the same person's smile: left side before aesthetic treatment with natural uneven teeth, right side after veneers/whitening with bright harmonious smile, identical lighting and framing, subtle and believable transformation. Professional smile design, neutral background. Do not exaggerate whitening to pure white. Gemini 3.8 Flash is excellent at identity consistency — keep the same face on both sides. No text, no watermark.

Alt: Before and after smile design showing natural aesthetic improvement
```
**Note:** Gemini 3.8 Flash `personGeneration` requires consent-safe synthetic face. Generate as illustrative AI face and disclose as illustrative if used, or replace with licensed stock later.

#### 6.2 — `Complete / partial denture prosthesis` (`src/lib/services.ts:256`)
**File:** `public/images/services/aesthetic-prosthetic-rehabilitation-02.webp`
**Gemini Prompt:**
```
Create a photorealistic studio photograph of a high-quality complete upper denture and a partial lower denture displayed on soft neutral fabric with a dental mirror beside them, lifelike pink gums and natural tooth shade, premium craftsmanship, soft studio lighting, shallow depth of field. No text, no watermark.

Alt: Complete and partial denture prostheses on neutral background
```

#### 6.3 — `Full-mouth rehabilitation — prosthetic work-up` (`src/lib/services.ts:257`)
**File:** `public/images/services/aesthetic-prosthetic-rehabilitation-03.webp`
**Gemini Prompt:**
```
Create a photorealistic overhead photograph of a full-mouth rehabilitation planning table: articulated dental study models mounted on an articulator, printed smile design photographs, shade guides, and neat treatment plan notes. Organized, premium prosthodontic work-up, bright softbox lighting, shallow depth of field. No text legible, no watermark.

Alt: Full-mouth rehabilitation work-up with articulated models and smile design plan
```

---

## Antigravity Batch Generation (optional agent workflow)

If using Antigravity Agent to generate all 18 at once, create `scripts/generate-service-images.mjs` and run with Gemini 3.8 Flash tool:

```js
// Antigravity Gemini 3.8 Flash — batch generate for src/lib/services.ts placeholders
import { generateImage } from "antigravity:gemini";

const globalStyle = `photorealistic clinical photography, modern Indian multispecialty dental clinic, bright softbox + window light, shallow depth of field, calm professional mood, no blood/gore/open wounds, no text/watermark`;

const prompts = [
  { file: "maxillofacial-surgery-01", prompt: `Top-down flat lay of sterilized maxillofacial surgical instruments on blue sterile drape with titanium mini-plate and screws in steel bowl, ${globalStyle}` },
  { file: "maxillofacial-surgery-02", prompt: `Macro of titanium maxillofacial mini-plate and microscrews held by tweezers over beige mandible model, educational model style, ${globalStyle}` },
  { file: "maxillofacial-surgery-03", prompt: `Dentist in scrubs examining patient's lower jaw with dental mirror, OPG showing impacted wisdom tooth on lightbox in background, calm, ${globalStyle}` },
  // ... repeat for all 18 using the Gemini Prompts above
];

for (const p of prompts) {
  await generateImage({
    model: "gemini-3.8-flash-image",
    prompt: p.prompt,
    aspectRatio: "4:3",
    imageSize: "1K",
    outputPath: `public/images/services/${p.file}.webp`
  });
}
```

> Tip: Run 3 at a time, review, then continue. Flash is fast — iterate on `seed` if a result is too clinical or too warm.

## Implementation Notes for `src/routes/services.index.tsx:169-181`

1.  **Placement:** Keep `grid grid-cols-1 sm:grid-cols-3 gap-4` and `rounded-2xl`. Replace the dashed `div` with `img` as shown in How to Use.
2.  **Consistency:** Generate all 18 in one Antigravity session with same `seed` and `globalStyle` to avoid mismatch.
3.  **Performance:** Export WebP, add `width`/`height`, use `loading="lazy"`. Gemini 3.8 Flash 1K is sufficient — upscale to 2K only for lightbox.
4.  **Consent & Safety:** No identifiable real patients. For 6.1, use synthetic face via Gemini and label illustrative. Avoid graphic surgery for oncology services.
5.  **Why Gemini 3.8 Flash phrasing:** Flash follows verbose natural language + explicit `Do not show...` better than SD/MJ tag syntax. Avoid `--ar`, `--style`, `--no` flags. Be specific about Indian context, lens, and mood — Flash respects those.

---

*Source: `src/lib/services.ts:36-285` (6 services × 3 placeholders) and `src/routes/services.index.tsx:169-181` (render grid). Updated for Antigravity Gemini 3.8 Flash 2026-09-03.*

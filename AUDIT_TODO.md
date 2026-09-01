# Audit Fix — TODO List (Patient-Flow)

Source: patient-perspective audit 2026-09-01. Tracks fixes for UI/flow issues found in `src/routes/index.tsx`, `src/routes/services.index.tsx`, `src/routes/book-appointment.tsx`, `src/components/appointment-form.tsx`, `src/routes/__root.tsx`, `src/styles.css`.

## How to use
- Check `[x]` when done, commit with `fix:` prefix, `npm run build` must pass.
- Priority: P0 = Critical (blocks booking/trust), P1 = High (SEO/funnel), P2 = Medium (polish), P3 = Low.

---

### P0 — Critical (Do first)

- [ ] **P0-1 Remove forced modal on home load** — `src/routes/index.tsx:197-199`
  - Replace `useEffect(() => setAppointmentOpen(true), [])` with delayed trigger: open after 7s *or* 60% scroll, store `localStorage["appointmentPromptShown"]` with 7-day expiry.
  - Add `prefers-reduced-motion` check and respect `open` close.
  - Verify: open home `/` → modal does NOT appear immediately; scroll/time triggers.

- [ ] **P0-2 Unify locations (single source of truth)**
  - Create `src/lib/locations.ts` exporting `LOCATIONS = ["Jadavpur, Kolkata","Siliguri","Dankuni","Purulia","Kalyani","Malda","Musheerabad"] as const`.
  - Update `src/components/appointment-form.tsx:20` `locations` to import from lib.
  - Update `src/routes/index.tsx:617-623` footer `Serviceable Locations` to map `LOCATIONS`.
  - Update `src/lib/services.ts` tagline/FAQ and `src/routes/services.index.tsx:81-84` hero copy to use `LOCATIONS[0], LOCATIONS[1]` (no drift).
  - Verify: all pages show identical list.

- [ ] **P0-3 Restore minimal address context after removal**
  - `src/routes/book-appointment.tsx:75-88` — after removing `MapPin` block (`787e265`), re-add compact address row: `Siliguri & Jadavpur, Kolkata` + `View on Maps` links (`https://maps.google.com/?q=...`) without the 3-line block.
  - Make phone/email clickable: `<a href="tel:+917980103899">` and `<a href="mailto:drsuranjanaroy@gmail.com">` in `book-appointment.tsx:86-87` and `src/routes/index.tsx:601-606` footer.
  - Verify: patient sees where clinic is *before* form, can tap to call.

### P1 — High (SEO / Funnel)

- [ ] **P1-1 Deep-link services from home**
  - Change `src/routes/index.tsx:59-95` `services[].href` from `"/services"` to `"/services?open=maxillofacial-surgery"` etc (use `id` from `src/lib/services.ts:36`).
  - In `src/routes/services.index.tsx:44,99-102` read `const [searchParams] = useSearchParams()` / TanStack `useSearch`, init `openValue` from `?open=` and sync on change. Support per-service anchor share.
  - Update `public/sitemap.xml:4` remains `/services` (canonical) — anchors are param, not new URLs.

- [ ] **P1-2 Add FAQPage JSON-LD**
  - Extend `src/routes/__root.tsx:128-157` `scripts` array with second `application/ld+json` for `FAQPage` using `faqs` from `src/routes/index.tsx:98-111` (or shared lib). Covers SGE rich result.
  - Validate at https://validator.schema.org.

- [ ] **P1-3 Booking consent + urgency banner**
  - `src/components/appointment-form.tsx:123-230` — add checkbox `consent` (required, link to privacy), and top banner: “Bleeding / lump >2 weeks? Call +91 7980103899 directly — don’t wait for form.”
  - `src/lib/api/book-appointment.schema.ts:3-15` — add `consent: z.literal(true, {errorMap})`.
  - Style `text-xs text-muted-foreground`.

### P2 — Medium (Polish / Trust)

- [ ] **P2-1 Replace service image placeholders**
  - `src/routes/services.index.tsx:138-147` — replace 3 dashed `border-dashed` boxes with real photos (instrument, fracture fixation, wisdom-tooth) or remove grid until photos ready. Add `alt` descriptive.
  - If kept, reduce `min-h-40` to `min-h-32` on mobile for less empty space.

- [ ] **P2-2 Constrain appointment time to clinic hours**
  - `src/components/appointment-form.tsx:197-204` — replace `type="time"` free input with `<select>` slots `10:00–19:00` (30min) + note “Sunday by appointment” from `src/routes/book-appointment.tsx:94-96`.
  - Add zod refine `time` within slots. Disable past `date` already done `appointment-form.tsx:193`.

- [ ] **P2-3 Smooth expand + auto-scroll for services**
  - On `openValue` change in `src/routes/services.index.tsx:44`, `useEffect` → `document.getElementById(service.id)?.scrollIntoView({behavior:"smooth", block:"start"})` if `!matchMedia("(prefers-reduced-motion: reduce)")`.
  - Keep `transition-all duration-300` `services.index.tsx:110`.

- [ ] **P2-4 Error handling for webhook**
  - `src/lib/api/book-appointment.functions.ts:18-32` — add `signal: AbortSignal.timeout(8000)` and user-friendly message. In `src/components/appointment-form.tsx:75-82` map `BOOKING_WEBHOOK_URL missing` → “Service temporarily unavailable, please call.” Add retry button. Show WhatsApp fallback link `https://wa.me/917980103899`.

### P3 — Low (Responsive / A11y)

- [ ] **P3-1 Mobile menu a11y**
  - `src/routes/index.tsx:289-295` hamburger — add `aria-expanded={open}` `aria-controls="mobile-nav"` and focus trap when `open`. Test keyboard Tab.

- [ ] **P3-2 Image performance**
  - Keep `content-visibility:auto` `src/styles.css:222-235` but add explicit `width`/`height` on all `<img>` in `src/routes/case-studies.index.tsx:80` and `case-studies.$slug.tsx:393-397` (already present, verify no CLS). Preload hero already `src/routes/__root.tsx:190`.

- [ ] **P3-3 Contrast / footer grid**
  - `src/styles.css:75-78` `--secondary` vs `--primary` badge — run axe DevTools, if fails lighten `--secondary`. Footer `src/routes/index.tsx:616` `grid-cols-2 sm:grid-cols-4` with 7 items → change to `grid-cols-2 md:grid-cols-4` or `flex flex-wrap gap-4`.

---

### Verification checklist (after each P)

- [ ] `npm run format && npm run build` passes (Nitro preset `vercel`)
- [ ] Manual mobile check: Home hero `min-h-[calc(100svh-4rem)]` not overflow on 360px, services `md:col-span-2` expand full-width, form 1-col on mobile
- [ ] `git commit -m "fix: ..."` + `git push`

### Done (already fixed)

- [x] Sitemap domain mismatch `public/sitemap.xml:1` + `robots.txt:4` + `__root.tsx:136` → `dr-suranajana-roy.vercel.app` (`b1a1836`)
- [x] Services icons relatable `ScanFace/ShieldPlus/SmilePlus/Syringe/Crown/Sparkles` (`47230cc`)
- [x] Services cards side-by-side responsive `grid-cols-1 md:grid-cols-2` + `md:col-span-2` expand (`2621bb9`, `6e2e566`)
- [x] Home “View All Services” link-text with arrow animation `index.tsx:434-443` (`32ddb24`)


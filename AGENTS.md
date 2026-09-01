# AGENTS.md — Dr. Suranjana Roy (TanStack Start)

## Commands

- `npm run dev` — Start Vite dev server (port 3000)
- `npm run build` — Production build (Nitro emits Vercel Build Output to `.vercel/output/`)
- `npm run build:dev` — Development build
- `npm run preview` — Preview production build
- `npm run lint` — ESLint (includes Prettier via plugin)
- `npm run format` — Prettier write
- `npm run lint -- <path>` — Lint a single file

## Key Conventions

- **Node 22.x required** (`engines` in package.json)
- **Bun install guard**: `bunfig.toml` enforces 24h supply-chain delay; `@lovable.dev/vite-tanstack-config` is explicitly excluded
- **Path alias**: `@/*` → `./src/*` (tsconfig + Vite)
- **Server-only code**: Use `.server.ts` suffix or `@tanstack/react-start/server-only` directive (ESLint blocks `server-only` pkg)
- **Env vars**: `BOOKING_WEBHOOK_URL` (server-only, no `VITE_` prefix). Create `.env` locally.
- **Vercel deployment**: `NITRO_PRESET=vercel` (default in vite.config.ts). Override with env var if needed.
- **New pages**: every route file exports `head()` (title, meta description, OG tags) — follow the pattern in existing routes. `src/routes/README.md` has the file-naming conventions.

## Architecture

- **Framework**: TanStack Start (full-stack React) + TanStack Router (file-based routes)
- **SSR entry**: `src/server.ts` wraps TanStack Start's server entry with error normalization for h3 swallowed errors
- **Router**: `src/router.tsx` creates router with `QueryClient` in context
- **Route tree**: Auto-generated at `src/routeTree.gen.ts` (do not edit manually)
- **UI components**: shadcn/ui-style in `src/components/ui/` (Radix UI + Tailwind v4)
- **Server functions**: `src/lib/api/` (Zod schemas + functions, e.g., `book-appointment`)

## Gotchas

- **vite.config.ts** uses `@lovable.dev/vite-tanstack-config` wrapper — do NOT manually add plugins it already includes (tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, etc.)
- **Nitro preset** must be explicit (`preset: "vercel"`) or Vercel deploy produces 404s (wrapper defaults to Cloudflare)
- **h3 error swallowing**: `src/server.ts` normalizes catastrophic SSR responses (status 500 + JSON body with `"unhandled":true`) to custom error page
- **No test suite** configured — verify manually via `npm run dev` / `npm run build`
- **TypeScript**: `noEmit: true`, `strict: true`, unused vars allowed (`noUnusedLocals/Parameters: false`)

## File Structure Essentials

```
src/
├── assets/              # Static images
├── components/ui/       # Reusable UI primitives (40+ files)
├── hooks/               # Custom hooks (e.g., use-mobile)
├── lib/
│   ├── api/             # Server functions + Zod schemas
│   ├── case-studies.ts  # Content data
│   ├── config.server.ts # Server-only config
│   ├── error-capture.ts # Global error capture for SSR
│   ├── error-page.ts    # 500 error UI
│   └── services.ts      # Services content data (expandable /services cards)
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout + providers
│   ├── index.tsx        # Home
│   ├── book-appointment.tsx
│   ├── case-studies.index.tsx
│   ├── case-studies.$slug.tsx
│   └── services.index.tsx  # Services overview (expandable cards) → /services
├── router.tsx           # Router factory + QueryClient
├── server.ts            # SSR entry + error normalization
├── start.ts             # Client entry
└── styles.css           # Tailwind v4 entry
```

`scripts/apps-script/booking-webhook.gs` is the Google Apps Script that `BOOKING_WEBHOOK_URL` points at.

## Working Docs (repo root)

- `plan.md` — SEO & Google AI (SGE) optimization strategy driving recent commits
- `todo (1).md` — progress checklist for that plan
- `services.md` — canonical service list + FAQs (content source for service pages)

# AGENTS.md — Dr. Suranjana Roy (TanStack Start)

## Commands
- `npm run dev` — Start Vite dev server (port 3000)
- `npm run build` — Production build (outputs to `.output/`, Nitro preset: Vercel)
- `npm run build:dev` — Development build
- `npm run preview` — Preview production build
- `npm run lint` — ESLint (includes Prettier via plugin)
- `npm run format` — Prettier write

## Key Conventions
- **Node 22.x required** (`engines` in package.json)
- **Bun install guard**: `bunfig.toml` enforces 24h supply-chain delay; `@lovable.dev/vite-tanstack-config` is explicitly excluded
- **Path alias**: `@/*` → `./src/*` (tsconfig + Vite)
- **Server-only code**: Use `.server.ts` suffix or `@tanstack/react-start/server-only` directive (ESLint blocks `server-only` pkg)
- **Env vars**: `BOOKING_WEBHOOK_URL` (server-only, no `VITE_` prefix). Create `.env` locally.
- **Vercel deployment**: `NITRO_PRESET=vercel` (default in vite.config.ts). Override with env var if needed.

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
│   └── error-page.tsx   # 500 error UI
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout + providers
│   ├── index.tsx        # Home
│   ├── book-appointment.tsx
│   ├── case-studies.index.tsx
│   └── case-studies.$slug.tsx
├── router.tsx           # Router factory + QueryClient
├── server.ts            # SSR entry + error normalization
├── start.ts             # Client entry
└── styles.css           # Tailwind v4 entry
```
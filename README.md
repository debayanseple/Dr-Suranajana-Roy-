# Dr. Suranjana Roy — Oral & Maxillofacial Surgeon

A modern, responsive portfolio and clinic website for **Dr. Suranjana Roy**, MDS — Oral & Maxillofacial Surgeon (Siliguri & Kolkata, West Bengal). The site presents her services, academic work, and case studies, and lets patients request appointments online.

Built with [TanStack Start](https://tanstack.com/start) (full-stack React), React 19, Tailwind CSS v4, and shadcn/ui-style components.

## Features

- **Landing page** — hero, services overview, about/education, academic publications, and contact.
- **Case studies** — a listing page (`/case-studies`) and individual case detail pages (`/case-studies/:slug`).
- **Book an appointment** — a validated form (`/book-appointment`) that submits through a server function to a Google Apps Script webhook, keeping the URL off the client and avoiding CORS.
- **SEO-ready** — per-route `<title>`, meta description, and Open Graph tags.
- **Accessible UI** — Radix UI primitives, mobile navigation, and responsive layouts.

## Tech Stack

| Area | Tooling |
|------|---------|
| Framework | TanStack Start + TanStack Router |
| UI | React 19, Tailwind CSS v4, Radix UI, lucide-react |
| Forms & validation | react-hook-form, Zod |
| Data | TanStack Query |
| Build | Vite 7, Nitro |
| Tooling | TypeScript, ESLint, Prettier |

## Getting Started

### Prerequisites

- Node.js **22.x**
- npm (or your preferred package manager)

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

The dev server runs on Vite. Open the printed local URL in your browser.

### Build & Preview

```bash
npm run build     # production build
npm run preview   # serve the production build locally
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format the codebase with Prettier |

## Environment Variables

Create a `.env` file in the project root for local development:

| Variable | Required | Description |
|----------|----------|-------------|
| `BOOKING_WEBHOOK_URL` | Yes (for appointments) | URL of the Google Apps Script Web App that records appointment submissions. Server-only — never exposed to the client. |

Public values must be prefixed with `VITE_` to be readable in the browser. **Never** put secrets behind the `VITE_` prefix.

## Project Structure

```
src/
├── assets/                # Images (hero, etc.)
├── components/ui/         # Reusable UI primitives (button, card, dialog, …)
├── hooks/                 # Custom React hooks
├── lib/
│   ├── api/               # Server functions & Zod schemas (e.g. book-appointment)
│   ├── case-studies.ts    # Case study content
│   └── config.server.ts   # Server-only configuration
├── routes/                # File-based routes
│   ├── __root.tsx         # Root layout
│   ├── index.tsx          # Home page
│   ├── book-appointment.tsx
│   ├── case-studies.index.tsx
│   └── case-studies.$slug.tsx
├── router.tsx             # Router configuration
└── server.ts              # Server entry
```

## Deployment

The app is configured for deployment on **Vercel**. Set the `BOOKING_WEBHOOK_URL` environment variable in your hosting provider's dashboard before deploying so the appointment form works in production.

## License

Private project. All rights reserved © Dr. Suranjana Roy.

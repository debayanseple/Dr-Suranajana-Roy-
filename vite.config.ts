// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Force-enable the Nitro deploy plugin and pin it to Vercel.
  //
  // Without an explicit `nitro` option the wrapper only runs Nitro inside the
  // Lovable sandbox; on Vercel (no sandbox) it skips Nitro entirely, leaving no
  // deployable server handler — every route 404s. Passing an object marks nitro
  // "explicit", so it runs during `vite build`, and `preset: "vercel"` overrides
  // the wrapper's default `cloudflare-module`, emitting the Vercel Build Output
  // API directory (.vercel/output) instead of a Cloudflare Worker bundle.
  //
  // Override locally/CI with the NITRO_PRESET env var if you ever need a
  // different target.
  nitro: {
    preset: process.env.NITRO_PRESET ?? "vercel",
  },
});

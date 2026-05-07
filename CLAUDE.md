# ATC Rénovation

Marketing + lead-capture website for **ATC Rénovation**, an interior renovation company based in Nancy / Flavigny-sur-Moselle (France). Production domain: **atcrenovation.com**.

The site is in **French** — all user-facing copy, form labels, and email templates must stay in French.

## Stack

- **Next.js 15** App Router (`src/app/`), React 18, TypeScript
- **Tailwind CSS** + **shadcn/ui** primitives (Radix-based, in [src/components/ui/](src/components/ui/))
- **Convex** backend (queries/mutations/actions in [convex/](convex/))
- **Resend** for transactional email (devis notifications) — see [convex/emails.ts](convex/emails.ts)
- **Netlify** hosting via `@netlify/plugin-nextjs` ([netlify.toml](netlify.toml))
- **framer-motion** for animations, **embla-carousel** for sliders. Forms use plain controlled React state — no react-hook-form / zod in this project.

## Routes

Public:
- `/` — homepage ([src/app/HomeClient.tsx](src/app/HomeClient.tsx) composes the home sections)
- `/services` and `/services/[slug]` — 8 statically-generated service pages (slugs in [src/data/services.ts](src/data/services.ts))
- `/realisations` — portfolio gallery (Convex-backed)
- `/a-propos`, `/contact`
- `/devis` — quote request form, `/devis/success` — confirmation page

Auth-gated:
- `/login` — admin login
- `/admin/*` — dashboard (devis, clients, portfolio, avis, settings). Protected by [src/middleware.ts](src/middleware.ts) which checks the `admin_session` cookie and redirects to `/login`. Both `/admin/*` and `/login` are `noindex` via [netlify.toml](netlify.toml).

## Convex backend

Schema in [convex/schema.ts](convex/schema.ts). Tables:

- `devis` — quote requests submitted from `/devis`. Statuses: `nouveau | qualifie | envoye | accepte | refuse` (see code; the schema comment is out of date).
- `clients` — customer records
- `portfolio` — realisations entries (with `visible` + `order`)
- `reviews` — testimonials shown on homepage; falls back to static data in [TestimonialsSection.tsx](src/components/home/TestimonialsSection.tsx) when empty
- `companyInfo` — single-row config (phone/email/address/social). Preloaded server-side in [src/app/layout.tsx](src/app/layout.tsx) via `preloadQuery` and passed through `ConvexClientProvider`.

Devis submissions trigger an email to admins via Resend (`ADMIN_EMAIL` env var, comma-separated for multiple recipients).

**When editing Convex code, read `convex/_generated/ai/guidelines.md` first** (see Convex section below).

## Component conventions

- **Server components by default.** Add `"use client"` only when the file uses hooks, browser APIs, framer-motion, or Convex `useQuery`/`useMutation`.
- Pages follow a `page.tsx` (server, exports `metadata`) + `XPageClient.tsx` (client) split. Keep SEO metadata, JSON-LD, and `preloadQuery` calls in the server file.
- Shared layout chrome: [Header.tsx](src/components/Header.tsx), [Footer.tsx](src/components/Footer.tsx), wrapped by [Layout.tsx](src/components/Layout.tsx). `Layout` accepts a prop to hide header/footer (used on `/devis/success`).
- Hero treatment: top-level pages use [PageHero.tsx](src/components/PageHero.tsx); the homepage has its own [HeroSection.tsx](src/components/home/HeroSection.tsx) (kept as a server component with a static `<Image priority>` — do **not** convert it back to a JS-driven slideshow, that broke GSC live-test rendering).

## SEO

- `metadataBase` and shared OG/Twitter metadata defined in [src/app/layout.tsx](src/app/layout.tsx). Canonical URLs are set per-page.
- Favicon: [src/app/icon.png](src/app/icon.png) (Next.js auto-injects `<link rel="icon">`). Do not add a manual `icons` block in metadata — it conflicts.
- Organization-level JSON-LD (`HomeAndConstructionBusiness`) lives in `layout.tsx`. Per-service `Service` JSON-LD lives in `src/app/services/[slug]/page.tsx`. Keep `hasOfferCatalog` in sync with `services` in [src/data/services.ts](src/data/services.ts).
- `sitemap.ts` and `robots.ts` are in [src/app/](src/app/). All 8 service slugs must be reflected in `sitemap.ts`.
- Google Tag (gtag.js / Google Ads conversion ID `AW-16621131174`) is loaded in `layout.tsx` via `next/script` with `afterInteractive`.

## Images

- Local images live under [public/images/](public/images/). Convex uploads use `*.convex.cloud` (whitelisted in [next.config.ts](next.config.ts)).
- Use `next/image` everywhere — never raw `<img>`. Hero/above-fold images need `priority` + `fetchPriority="high"`.

## Environment variables

Required at runtime:
- `NEXT_PUBLIC_CONVEX_URL` — Convex deployment URL
- `RESEND_API_KEY` — set in Convex dashboard (Resend transactional email)
- `ADMIN_EMAIL` — comma-separated list of devis-notification recipients (set in Convex dashboard)
- Admin login credentials — see [src/app/login/](src/app/login/) for how the `admin_session` cookie is issued

## Common gotchas

- ESLint is set to `ignoreDuringBuilds` in [next.config.ts](next.config.ts) — fix lint errors locally; CI won't catch them.
- `services` array in [src/data/services.ts](src/data/services.ts) is the single source of truth for slugs, SEO copy, and JSON-LD. Adding/removing a service means updating: the array, `sitemap.ts`, and `hasOfferCatalog` in `layout.tsx`.
- Static-image components on the homepage must remain server-rendered for Google's live-test screenshot to render correctly.

<!-- convex-ai-start -->
This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read `convex/_generated/ai/guidelines.md` first** for important guidelines on how to correctly use Convex APIs and patterns. The file contains rules that override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running `npx convex ai-files install`.
<!-- convex-ai-end -->

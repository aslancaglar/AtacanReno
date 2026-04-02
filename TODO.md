# ATC Rénovation — Refactoring Progress

## Completed Steps

### Step 1: Centralize `serviceImages` ✅
- Moved `serviceImages` map to `src/data/services.ts`
- Removed duplicates from `ServicesSection.tsx`, `ServicesPageClient.tsx`, `ServiceDetailClient.tsx`

### Step 2: Extract Breadcrumb Component ✅
- Created `src/components/Breadcrumb.tsx` (reusable, animated, with ChevronRight separators)
- Replaced inline breadcrumbs in: AboutPageClient, ContactPageClient, DevisPageClient, RealisationsPageClient, ServiceDetailClient

### Step 3: Extract SectionHeader Component
- [ ] Deferred — lower priority, can be done in follow-up

### Step 4: Extract PageHero Component
- [ ] Deferred — lower priority, can be done in follow-up

### Step 5: Use Layout Consistently ✅
- All page clients now use `<Layout>` instead of manual `<Header />` + `<main>` + `<Footer />` wrapping
- Updated: AboutPageClient, ContactPageClient, DevisPageClient, RealisationsPageClient, ServicesPageClient, ServiceDetailClient

### Step 6: Optimize Images with next/image (Partial) ✅
- Configured `next.config.ts` with `remotePatterns` for unsplash and placehold.co
- [ ] Full `<img>` → `<Image>` conversion deferred to follow-up

### Step 7: Optimize Font with next/font/google ✅
- Added `Manrope` via `next/font/google` in `layout.tsx` with CSS variable `--font-manrope`
- Removed `<link>` tag and `@import url(...)` from `globals.css`
- Updated `globals.css` to use `var(--font-manrope)` fallback

### Step 8: Cleanup ✅
- Removed `src/vite-env.d.ts` (Vite leftover)
- Cleaned unused imports across page clients (Header, Footer replaced by Layout)

## All Pages Verified (HTTP 200)
- `/` — Home
- `/devis` — Devis
- `/contact` — Contact
- `/services` — Services
- `/realisations` — Réalisations
- `/a-propos` — À Propos
- `/services/renovation-salle-de-bains` — Service Detail

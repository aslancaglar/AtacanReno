# ATC Rénovation — Design System & Homepage Guide

## Brand Identity

| Element | Value |
|---------|-------|
| **Brand** | ATC Rénovation — Rénovation Intérieure |
| **Tagline** | Votre spécialiste en rénovation intérieure à Nancy |
| **Tone** | Premium, trustworthy, artisanal — conveys expertise and quality |
| **Font** | [Manrope](https://fonts.google.com/specimen/Manrope) (wght 300–800) |
| **Shape Language** | Soft, rounded — `border-radius: 1rem` base, pill buttons (`rounded-full`) |

---

## Color Palette

All colors are defined as HSL CSS variables in [globals.css](file:///Users/caslanmmini/DEV/ATCReno/src/app/globals.css) and consumed via Tailwind in [tailwind.config.ts](file:///Users/caslanmmini/DEV/ATCReno/tailwind.config.ts).

### Core Brand Colors

| Token | HSL | Hex (approx) | Usage |
|-------|-----|---------------|-------|
| `--primary` | `160 100% 15%` | `#004D30` | Header, stats bar, CTA bg, active filter chips, before/after handle |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary |
| `--secondary` | `36 100% 56%` | `#E5A521` | Gold accent — CTA buttons, star ratings, section eyebrows, badge |
| `--secondary-foreground` | `30 100% 20%` | `#663D00` | Text on secondary (dark amber) |

### Surface & Background

| Token | HSL | Usage |
|-------|-----|-------|
| `--background` | `36 100% 97%` | Page background (warm off-white) |
| `--surface-container-low` | `37 60% 94%` | Alternating section bg (Services, Testimonials) |
| `--surface-container` | `37 52% 92%` | Card hover states |
| `--surface-container-highest` | `37 20% 87%` | Inactive filter chips |
| `--card` | `0 0% 100%` | Card backgrounds (pure white) |
| `--nav` | `38 18% 9%` | Heading text color (near black) |

### Semantic Colors

| Token | Usage |
|-------|-------|
| `--muted` / `--muted-foreground` | Body text, descriptions |
| `--border` | Card borders, dividers |
| `--warm` | Alias for secondary (gold) |
| `--cool` | Accent blue (`212 100% 33%`) for links/rings |

### Dark Mode
A full dark palette is defined (`.dark` class) but not currently active in the site.

---

## Typography

| Element | Classes | Style |
|---------|---------|-------|
| **H1** (Hero) | `text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]` | 36–60px, 800 weight |
| **H2** (Sections) | `text-3xl lg:text-4xl font-extrabold` | 30–36px, 800 weight |
| **H3** (Cards) | `text-lg font-bold` | 18px, 700 weight |
| **Body** | `text-muted-foreground leading-relaxed` | 16px, 400 weight |
| **Small/Caption** | `text-sm text-muted-foreground` | 14px |
| **Eyebrow** | `text-sm font-semibold text-secondary uppercase tracking-widest` | Gold, uppercase, letterspaced |
| **Stats label** | `text-[11px] font-semibold uppercase tracking-widest text-white/60` | 11px, uppercase |

---

## Spacing & Layout

| Pattern | Value |
|---------|-------|
| **Container** | `container mx-auto px-4 lg:px-8`, max-width `1400px` |
| **Section padding** | `py-20 lg:py-28` (80px → 112px) |
| **Card padding** | `p-6` (24px) |
| **Grid gaps** | `gap-6` (24px) for card grids, `gap-8` (32px) for footer columns |
| **Section header mb** | `mb-12` to `mb-16` (48–64px) |

---

## Component Inventory

### Header ([Header.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/Header.tsx))
- **Sticky** floating pill navbar (`fixed top-0`, `rounded-full`, `bg-primary`)
- Transparent on top → solid green `bg-primary` with `shadow-lg` on scroll
- **Mega menu** on "Services" hover: 3-column grid with icons, opens with `animate-fade-in`
- **Mobile**: hamburger toggle → slide-down card with `bg-card/95 backdrop-blur-xl`
- **CTA button**: Gold pill `bg-secondary` "Demande de devis"

### Hero ([HeroSection.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/HeroSection.tsx))
- **85–90vh** height, content aligned bottom/center
- **Auto-rotating slideshow** (3 images, 5s interval) with crossfade `transition-opacity duration-1000`
- **Gradient overlay**: `bg-gradient-to-t from-black/90 via-black/50 to-black/10`
- **Trust badge**: avatar stack + 5 gold stars + Google rating link
- Two CTAs: gold primary + white ghost outline
- Staggered entrance animations (0→0.2→0.4→0.6s delays)

### Stats Bar ([StatsSection.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/StatsSection.tsx))
- **Overlapping** hero by `-mt-10`, `z-10`
- `bg-primary rounded-2xl shadow-2xl` pill
- 4 stats in grid with `lg:divide-x divide-white/20` separators
- Gold icons + white values + secondary suffix accent
- Scale entrance animation (`scale: 0.97→1`)

### About ([AboutPreview.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/AboutPreview.tsx))
- Two-column: image (3:4 aspect) + text
- Floating badge: `bg-secondary` "10+ ans d'expérience" positioned `-bottom-4 -right-4`
- Checkmark list with `bg-secondary/20` green circles
- Certification badge row (3 logos, hover `scale-110`)

### Services ([ServicesSection.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/ServicesSection.tsx))
- **3-column grid** on desktop, 10 service cards
- Cards: `bg-card rounded-2xl`, image `aspect-[4/3]` with hover `scale-105`
- Hover shadow: `shadow-[0px_20px_40px_rgba(52,48,38,0.06)]`
- Icon + title + description pattern
- Staggered fade-in (`delay: i * 0.08s`)

### Réalisations ([RealisationsPreview.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/RealisationsPreview.tsx))
- **Filter chips**: pill buttons, active = `bg-primary`, inactive = `bg-surface-container-highest`
- **Masonry layout**: CSS columns (`columns-1 md:columns-2 lg:columns-3`)
- Varied aspect ratios cycling: `3:4`, `1:1`, `4:5`, `2:3`, `5:6`, `3:5`
- **Before/After slider** on select projects — custom drag handle with SVG arrows
- Cards have gradient overlay `from-foreground/70` + project info at bottom
- `AnimatePresence mode="popLayout"` for filter transitions

### Before/After Slider ([BeforeAfterSlider.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/BeforeAfterSlider.tsx))
- Custom draggable comparison slider (mouse + touch)
- `clipPath: inset(0 ${100-pos}% 0 0)` for reveal
- Circular drag handle: `w-12 h-12 rounded-full bg-primary`
- "Avant" / "Après" labels positioned top-left/top-right

### Testimonials ([TestimonialsSection.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/TestimonialsSection.tsx))
- **3-column grid**, white cards on `bg-surface-container-low`
- Card structure: project image (16:9) → stars → text (line-clamp-4) → avatar + name + project tag
- Gold star ratings, secondary-colored project labels
- Hover `shadow-md` transition

### Partners ([PartnersSection.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/PartnersSection.tsx))
- **6-column grid** of logo cards
- Logos are `grayscale` by default, `hover:grayscale-0` on hover
- Currently using placeholder images

### CTA ([CTASection.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/home/CTASection.tsx))
- Full-width `bg-primary` section, centered text
- Gold action button `bg-secondary`, pill shape, bold
- Scale entrance animation on button

### Footer ([Footer.tsx](file:///Users/caslanmmini/DEV/ATCReno/src/components/Footer.tsx))
- `bg-nav` (near black) background
- 4-column grid: brand description, navigation links, services links, contact info
- Gold icons for contact items (MapPin, Phone, Mail)
- Bottom border with copyright + legal links

---

## Animation System

All animations use **Framer Motion** with consistent patterns:

| Pattern | Values |
|---------|--------|
| **Fade-up** | `initial={{ opacity: 0, y: 20–40 }}` → `whileInView={{ opacity: 1, y: 0 }}` |
| **Easing** | `ease: "easeOut"` throughout |
| **Duration** | `0.4s–0.7s` depending on element importance |
| **Stagger** | `delay: index * 0.08–0.1s` for list/grid items |
| **Trigger** | `viewport={{ once: true, amount: 0.1–0.3 }}` — fires once, threshold varies |
| **Hero slideshow** | CSS `transition-opacity duration-1000` with `setInterval` at `5000ms` |
| **Hover zoom** | `group-hover:scale-105 transition-transform duration-500` on images |
| **CSS animation** | `animate-fade-in` keyframe (translateY 20px → 0, opacity 0 → 1, 0.6s) |

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| **Mobile** (< 768px) | Single column, stacked layouts, hamburger menu, smaller typography |
| **Tablet** (md: 768px) | 2-column grids for services/testimonials/réalisations |
| **Desktop** (lg: 1024px) | Full 3–6 column grids, mega menu, side-by-side about layout |

---

## Assets

| Category | Location | Notes |
|----------|----------|-------|
| Hero backgrounds | `/public/images/hero-bg*.jpg` | 3 slideshow images |
| Service photos | `/public/images/service-*.jpg` | 10 service category images |
| Portfolio photos | `/public/images/real-*.jpg` | 6 project photos |
| Before photos | `/public/images/before-*.jpg` | 3 before comparison images |
| Certifications | `/src/assets/cert-*.jpg` | RGE, Décennale, MaPrimeRénov' |
| Brand logos | `/public/images/logo-atacan*.png` | Monogram + full logo |
| Partner logos | External placeholders | Need replacement with real partner logos |

---

## Key Design Decisions

1. **Warm neutrals** — The off-white background (`36 100% 97%`) and warm grays create a welcoming, residential feel appropriate for home renovation
2. **Green + Gold** — Dark green conveys trust and professionalism; gold conveys premium craftsmanship
3. **Pill shapes everywhere** — Buttons, header, stats bar, filter chips all use `rounded-full` for a cohesive, modern feel
4. **Overlapping elements** — Stats bar overlaps hero (`-mt-10`), experience badge floats over about image — adds depth
5. **Consistent card pattern** — Image → content → metadata, used across services, testimonials, and réalisations
6. **Progressive disclosure** — Hero → trust indicators → detailed sections → CTA follows a conversion-optimized flow

---

## Potential Improvements

| Area | Suggestion |
|------|-----------|
| **Partners** | Replace placeholder logos with real partner/supplier logos |
| **Accessibility** | Add `aria-label` to icon buttons, ensure color contrast ratios meet WCAG AA |
| **Performance** | Convert images to WebP/AVIF, use Next.js `<Image>` component for optimization |
| **Contact form** | The CTA currently scrolls to `#contact` but there's no form — consider adding one |
| **Dark mode** | CSS variables are defined but not exposed via a toggle |
| **SEO** | Add `alt` text to partner logos, consider individual service pages for better indexing |

# Changelog

All notable changes to the Haymarket Bicycles website, in chronological order. Future work lives in `ROADMAP.md`; day-to-day staff content workflows live in `reviews-update-guide.md` and `features-implementation-guide.md`.

## 2026

### July 2026 — Code Review Fixes (9 fixes)

- **Canonical host consistency** — all URLs (canonical, OG, JSON-LD, sitemap, robots.txt) now use `https://www.haymarketbicycles.com`; Netlify must keep `www` as primary domain
- **Fixed invisible 404 button** — the page used undefined `primary-*` Tailwind classes; rebuilt with brand palette and wrapped in Layout
- **Timezone-aware store hours** — Open/Closed badge now computes in America/New_York (was visitor-local time; DST-safe)
- **Wired ProductCard CTA** — "Contact Us for Details" was a dead button; now links to `/#contact` with per-product aria-label
- **SPA navigation** — cross-page section links use `useNavigate` instead of `window.location.href` (no full page reloads)
- **Schema cleanup** — removed self-serving Review schema, nav-shaped BreadcrumbList, and the keywords meta site-wide
- **Open Graph image** — new 1200×630 `og-image.png` with site name, dimensions, alt; schema image refs use URL-safe `logo-horizontal.png`
- **Content corrections** — removed a step-through-frame claim from Trek FX card; fixed price formatting ($6,499) and Story-section grammar
- **(Inaccurate log entry removed)** — a WebP image-conversion entry was recorded but the conversion was never applied; product PNGs remain in use. Converting them is an open roadmap item.

### June 2026 — Customer Reviews Section

- `src/reviews.ts` with 9 hand-picked 5-star Listen360 reviews; `totalReviewCount` constant (1,097)
- `ReviewCard` component (star ratings, name, date, full text)
- Reviews section on Home between Featured Products and Our Story, with Listen360 badge and "Read All 1,097 Reviews" CTA
- Created `reviews-update-guide.md` for quarterly non-developer refresh

### January 2026

- **E-bike service requirements notice** — full notice on Services page (`#ebike-requirements`) with hash navigation; brief disclaimer on Home's E-Bike Specialists card
- **Contact navigation** — service card buttons changed to "Contact for Service" routing to `/#contact`; Catalog and Services CTA buttons fixed to route to `/#contact`; Home hash navigation implemented

## 2025

### November 2025

- **Cleanup** — fixed services typo ("Service Lefel 1"), updated sitemap dates, renamed package to `haymarket-bicycles`, verified phone number consistency, removed unused Supabase dependency and cleaned imports
- **Accessibility** — ARIA labels on all navigation buttons and hero CTAs; ESC handlers for PhoneModal and mobile menu
- **Architecture** — shared `Layout` component replacing per-page nav/footer duplication; `src/utils/helpers.ts` utility library (phone formatting, scroll helpers, device detection, store-hours calculation)
- **SEO** — react-helmet-async with per-page titles/descriptions; reusable `SEO` component
- **UX** — BackToTop button (appears after 300px), real-time StoreHours indicator (Mon closed, Tue–Sat 11–6, Sun 12–5), LoadingSpinner for route transitions, 48px touch targets
- **Performance** — React.lazy code splitting for all routes; width/height on logo images to prevent layout shift
- **PhoneModal focus trap** — Tab cycling within modal, focus returns to trigger on close

> Note: the `.env` Supabase variables were left behind during this cleanup and removed in September 2026.

## 2024–2025 (Foundation sessions)

- **Contact section redesign** — removed contact form (simplified UX), four-card grid with icon backgrounds, direct "Call Us Now" tel: link
- **Content** — hero headline "Haymarket's Neighborhood Bicycle Shop Since 2007"; "18 years" tagline; section titles emphasizing Haymarket/Gainesville/Northern Virginia
- **Brand colors** — official logo palette applied site-wide (Deep Forest `#144D3A`, Lime `#73BB44`, Orange `#F36E32`, Yellow `#F5E100`, Lime `#CBD92A`)
- **Typography** — Montserrat for headings/nav/buttons (Extra Bold 800 for H1 matching the logo), system fonts for body
- **SEO foundation** — meta tags, geo tags, Open Graph/Twitter cards, BikeStore/Organization/Service/FAQPage schema, robots.txt, sitemap.xml, image alt text
- **Core UX** — PhoneModal for desktop with copy-to-clipboard, responsive mobile menu, smooth scrolling, social media links

## Historical Reference

- **Supabase:** was briefly planned as a backend (a `groupride.md` plan for a Supabase-backed Community Rides section existed); the dependency was removed in November 2025 and the site is now fully static. The Community Rides concept was later redesigned as static **Local Rides** + **Maintenance Video Guides** pages — see `features-implementation-guide.md`.

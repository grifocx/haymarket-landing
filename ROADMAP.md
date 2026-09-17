# Roadmap

Open and planned work for the Haymarket Bicycles website, ordered by priority within each tier. Completed work is in `CHANGELOG.md`; the two next features have a full build spec in `features-implementation-guide.md`.

**Effort guide:** Low = under 1 hour · Medium = 1–4 hours · High = 4+ hours or multiple sessions

## Next Up — Two New Feature Pages

Full implementation spec: `features-implementation-guide.md`. Content to gather first (routes + uploaded YouTube videos) is checklist §9 of that guide.

- [ ] **Local Rides page** (`/rides`) — *Medium* — Static, evergreen staff-favorite routes (3–5) with distance, difficulty, surface, and a link to RideWithGPS/Strava/Komoot. New `src/rides.ts` + `RideCard` + page component. Home teaser section and nav links included in the spec.
- [ ] **Maintenance Video Guides page** (`/maintenance`) — *Medium* — Embedded YouTube how-to videos (flat tire, chain care, saddle height, brakes…), grouped by category, with HowTo structured data. New `src/maintenance.ts` + `MaintenanceCard` + page component. Home teaser included in the spec.
- [ ] **Legacy database cleanup** — *Low* — Pre-implementation step from the features guide §1: delete `groupride.md`, strip the remaining Supabase references from docs, and confirm `.env` has no database variables. (The `.env` Supabase variables were removed September 2026.)

## High Priority

- [ ] **Prerender routes for per-page meta** — *Medium-High* — Social scrapers don't run JS, so `/services` and `/catalog` shares currently show homepage metadata; static canonicals also conflict with Helmet's on subpages. Evaluate vite-ssg or vite-plugin-prerender; strip route-specific tags from index.html once done. Biggest remaining SEO item.
- [ ] **Convert product images to WebP** — *Low-Medium* — The five product PNGs (9.6 MB total) are still what the site serves. Convert to 1200px WebP q82 (~97% smaller) and update `src/products.ts`; optionally remove the originals after verifying. One-liner in README's image guide.
- [ ] **Netlify `_headers` for production security headers** — *Low* — The vite.config.ts header plugin only affects the dev server; production currently ships no security headers.
- [ ] **Verify Netlify primary domain is www** — *Low* (non-code) — Site configuration → Domain management; apex must 301 to www. Required companion to the canonical-host fix.
- [ ] **Align NAP across Google Business Profile, Yelp, Instagram bio** — *Low* (non-code) — Yelp shows Tue–Sat 12–6, Instagram bio M–Sa 10–6, website Tue–Sat 11–6 + Sun 12–5. Local SEO entity consistency.

## Medium Priority

- [ ] **Contact form with error states** — *Medium* — Name/email/message form in the Contact section with inline validation; pairs with the thank-you page below. (A form existed and was deliberately removed early on — re-add only with the full error-state UX specified in the site audit.)
- [ ] **Thank-you / confirmation page** (`/thank-you`) — *Low* — Depends on the contact form.
- [ ] **Privacy policy page** (`/privacy`) — *Low* — Cover contact-form data, analytics cookies if added; footer link.
- [ ] **Terms and conditions page** (`/terms`) — *Low* — Site usage terms, service/product disclaimers; footer link.
- [ ] **Cookie consent banner** — *Low* — Dismissible banner; becomes necessary once analytics is installed.
- [ ] **Analytics installation** — *Low* — GA4 or a privacy-friendly option (Plausible/Fathom). Install the tracking script in index.html.
- [ ] **Manual testing checklist** — *Medium* — Browser compatibility, mobile devices, accessibility steps. Partially covered by the README post-deploy checklist.

## Lower Priority / Polish

- [ ] **Self-host or preload Montserrat** — *Low* — Removes the render-blocking Google Fonts round trip.
- [ ] **Replace og-image with a storefront/bike photo** — *Low* — Current card is logo-on-white; a photo earns better click-through.
- [ ] **Enhance image alt text** — *Medium* — Review all images; add context and location keywords where appropriate.
- [ ] **Migrate components to theme tokens** — *Medium* — `src/theme.ts` exists but components still hardcode hex values.
- [ ] **Sticky mobile CTA bar refinements** — *Low* — Component exists (`StickyMobileCTA.tsx`); verify placement/behavior across all pages and refine if needed.
- [ ] **Full navigation on non-Home pages** — *Medium* — Non-Home pages currently show only a "Back to Home" link; consider a fuller nav. Decide after the Rides/Maintenance pages ship.
- [ ] **AggregateRating schema** — *Low* — Data exists in `src/reviews.ts`, but on-site aggregate ratings for the business itself are treated as self-serving by Google; prioritize Google Business Profile reviews instead. Revisit only if a non-self-serving placement is found.

## Larger Bets (Backlog)

- [ ] **Product image gallery** — *High* — Multi-image support, lightbox, touch/swipe gestures.
- [ ] **Catalog filtering and search** — *High* — Category/price filters, search.
- [ ] **Google Maps embed** — *High* — Interactive map in the contact section; handle API keys and privacy.
- [ ] **Image lazy loading with placeholders** — *High* — Intersection Observer + blur placeholder.
- [ ] **Service booking interface** — *High* — Calendar/scheduler with validation; no backend needed.
- [ ] **Blog** — *High* — Cycling tips and news; also an SEO content play.
- [ ] **E-bike landing page** — *High* — Dedicated SEO page for e-bike sales/service.
- [ ] **Testing infrastructure** — *High* — Unit tests (Vitest/RTL), pre-commit hooks (Husky + lint-staged), E2E (Playwright or Cypress).
- [ ] **Dynamic Open Graph images** — *High* — Per-product/service OG image generation.

## Notes

- **Priority rule:** quick wins first, then medium items, plan high-effort features carefully.
- **Risk guide:** No risk = docs/content · Low = no significant UX change · Medium = needs cross-device/browser testing.
- **Sequencing suggestion:** legacy cleanup → ship the two feature pages → prerendering → WebP conversion → security headers → analytics + cookie banner (+ privacy/terms pages) → contact form.

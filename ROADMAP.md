# Roadmap

Open and planned work for the Haymarket Bicycles website, ordered by priority within each tier. Completed work is in `CHANGELOG.md`; the two next features have a full build spec in `features-implementation-guide.md`.

**Effort guide:** Low = under 1 hour · Medium = 1–4 hours · High = 4+ hours or multiple sessions

## Next Up — Two New Feature Pages

Full implementation spec: `features-implementation-guide.md`. Content to gather first (routes + uploaded YouTube videos) is checklist §9 of that guide.

- [ ] **Local Rides page** (`/rides`) — *Medium* — Static, evergreen staff-favorite routes (3–5) with distance, difficulty, surface, and a link to RideWithGPS/Strava/Komoot. New `src/rides.ts` + `RideCard` + page component. Home teaser section and nav links included in the spec.
- [ ] **Maintenance Video Guides page** (`/maintenance`) — *Medium* — Embedded YouTube how-to videos (flat tire, chain care, saddle height, brakes…), grouped by category, with HowTo structured data. New `src/maintenance.ts` + `MaintenanceCard` + page component. Home teaser included in the spec.
- [ ] **Legacy database cleanup** — *Low* — Pre-implementation step from the features guide §1: delete `groupride.md`, strip the remaining Supabase references from docs, and confirm `.env` has no database variables. (The `.env` Supabase variables were removed September 2026.)
- [ ] **Fill in `content/about.md` owner details** — *Low* (non-code) — The About page states only what this file says; the owner's name is not currently recorded anywhere on the site. Add it (plus any other facts worth stating) and sync `src/pages/About.tsx`.
- [ ] **Quarterly answers accuracy pass** — *Low* (non-code) — 24 answer pages now state prices, turnaround expectations, e-bike system support, and policies. Review them each quarter against reality (see `answers-update-guide.md`); prices must also stay in sync with `content/service-prices.json`. Several answers deliberately hedge where facts were unconfirmed — e-bike diagnostic fee, repair turnaround, loaner/pickup policy, kids' trade-in — confirm or correct those first.
- [ ] **Verify service prices against POS** — *Low* (non-code) — The 12 packages in `content/service-prices.json` were migrated from the old card data; confirm name + price against the POS. Also confirm the two `price_note` values (Drivetrain Cleaning and Suspension Service, both "plus parts" — my assumption, not confirmed) and fill per-row `turnaround` only where it differs from the page-level statement.
- [ ] **Validate /services structured data in validator.schema.org** — *Low* (non-code) — Paste the built `/services` page into validator.schema.org and confirm the 12 Service/Offer blocks parse cleanly; the Rich Results Test is not the target validator for these.

## High Priority

- [x] **Prerender routes for per-page meta** — *Done November 2026* — Implemented with vite-react-ssg; every route ships its own static HTML with per-route title/description/canonical/OG tags (see `src/pageMeta.ts`). Residual cleanup: remove the now-unused `react-helmet-async` dependency and its Vite alias in `vite.config.ts`.
- [ ] **Link the About page from navigation** — *Low* — `/about` exists and ships static HTML, but nothing links to it yet; add it to the desktop/mobile menus and/or footer links.
- [ ] **Custom 404 status for unknown URLs** — *Low-Medium* — The SPA fallback (`_redirects`) serves the app shell with HTTP 200 for any unknown URL, so crawlers see home-page content under junk URLs. Serve a real 404 (Netlify `404.html` or a status-200 only for known routes) so soft-404s stop; visitors' behavior is unchanged.
- [ ] **Trim per-page JSON-LD** — *Low* — BikeStore, Organization, and FAQPage ship on every page including 404 fallback; FAQPage describes content not present on catalog/services. Emit only the schemas relevant to each route. (The stale Service/OfferCatalog block was removed November 2026; per-package Service schema now ships only on /services.)
- [ ] **Fix sitemap host in robots.txt** — *Low* — `Sitemap:` line points at `https://haymarketbicycles.com/sitemap.xml` (apex); should use the canonical `www` host.
- [ ] **Remove unused react-helmet-async dependency** — *Low* — Follow-up to the pre-rendering work: drop the package from `dependencies`, remove the ESM alias from `vite.config.ts`, and verify the build still passes.
- [ ] **Convert product images to WebP** — *Low-Medium* — The five product PNGs (9.6 MB total) are still what the site serves. Convert to 1200px WebP q82 (~97% smaller) and update `src/products.ts`; optionally remove the originals after verifying. One-liner in README's image guide.
- [ ] **Netlify `_headers` for production security headers** — *Low* — The vite.config.ts header plugin only affects the dev server; production currently ships no security headers.
- [ ] **Verify Netlify primary domain is www** — *Low* (non-code) — Site configuration → Domain management; apex must 301 to www. Required companion to the canonical-host fix.
- [ ] **Align NAP across Google Business Profile, Yelp, Instagram bio** — *Low* (non-code) — Yelp shows Tue–Sat 12–6, Instagram bio M–Sa 10–6, website Tue–Sat 11–6 + Sun 12–5. Local SEO entity consistency.

## Medium Priority

- [ ] **Contact form with error states** — *Medium* — Name/email/message form in the Contact section with inline validation; pairs with the thank-you page below. (A form existed and was deliberately removed early on — re-add only with the full error-state UX specified in the site audit.)
- [ ] **Thank-you / confirmation page** (`/thank-you`) — *Low* — Depends on the contact form.
- [ ] **Privacy policy page** (`/privacy`) — *Low* — Cover contact-form data, MailerLite (installed October 2026), analytics cookies if added; footer link.
- [ ] **Terms and conditions page** (`/terms`) — *Low* — Site usage terms, service/product disclaimers; footer link.
- [ ] **Cookie consent banner** — *Low* — Dismissible banner; now needed since MailerLite (installed October 2026) may set cookies, and before analytics is added.
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
- **Sequencing suggestion:** verify service prices against POS → quarterly answers accuracy pass → ship the two feature pages → WebP conversion → security headers → analytics + cookie banner (+ privacy/terms pages) → contact form. (Prerendering, the Answers hub, and the data-driven Services price table shipped November 2026.)

# Changelog

All notable changes to the Haymarket Bicycles website, in chronological order. Future work lives in `ROADMAP.md`; day-to-day staff content workflows live in `reviews-update-guide.md`, `answers-update-guide.md`, and `features-implementation-guide.md`.

## 2026

### November 2026 — Services Price Table (data-driven)

- **`content/service-prices.json` is now the single source of truth for service packages** — all 12 packages (name, price, what's included, optional `price_note`, optional per-row `turnaround`) migrated from the old hardcoded card data; `src/services.ts` is now a thin adapter over it so Home/Services keep working
- **Services page rebuilt as a real HTML table** — one row per package (Service / Price / What's included / Turnaround); page-level turnaround statement added above the table ("Typical turnaround: 5 days October–February, 10 days March–July"), with per-row overrides shown only where they differ; the old card grid is gone — on phones the same data renders as stacked cards instead
- **"Prices updated" stamp** shown on the page, computed from the same file mtimes the generated sitemap uses for the `/services` `lastmod` — page stamp and sitemap date are guaranteed identical by construction (injected as a build-time constant from `plugins/sitemap.ts`'s helper)
- **Per-package Service + Offer JSON-LD generated from the same JSON** — 12 Service blocks injected only into `/services` static HTML; each links to the site's BikeStore via `provider: {@id: .../#store}`; exact `price`+`priceCurrency` when `price_note` is empty, `priceSpecification.minPrice` when a note like "plus parts" is present (2 packages)
- **Removed the stale site-wide service catalog schema** (OfferCatalog with outdated, price-less entries from an old page version) that shipped on every page; BikeStore business schema unchanged and kept on every page
- **Build-time validation** of the JSON (unique ids/names, positive prices, required text fields, string-typed optional fields) — the build fails with a file-and-field-named error
- Sitemap `/services` `lastmod` and IndexNow watchlist now track `content/service-prices.json`
- **Follow-up cleanup (November 2026)** — with the table replacing the cards, the now-unused `ServiceCard` component and the `src/services.ts` adapter were removed; service data flows from `content/service-prices.json` through `src/serviceData.ts` (parser/validator) and `src/serviceIndex.ts` (runtime loader) only
- Docs corrected to match: the answers staff guide and the features implementation guide now point at `content/service-prices.json` instead of the removed file, and the features guide's SEO section was rewritten for the current build-time meta/schema pattern (the `<SEO>` component and hand-edited sitemap instructions predated the pre-rendering work)

### November 2026 — Answers Content Hub (24 Q&A pages)

- **New `/answers` section** — a question-and-answer hub for local search and customer questions: an index page with client-side search, five topic pages, and one dedicated page per question, all pre-rendered as static HTML with per-page title/description/canonical/OG tags
- **24 answers across 5 topics** — service-repair (7), e-bikes (5), buying (6), bike-fit (2), riding-local (2); pricing and shop facts sourced from `src/services.ts`, `src/shopInfo.ts`, and `content/about.md`
- **Content lives in Markdown, not code** — each answer is one file in `content/answers/` with YAML frontmatter (`title`, `slug`, `topic`, `description`, `answer_summary`, `updated`, `related`, optional `featured`); adding or editing an answer requires no code changes and rebuilds on Netlify automatically
- **Build-time validation** — every answer file is checked at build: unique slugs, valid topic values, real `updated` dates, `related` slugs must point at existing files, description max 155 characters; the build fails with a clear per-file error message
- **Per-answer FAQPage structured data** — each answer page ships a schema.org FAQPage built from its question and `answer_summary`, replacing the site-wide FAQPage block on those routes (tempered-regex strip in `vite.config.ts`); topic and index pages ship BreadcrumbList instead
- **Topic system** — single config (`src/answerTopics.ts`) defines each topic's label, tagline, icon, color, and call-to-action; topic CTAs link to `/services` or open a phone call depending on topic
- **Common questions blocks** — new `CommonQuestions` component surfaces answers contextually: featured answers on Home, service-repair on Services, buying on Catalog; each is an accordion linking to the full answer page
- **Answers in nav and footer** — desktop, mobile, and footer links added to `Layout.tsx`
- **Sitemap and IndexNow** — all 30 answer URLs (index + 5 topic pages + 24 answers) included in the generated sitemap with per-file `lastmod`; IndexNow pings changed answer URLs on deploy
- **Search** — client-side search on the Answers index matches question titles and summaries
- **Related answers** — hand-curated `related` slug lists cross-link answers; "Related answers" section on each answer page
- **Staff workflow guide** — new `answers-update-guide.md` covers the file format, the five topics, how to add/edit answers, and every build validation rule
- **Brand-list correction** — `content/about.md` and the About page now list all five brands (Trek, Cannondale, Orbea incl. custom MyO ordering, Aventon, Time); the new Cannondale/Orbea answer reflects the owner-supplied fact that both are sold (Cannondale floor stock/order, Orbea via MyO custom builds)

### November 2026 — Generated Sitemap, IndexNow, Unified Footer, About Page

- **Sitemap generated at build time** — `sitemap.xml` is now produced automatically after each build from the route list instead of being hand-maintained in `public/`; each `<lastmod>` comes from the actual modification date of that route's content files (products/services/reviews/page source), so it stays accurate with no manual editing
- **IndexNow support for Bing/Copilot** — a verification key file lives on the site, and a build plugin pings the IndexNow endpoint with every URL whose content changed since the previous build; runs automatically on Netlify/CI builds, skipped locally, and can be disabled with `DISABLE_INDEXNOW=1`
- **Unified footer on every page** — the footer now shows the shop name, full address, phone, and hours as plain text, all read from one shared config file (`src/shopInfo.ts`) that matches the JSON-LD values exactly; the old duplicated home-only footer block was removed
- **New About page** (`/about`) — covers ownership (independent, locally owned), opening (2007), brands carried (Trek, Aventon, Time), services offered, and towns served; every fact is sourced from `content/about.md` (created alongside the page from facts already published on the site — the owner's name is not stated anywhere yet; edit `content/about.md` to add it)
- About page ships its own static HTML with its own title/description/canonical, and is included in the generated sitemap
- Not yet linked from navigation — adding it to the nav/footer links is an open item (see `ROADMAP.md`)

### November 2026 — Static Pre-rendering (SSG) + AI Crawler Policy

- **Every route now ships complete static HTML at build time** using `vite-react-ssg` — crawlers and scrapers without JavaScript see the full page text (verified output: Home 75 KB, Catalog 28 KB, Services 25 KB)
- **Per-route head tags baked in at build time** — each generated HTML file carries its own `<title>`, meta description, canonical URL, and Open Graph/Twitter tags from a new shared config (`src/pageMeta.ts`); wording is identical to the previous runtime tags
- **Removed react-helmet-async usage** — the shared `SEO` component and its runtime meta injection are gone (head tags moved to build time); the package still sits in `dependencies` pending a cleanup pass, along with its Vite alias in `vite.config.ts`
- **robots.txt: AI crawlers allowed on purpose** — explicit Allow rules for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, and Bingbot, plus the standard `User-agent: *` allow-all and the sitemap reference
- **Build command changed** to `vite-react-ssg build` (Netlify config unchanged — it runs `npm run build`); the dev server is unchanged (`vite`, plain client-side rendering)
- **react-router-dom moved 7 → 6** (vite-react-ssg peer requirement; the site only uses APIs identical in both versions, so no code changes were needed beyond the route definitions)
- **Restored `_redirects` to `public/`** — it had gone missing from the project source (only the built copy survived). SPA fallback unchanged: unknown URLs serve the app shell and show the 404 page
- Unknown URLs keep the existing behavior — the site loads and visitors see the Not Found page; no hard-404 status change
- Route definitions restructured for the pre-renderer (`src/App.tsx`) with lazy per-page loading preserved; React still hydrates each page so menus, modals, and smooth scrolling work exactly as before

### October 2026 — MailerLite Newsletter Tracking

- Added the MailerLite Universal snippet to the shared page head so it loads on every page (Home, Catalog, Services, 404); account `2525753`
- Snippet loads async in the background, so it does not slow the page down
- The site itself shows nothing new yet — MailerLite forms/pop-ups created in the MailerLite dashboard will now display on the site automatically
- Note: the cookie-consent banner and privacy policy page (see `ROADMAP.md`) became more relevant now that a third-party script is present, since MailerLite may set cookies

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

# Haymarket Bicycles Website

A modern, responsive marketing website for Haymarket Bicycles — Northern Virginia's neighborhood bicycle shop since 2007.

- **Live site:** https://www.haymarketbicycles.com (canonical host; Netlify must keep `www` as the primary domain so the apex 301-redirects)
- **Hosting:** Netlify (auto-deploys on push; build command `npm run build`, publish directory `dist`)
- **Status:** Production. Static content site — no database, no backend.

## Technology Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool and dev server |
| vite-react-ssg | Build-time static pre-rendering (SSG) |
| Tailwind CSS | Utility-first styling |
| React Router DOM (v6) | Client-side routing |
| Lucide React | Icons |
| Montserrat (Google Fonts) | Headings, nav, buttons — matches the logo typeface |

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx           # Shared nav + footer (all pages)
│   ├── PhoneModal.tsx       # Desktop phone modal with focus trap
│   ├── StickyMobileCTA.tsx  # Mobile sticky call/action bar
│   ├── BackToTop.tsx        # Floating scroll-to-top button
│   ├── StoreHours.tsx       # Real-time Open/Closed indicator
│   ├── LoadingSpinner.tsx   # Route transition loader
│   ├── CommonQuestions.tsx  # Accordion of answer links, shown per-topic context
│   ├── ProductCard.tsx / ServiceCard.tsx / ReviewCard.tsx
│   └── ErrorBoundary.tsx
├── pages/
│   ├── Home.tsx             # Hero, services, products, reviews, common questions, story, contact
│   ├── Catalog.tsx          # Full product catalog + buying questions
│   ├── Services.tsx         # Detailed services + e-bike requirements notice + service questions
│   ├── About.tsx            # Ownership, brands, services, towns served
│   ├── Answers.tsx          # Answers index with client-side search
│   ├── AnswerTopicPage.tsx  # One page per topic (5 topics)
│   ├── AnswerPage.tsx       # One page per answer (24 answers, from Markdown)
│   └── NotFound.tsx         # 404 page
├── answers.ts / answersData.ts  # Answer loader + frontmatter parser/validator
├── answerTopics.ts          # Topic labels, icons, colors, and per-topic call-to-action
├── utils/helpers.ts         # Formatting, scroll, device detection, store hours
├── shopInfo.ts              # Single source of truth: name/address/phone/hours (footer + JSON-LD)
├── products.ts              # Product data and types
├── services.ts              # Service data and types
├── reviews.ts               # Curated customer reviews from Listen360
├── pageMeta.ts              # Per-route title/description/canonical (baked in at build time)
├── theme.ts                 # Centralized brand color/spacing configuration
├── App.tsx                  # Route definitions (lazy per-page loading)
└── main.tsx                 # Entry point (ViteReactSSG)
content/
├── about.md                 # Source-of-truth copy for the About page
└── answers/                 # 24 answer Markdown files — each one is a page (see answers-update-guide.md)
plugins/                     # Build plugins: answer loading, sitemap generation, IndexNow ping
public/                      # Product images, logos, robots.txt, sitemap.xml, _redirects
```

## Key Pages & Sections

- **Home** — hero with live store-hours badge, info bar, services, featured products, reviews (Listen360), common questions, our story, contact. Supports hash navigation (`/#contact`, `/#services`, `/#products`, `/#story`).
- **Catalog** — full product listing, plus a "Common questions before you buy" block (buying-topic answers).
- **Services** — service offerings, e-bike service requirements notice (`#ebike-requirements`), plus a "Common questions about service" block (service-repair answers).
- **About** — ownership, brands carried, services offered, towns served. Facts sourced from `content/about.md`.
- **Answers** (`/answers`) — Q&A hub: searchable index, 5 topic pages (`/answers/topic/<topic>`), and one page per question (`/answers/<slug>`, 24 answers). Each answer page ships its own FAQPage structured data. Content is Markdown files in `content/answers/` — see `answers-update-guide.md`.
- **Contact** — no contact form; visitors call (703) 754-1911 or email info@haymarketbicycles.com. A contact form is on the roadmap.

## Documentation

| File | Purpose |
|------|---------|
| `CHANGELOG.md` | Project history — all completed work, in order |
| `ROADMAP.md` | All open and planned work, organized by priority |
| `answers-update-guide.md` | Staff guide: how to add and edit the Q&A answer files (no code needed) |
| `features-implementation-guide.md` | Build spec for the next two features (Local Rides + Maintenance Video Guides) |
| `reviews-update-guide.md` | Staff guide: how to refresh the customer reviews quarterly |

## Store Information

**Haymarket Bicycles**
- Address: 4414 Costello Way, Haymarket, VA 20169
- Phone: (703) 754-1911
- Email: info@haymarketbicycles.com
- Established: 2007

**Store hours** (used in StoreHours component and schema markup):
- Monday: Closed
- Tuesday – Saturday: 11:00 AM – 6:00 PM
- Sunday: 12:00 PM – 5:00 PM

**Social:** [Facebook](https://www.facebook.com/HaymarketBicycles/) · [Instagram](https://www.instagram.com/haymarketbikes) · [TikTok](https://www.tiktok.com/@haymarketbicycles)

## Design System

### Brand Colors (from the official logo)

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Forest Green | `#144D3A` | Headings, primary text |
| Lime Green | `#73BB44` | Accents, hover states |
| Coral Orange | `#F36E32` | Primary CTA buttons |
| Bright Yellow | `#F5E100` | Secondary accents, badges |
| Lime | `#CBD92A` | Additional accent variety |

All colors are also defined in `src/theme.ts` (components still use hardcoded hex values; migrating to theme tokens is a roadmap item).

### Typography

- **Montserrat** for headings, navigation, and buttons — Extra Bold 800 for H1, Bold 700 for H2/H3, Regular 400 for labels
- **System fonts** for body text (readability + performance)
- Loaded via Google Fonts CDN with preconnect

### Accessibility

WCAG 2.1 Level AA: full keyboard navigation (ESC closes modal/menu, Enter/Space activates items, focus trap in PhoneModal), ARIA labels on all controls, 48px minimum touch targets, timezone-correct store hours (America/New_York), semantic HTML with descriptive alt text.

## SEO

- **Static pre-rendering (SSG)**: every route ships a complete HTML file at build time with its own `<title>`, meta description, canonical URL, and Open Graph/Twitter tags — no JavaScript required to see page content or metadata. Per-route copy lives in `src/pageMeta.ts`
- **Generated sitemap**: `dist/sitemap.xml` is built automatically from the route list, with per-route `<lastmod>` dates taken from the content files' modification times — never edit the sitemap by hand
- **IndexNow**: on Netlify/CI builds, changed URLs are submitted to IndexNow (used by Bing/Copilot); the key file is `public/{key}.txt`
- Canonical URLs on `https://www.haymarketbicycles.com`
- Schema.org: BikeStore (LocalBusiness), Organization, Service, FAQPage (site-wide block, replaced on answer pages by per-question FAQPage schema; topic/index pages get BreadcrumbList)
- Open Graph + Twitter cards with a 1200×630 `og-image.png`
- `robots.txt` allows all crawlers including AI bots (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended — allowed on purpose), plus `sitemap.xml` in `/public`
- Pages still hydrate into a normal React app after load, so interactivity is unchanged
- Shop name/address/phone/hours in the footer come from `src/shopInfo.ts`, which matches the JSON-LD — update that one file to change them everywhere

## Running the Project

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (runs automatically in this environment)
npm run build      # Production build to dist/
npm run preview    # Preview the production build
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

## Deployment (Netlify)

1. Connect the Git repository
2. Build command: `npm run build` · Publish directory: `dist`
3. Ensure the primary domain is **www** (apex redirects to it)
4. SPA routing is handled by `_redirects`

### Post-deploy checklist

- [ ] All pages load; nav links work
- [ ] Phone/email links work on mobile
- [ ] Store-hours badge shows the correct Open/Closed state
- [ ] Each page's HTML has its own title/canonical (view-source on `/catalog` and `/services` — should not say "Premier Bike Shop … Since 2007")
- [ ] Generated `dist/sitemap.xml` lists every route with a current `<lastmod>`
- [ ] Build log shows the IndexNow ping (Netlify/CI only)
- [ ] Footer on every page shows the same name/address/phone/hours as the JSON-LD
- [ ] Google Rich Results Test passes on Home and Services
- [ ] Sitemap submitted to Google Search Console
- [ ] Share a page link and verify the Open Graph preview shows that page's title/description

## Managing Product Images

Product images live in `/public/` and are referenced by filename in `src/products.ts`.

| Attribute | Value |
|-----------|-------|
| Format | WebP preferred (~quality 82); avoid PNG for photos |
| Dimensions | 1200px wide |
| Max size | 150 KB recommended |
| Naming | lowercase-hyphens, no spaces (e.g. `trek-domane.webp`) |
| Display | 256px-tall card (`h-64`), center-cropped via `object-cover` |

Conversion one-liner (ImageMagick): `magick input.png -resize 1200x -quality 82 output.webp`

**Note:** the original product PNGs are still in the project at full size and are what the site currently serves — converting them to WebP is an open roadmap item (see `ROADMAP.md`).

## Notes

- Product, service, and review data are static TypeScript files — see `reviews-update-guide.md` and `features-implementation-guide.md` for non-developer editing workflows
- Answer content is Markdown in `content/answers/` — see `answers-update-guide.md`; the build validates every file (unique slugs, valid topics, 155-char descriptions, real `related` links) and fails with a named error if one is wrong
- About-page facts live in `content/about.md`; the page must only state what that file states
- Footer shop details come from `src/shopInfo.ts` — one file drives footer text and JSON-LD
- No database: Supabase was removed in November 2025 and the site is fully static
- The design avoids purple/indigo colors per brand requirements

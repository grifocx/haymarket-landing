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
| Tailwind CSS | Utility-first styling |
| React Router DOM | Client-side routing |
| react-helmet-async | Per-page meta tags |
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
│   ├── SEO.tsx              # Reusable per-page meta tags
│   ├── ProductCard.tsx / ServiceCard.tsx / ReviewCard.tsx
│   └── ErrorBoundary.tsx
├── pages/
│   ├── Home.tsx             # Hero, services, products, reviews, story, contact
│   ├── Catalog.tsx          # Full product catalog
│   ├── Services.tsx         # Detailed services + e-bike requirements notice
│   └── NotFound.tsx         # 404 page
├── utils/helpers.ts         # Formatting, scroll, device detection, store hours
├── products.ts              # Product data and types
├── services.ts              # Service data and types
├── reviews.ts               # Curated customer reviews from Listen360
├── theme.ts                 # Centralized brand color/spacing configuration
├── App.tsx                  # Lazy-loaded routes with Suspense
└── main.tsx                 # Entry point (HelmetProvider)
public/                      # Product images, logos, robots.txt, sitemap.xml
```

## Key Pages & Sections

- **Home** — hero with live store-hours badge, info bar, services, featured products, reviews (Listen360), our story, contact. Supports hash navigation (`/#contact`, `/#services`, `/#products`, `/#story`).
- **Catalog** — full product listing.
- **Services** — service offerings, e-bike service requirements notice (`#ebike-requirements`).
- **Contact** — no contact form; visitors call (703) 754-1911 or email info@haymarketbicycles.com. A contact form is on the roadmap.

## Documentation

| File | Purpose |
|------|---------|
| `CHANGELOG.md` | Project history — all completed work, in order |
| `ROADMAP.md` | All open and planned work, organized by priority |
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

- Per-page titles/descriptions via `SEO.tsx` (react-helmet-async)
- Canonical URLs on `https://www.haymarketbicycles.com`
- Schema.org: BikeStore (LocalBusiness), Organization, Service, FAQPage
- Open Graph + Twitter cards with a 1200×630 `og-image.png`
- `robots.txt` and `sitemap.xml` in `/public`

Known SEO gap: pages ship homepage meta tags when shared (social scrapers don't run JS). Prerendering is the top SEO item on the roadmap.

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
- [ ] Google Rich Results Test passes on Home and Services
- [ ] Sitemap submitted to Google Search Console
- [ ] Share a page link and verify the Open Graph preview

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
- No database: Supabase was removed in November 2025 and the site is fully static
- The design avoids purple/indigo colors per brand requirements

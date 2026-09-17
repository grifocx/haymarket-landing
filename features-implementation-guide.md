# Feature Implementation Guide: Local Rides + Maintenance Video Guides

## Overview

This document guides the implementation of two new static content pages for the Haymarket
Bicycles website: a **Local Rides** page (curated recommended routes) and a **Maintenance
Guides** page (at-home how-to videos embedded from YouTube). Both features use the same
proven static-content pattern the site already uses for products, services, and reviews —
data lives in a TypeScript file, renders through a card component, and rebuilds
automatically on Netlify with every save. **No database, no backend, no API calls.**

This guide is written so implementation can proceed once two pieces of content are ready:

1. **3–5 curated local rides** — each with a name, description, distance, difficulty,
   surface type, and a link to the route on your mapping service (RideWithGPS, Strava,
   Komoot, etc.)
2. **YouTube videos uploaded and public** — each maintenance guide references a YouTube
   video URL, so the videos must exist on YouTube before or at implementation time

---

## Table of Contents

1. [Legacy Database Cleanup](#1-legacy-database-cleanup)

---

## 1. Legacy Database Cleanup

Before building the new features, scrub every remaining database reference so the project
reflects a simple, database-free, Netlify-hosted site.

### Cleanup Status (September 2026)

| File | Action | Status |
|------|--------|--------|
| `groupride.md` | Delete — old Supabase-backed Community Rides plan, superseded by this guide | **Done** |
| `project_roadmap.md` | Delete — its open items were consolidated into `ROADMAP.md`, its history into `CHANGELOG.md` | **Done** |
| `.env` | Remove leftover `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` | **Done** |
| `README.md` | Rewritten without Supabase references; docs table now lists `CHANGELOG.md` and `ROADMAP.md` | **Done** |

Remaining: after implementation, search the project (excluding `node_modules`) for
`supabase`, `database`, and `community ride` to confirm no stray references remain in
code, config, or documentation.

---

## 2. Local Rides Page

A dedicated page showcasing hand-picked, evergreen local routes worth recommending to
customers. These are **not** scheduled events — they are standing route recommendations
that rarely change.

### 2a. Data File — `src/rides.ts`

Create a new data file following the exact pattern of `src/products.ts` and
`src/services.ts`:

```typescript
export interface Ride {
  id: string;
  name: string;
  description: string;
  distance: string;        // e.g., "25 miles"
  difficulty: string;      // e.g., "Easy", "Moderate", "Challenging"
  surface: string;         // e.g., "Road", "Gravel", "Trail", "Mixed"
  routeUrl: string;        // full link to RideWithGPS / Strava / Komoot route
  highlightColor: string;  // brand color for the card accent — see color rotation below
}

export const localRides: Ride[] = [
  {
    id: '1',
    name: 'Example Ride Name',
    description: 'A short, inviting description of the route and what makes it worth riding.',
    distance: '25 miles',
    difficulty: 'Moderate',
    surface: 'Road',
    routeUrl: 'https://ridewithgps.com/routes/your-route-id',
    highlightColor: '#73BB44',
  },
  // ...3–5 total rides
];
```

### Ride Object Fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Any unique string; sequential integers work well (`'1'`, `'2'`, ...) |
| `name` | string | Ride name, e.g., `"Haymarket Gravel Loop"` |
| `description` | string | 1–3 sentence description of the route, terrain, and why it's great |
| `distance` | string | Human-readable distance, e.g., `"12 miles"`, `"45 km"` |
| `difficulty` | string | One of: `Easy`, `Moderate`, `Challenging` (keeps filtering simple) |
| `surface` | string | One of: `Road`, `Gravel`, `Trail`, `Mixed` |
| `routeUrl` | string | Full URL to the route on your mapping service. Opens in a new tab. |
| `highlightColor` | string | Brand color hex — rotate through the palette (see below) |

### Brand Color Rotation

Rotate `highlightColor` across rides using the existing brand palette so cards have
visual variety, exactly as `ProductCard` and `ServiceCard` do today:

| Order | Color | Hex |
|-------|-------|-----|
| 1st | Lime | `#73BB44` |
| 2nd | Orange | `#F36E32` |
| 3rd | Yellow | `#F5E100` |
| 4th | Dark Green | `#144D3A` |
| 5th | Lime Green | `#CBD92A` |

These colors are defined in `src/theme.ts` under `theme.colors`.

### 2b. Card Component — `src/components/RideCard.tsx`

Create a card component following the styling conventions of `ServiceCard.tsx`:

- White card with `rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2`
- Top border accent using `border-t-4` with the ride's `highlightColor` (same pattern as `ServiceCard`)
- Display: ride name (Montserrat bold, `text-[#144D3A]`), description, distance, difficulty, and surface
- Use Lucide React icons: `MapPin` for distance/surface, `Mountain` or `Gauge` for difficulty, `Route` or `ExternalLink` for the route link
- Route link button: orange (`#F36E32`) button styled like the ServiceCard CTA, with `target="_blank" rel="noopener noreferrer"` so it opens in a new tab
- Fully responsive, minimum 48×48px touch targets on the button (matches existing accessibility standard)
- Import all icons used at the top of the file (e.g., `import { MapPin, Gauge, ExternalLink } from 'lucide-react'`)

### 2c. Page Component — `src/pages/Rides.tsx`

Create a full page component following the structure of `src/pages/Services.tsx`:

- Wrap in `<Layout>` (imported from `../components/Layout`)
- Include `<SEO>` component at the top with page-specific title and description (see Section 6)
- Hero section with page heading and a short intro paragraph explaining these are
  staff-favorite local routes, evergreen recommendations (not scheduled events)
- Responsive grid of `<RideCard>` components: 1 column on mobile, 2 columns on tablet,
  3 columns on desktop (use `grid md:grid-cols-2 lg:grid-cols-3 gap-8`)
- Map over `localRides` from `src/rides.ts`
- Include `<BackToTop>` component (same as other pages)
- Friendly empty state: if the `localRides` array is ever empty, show a short message
  like "New routes coming soon — check back for our latest recommendations."

### Difficulty / Surface Badges

Display difficulty and surface as small colored badges or pills on each card. Suggested
badge colors by difficulty:

| Difficulty | Badge Background | Badge Text |
|------------|-----------------|------------|
| Easy | `#73BB44` (lime) | white |
| Moderate | `#F5E100` (yellow) | `#144D3A` (dark green) |
| Challenging | `#F36E32` (orange) | white |

Surface badges can use a neutral style (`bg-gray-100 text-[#144D3A]`) or a subtle
colored variant. Keep contrast readable on all badge backgrounds.

---

## 3. Maintenance Video Guides Page

A dedicated page of common at-home maintenance tasks, each with an embedded YouTube
video that plays inline so visitors never leave the site.

### 3a. Data File — `src/maintenance.ts`

Create a new data file following the same static pattern:

```typescript
export interface MaintenanceGuide {
  id: string;
  title: string;           // e.g., "How to Change a Flat Tire"
  summary: string;         // 1–2 sentence written summary of the task
  tools: string[];         // list of tools/materials needed
  youtubeId: string;       // YouTube video ID (the part after "v=" in the URL)
  category: string;        // e.g., "Tires", "Drivetrain", "Fit", "Brakes"
  highlightColor: string;  // brand color for the card accent
}

export const maintenanceGuides: MaintenanceGuide[] = [
  {
    id: '1',
    title: 'How to Change a Flat Tire',
    summary: 'Learn to remove your wheel, swap the tube, and re-inflate so you\'re never stranded.',
    tools: ['Tire levers', 'Spare tube', 'Pump or CO2 inflator'],
    youtubeId: 'dQw4w9WgXcQ',   // replace with your actual video ID
    category: 'Tires',
    highlightColor: '#73BB44',
  },
  // ...more guides
];
```

### MaintenanceGuide Object Fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Unique string; sequential integers work well |
| `title` | string | Task name, e.g., `"How to Clean and Lube Your Chain"` |
| `summary` | string | 1–2 sentence description of what the guide covers |
| `tools` | string[] | List of tools or materials the viewer needs |
| `youtubeId` | string | The YouTube video ID only — **not** the full URL. For a video at `https://www.youtube.com/watch?v=ABC123xyz`, the ID is `ABC123xyz`. This keeps the embed clean and makes swapping a video trivial. |
| `category` | string | One of: `Tires`, `Drivetrain`, `Fit`, `Brakes`, `General` (keeps grouping consistent) |
| `highlightColor` | string | Brand color hex — rotate through the palette |

### How to Get a YouTube Video ID

From a standard YouTube URL:
```
https://www.youtube.com/watch?v=ABC123xyz
```
The video ID is `ABC123xyz` (everything after `v=`).

From a shortened URL:
```
https://youtu.be/ABC123xyz
```
The video ID is `ABC123xyz` (everything after the last `/`).

### 3b. Card Component — `src/components/MaintenanceCard.tsx`

Create a card component with these elements:

- Same card styling as `ServiceCard` (white, `rounded-xl`, `shadow-lg`, `hover:shadow-2xl`,
  `hover:-translate-y-2`, `border-t-4` with `highlightColor`)
- **Video embed area** at the top of the card: a responsive 16:9 YouTube iframe using the
  video ID:
  ```tsx
  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
    <iframe
      src={`https://www.youtube.com/embed/${guide.youtubeId}`}
      title={guide.title}
      className="absolute top-0 left-0 w-full h-full rounded-t-xl"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  </div>
  ```
  The `paddingBottom: 56.25%` trick creates a responsive 16:9 aspect ratio that works
  on all screen sizes. `loading="lazy"` prevents loading all videos at once on a long
  page — they load when the user scrolls to them.
- Below the video: title (Montserrat bold, `text-[#144D3A]`), summary text, and tools
  list
- Tools list: display each tool with a `Wrench` or `Check` icon (Lucide React) in a
  vertical list, same pattern as `ProductCard`'s features list
- Category badge: small pill in the top-right of the card content area showing the
  category (e.g., "Tires"), styled with a subtle background
- No external button needed — the video plays inline. The card itself is the
  interactive element.
- Import all icons used at the top of the file

### 3c. Page Component — `src/pages/Maintenance.tsx`

Create a full page component following the structure of `src/pages/Services.tsx`:

- Wrap in `<Layout>`
- Include `<SEO>` component with page-specific title and description (see Section 6)
- Hero section with page heading and a short intro: "Learn basic bike maintenance at
  home with our short video guides. Save a trip to the shop and keep your bike running
  smooth."
- **Category grouping**: group the guides by `category`. Render a subheading for each
  category (e.g., "Tires", "Drivetrain", "Fit") followed by a responsive grid of that
  category's cards. This keeps the page organized as the guide library grows.
  - Suggested implementation: derive the unique categories from the data
    (`[...new Set(maintenanceGuides.map(g => g.category))]`), then filter and render
    each group. This keeps the page fully data-driven — adding a new category in the
    data file automatically creates a new section.
- Responsive grid within each category: 1 column on mobile, 2 columns on tablet and
  desktop (use `grid md:grid-cols-2 gap-8`) — maintenance cards are wider due to the
  video, so 2 columns max reads better than 3
- Include `<BackToTop>` component
- Friendly empty state if the array is ever empty

---

## 4. Home Page Teasers

Add two teaser sections to `src/pages/Home.tsx` so visitors discover the new pages
without hunting. Both teasers link to the full dedicated pages.

### 4a. Recommended Rides Teaser

- Place after the **Our Story** section (before the Contact section), matching the
  vertical rhythm and section heading style of existing Home sections
- Section heading: "Recommended Rides" with a short subheading like "Staff-favorite
  routes around Haymarket and Northern Virginia"
- Show 2 featured ride cards (first 2 from `localRides`) using `RideCard`
- Button below: "View All Rides" linking to `/rides` (use `<Link>` from react-router-dom)
- Add `id="rides"` to the section for anchor navigation

### 4b. Learn Basic Maintenance Teaser

- Place after the Recommended Rides teaser, before Contact
- Section heading: "Learn Basic Maintenance" with a short subheading like "Simple video
  guides to keep your bike running at home"
- Show 2 featured guide cards (first 2 from `maintenanceGuides`) using
  `MaintenanceCard`
- Button below: "View All Guides" linking to `/maintenance`
- Add `id="maintenance"` to the section

### 4c. Hash Navigation

The Home page already has a `useEffect` hook that handles hash-based scrolling for
`#contact`, `#services`, `#products`, and `#story`. Extend it to also handle
`#rides` and `#maintenance` so navigation from other pages scrolls smoothly to these
sections. The existing pattern in `src/pages/Home.tsx` and the `scrollToSection`
helper in `src/utils/helpers.ts` show exactly how this works.

---

## 5. Navigation, Footer & Routing

### 5a. Routing — `src/App.tsx`

Add two new lazy-loaded routes following the existing pattern:

```typescript
const Rides = lazy(() => import('./pages/Rides').then(module => ({ default: module.Rides })));
const Maintenance = lazy(() => import('./pages/Maintenance').then(module => ({ default: module.Maintenance })));
```

Add inside `<Routes>`:
```tsx
<Route path="/rides" element={<Rides />} />
<Route path="/maintenance" element={<Maintenance />} />
```

Place them between the existing page routes and the catch-all `NotFound` route.

### 5b. Navigation Bar — `src/components/Layout.tsx`

The current navigation has two modes: **Home page** (section-scroll buttons for
Services, Products, Our Story, Contact) and **non-Home pages** (a single "Back to
Home" link). The new pages are full standalone routes like Catalog and Services, so
they will show the "Back to Home" link automatically — no new nav mode needed.

However, **add the new pages to the Home page navigation** so visitors can reach them
from the main menu. In the Home-page desktop nav (`hidden md:flex` block) and the
mobile menu, add buttons/links for "Rides" and "Guides" (short labels to fit the nav
bar). These should smooth-scroll to the teaser sections (`#rides` and `#maintenance`)
on the Home page, using the existing `handleNavClick` pattern.

Suggested nav order on Home:
```
Services | Products | Rides | Guides | Our Story | Contact Us
```

Position "Rides" and "Guides" between Products and Our Story so the menu flows from
shop content → riding content → story → contact.

### 5c. Footer Quick Links — `src/components/Layout.tsx`

In the footer's Quick Links section (Home-page variant), add:
- "Local Rides" — links to `/rides`
- "Maintenance Guides" — links to `/maintenance`

Use `<Link>` from react-router-dom for proper SPA navigation (no full page reload),
matching the fix applied in the July 2026 code review for cross-page links.

### 5d. Non-Home Page Navigation (Future Consideration)

Currently, non-Home pages (Catalog, Services) show only a "Back to Home" link. If you
later want a fuller nav on all pages, that's a separate enhancement — not part of this
build. For now, visitors on the Rides and Maintenance pages navigate back to Home,
where the full menu lives.

---

## 6. SEO & Structured Data

### 6a. Page Meta Tags

Use the existing `<SEO>` component (`src/components/SEO.tsx`) at the top of each new
page. The component accepts `title`, `description`, and `canonicalUrl` props.

**Local Rides page:**
```tsx
<SEO
  title="Local Rides | Haymarket Bicycles"
  description="Staff-favorite cycling routes around Haymarket and Northern Virginia. Road, gravel, and trail rides with distance, difficulty, and route maps."
  canonicalUrl="https://www.haymarketbicycles.com/rides"
/>
```

**Maintenance Guides page:**
```tsx
<SEO
  title="Bike Maintenance Video Guides | Haymarket Bicycles"
  description="Learn basic bike maintenance at home with our short video guides. Flat tires, chain care, tire pressure, seat adjustment, and more from Haymarket Bicycles."
  canonicalUrl="https://www.haymarketbicycles.com/maintenance"
/>
```

### 6b. HowTo Structured Data (Maintenance Guides)

Add HowTo schema markup to the Maintenance page for each guide. This makes the guides
eligible for rich results in Google search (step-by-step instructions displayed
directly in search results).

Inject a JSON-LD `<script>` tag using `react-helmet-async` (already in the project).
For each guide, output a HowTo object with:
- `name`: the guide title
- `description`: the guide summary
- `tool`: each item in the `tools` array
- `step`: at least one step with the video URL as `video.contentUrl` or the YouTube
  watch URL

Example shape:
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Change a Flat Tire",
  "description": "Learn to remove your wheel, swap the tube, and re-inflate.",
  "supply": [],
  "tool": ["Tire levers", "Spare tube", "Pump or CO2 inflator"],
  "step": [{
    "@type": "HowToStep",
    "name": "Watch the guide",
    "video": {
      "@type": "VideoObject",
      "contentUrl": "https://www.youtube.com/watch?v=ABC123xyz",
      "name": "How to Change a Flat Tire"
    }
  }]
}
```

Render an array of HowTo objects (one per guide) inside a single `<script
type="application/ld+json">` tag via the `SEO` component or directly with `Helmet`.

### 6c. Sitemap — `public/sitemap.xml`

Add two new `<url>` entries following the existing format:

```xml
<!-- Local Rides Page -->
<url>
  <loc>https://www.haymarketbicycles.com/rides</loc>
  <lastmod>2026-08-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>

<!-- Maintenance Guides Page -->
<url>
  <loc>https://www.haymarketbicycles.com/maintenance</loc>
  <lastmod>2026-08-02</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

Update the `lastmod` date to the actual implementation date.

---

## 7. Staff Content Update Guide

Create a separate plain-English guide — `content-update-guide.md` — that combines
instructions for updating rides, maintenance guides, and (optionally) reviews in one
place. Model it on the existing `reviews-update-guide.md` in tone and structure.

### Rides Section

Cover:
- Where rides live (`src/rides.ts`) and what the file looks like
- How to add a new ride (copy the object template, fill in fields, increment the `id`)
- How to edit an existing ride (change the field values in place)
- How to remove a ride (delete the object from the array)
- How to reorder rides (rearrange objects in the array — the page renders in array order)
- Where to find the route URL (from RideWithGPS, Strava, or Komoot — copy the share link)
- How to pick the `highlightColor` (rotate through the brand palette listed in the guide)
- The difficulty and surface vocabulary (Easy / Moderate / Challenging; Road / Gravel /
  Trail / Mixed) so values stay consistent

### Maintenance Guides Section

Cover:
- Where guides live (`src/maintenance.ts`) and what the file looks like
- How to add a new guide (copy the template, fill in fields, increment the `id`)
- **How to get a YouTube video ID** — the most important step for non-developers.
  Explain both URL formats with visual examples:
  - `https://www.youtube.com/watch?v=ABC123xyz` → ID is `ABC123xyz`
  - `https://youtu.be/ABC123xyz` → ID is `ABC123xyz`
- How to swap a video (just replace the `youtubeId` value — nothing else changes)
- How to add tools to the `tools` list (add a string to the array)
- How to assign a category (use one of the existing categories: Tires, Drivetrain, Fit,
  Brakes, General — or invent a new one; the page auto-creates a section for it)
- How to remove a guide (delete the object from the array)

### Deployment Explanation

Both sections should end with the same note:

> After saving your changes, push to your repository (or save in your editor connected
> to Netlify). Netlify detects the change, rebuilds the site automatically, and the
> new content is live in about a minute. No developer needed.

---

## 8. Build Verification

After implementation, run the standard verification commands used across the project:

```bash
npm run typecheck     # TypeScript type checking
npm run lint          # ESLint linting
npm run build         # Production build
```

All three must pass with no errors. Then verify in the browser (dev server runs
automatically — do not start it manually):

- [ ] Local Rides page loads at `/rides` with all ride cards displaying
- [ ] Ride route links open in a new tab to the correct mapping service URL
- [ ] Maintenance Guides page loads at `/maintenance` with videos grouped by category
- [ ] YouTube videos play inline within their cards (play, pause, fullscreen)
- [ ] Home page shows both teaser sections with 2 cards each
- [ ] "View All Rides" and "View All Guides" buttons navigate to the correct pages
- [ ] Navigation menu includes Rides and Guides on the Home page (desktop and mobile)
- [ ] Footer Quick Links include Local Rides and Maintenance Guides
- [ ] Mobile menu shows the new nav items and auto-closes on tap
- [ ] All pages are responsive — check mobile, tablet, and desktop widths
- [ ] No stray database references remain anywhere in the project
- [ ] Sitemap includes the two new URLs

---

## 9. Content Checklist (Prepare Before Implementing)

Gather this content before starting implementation. The build cannot be completed
without it.

### Local Rides (3–5 routes)

For each ride, prepare:

- [ ] **Ride name** — short, descriptive (e.g., `"Haymarket Gravel Loop"`)
- [ ] **Description** — 1–3 sentences about the route, terrain, and highlights
- [ ] **Distance** — e.g., `"25 miles"`
- [ ] **Difficulty** — Easy, Moderate, or Challenging
- [ ] **Surface** — Road, Gravel, Trail, or Mixed
- [ ] **Route URL** — the full share link from RideWithGPS, Strava, Komoot, or your
      preferred mapping service. Test each link to make sure it's public (not private)
      before adding it.

### Maintenance Video Guides

For each guide, prepare:

- [ ] **Video uploaded to YouTube and set to Public** (or Unlisted — Public is better
      for SEO). Test the video plays before adding it.
- [ ] **Guide title** — task-oriented (e.g., `"How to Change a Flat Tire"`)
- [ ] **Summary** — 1–2 sentences on what the guide covers
- [ ] **Tools list** — what the viewer needs (e.g., `["Tire levers", "Spare tube",
      "Pump"]`)
- [ ] **Category** — Tires, Drivetrain, Fit, Brakes, or General
- [ ] **YouTube video ID** — extracted from the video URL (see Section 3a for how to
      find it)

### Suggested Starter Maintenance Guides

Common first guides that provide the most value to customers:

| Guide | Category | Why It's Useful |
|-------|----------|-----------------|
| How to Change a Flat Tire | Tires | The #1 at-home skill every cyclist needs |
| How to Pump Your Tires | Tires | Prevents pinch flats, improves ride quality |
| How to Clean and Lube Your Chain | Drivetrain | Extends drivetrain life, improves shifting |
| How to Adjust Your Saddle Height | Fit | The most common fit issue; quick self-fix |
| How to Check Your Brakes | Brakes | Safety-critical; easy visual check |

---

## File Summary

### New Files to Create

| File | Purpose |
|------|---------|
| `src/rides.ts` | Static ride data and `Ride` interface |
| `src/components/RideCard.tsx` | Card component for a single ride |
| `src/pages/Rides.tsx` | Full Local Rides page |
| `src/maintenance.ts` | Static guide data and `MaintenanceGuide` interface |
| `src/components/MaintenanceCard.tsx` | Card component with embedded YouTube video |
| `src/pages/Maintenance.tsx` | Full Maintenance Guides page |
| `content-update-guide.md` | Staff guide for updating rides and maintenance guides |

### Existing Files to Modify

| File | Changes |
|------|---------|
| `src/App.tsx` | Add two lazy-loaded routes (`/rides`, `/maintenance`) |
| `src/pages/Home.tsx` | Add two teaser sections; extend hash navigation for `#rides` and `#maintenance` |
| `src/components/Layout.tsx` | Add Rides and Guides to Home nav (desktop + mobile) and footer Quick Links |
| `public/sitemap.xml` | Add two new `<url>` entries |
| `README.md` | Docs table already references the new features via `features-implementation-guide.md` |
| `ROADMAP.md` / `CHANGELOG.md` | Move the two feature items from "Next Up" to "Completed" with a dated changelog entry once shipped |

### Config Cleaned

| File | Changes | Status |
|------|---------|--------|
| `.env` | Database connection variables removed | **Done** |

# Reviews Update Guide

## Overview

Customer reviews on the Haymarket Bicycles website are maintained manually using a curated
selection from the Listen360 public reviews page. This approach keeps the site fast, gives
editorial control over which reviews are shown, and requires no ongoing API dependencies.

## Where Reviews Live

All review data is stored in a single TypeScript file:

```
src/reviews.ts
```

The `ReviewCard` component that renders each review is at:

```
src/components/ReviewCard.tsx
```

The reviews section is displayed on the Home page (`src/pages/Home.tsx`) between the
Products and Our Story sections.

---

## How to Update Reviews

### Step 1 — Visit the Listen360 page

Go to the live reviews page:

```
https://reviews.listen360.com/haymarket-bicycles
```

Browse the recent reviews and pick 8–12 that best represent the shop. Good candidates:
- Mention specific staff members by name (personal, authentic)
- Highlight themes customers care about: knowledge, speed, pricing, friendliness
- Come from a mix of recent dates so the section feels current
- Are substantive — more than just "Great shop!"

### Step 2 — Open the reviews data file

Open `src/reviews.ts` in your editor. You will see the `reviews` array already declared at the top of the file. Each entry looks like this:

```typescript
  {
    id: '1',
    name: 'Darren Bernard',
    date: 'April 27, 2026',
    text: 'Best local bike shop, hands-down...',
    rating: 5,
  },
```

### Step 3 — Add or replace reviews

To add a new review, append an object to the array:

```typescript
{
  id: '9',           // increment the last id by 1
  name: 'Jane D.',   // use the name exactly as shown on Listen360
  date: 'July 15, 2026',
  text: 'Exact quote copied from the Listen360 page.',
  rating: 5,
},
```

To remove a stale review, delete its object from the array. Re-number the `id` fields
if you want them sequential, but any unique string works.

### Step 4 — Update the total review count (optional)

Near the top of the reviews section in `src/pages/Home.tsx`, there is a badge showing
the total review count:

```tsx
<span>1,097 Reviews on Listen360</span>
```

Update this number to match the current count shown on the Listen360 page header.

### Step 5 — Deploy

Run the build and deploy as normal:

```
npm run build
```

---

## Review Cadence

Aim to refresh the reviews **quarterly** (every 3 months). A good reminder schedule:

| Month       | Action                          |
|-------------|---------------------------------|
| January     | New Year refresh — pick recent reviews |
| April       | Spring season refresh           |
| July        | Summer refresh                  |
| October     | Fall/pre-holiday refresh        |

---

## Review Object Fields

| Field    | Type   | Notes                                         |
|----------|--------|-----------------------------------------------|
| `id`     | string | Any unique string; sequential integers work well |
| `name`   | string | Reviewer name as shown on Listen360           |
| `date`   | string | Written date, e.g. `"May 30, 2026"`           |
| `text`   | string | Full review text — copy verbatim from Listen360 |
| `rating` | number | Always 5 for displayed reviews                |

---

## Listen360 Source Page

All reviews originate from Listen360, Haymarket Bicycles' customer satisfaction platform:

- **Public reviews page:** https://reviews.listen360.com/haymarket-bicycles
- **Business identifier:** `haymarket-bicycles`
- **Total reviews (as of June 2026):** 1,097

For questions about the Listen360 account or managing reviews from the admin side,
contact Listen360 support at support@listen360.com.

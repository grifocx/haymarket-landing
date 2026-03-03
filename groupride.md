# Community Rides Feature Plan

A new "Community Rides" section for the Haymarket Bicycles website to showcase weekly group rides. This section will live on the Home page, inserted after the "Our Story" section to preserve the flow of products and services.

---

## Overview

- Section title: **Community Rides**
- Location: Home page, after "Our Story" section
- Data source: Supabase database (allows flexible ride management — add, remove, or update rides without touching code)
- Route links open in a new tab (each link contains full ride details: RSVP info, difficulty, etc.)

### Initial Rides (4 total)

| Day       | Ride Name              | Notes                  |
|-----------|------------------------|------------------------|
| Tuesday   | Gravel Ride            |                        |
| Wednesday | Fast Road Ride         |                        |
| Thursday  | Beginner Ride          |                        |
| Saturday  | Mountain Bike Ride     |                        |

Each ride displays: ride name, day, time, short description, distance, and a link to the ride route/details page.

---

## Implementation Tasks

### 1. Database Setup
- Create `community_rides` table in Supabase with columns:
  - `id` (uuid, primary key)
  - `name` (text) — ride name
  - `day` (text) — day of week
  - `time` (text) — departure time
  - `description` (text) — short description
  - `distance` (text) — e.g., "25 miles"
  - `route_url` (text) — link to ride details/RSVP page
  - `display_order` (integer) — controls card order on page
  - `created_at` (timestamptz)
- Enable Row Level Security with public read access policy
- Insert the 4 initial rides with appropriate display_order values

### 2. Supabase Client Configuration
- Create `src/lib/supabase.ts` to initialize the Supabase client
- Export a typed singleton client using existing `.env` variables
- Define a `CommunityRide` TypeScript interface

### 3. RideCard Component
- Create `src/components/RideCard.tsx`
- Displays: ride name, day, time, description, distance, and route link button
- Route link opens in a new tab (`target="_blank" rel="noopener noreferrer"`)
- Use brand color rotation across cards (green, orange, yellow, dark green)
- Include Calendar and MapPin icons from lucide-react
- Hover effects: card lift, color transitions

### 4. CommunityRides Section Component
- Create `src/components/CommunityRides.tsx`
- Fetches rides from Supabase on mount, sorted by `display_order`
- Loading state: show spinner while fetching
- Error state: graceful fallback message
- Responsive grid: 2-column on desktop, 1-column on mobile

### 5. Home Page Integration
- Edit `src/pages/Home.tsx`
- Insert `<CommunityRides />` after the "Our Story" section
- Add `id="community-rides"` to the section for anchor navigation
- Section heading styled consistently with other Home page sections

### 6. Navigation Updates
- Edit `src/components/Layout.tsx`
- Add "Community Rides" to desktop and mobile nav menus
- Position between "Our Story" and "Contact Us"
- Add to footer Quick Links as well
- Use smooth scroll anchor: `href="/#community-rides"`

### 7. Visual Design
- Follow existing brand color palette:
  - Dark green: `#144D3A`
  - Orange: `#F36E32`
  - Green: `#73BB44`
  - Yellow: `#F5E100`
- Card styling consistent with existing `ServiceCard` and `ProductCard` components
- Rounded corners, shadows, hover lift effects
- Fully responsive across mobile, tablet, and desktop

---

## Notes

- The route URL for each ride will contain all additional info riders need (difficulty, RSVP, pace, etc.) — no extra fields needed in the database or UI
- The number of rides displayed is fully dynamic — the page will render however many rides exist in the database (3, 5, or any number)
- No admin UI is needed at this time; rides can be managed directly in the Supabase dashboard

---

## Managing Rides in the Supabase Dashboard

### Adding a New Ride

1. Go to your Supabase project dashboard at [supabase.com](https://supabase.com)
2. Click **Table Editor** in the left sidebar
3. Select the `community_rides` table
4. Click **Insert row** (or the "+" button)
5. Fill in the fields:
   - `name` — e.g., "Sunday Social Ride"
   - `day` — e.g., "Sunday"
   - `time` — e.g., "9:00 AM"
   - `description` — short blurb about the ride
   - `distance` — e.g., "20 miles"
   - `route_url` — paste the link to the ride details/RSVP page
   - `display_order` — set a number to control where it appears on the page (1 = first, 2 = second, etc.)
6. Click **Save** — the ride will appear on the website immediately

### Editing an Existing Ride

1. In the **Table Editor**, open the `community_rides` table
2. Click any cell in the row you want to edit
3. Type your changes directly in the cell
4. Click outside the cell or press Enter to save — changes are live instantly

### Removing a Ride

1. In the **Table Editor**, find the row you want to delete
2. Check the checkbox on the left side of the row
3. Click **Delete** — the ride disappears from the website immediately

### Reordering Rides

Update the `display_order` number on each row — the page always sorts by this value, lowest first.

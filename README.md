# Haymarket Bicycles Website

A modern, responsive website for Haymarket Bicycles - Northern Virginia's neighborhood bicycle shop since 2007.

## Project Overview

This is a single-page React application built with Vite, TypeScript, and Tailwind CSS. The website showcases Haymarket Bicycles' services, products, and store information with a clean, professional design.

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Supabase** - Backend and database (configured but not yet in use)

## Project Structure

```
src/
├── components/
│   ├── ProductCard.tsx      # Reusable product display component
│   └── ServiceCard.tsx      # Reusable service display component
├── pages/
│   ├── Home.tsx             # Main landing page with all sections
│   ├── Catalog.tsx          # Full product catalog page
│   └── Services.tsx         # Detailed services page
├── products.ts              # Product data and types
├── services.ts              # Service data and types
├── App.tsx                  # Main app component with routing
└── main.tsx                 # Application entry point
```

## Features Implemented

### Homepage Sections

1. **Navigation Bar**
   - Fixed header with smooth scroll navigation
   - Mobile-responsive hamburger menu
   - Links to Services, Products, Our Story, and Contact sections

2. **Hero Section**
   - Prominent headline: "Haymarket's Neighborhood Bicycle Shop Since 2007"
   - Emphasizes 18 years of service to Northern Virginia's cycling community
   - Call-to-action buttons for shopping and services

3. **Info Bar**
   - Quick access to store location, hours, and phone number
   - Responsive grid layout

4. **Services Section**
   - Three service categories: Repairs & Maintenance, Custom Builds, and Bike Fitting
   - Detailed service descriptions with bullet points
   - Links to full Services page

5. **Featured Products Section**
   - Displays 3 featured bikes from the catalog
   - Product cards with images, names, prices, and categories
   - Link to full catalog page

6. **Our Story Section**
   - Company history and values
   - Statistics showcasing 18 years in business, community focus, and expert staff
   - High-quality visuals

7. **Contact Section**
   - Store location: 123 Pedal Lane, Biketown, BT 12345
   - Phone: (555) BIKE-NOW / (555) 245-3669
   - Email: info@velocitycycles.com
   - Store hours:
     - Monday: Closed
     - Tuesday - Saturday: 11AM - 6PM
     - Sunday: 12PM - 5PM
   - Four-card grid layout with icons
   - "Call Us Now" button with direct phone link

### Additional Pages

- **Catalog Page**: Full product listing with filtering and categorization
- **Services Page**: Detailed service offerings with expanded descriptions

## Design System

### Color Palette

The color scheme is based on Haymarket Bicycles' official brand guidelines:

- **Primary Green (Deep Forest)**: `#144D3A` - Main brand color, used for headings and primary text
- **Secondary Green (Lime)**: `#73BB44` - Accent and highlights, hover states
- **Orange (Vibrant Coral)**: `#F36E32` - Primary call-to-action buttons and key accents
- **Bright Yellow**: `#F5E100` - Secondary accents and highlights
- **Lime Green**: `#CBD92A` - Additional accent color for variety
- **White/Gray**: Background colors and text contrast

These colors are derived from the official Haymarket Bicycles logo and brand identity, ensuring complete visual consistency across all touchpoints.

### Typography

**Primary Font: Montserrat**

The site uses **Montserrat** throughout to match the official logo typeface. This Google Font provides excellent readability and brand consistency.

**Font Weights Used:**
- **Montserrat Regular (400)**: Button text, labels, and UI elements
- **Montserrat Bold (700)**: Subheadings (h2, h3), navigation links, smaller headings
- **Montserrat Extra Bold (800)**: Main page headings (h1) - matches the exact weight used in the logo

**Font Application:**
- All headings, navigation, buttons, and labels use Montserrat
- Body text uses system fonts for optimal readability
- Font loaded via Google Fonts CDN with preconnect for performance

**Typography Hierarchy:**
- H1 headings: Montserrat Extra Bold 800 (5xl-7xl sizes)
- H2/H3 headings: Montserrat Bold 700 (2xl-5xl sizes)
- Navigation & buttons: Montserrat Bold 700
- Labels & statistics: Montserrat Bold 700
- Body paragraphs: System fonts (default)

### Design Principles

- Responsive design with mobile-first approach
- Smooth transitions and hover effects
- Card-based layouts for content organization
- Generous white space for readability
- Colorful accent icons for visual interest
- Bold typography for confident brand presence
- Professional color application matching official brand guidelines

## Development Changes Made

### Session 1: Contact Section Redesign
- Removed contact form to simplify user experience
- Redesigned contact section into four equal cards
- Added colorful circular icon backgrounds
- Implemented hover effects for interactivity
- Added direct "Call Us Now" button with tel: link
- Updated store hours throughout the site

### Session 2: Content Updates
- Updated hero headline to emphasize "Haymarket's Neighborhood Bicycle Shop Since 2007"
- Changed tagline to highlight 18 years of service to Northern Virginia
- Updated services section title to "Professional Bicycle Services in Haymarket"
- Changed contact section to "Visit Us at Haymarket Bicycles"
- Emphasized convenient location serving Haymarket, Gainesville, and Northern Virginia

### Session 3: Brand Color Implementation
- Implemented official Haymarket Bicycles brand colors throughout the site
- Primary Green (`#144D3A`): Applied to all headings, primary text, and main brand elements
- Secondary Green (`#73BB44`): Used for hover states and interactive elements
- Orange (`#F36E32`): Call-to-action buttons and key accent elements
- Bright Yellow (`#F5E100`): Secondary highlights and accent badges
- Lime Green (`#CBD92A`): Additional variety in icons and cards
- Ensured consistent color application across all pages and components
- Colors extracted from official logo files to maintain brand integrity

### Session 4: Typography System Implementation
- Integrated **Montserrat** font family to match official logo typeface
- Added Google Fonts CDN link with preconnect optimization
- Configured Tailwind CSS to support `font-montserrat` utility class
- Implemented three font weights:
  - Regular 400: Button text and labels
  - Bold 700: Subheadings, navigation, and secondary elements
  - Extra Bold 800: Main h1 headings (matching logo exactly)
- Applied Montserrat to all headings, navigation links, buttons, and UI labels
- Kept system fonts for body text to optimize readability
- Updated all page components (Home, Catalog, Services) and card components
- Created clear typographic hierarchy with consistent weight application

## Store Information

**Haymarket Bicycles**
- Address: 123 Pedal Lane, Biketown, BT 12345
- Phone: (555) BIKE-NOW or (555) 245-3669
- Email: info@velocitycycles.com
- Established: 2007

**Store Hours:**
- Monday: Closed
- Tuesday - Saturday: 11:00 AM - 6:00 PM
- Sunday: 12:00 PM - 5:00 PM

## Running the Project

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
```

## Future Enhancements

Potential features to add:
- Online booking system for services
- E-commerce functionality for bike sales
- Customer testimonials section
- Blog for cycling tips and news
- Integration with Supabase for dynamic content
- Newsletter signup
- Social media integration
- Event calendar for group rides

## Notes

- All product images are currently using Pexels stock photos
- The site is fully responsive and works on all device sizes
- Smooth scroll behavior is implemented for navigation
- The design avoids purple/indigo colors per project requirements

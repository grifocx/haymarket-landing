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

- **Primary Green**: `#144D3A` - Main brand color
- **Secondary Green**: `#73BB44` - Accent and highlights
- **Orange**: `#F36E32` - Call-to-action buttons and accents
- **Yellow**: `#F5E100` - Secondary accents and highlights
- **White**: Background and text contrast

### Typography

- Clean, modern sans-serif fonts
- Bold headings for impact
- Clear hierarchy with varied font sizes

### Design Principles

- Responsive design with mobile-first approach
- Smooth transitions and hover effects
- Card-based layouts for content organization
- Generous white space for readability
- Colorful accent icons for visual interest

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

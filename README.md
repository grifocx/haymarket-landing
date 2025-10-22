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

### Session 5: Comprehensive SEO Implementation
- **Meta Tags & HTML Head Optimization**
  - Updated page title to "Haymarket Bicycles | Premier Bike Shop in Haymarket, VA Since 2007"
  - Added comprehensive meta description targeting local searches
  - Implemented meta keywords with location-specific terms
  - Added canonical URL to prevent duplicate content issues
  - Implemented geo-location meta tags with coordinates (38.813737, -77.642422)
  - Added theme-color and Apple mobile web app meta tags

- **Social Media Optimization**
  - Implemented Open Graph meta tags for Facebook, LinkedIn, and other platforms
  - Added Twitter Card meta tags for enhanced Twitter previews
  - Configured social media image previews using brand logo

- **Structured Data (Schema.org) Markup**
  - Added BikeStore LocalBusiness schema with complete business information
  - Implemented Organization schema with social media profiles
  - Added Service schema for bicycle repair and maintenance offerings
  - Implemented BreadcrumbList schema for improved navigation in search results
  - Added FAQPage schema with 4 common customer questions and answers
  - Implemented Review schema for customer testimonial

- **Technical SEO Files**
  - Created `robots.txt` with proper crawl directives and sitemap reference
  - Generated comprehensive `sitemap.xml` with all pages, priorities, and lastmod dates
  - Configured proper crawl rules for major search engines (Google, Bing, DuckDuckGo)

- **Image SEO Optimization**
  - Added descriptive alt text to all logo images with location keywords
  - Implemented width and height attributes to prevent layout shift
  - Optimized alt text for Services page: "Bicycle Repair Services in Haymarket, VA"
  - Optimized alt text for Catalog page: "Quality Bikes for Sale in Northern Virginia"

- **Local SEO Enhancement**
  - Emphasized Haymarket, VA and Northern Virginia location throughout metadata
  - Added structured data for area served (Haymarket, Gainesville)
  - Implemented NAP (Name, Address, Phone) consistency across all schema markup
  - Included opening hours, geo-coordinates, and contact information in LocalBusiness schema

All SEO implementations are backend-only with no visual changes to the website appearance or user experience.

## Store Information

**Haymarket Bicycles**
- Address: 4414 Costello Way, Haymarket, VA 20169
- Phone: (703) 754-1911
- Email: info@haymarketbicycles.com
- Website: https://haymarketbicycles.com
- Established: 2007

**Store Hours:**
- Monday: Closed
- Tuesday - Saturday: 11:00 AM - 6:00 PM
- Sunday: 12:00 PM - 5:00 PM

**Social Media:**
- Facebook: https://www.facebook.com/HaymarketBicycles/
- Instagram: https://www.instagram.com/haymarketbikes
- TikTok: https://www.tiktok.com/@haymarketbicycles

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

## SEO & Search Engine Optimization

The website is fully optimized for search engines with comprehensive on-page SEO:

- **Local Search Optimization**: Structured data targeting "bike shop Haymarket VA" and related searches
- **Schema.org Markup**: LocalBusiness, Organization, Service, FAQ, Review, and BreadcrumbList schemas
- **Social Media Ready**: Open Graph and Twitter Card tags for enhanced social sharing
- **Technical SEO**: robots.txt and sitemap.xml for proper indexing
- **Mobile Optimization**: Theme colors and mobile web app tags for better mobile experience
- **Image SEO**: Descriptive alt text with location keywords on all images

### Testing Your SEO

You can test the structured data implementation using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Open Graph Debugger](https://developers.facebook.com/tools/debug/)

## Future Enhancements

Potential features to add:
- Online booking system for services
- E-commerce functionality for bike sales
- Customer testimonials carousel
- Blog for cycling tips and news
- Integration with Supabase for dynamic content management
- Newsletter signup with email marketing
- Google Maps embed on contact section
- Event calendar for group rides and community events
- Live chat support integration
- Customer account portal

## Managing Product Catalog Images

### Standard Operating Procedure (SOP)

This SOP outlines the process for adding, updating, and managing product images in the catalog.

#### Image Storage Location

All product catalog images are stored in:
```
/public/catalog/
```

#### Image Specifications

**Recommended Image Properties:**
- **Format**: JPG (for photos) or PNG (if transparency needed)
- **Dimensions**: 800-1200px wide minimum
- **Aspect Ratio**: 16:9 or 4:3 work best, but any aspect ratio is supported
- **File Size**: Keep under 500KB per image for optimal web performance
- **Image Composition**: Center the bike in the frame (the display crops from center)

**Technical Details:**
- Images automatically resize to fit a 256px height card (`h-64` in Tailwind)
- CSS `object-cover` class crops and scales images to fill the container
- Width is responsive and adjusts to screen size
- Images maintain aspect ratio while filling the card

#### Adding or Updating Product Images

**Step 1: Prepare Your Image**
1. Edit/crop your image to showcase the bike prominently
2. Ensure the bike is centered in the frame
3. Optimize file size (compress if needed to stay under 500KB)
4. Name the file descriptively using lowercase and hyphens
   - Good: `velocity-pro-carbon.jpg`
   - Good: `trailblazer-elite-mountain.jpg`
   - Avoid spaces or special characters

**Step 2: Save Image to Public Folder**
1. Place the image file in `/public/catalog/`
2. Verify the file name matches your naming convention

**Step 3: Update Product Data**
1. Open `/src/products.ts`
2. Locate the product object you want to update
3. Update the `imageUrl` field with the new path:
   ```typescript
   imageUrl: '/catalog/your-image-name.jpg'
   ```

**Step 4: Test the Display**
1. Run the dev server (`npm run dev`)
2. Navigate to the catalog page
3. Verify the image displays correctly
4. Check that the image quality is acceptable
5. Ensure the bike is properly centered in the card

#### Example Product Entry

```typescript
{
  id: '1',
  name: 'Velocity Pro Carbon Road Bike',
  category: 'Road Bikes',
  price: '$3,299',
  description: 'Experience the perfect blend of speed and comfort...',
  features: [
    'Lightweight carbon fiber frame',
    'Shimano 105 groupset',
    '700c wheels with tubeless ready tires',
    'Hydraulic disc brakes'
  ],
  imageUrl: '/catalog/velocity-pro-carbon.jpg',
  highlightColor: '#F36E32'
}
```

#### Troubleshooting

**Image Not Displaying:**
- Verify the file exists in `/public/catalog/`
- Check that the filename in `imageUrl` exactly matches the file (including extension)
- Ensure the path starts with `/catalog/` not `public/catalog/`
- Clear browser cache and refresh

**Image Quality Issues:**
- Use higher resolution source images (1200px wide minimum)
- Ensure JPG quality is set to 80-90% when saving
- Avoid heavily compressed images

**Image Appears Cropped Incorrectly:**
- Recenter the bike in your source image before saving
- Remember: vertical center is most important (card has fixed height)
- The card crops to 256px height, keeping center-most content

#### Quick Reference

| Attribute | Value |
|-----------|-------|
| Storage Path | `/public/catalog/` |
| URL Format | `/catalog/filename.jpg` |
| Min Width | 800px |
| Max File Size | 500KB recommended |
| Format | JPG preferred |
| Card Height | 256px (fixed) |
| Card Width | Responsive (fluid) |

## Notes

- Product images are stored locally in `/public/catalog/`
- The site is fully responsive and works on all device sizes
- Smooth scroll behavior is implemented for navigation
- The design avoids purple/indigo colors per project requirements

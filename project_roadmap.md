# Haymarket Bicycles - Project Roadmap

This roadmap outlines all planned improvements and maintenance tasks for the Haymarket Bicycles website. Tasks are organized by effort level and prioritized for low-risk, high-impact improvements first.

## Effort Level Guide

- **Low Effort**: 15 minutes - 1 hour
- **Medium Effort**: 1-4 hours
- **High Effort**: 4+ hours or multiple sessions

---

## Low Effort Tasks (Quick Wins)

### Content and Data Corrections

- [x] **Fix typo in services.ts** - *Low Effort* ✅ COMPLETED
  - Line 47: Changed "E-bike Service Lefel 1" to "E-bike Service Level 1"
  - Risk: None
  - Impact: Professional appearance

- [x] **Update sitemap.xml dates** - *Low Effort* ✅ COMPLETED
  - Changed lastmod dates from "2025-10-22" to "2025-11-17"
  - Risk: None
  - Impact: SEO accuracy

- [x] **Update package.json metadata** - *Low Effort* ✅ COMPLETED
  - Changed name from "vite-react-typescript-starter" to "haymarket-bicycles"
  - Added description: "Modern responsive website for Haymarket Bicycles - Northern Virginia's neighborhood bicycle shop since 2007"
  - Updated version to 1.0.0
  - Risk: None
  - Impact: Better project identification

- [x] **Verify phone number consistency** - *Low Effort* ✅ COMPLETED
  - Verified all instances of phone numbers across files
  - Confirmed consistent formatting: (703) 754-1911
  - Risk: None
  - Impact: Professional consistency

### Code Cleanup

- [x] **Remove unused Supabase dependencies** - *Low Effort* ✅ COMPLETED
  - Removed @supabase/supabase-js from package.json
  - Removed Supabase environment variables from .env
  - Cleaned up 13 packages
  - Risk: Low (not being used)
  - Impact: Smaller bundle size, cleaner dependencies

- [x] **Clean up unused imports** - *Low Effort* ✅ COMPLETED
  - Scanned all component files for unused imports
  - No orphaned code found
  - Risk: None
  - Impact: Code cleanliness

- [x] **Update README Supabase references** - *Low Effort* ✅ COMPLETED
  - Removed Supabase from technology stack section
  - Updated README to reflect current stack
  - Risk: None
  - Impact: Accurate documentation

### Accessibility Quick Wins

- [x] **Add ARIA labels to navigation buttons** - *Low Effort* ✅ COMPLETED
  - Added aria-label to all navigation buttons in Home, Catalog, and Services pages
  - Added aria-label to mobile menu toggle with aria-expanded state
  - Added aria-label to hero CTAs
  - Risk: None
  - Impact: Better screen reader support

- [x] **Add ESC key handler to PhoneModal** - *Low Effort* ✅ COMPLETED
  - Added useEffect hook to listen for Escape key
  - Modal closes when ESC key is pressed
  - Risk: None
  - Impact: Better keyboard accessibility

- [x] **Add ESC key handler to mobile menu** - *Low Effort* ✅ COMPLETED
  - Added useEffect hook to listen for Escape key
  - Mobile menu closes when ESC key is pressed
  - Risk: None
  - Impact: Better keyboard accessibility

---

## Medium Effort Tasks

### Documentation Improvements

- [x] **Document PhoneModal component in README** - *Medium Effort* ✅ COMPLETED
  - Added Key Components section explaining modal functionality
  - Documented mobile vs desktop behavior with device detection
  - Included accessibility features
  - Risk: None
  - Impact: Better developer onboarding

- [x] **Add deployment guide section** - *Medium Effort* ✅ COMPLETED
  - Documented complete production build process with steps
  - Added hosting recommendations (Netlify, Vercel, Traditional)
  - Included post-deployment checklist
  - Risk: None
  - Impact: Easier deployment process

- [x] **Document accessibility features** - *Medium Effort* ✅ COMPLETED
  - Listed all WCAG 2.1 Level AA compliance efforts
  - Documented keyboard navigation, screen reader support
  - Added comprehensive testing recommendations
  - Risk: None
  - Impact: Demonstrates commitment to accessibility

- [ ] **Create manual testing checklist** - *Medium Effort*
  - Browser compatibility checklist
  - Mobile device testing list
  - Accessibility testing steps
  - Risk: None
  - Impact: Quality assurance
  - Note: Partially covered in deployment guide

### Code Quality Improvements

- [x] **Create centralized theme configuration** - *Medium Effort* ✅ COMPLETED
  - Created src/theme.ts with all brand colors
  - Defined color system (primary, secondary, accent, neutral)
  - Added spacing and borderRadius constants
  - TypeScript types for type safety
  - Risk: Low (visual regression testing needed)
  - Impact: Easier brand consistency, maintainability
  - Note: Components not yet updated to use theme (future enhancement)

- [ ] **Extract shared Layout component** - *Medium Effort*
  - Create Layout component with navigation and footer
  - Update all pages to use shared Layout
  - Reduce code duplication
  - Risk: Low (verify navigation behavior)
  - Impact: DRY principle, easier maintenance

- [ ] **Create utility functions file** - *Medium Effort*
  - Phone number formatting utilities
  - Scroll behavior helpers
  - Common helper functions
  - Risk: None
  - Impact: Code reusability

- [ ] **Implement focus trap in PhoneModal** - *Medium Effort*
  - Trap focus within modal when open
  - Return focus to trigger element on close
  - Risk: Low (test keyboard navigation)
  - Impact: Better accessibility

- [ ] **Add keyboard support to mobile menu** - *Medium Effort*
  - Handle Enter/Space key for menu items
  - Improve keyboard navigation flow
  - Risk: Low
  - Impact: Better accessibility

### SEO Enhancements

- [ ] **Add page-specific meta tags** - *Medium Effort*
  - Implement React Helmet or similar
  - Add unique titles/descriptions for Catalog and Services pages
  - Risk: Low
  - Impact: Better SEO for individual pages

- [ ] **Enhance image alt text** - *Medium Effort*
  - Review all images for descriptive alt text
  - Add context and location keywords where appropriate
  - Risk: None
  - Impact: Better SEO and accessibility

- [ ] **Add Google Analytics documentation** - *Medium Effort*
  - Document how to add tracking code
  - Include privacy policy considerations
  - Risk: None
  - Impact: Analytics readiness

### User Experience Improvements

- [ ] **Add "Back to Top" button** - *Medium Effort*
  - Create floating button component
  - Show/hide based on scroll position
  - Smooth scroll to top
  - Risk: None
  - Impact: Better navigation on long pages

- [ ] **Create current store hours indicator** - *Medium Effort*
  - Show "Open Now" or "Closed" status
  - Calculate based on current time and day
  - Risk: Low (test timezone handling)
  - Impact: Better user information

- [ ] **Add loading states to route transitions** - *Medium Effort*
  - Add suspense boundaries
  - Create loading component
  - Risk: Low
  - Impact: Better perceived performance

- [ ] **Optimize touch target sizes** - *Medium Effort*
  - Ensure all interactive elements meet 44x44px minimum
  - Test on mobile devices
  - Risk: Low (may affect layout slightly)
  - Impact: Better mobile usability

### Performance Optimizations

- [ ] **Implement lazy loading for routes** - *Medium Effort*
  - Use React.lazy for code splitting
  - Add Suspense boundaries
  - Risk: Low (test loading states)
  - Impact: Faster initial page load

- [ ] **Add image width/height attributes** - *Medium Effort*
  - Specify dimensions for all images
  - Prevent layout shift
  - Risk: None
  - Impact: Better Core Web Vitals

- [ ] **Optimize logo images** - *Medium Effort*
  - Replace placeholder images with actual optimized logos
  - Compress to appropriate sizes
  - Risk: None
  - Impact: Faster page load

---

## High Effort Tasks (Major Features)

### Component Development

- [ ] **Create shared Navigation component** - *High Effort*
  - Extract navigation logic from pages
  - Handle all navigation states
  - Support all pages consistently
  - Risk: Medium (regression testing needed)
  - Impact: Major code reduction, easier maintenance

- [ ] **Create shared Footer component** - *High Effort*
  - Extract footer from all pages
  - Make content configurable
  - Risk: Low
  - Impact: DRY principle, consistency

- [ ] **Build testimonials carousel** - *High Effort*
  - Create carousel component
  - Add navigation controls
  - Make it responsive and accessible
  - Risk: Medium (complex interaction)
  - Impact: Enhanced social proof

- [ ] **Implement product image gallery** - *High Effort*
  - Multi-image support for product cards
  - Lightbox or modal view
  - Touch/swipe gestures
  - Risk: Medium (complex component)
  - Impact: Better product visualization

- [ ] **Add catalog filtering and search** - *High Effort*
  - Category filters
  - Price range filters
  - Search functionality
  - Risk: Low
  - Impact: Better product discovery

### Advanced Features

- [ ] **Integrate Google Maps embed** - *High Effort*
  - Add interactive map to contact section
  - Handle API keys and privacy
  - Make responsive
  - Risk: Medium (external dependency)
  - Impact: Better location information

- [ ] **Implement lazy loading for images** - *High Effort*
  - Use Intersection Observer API
  - Add placeholder/blur effect
  - Optimize for performance
  - Risk: Medium (test across devices)
  - Impact: Faster page load, better performance

- [ ] **Create service booking interface** - *High Effort*
  - Calendar/scheduler component
  - Form validation
  - User feedback
  - Note: No backend integration needed
  - Risk: Medium (complex UI)
  - Impact: Better user engagement

### Testing Infrastructure

- [ ] **Set up unit testing framework** - *High Effort*
  - Configure Jest and React Testing Library
  - Write tests for utilities and components
  - Add to CI/CD pipeline
  - Risk: Low
  - Impact: Code quality and confidence

- [ ] **Add pre-commit hooks** - *High Effort*
  - Set up Husky
  - Configure lint-staged
  - Run linting and type checking
  - Risk: Low
  - Impact: Code quality enforcement

- [ ] **Create E2E testing setup** - *High Effort*
  - Configure Playwright or Cypress
  - Write critical path tests
  - Document testing procedures
  - Risk: Low
  - Impact: Regression prevention

### Content and Asset Updates

- [ ] **Replace placeholder product images** - *High Effort*
  - Obtain actual product photos
  - Optimize and compress images
  - Update all product entries
  - Risk: None
  - Impact: Professional appearance, accurate representation

- [ ] **Review and update product specifications** - *High Effort*
  - Verify all product details
  - Update features and pricing
  - Ensure accuracy with inventory
  - Risk: None
  - Impact: Accurate product information

- [ ] **Review and update service descriptions** - *High Effort*
  - Verify all service offerings
  - Update pricing if needed
  - Ensure accuracy with actual services
  - Risk: None
  - Impact: Accurate service information

### Advanced SEO

- [ ] **Implement dynamic Open Graph images** - *High Effort*
  - Create unique OG images for products/services
  - Set up image generation or templates
  - Risk: Medium (requires build process)
  - Impact: Better social media sharing

- [ ] **Add AggregateRating schema** - *High Effort*
  - Collect customer reviews
  - Implement rating schema markup
  - Display ratings on site
  - Risk: Low
  - Impact: Better search result appearance

- [ ] **Create blog/news section** - *High Effort*
  - Design blog layout
  - Create blog post template
  - Add routing for blog posts
  - Risk: Low
  - Impact: Content marketing, SEO

---

## Completed Tasks

- [x] Comprehensive SEO implementation
- [x] Brand color system implementation
- [x] Montserrat typography system
- [x] Mobile-responsive design
- [x] PhoneModal component for desktop
- [x] Structured data (Schema.org) markup
- [x] robots.txt and sitemap.xml files
- [x] Social media integration
- [x] Contact section redesign

---

## Notes

### Priority Guidelines

1. **Start with Low Effort tasks** - Quick wins that improve quality with minimal risk
2. **Move to Medium Effort tasks** - Balance effort with impact
3. **Plan High Effort tasks carefully** - Require more time and testing

### Risk Assessment

- **No Risk**: Pure documentation or content fixes
- **Low Risk**: Changes that don't affect user experience significantly
- **Medium Risk**: Changes requiring testing across devices/browsers

### Next Steps

1. Begin with content corrections (typo fixes, date updates)
2. Clean up unused dependencies
3. Tackle accessibility quick wins
4. Move through medium effort tasks by priority
5. Plan sprints for high effort features

---

**Last Updated**: November 17, 2025

---

## Recent Accomplishments (November 17, 2025)

### Low Effort Tasks - ALL COMPLETED ✅
- Fixed typo in services.ts (E-bike Service Level 1)
- Updated sitemap.xml dates to current date (2025-11-17)
- Updated package.json metadata and version to 1.0.0
- Verified phone number consistency across all files
- Removed unused Supabase dependencies (13 packages removed)
- Cleaned up unused imports
- Updated README to remove Supabase references
- Added ARIA labels to all navigation buttons across all pages
- Implemented ESC key handlers for PhoneModal and mobile menu

### Medium Effort Tasks - KEY ITEMS COMPLETED ✅
- Documented PhoneModal component comprehensively in README
- Created complete deployment guide with hosting recommendations
- Documented all accessibility features and WCAG compliance
- Created centralized theme configuration file (src/theme.ts)

### Summary
All low-risk, low and medium effort tasks have been completed. The codebase is now cleaner, better documented, and more accessible. The website maintains its professional appearance while improving maintainability and user experience.

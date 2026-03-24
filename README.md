# VidyaBharatii Coaching Center Website

A modern, responsive website for VidyaBharatii coaching center built with Next.js 13+, TypeScript, and Tailwind CSS.

## Features Implemented

### Design & UI
- Modern design system with consistent colors, typography, spacing
- Dark/Light mode toggle with system preference detection
- Glassmorphism & gradient cards
- Smooth scroll animations (on-scroll reveal)
- Micro-interactions (hover effects, button animations)
- Professional mega dropdown navigation
- Sticky header with blur effect on scroll
- Loading skeleton screens
- Responsive design (mobile-first)

### Navigation & UX
- Mega menu with icons & descriptions
- Breadcrumb navigation on all pages
- Floating "Back to Top" button (planned)
- Mobile hamburger menu with animations
- Sticky CTA "Donate Now" button
- 404 custom error page

### Homepage Sections
- Full-screen hero slider with auto-play & Ken Burns effect
- Animated counter stats section
- About section with floating image cards
- Programs showcase grid with hover effects
- Testimonial carousel with ratings
- Latest news & events section
- Partners/affiliations logo marquee
- Newsletter subscription bar
- Full-width CTA banner with parallax effect

## Project Structure

```
vidyabharatii/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── about.tsx
│   │   ├── cta-banner.tsx
│   │   ├── hero.tsx
│   │   ├── news-events.tsx
│   │   ├── newsletter.tsx
│   │   ├── partners.tsx
│   │   ├── programs.tsx
│   │   ├── stats.tsx
│   │   └── testimonials.tsx
│   └── ui/
├── lib/
│   ├── styles/
│   │   └── theme.css
│   └── theme-provider.tsx
├── public/
├── styles/
│   └── globals.css
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

The website uses a custom design system defined in `src/lib/styles/theme.css` with:
- Primary color: #2563eb (blue)
- Accent color: #10b981 (emerald)
- Dark mode support
- Glassmorphism effects
- Gradient text and borders
- Smooth animations and transitions

## Theme Management

Theme is managed via `ThemeProvider` in `src/lib/theme-provider.tsx` which:
- Detects system preference on first load
- Stores preference in localStorage
- Provides `toggleTheme` function
- Updates document class and meta theme-color

## Components

Key components include:
- **Navbar**: Responsive navigation with dark/light toggle, search, and sticky CTA
- **Footer**: Comprehensive footer with links, social media, and contact info
- **Hero Section**: Full-screen slider with auto-play and Ken Burns effect
- **Stats Section**: Animated counters with glassmorphism cards
- **About Section**: Floating image cards with call-to-action buttons
- **Programs Section**: Interactive program cards with hover effects
- **Testimonial Section**: Slider with ratings and quotes
- **News & Events Section**: Card-based layout for updates
- **Partners Section**: Marquee logo display
- **Newsletter Section**: Email subscription form
- **CTA Banner**: Parallax banner with call-to-action

## Future Enhancements

To complete all features from the original specification:
1. Implement blog CMS with Sanity.io or Strapi
2. Add donation system with Razorpay/PayU integration
3. Create interactive school finder with map integration
4. Add events calendar with registration
5. Implement multilingual support (Hindi/English)
6. Add admin dashboard for content management
7. Integrate analytics and tracking
8. Enhance SEO with structured data
9. Add form validation and spam protection
10. Implement performance optimizations (lazy loading, code splitting)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (responsive design)

## License

MIT
# H9Y Studio Website

A production-ready, Awwwards-quality website for H9Y Studio — a boutique hospitality and interior design firm. Built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Minimalist Luxury Design**: Clean, editorial aesthetic with refined typography and sophisticated color palette
- **Responsive & Accessible**: Mobile-first design with ARIA labels and keyboard navigation support
- **Animated Interactions**: Smooth Framer Motion animations with reduced-motion support
- **SEO Optimized**: Comprehensive meta tags, Open Graph, structured data, and sitemap
- **Static Export Ready**: Pre-rendered static HTML for optimal performance
- **Performance Focused**: Optimized images, lazy loading, and minimal JavaScript bundle

## Tech Stack

- **Framework**: Next.js 13.5 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion
- **Typography**: Inter + Space Grotesk
- **Icons**: Lucide React
- **Deployment**: Static export (Vercel, Netlify, or any static host)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
project/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── projects/          # Projects listing & detail pages
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── globals.css        # Global styles & design system
├── components/            # Reusable React components
│   ├── Header.tsx         # Global navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section component
│   ├── ProjectCard.tsx    # Project grid card
│   ├── ContactForm.tsx    # Contact form
│   └── ProjectDetail.tsx  # Project detail template
├── lib/                   # Utility functions & metadata
├── public/               # Static assets & robots.txt
└── next.config.js        # Next.js configuration
```

## Design System

### Color Palette

```css
--off-white: #FBFAF8    /* Background */
--charcoal: #0F1214     /* Primary text */
--warm-stone: #D9D4CD   /* Secondary/Borders */
--muted-gold: #BFA36F   /* Accent/CTAs */
```

### Typography

- **Headlines**: Space Grotesk (geometric sans-serif)
- **Body**: Inter (clean, readable)
- **Scale**: Fluid typography with responsive breakpoints

### Spacing

8px base unit system for consistent rhythm and alignment.

## Pages

### Homepage (`/`)
- Hero with animated headline and CTAs
- Featured projects grid
- Services overview
- Awards & press
- Contact CTA section

### About (`/about`)
- Studio story
- Team members
- Process breakdown
- Client list

### Projects (`/projects`)
- Filterable project grid (All, Hospitality, Residential, Turnkey)
- Animated project cards with hover effects
- Category filtering

### Project Detail (`/projects/[slug]`)
- Hero image gallery
- Project overview, challenge, solution
- Project details sidebar
- Additional image grid
- CTA to contact

### Services (`/services`)
- Detailed service offerings
- Deliverables breakdown
- Process timeline
- Contact CTA

### Contact (`/contact`)
- Contact form with validation
- Contact information
- Newsletter signup
- Studio location

## Build & Deploy

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory.

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Set custom domain in project settings

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Add environment variables if needed

### Deploy to Other Hosts

The `out/` directory contains static HTML/CSS/JS that can be deployed to any static hosting:
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting
- Azure Static Web Apps

## Performance

Build output shows excellent performance metrics:

- **First Load JS**: ~130 KB (well within budget)
- **Static Generation**: All pages pre-rendered
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic per-route

### Lighthouse Targets

- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: 100

## Customization

### Update Brand Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --off-white: #FBFAF8;
  --charcoal: #0F1214;
  --warm-stone: #D9D4CD;
  --muted-gold: #BFA36F;
}
```

### Add Projects

Add project data in `app/projects/[slug]/page.tsx`:

```typescript
const projectData = {
  'your-project-slug': {
    title: 'Project Title',
    category: 'Hospitality',
    location: 'City, Country',
    // ... other fields
  }
};
```

### Update Content

All content is currently static in page files. To connect a CMS:

1. Install CMS SDK (Sanity, Contentful, etc.)
2. Replace static data with API calls
3. Use `generateStaticParams` for dynamic routes
4. Add ISR or on-demand revalidation as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Reduced motion support
- Color contrast compliance (WCAG AA)

## License

Copyright © 2024 H9Y Studio. All rights reserved.

## Support

For questions or issues, contact: harain.designoltre@gmail.com

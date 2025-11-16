# Grok Brief: Modern Service Detail Page UI (Next.js + Tailwind + Framer Motion)

This brief instructs Grok to design and scaffold a modern UI for service detail pages. It targets our existing Next.js App Router project, Tailwind CSS, shadcn/ui primitives, lucide-react icons, and framer-motion animations.

## Goals
- Present each service with a modern visual hero (image holder), clear description, and feature highlights.
- Provide a left sticky order sidebar grid that remains static on scroll and enables placing an order for the current service.
- Keep consistent with our design system (btn-pana, text-pana-gradient, canonical Tailwind utilities).

## Deliverables (from Grok)
- A responsive UI design (Figma-style frames or equivalent) and React components scaffolding for:
  - `ServiceLayout` (page-level wrapper)
  - `ServiceHero` (modern image holder + title/subtitle)
  - `ServiceDescription` (rich content + features list)
  - `ServiceImageGallery` (zoom/parallax image holder)
  - `ServiceOrderSidebar` (sticky order grid on the left)
- Wiring for `/services/[slug]` route to use these components.

## Page Structure & Layout
- Two-column layout on desktop:
  - Left column: Sticky order sidebar (fixed within viewport while scrolling content).
  - Right column: Service content (hero, description, gallery, features).
- Mobile/tablet: Stack vertically; order sidebar collapses to an expandable accordion at the bottom.

## Design System & Styling
- Use Tailwind CSS with canonical class names:
  - Prefer `bg-linear-to-*` over `bg-gradient-to-*`.
  - Prefer `shrink-0` over `flex-shrink-0`.
- Use project tokens and utilities:
  - Colors: `primary`, `accent`, `background`, `foreground`, `muted`, `border`.
  - Utilities: `btn-pana`, `text-pana-gradient`, `divider-pana`.
- Icons: `lucide-react` (e.g., `Printer`, `Flag`, `Palette`, `Zap`).
- Components: shadcn/ui (`Button`, `Card`, `Badge`, `Separator`, `NavigationMenu`).

## Modern Image Holder (Hero/Gallery)
- Hero supports 16:9 or 4:3 aspect, rounded corners, subtle shadow, and a gradient overlay.
- Motion: soft entrance, parallax or subtle zoom-on-hover, crossfade between images if more than one.
- Light/dark friendly: ensure overlays and text remain legible.
- Optional lightbox for gallery images.

## Order Sidebar (Sticky Left Grid)
- Sticky behavior: the sidebar stays visible while scrolling the page content (use `position: sticky` with a top offset).
- Content blocks:
  - Service summary: title, short blurb, icon.
  - Variant selectors: size, material, finish, color, sides.
  - Quantity stepper.
  - File upload(s): artwork or reference image.
  - Deadline picker and delivery/pickup option.
  - Price preview (simple calc placeholder) and ETA.
  - CTA buttons: `Make an Order`, `Get a Quote`.
- Validation: show inline messages; disabled states until required fields provided.
- Collapsible sections for advanced options.

## Interactions & Motion
- Use `framer-motion`:
  - Page/section entrance: fade+up (`ease: [0.215, 0.61, 0.355, 1]`).
  - Card hover: lift + shadow deepen.
  - Gallery image hover: gentle zoom (transform scale).
  - Sticky sidebar: subtle shadow change when sticking.

## Accessibility
- Keyboard navigable controls (focus states, tab order).
- Labels for inputs and buttons (`aria-label`, `aria-describedby`).
- Contrast-compliant text and overlays.

## Breakpoints
- Mobile: stacked; sidebar collapses; hero image full width.
- Tablet: two-column with adjusted sticky offset.
- Desktop: left sidebar 320–360px, right content fluid up to `max-w-6xl`.

## Data Model & Routing
- Route: `/services/[slug]` (already implemented).
- Interface sample for page consumption:
```ts
export interface ServiceSpec {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  equipment?: string;
  images: { src: string; alt: string }[];
  options: {
    sizes?: string[];
    materials?: string[];
    finishes?: string[];
    colors?: string[];
    sides?: ('single' | 'double')[];
  };
}
```
- Example content (Digital Print):
```json
{
  "slug": "digital-print",
  "title": "Digital Paper Print Solutions",
  "subtitle": "Vivid colors, sharp detail, fast turnaround",
  "description": "High-quality printing for brochures, flyers, business cards, posters, and more.",
  "features": ["Vibrant colors", "Sharp detail", "Fast turnaround"],
  "equipment": "Konica Minolta Production Printers, Binding & Lamination Machines",
  "images": [
    { "src": "/sample-1.jpg", "alt": "Brochure stack" },
    { "src": "/sample-2.jpg", "alt": "Flyer display" }
  ],
  "options": {
    "sizes": ["A4", "A5", "Letter", "Custom"],
    "materials": ["Matte", "Glossy", "Textured"],
    "finishes": ["None", "Lamination", "UV Spot"],
    "colors": ["CMYK", "Pantone"],
    "sides": ["single", "double"]
  }
}
```

## Component Responsibilities
- `ServiceLayout`: Grid layout, manages sticky sidebar positioning and responsive behavior.
- `ServiceHero`: Title, subtitle, primary image with gradient overlay and motion.
- `ServiceDescription`: Rich text, features list, equipment note, separators.
- `ServiceImageGallery`: Thumbnails + main visual, lightbox optional, hover zoom.
- `ServiceOrderSidebar`: Form controls; calculates simple price preview; triggers ordering flow.

## Implementation Guidelines
- Place components under `components/services/ui/`:
  - `ServiceLayout.tsx`
  - `ServiceHero.tsx`
  - `ServiceDescription.tsx`
  - `ServiceImageGallery.tsx`
  - `ServiceOrderSidebar.tsx`
- Use `client` components for interactive pieces (`ServiceOrderSidebar`, `ServiceImageGallery`).
- Use shadcn/ui primitives for inputs and buttons.
- Use `next/image` for images with proper `sizes` and `priority` where needed.
- Respect canonical Tailwind utilities and project styles.

### Routing & Canonical Slugs (404 Prevention)
- Canonical slugs must be exactly:
  - `digital-print`, `signage`, `flex-banner`, `vinyl`, `fabric`, `promotional`, `design`, `events`
- Ensure `generateStaticParams()` returns these slugs so Next pre-renders all service pages:

```ts
export function generateStaticParams() {
  const slugs = [
    'digital-print',
    'signage',
    'flex-banner',
    'vinyl',
    'fabric',
    'promotional',
    'design',
    'events',
  ];
  return slugs.map((slug) => ({ slug }));
}
```

- In `/app/services/[slug]/page.tsx`, normalize the slug and redirect unknowns to `/services` instead of hard 404:

```ts
import ServiceDetailTemplate from '@/components/services/ServiceDetailTemplate';
import { redirect } from 'next/navigation';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase();
  const data = serviceDataMap[slug];
  if (!data) return redirect('/services');
  return <ServiceDetailTemplate service={data} />;
}
```

### Middleware: Normalize and Redirect
- Add a root `middleware.ts` to lowercase slugs, strip extra segments, and redirect unknown slugs to `/services`:

```ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const canonical = new Set([
  'digital-print',
  'signage',
  'flex-banner',
  'vinyl',
  'fabric',
  'promotional',
  'design',
  'events',
]);

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  if (url.pathname.startsWith('/services/')) {
    const parts = url.pathname.split('/');
    const slug = parts[2] ?? '';
    if (!slug) return NextResponse.next();
    const clean = slug.toLowerCase();

    // If case differs or there are extra segments, redirect to canonical
    if (slug !== clean || parts.length > 3) {
      url.pathname = `/services/${clean}`;
      return NextResponse.redirect(url, 308);
    }

    // Unknown slugs go to services index instead of 404
    if (!canonical.has(clean)) {
      url.pathname = '/services';
      return NextResponse.redirect(url, 307);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/services/:path*'],
};
```

### Config Redirects (Optional)
- Add friendly alias redirects in `next.config.ts` to prevent common typos reaching 404s:

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next-dev',
  redirects: async () => [
    { source: '/services/DigitalPrint', destination: '/services/digital-print', permanent: true },
    { source: '/services/promotional-merch', destination: '/services/promotional', permanent: true },
  ],
  // Silence workspace root warning in monorepo-like setups
  outputFileTracingRoot: __dirname,
};

module.exports = nextConfig;
```

### Server & Build Hygiene
- Build once and run a single `next start` instance (e.g., `-p 3006`) to avoid serving stale output.
- With `distDir: '.next-dev'`, ensure both `build` and `start` read from the same directory.
- Avoid multiple concurrent servers (e.g., 3005 and 3006) unless intentionally testing different builds.

### QA Additions for Routing
- Visiting all eight canonical URLs resolves without 404.
- Mixed-case or alias slugs redirect to canonical.
- Extra path segments after the slug are stripped via redirect.
- Trailing slash is OK; still resolves to the canonical page.

## Components & Routing (Current Project)

### Directory Reference
```
components/services/
  Design.tsx
  DigitalPrint.tsx
  Events.tsx
  Fabric.tsx
  FlexBanner.tsx
  Promotional.tsx
  ServiceDetailTemplate.tsx
  Signage.tsx
  Vinyl.tsx
```

### Canonical Route Pattern
- Each service page is at `/services/{slug}` where slugs are:
  - `digital-print`, `signage`, `flex-banner`, `vinyl`, `fabric`, `promotional`, `design`, `events`

### Services Index → Detail Navigation
- The index page (`/app/services/page.tsx`) links to each detail page using:

```tsx
<Link href={`/services/${service.slug}`}> ... </Link>
```

### Dynamic Route Rendering (Data-Driven)
- The dynamic file `/app/services/[slug]/page.tsx` uses a `serviceDataMap` and `generateStaticParams()` to pre-render and serve pages:

```tsx
export function generateStaticParams() {
  return Object.keys(serviceDataMap).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const data = serviceDataMap[params.slug];
  if (!data) return notFound(); // consider redirect('/services') per routing guidelines
  return <ServiceDetailTemplate service={data} />;
}
```

### Optional: Per-Slug Component Rendering
- If you prefer to render a specific component for each slug instead of the data-driven template, you can wire a component map:

```tsx
import DigitalPrint from '@/components/services/DigitalPrint';
import Signage from '@/components/services/Signage';
import FlexBanner from '@/components/services/FlexBanner';
import Vinyl from '@/components/services/Vinyl';
import Fabric from '@/components/services/Fabric';
import Promotional from '@/components/services/Promotional';
import Design from '@/components/services/Design';
import Events from '@/components/services/Events';
import { redirect } from 'next/navigation';

const componentMap: Record<string, React.ComponentType> = {
  'digital-print': DigitalPrint,
  signage: Signage,
  'flex-banner': FlexBanner,
  vinyl: Vinyl,
  fabric: Fabric,
  promotional: Promotional,
  design: Design,
  events: Events,
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const key = params.slug.toLowerCase();
  const Component = componentMap[key];
  if (!Component) return redirect('/services');
  return <Component />;
}
```

- Keep `generateStaticParams()` in place to pre-render all eight slugs when using component-based rendering.
- You can still reuse `ServiceDetailTemplate` inside each component for a consistent UI.


## Current Services UI Design & Routing

### Services Index UI (`app/services/page.tsx`)
- Hero: gradient background, badge “Devoted to Quality Since 2016”, title “Our Services”, and two CTAs.
- Grid: animated with `framer-motion` (staggered items) and Tailwind utility classes.
- Card content: features list (with `Zap` icon), equipment note, icon badge, subtle hover elevation.
- Routing: each card uses `Link` to `/services/{slug}` (slugs from the `services` array).
- Tech: `lucide-react` icons, `cn` util from `@/lib/utils`, `useTheme` for theme-aware styles.

### Service Detail UI (`components/services/ServiceDetailTemplate.tsx`)
- Client component; uses `framer-motion`, `next/image`, and shadcn/ui (`Badge`, `Button`, `Card`, `Separator`, `Sheet`).
- Top: badge showing service key, big title, subtitle, hero image with overlay and hover zoom.
- Body: rich description (`dangerouslySetInnerHTML`), features grid with icons, optional equipment block.
- Gallery: additional project images with hover lift and overlay captions.
- Sticky Order Sidebar: size, material, finish, color, sides, quantity, upload artwork, optional deadline.
- Price preview: calculated from `basePrice`, quantity, and sides; enables order only when form is valid.
- Ordering: `Sheet` trigger to open a drawer/sheet for confirming order steps.

### Dynamic Route & Data (`app/services/[slug]/page.tsx`)
- `serviceDataMap` defines eight canonical slugs and their UI data.
- `generateStaticParams()` pre-renders all service detail pages using those slugs.
- `ServiceDetailPage` resolves data by `params.slug`; unknown slugs currently `notFound()`.
- See the routing section for normalization/redirects to avoid 404s and preserve UX.

### Components Directory (`components/services/`)
- `DigitalPrint.tsx`, `Signage.tsx`, `FlexBanner.tsx`, `Vinyl.tsx`, `Fabric.tsx`, `Promotional.tsx`, `Design.tsx`, `Events.tsx`, `ServiceDetailTemplate.tsx`.
- You can render these per-slug (optional) or continue using `ServiceDetailTemplate` with `serviceDataMap`.

### Routing Summary
- Index page cards → `Link` to `/services/{slug}` → dynamic `[slug]` route → `ServiceDetailTemplate` renders UI.
- Static generation via `generateStaticParams()` ensures the eight pages are prebuilt.
- Canonical slugs must match; normalization and redirects avoid 404s and route variants.

## Order Flow (MVP)
- User selects variants and quantity.
- Upload artwork, choose deadline and delivery method.
- Click `Make an Order` → open sheet/drawer or push to `/order?service={slug}&...` with query params.
- Show confirmation with summary; allow editing before final submit.

## QA Checklist
- Sticky sidebar stays within viewport and doesn’t overlap footer.
- All inputs accessible and keyboard-friendly.
- Animations are subtle and performant.
- Mobile layout usable; collapsible sidebar works.
- Dark mode legibility verified.

## Constraints & Notes
- Keep visuals consistent with `ServicesPage` aesthetics (gradient accents, badges, subtle motion).
- Use `lucide-react` icons and `framer-motion` easing tuple `[0.215, 0.61, 0.355, 1]`.
- Avoid adding new global dependencies.

## Success Criteria
- The generated UI feels modern, cohesive with existing brand, and enables a straightforward order flow.
- Pages under `/services/[slug]` render hero, description, gallery, and functional sticky order sidebar.
# Pana Web – CSS, UI, Animation, and Code Architecture

This document captures the current styling system, UI patterns, animation strategy, and code architecture to inform Grok for designing the Services page (structure, visuals, and content).

## Overview
- Framework: `Next.js (App Router)` with `TypeScript`
- Styling: `Tailwind CSS` with `@theme` tokens and CSS variables using `oklch` color space
- Theming: `next-themes` (class-based dark mode)
- UI Primitives: Custom components in `components/ui` built on Radix primitives and `class-variance-authority`
- Icons: `lucide-react`
- Animations: `framer-motion` + `tw-animate-css` (utility classes)
- Utilities: `clsx` + `tailwind-merge` via `cn()`

## File Structure (relevant)
- `app/`
  - `layout.tsx` – Global layout and `ThemeProvider`
  - `globals.css` – Tailwind base, theme tokens, component utilities
- `components/`
  - `Header.tsx`, `Footer.tsx`, `TopHeader.tsx`
  - `home/` and `about/` sections with feature blocks and motion
  - `ui/` – Primitives: `button.tsx`, `card.tsx`, `navigation-menu.tsx`, `badge`, `separator`, etc.
- `lib/`
  - `utils.ts` – `cn()` helper

## CSS Architecture
- Tailwind v4 setup with global imports:
  - `@import "tailwindcss";`
  - `@import "tw-animate-css";`
- Custom variant for dark mode:
  - `@custom-variant dark (&:is(.dark *));`
- Design tokens via `@theme inline` mapping to CSS variables:
  - Tokens: `--color-*` (e.g., `primary`, `secondary`, `accent`, `muted`, `destructive`), `--radius-*`, `--font-*`
- CSS variables defined in `:root` and `.dark` using `oklch(...)`:
  - Light/dark palettes tuned to Pana branding (light yellow primary, warm neutrals)
- Base layer:
  - `*` uses `border-border` and `outline-ring/50`
  - `body` applies gradient dot background: subtle radial pattern using `oklch(var(--primary) / 0.03)`
- Component layer utility classes (globally available):
  - `.btn-pana` – primary button style (rounded, transitions, shadow)
  - `.card-pana` – subtle border card
  - `.bg-pana-gradient` – 135° gradient (primary → secondary)
  - `.text-pana-gradient` – gradient text with clip
  - `.divider-pana` – styled section divider with primary accent bar
- Tailwind gradient utilities heavily used:
  - Examples: `bg-linear-to-br from-primary/10 to-secondary/20`, overlays like `bg-linear-to-t from-black/50`.

## UI Design Patterns
- Layout:
  - `app/layout.tsx` sets `ThemeProvider` with `attribute="class"`, `defaultTheme="light"`, `enableSystem`.
  - `Header` + `TopHeader` + `Footer` compose the global shell; main `container mx-auto px-6` grid frequently used.
- UI primitives (`components/ui/*`):
  - `button.tsx` uses `cva` variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`; sizes `sm`, `default`, `lg`, and `icon` variants. Focus rings and accessibility baked in.
  - `card.tsx` provides `Card`, `CardHeader`, `CardContent`, `CardFooter`, etc., with consistent paddings and responsive container queries.
  - `navigation-menu.tsx` wraps Radix and provides trigger/content/viewport styles with animated open/close.
- Design language:
  - Rounded corners: radius driven by `--radius` tokens (default `0.625rem`), consistent use of `rounded-md`/`rounded-xl`.
  - Color usage: primary yellow accents, muted foreground for body, gradients and subtle shadows for depth.
  - Icons: `lucide-react` sized via Tailwind (`w-4 h-4`, etc.) and colored with `text-primary`.

## Animation Strategy
- `framer-motion` is the primary animation system:
  - Common pattern: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}` with `transition={{ duration: 0.5–0.8 }}`.
  - Custom easing arrays (e.g., `easeOutCubic: [0.215, 0.61, 0.355, 1]`).
  - `whileInView` for entrance animations on scroll; `viewport={{ once: true }}` to avoid repeat.
  - `whileHover` micro-interactions (e.g., cards hover up `y: -5`).
- `tw-animate-css` utilities available (global import):
  - Use Tailwind classes like `fade-in`, `zoom-in-95`, and Radix-driven `data-[motion]` animations in navigation menu.
- Decorative motion overlays:
  - Gradient overlays with motion for hero/sections; blurred glows using `bg-linear-to-br` with reduced opacity.

## Theming & Accessibility
- Dark mode:
  - Class-based via `next-themes`; the `.dark` block defines full token overrides using `oklch(...)`.
- Focus & validation:
  - Components implement `focus-visible` rings with `ring-ring/50` and validation states like `aria-invalid` using `destructive` tokens.
- Contrast:
  - Primary foreground tokens ensure readable text over primary backgrounds across themes.

## Code Architecture & Conventions
- Component-first, page sections under `components/home/*` and `components/about/*`.
- Composition over configuration: content arrays (services, features) drive grid rendering.
- `cn()` helper merges class lists safely:
  - `clsx` + `tailwind-merge` to prevent conflicting Tailwind utilities.
- Variants via `class-variance-authority` (`cva`) for consistent, typed styling APIs.
- Radix primitives for accessibility and interactions (`navigation-menu`).

## Content & Services Page Guidance
- Structure recommendations (aligned with current patterns):
  - Hero: gradient backdrop (`bg-linear-to-br`), motion entrance, CTA buttons (`Button` variants).
  - Services grid: `Card` components with icon blocks (`w-14 h-14 rounded-xl bg-primary/10`), hover lift (`whileHover={{ y: -5 }}`), and muted descriptions.
  - Feature highlights: stats and facility blocks using `Card` + decorative overlays.
  - CTA: newsletter or contact block with `.btn-pana`.
- Animation guidelines:
  - Stagger `fadeUp` variants; set `viewport={{ once: true }}` to avoid jitter.
  - Keep durations `0.3–0.8`; use easing arrays for smoothness.
- Styling guidelines:
  - Use design tokens via Tailwind utilities (`bg-primary`, `text-muted-foreground`), avoid hard-coded colors.
  - Leverage gradient utilities for subtle depth, and `.divider-pana` between major sections.

## Key Packages Present
- `next`, `react`, `react-dom`
- `tailwindcss`, `tw-animate-css`, `next-themes`
- `framer-motion`, `lucide-react`
- `class-variance-authority`, `clsx`, `tailwind-merge`

## Example Snippets
- Motion card:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Card className="border-0 shadow-lg bg-linear-to-br from-primary/10 to-secondary/20" />
  </motion.div>
  ```
- Button variants:
  ```tsx
  <Button variant="default">Primary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  ```
- Gradient heading text:
  ```html
  <h2 class="text-pana-gradient text-3xl font-bold">Our Services</h2>
  ```

## Notes for Grok
- Prefer existing primitives (`Button`, `Card`, `NavigationMenu`) to keep consistency.
- Use token-driven utilities and gradients; avoid raw hex or non-token colors.
- Animate with `framer-motion` for entrances and micro-interactions; keep `viewport={{ once: true }}`.
- Maintain rounded shapes and subtle shadows; respect spacing (`container mx-auto px-6`).
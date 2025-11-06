# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router architecture with TypeScript, React 19, and Tailwind CSS v4.

## Development Commands

### Local Development
```bash
npm run dev
# Starts development server on http://localhost:3000
```

### Building
```bash
npm run build
# Creates optimized production build
```

### Production Server
```bash
npm start
# Runs the production build (must run build first)
```

### Linting
```bash
npm run lint
# Runs ESLint with Next.js configuration
```

## Architecture

### Next.js App Router Structure
- **app/**: Contains all routes and layouts using Next.js App Router
  - `layout.tsx`: Root layout with font configuration (Geist Sans & Geist Mono)
  - `page.tsx`: Homepage component
  - `globals.css`: Global styles with Tailwind v4 imports
- **public/**: Static assets (SVG icons and images)
- **TypeScript Configuration**: 
  - Path alias `@/*` maps to project root
  - Strict mode enabled
  - Target: ES2017

### Styling
- Uses Tailwind CSS v4 with PostCSS
- Dark mode support via `prefers-color-scheme`
- Custom CSS variables defined in `globals.css` for `--background` and `--foreground`
- Theme configuration uses inline `@theme` directive

### Key Technologies
- **Next.js 16.0.1**: React framework with App Router
- **React 19.2.0**: Latest React with new features
- **TypeScript 5**: Full type safety
- **Tailwind CSS 4**: Utility-first CSS with latest version
- **ESLint 9**: With Next.js config for code quality

## Code Patterns

### Component Structure
- Use TypeScript for all components (`.tsx` files)
- Server Components by default (no "use client" directive needed unless using interactivity)
- Export metadata from pages and layouts for SEO

### Font Loading
- Fonts are loaded via `next/font/google` in `layout.tsx`
- Font variables are passed to body className: `--font-geist-sans`, `--font-geist-mono`

### Image Optimization
- Use `next/image` component for all images
- Static assets in `public/` folder referenced with `/filename.ext`

## File Conventions

- **Page Routes**: `app/[route]/page.tsx`
- **Layouts**: `app/[route]/layout.tsx`
- **Route Handlers**: `app/api/[route]/route.ts`
- **Components**: Create components in `app/` or a dedicated `components/` directory as needed
- **TypeScript**: Use `.tsx` for components, `.ts` for utilities

## Development Notes

- No test framework is currently configured
- ESLint ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Development server includes hot module reloading
- The project uses React 19's new JSX runtime (`react-jsx`)

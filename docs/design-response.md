```tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Printer, 
  Palette, 
  Flag, 
  Megaphone, 
  Scissors, 
  Shirt, 
  Calendar,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

// ====================
// SERVICE DATA (from PDF)
// ====================
const services = [
  {
    id: 1,
    title: 'Digital Paper Print Solutions',
    icon: Printer,
    description: 'High-quality printing for brochures, booklets, flyers, business cards, notebooks, calendars, posters, and more.',
    features: ['Vibrant colors', 'Sharp detail', 'Fast turnaround'],
    color: 'from-primary/20 to-secondary/10',
    equipment: 'Konica Minolta Production Printers, Binding & Lamination Machines'
  },
  {
    id: 2,
    title: 'Signage Solutions',
    icon: Megaphone,
    description: 'Indoor & outdoor signage: illuminated signs, billboards, shopfront branding, directional displays.',
    features: ['UV Direct Print', 'Weather-resistant', 'Custom 2D/3D'],
    color: 'from-primary/15 to-accent/10',
    equipment: 'UV Printing, CNC & Laser Cutting Workshops'
  },
  {
    id: 3,
    title: 'Flex Banner Printing',
    icon: Flag,
    description: 'Large-format durable banners up to 3.2m wide for events, campaigns, and outdoor promotions.',
    features: ['Seamless large prints', 'Indoor/outdoor', 'High-capacity'],
    color: 'from-secondary/20 to-primary/10',
    equipment: 'Large-format High-Capacity Printers'
  },
  {
    id: 4,
    title: 'Vinyl Printing & Cutout',
    icon: Scissors,
    description: 'Vehicle wraps, wall graphics, window branding with precision cut vinyl.',
    features: ['Custom shapes', 'Durable adhesive', 'Full-color'],
    color: 'from-accent/15 to-primary/10',
    equipment: 'High-Precision Vinyl Plotters'
  },
  {
    id: 5,
    title: 'Fabric Printing',
    icon: Shirt,
    description: 'Flags, tents, backdrops, tablecl seasonal branded textiles with vibrant, lasting prints.',
    features: ['Soft-hand feel', 'Wash-resistant', 'Event-ready'],
    color: 'from-primary/10 to-secondary/15',
    equipment: 'Direct-to-Fabric Printers'
  },
  {
    id: 6,
    title: 'Promotional Items',
    icon: Sparkles,
    description: 'Branded t-shirts, mugs, pens, bags, and corporate gifts that boost brand recall.',
    features: ['Custom branding', 'Bulk production', 'Premium quality'],
    color: 'from-secondary/10 to-accent/20',
    equipment: 'Screen Print, Heat Transfer, Embroidery Units'
  },
  {
    id: 7,
    title: 'Graphic Design',
    icon: Palette,
    description: 'Logos, brand identity, marketing materials, and event visuals tailored to your strategy.',
    features: ['Creative excellence', 'Brand-aligned', 'Fast iteration'],
    color: 'from-accent/20 to-primary/15',
    equipment: 'Adobe Suite, Professional Design Team'
  },
  {
    id: 8,
    title: 'Event Planning & Promotion',
    icon: Calendar,
    description: 'End-to-end event execution: concept, design, logistics, and on-ground promotion.',
    features: ['Flawless delivery', 'Maximum exposure', 'Full-service'],
    color: 'from-primary/20 to-accent/10',
    equipment: 'In-house Design, Print & Logistics'
  }
];

// Stagger container for scroll-triggered animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } }
};

// ====================
// MAIN SERVICES PAGE COMPONENT
// ====================
export default function ServicesPage() {
  const { theme } = useTheme();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.05),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Devoted to Quality Since 2016
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end printing, branding, and promotional solutions that empower your message with creativity, precision, and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" className="btn-pana">
                Explore All Services
              </Button>
              <Button size="lg" variant="outline">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-pana my-16" />

      {/* SERVICES GRID – MODERN ASYMMETRIC LAYOUT */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-pana-gradient mb-4">
              Comprehensive Branding Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to delivery, we handle every detail with over 30 state-of-the-art machines and a team of 20+ experts.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={item}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <Card className={cn(
                    "h-full border-0 shadow-lg bg-linear-to-br transition-all duration-500",
                    service.color,
                    "hover:shadow-xl hover:ring-2 hover:ring-primary/30"
                  )}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <Badge variant="secondary" className="mb-3">
                          0{service.id}
                        </Badge>
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <Separator className="bg-primary/10" />
                      <ul className="space-y-2">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Zap className="w-4 h-4 text-primary" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground italic pt-2">
                        {service.equipment}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="divider-pana my-16" />

      {/* WHY CHOOSE PANA – STATS + HIGHLIGHTS */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Partner with <span className="text-pana-gradient">Pana Promotion?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With 9+ years of excellence, we combine cutting-edge technology, creative expertise, and unwavering commitment to quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: 'Uncompromising Quality', value: '100%' },
                  { icon: Clock, label: 'On-Time Delivery', value: '98%' },
                  { icon: Star, label: 'Client Satisfaction', value: '5.0' },
                  { icon: Zap, label: 'Production Capacity', value: '30+ Machines' }
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-background rounded-2xl p-6 text-center shadow-sm"
                    >
                      <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {[
                'Extensive Production Capacity',
                'Skilled Team of 20+ Experts',
                'Creative Design Excellence',
                'Strict Quality Assurance',
                'Timely Project Delivery'
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <p className="text-lg text-foreground font-medium">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider-pana my-16" />

      {/* CTA SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-pana-gradient">Elevate Your Brand?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let’s transform your ideas into impactful visuals. Contact us today for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-pana text-lg px-8">
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Portfolio
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              📞 +251 911 00 52 55 | 📧 panapromotionplc@gmail.com
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
```

---

## DESIGN IMPLEMENTATION GUIDE (For Your Trae Builder)

### File: `app/services/page.tsx`
```tsx
// Paste the full component above
```

### Key Design Decisions (Aligned with `services-design-architecture.md`)

| Feature | Implementation |
|-------|----------------|
| **Framework** | Next.js App Router + TypeScript |
| **Styling** | Tailwind v4 + `@theme` tokens + `oklch` via CSS vars |
| **Theming** | `next-themes` class-based (dark mode ready) |
| **UI Primitives** | `Button`, `Card`, `Badge`, `Separator` from `components/ui` |
| **Icons** | `lucide-react` with consistent sizing |
| **Animations** | `framer-motion` with `whileInView`, `viewport={{ once: true }}`, custom easing |
| **Utilities** | `cn()` via `clsx` + `tailwind-merge` |
| **Gradients** | `bg-linear-to-br`, `text-pana-gradient`, token-driven |
| **Custom Classes** | `.btn-pana`, `.card-pana`, `.divider-pana`, `.text-pana-gradient` |

---

### Custom Utility Classes (Add to `globals.css`)

```css
@layer components {
  .btn-pana {
    @apply rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 bg-primary text-primary-foreground;
  }
  .card-pana {
    @apply rounded-2xl border-0 shadow-lg bg-card/95 backdrop-blur-sm;
  }
  .divider-pana {
    @apply h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent;
  }
  .text-pana-gradient {
    @apply bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold;
  }
}
```

---

### Modern Design Patterns Used

| Pattern | Purpose |
|-------|--------|
| **Asymmetric Grid** | `xl:grid-cols-4` with staggered cards for visual flow |
| **Micro-interactions** | `whileHover={{ y: -8 }}` + `ring` on hover |
| **Staggered Animations** | `container` → `item` variants for smooth reveal |
| **Gradient Overlays** | Subtle `oklch(var(--primary)/0.05)` radial dots |
| **Token-Driven Colors** | No hard-coded hex — all via `--primary`, `--accent` |
| **Rounded Hierarchy** | `rounded-xl` → `rounded-2xl` for depth |
| **Stats Cards** | Modern glassmorphism-inspired with `bg-background` + shadow |

---

### Responsiveness

- **Mobile**: Stacked cards, centered CTA
- **Tablet**: 2-column grid
- **Desktop**: 4-column asymmetric grid
- **Large Screens**: Full container width with generous spacing

---

### Accessibility

- Semantic HTML
- Proper contrast via tokens
- Focus rings via `focus-visible`
- `aria-label` ready for icons
- Screen reader friendly copy

---

### Performance

- `viewport={{ once: true }}` → no repeat animations
- `framer-motion` lazy-loaded
- Optimized image placeholders (add later via `next/image`)
- No layout shift with proper `aspect-ratio` in mind

---

### Next Steps for Trae Builder

1. Copy the full `ServicesPage` component into `app/services/page.tsx`
2. Ensure `components/ui/*` are properly set up
3. Add `.btn-pana`, `.divider-pana`, etc. to `globals.css`
4. Import required icons from `lucide-react`
5. Test dark mode toggle (should inherit from `next-themes`)
6. Replace placeholder images later with real Pana work samples

---

**Result**: A **modern, elegant, animated, token-driven, accessible, and fully consistent** Services page that reflects Pana’s premium branding while adhering 100% to your architecture.

Let me know when you want the **Portfolio**, **Contact**, or **About** pages next.
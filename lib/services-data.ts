import { ServiceSpec } from '@/types/service';

export const services: ServiceSpec[] = [
  {
    slug: 'digital-print',
    title: 'Digital Paper Print Solutions',
    subtitle: 'Precision printing that elevates your brand.',
    description:
      '<p>Bring ideas to life with production-grade digital printing built for clarity, speed, and consistency. From business cards and brochures to reports and marketing kits, we deliver polished results that represent your brand at its best.</p>' +
      '<p>Expect ultrafine detail, color-accurate output, and flexible finishing — all handled in-house for reliable quality and quick turnaround.</p>',
    features: [
      'Ultrafine 1200 DPI detail',
      'Color-accurate CMYK + Pantone support',
      'Same-day and rush options',
      'Premium papers and finishes',
      'In-house binding, lamination, and kitting',
    ],
    equipment: 'Konica Minolta AccurioPress series, Duplo binders, cold/hot laminators',
    images: [
      { src: '/sample-1.jpg', alt: 'Brochure stack with vibrant colors' },
      { src: '/sample-2.jpg', alt: 'Business card close-up' },
      { src: '/sample-3.jpeg', alt: 'Magazine spread' },
      { src: '/sample-4.png', alt: 'Event posters' },
    ],
    options: {
      sizes: ['A3', 'A4', 'A5', 'Letter', 'Custom'],
      materials: ['Matte 150gsm', 'Gloss 200gsm', 'Textured 250gsm', 'Cardstock 300gsm'],
      finishes: ['None', 'Matte Lamination', 'Gloss Lamination', 'UV Spot', 'Foil'],
      colors: ['Full Color', 'Black & White', 'Pantone'],
      sides: ['Single-Sided', 'Double-Sided'],
    },
    basePrice: 0.5,
  },
  {
    slug: 'signage',
    title: 'Indoor & Outdoor Signage',
    subtitle: 'Make a statement that lasts.',
    description:
      '<p>Command attention with signage engineered for impact and durability. Whether storefronts, wayfinding, or large-scale promotional displays, we craft solutions that are bold, legible, and built to withstand the elements.</p>' +
      '<p>From illumination to precision-cut lettering, every piece is produced and finished to professional standards.</p>',
    features: ['Illuminated and non-illuminated options', 'CNC / laser-cut letters and shapes', 'Weatherproof, long-lasting materials', 'Professional installation'],
    images: [
      { src: '/sample-2.jpg', alt: 'Storefront signage with bold branding' },
      { src: '/sample-5.png', alt: 'Wayfinding signs in a venue' },
      { src: '/sample-3.jpeg', alt: 'Promotional signage wall' },
    ],
    options: {
      sizes: ['S', 'M', 'L', 'XL', 'Custom'],
      materials: ['Acrylic', 'Aluminum', 'PVC', 'Vinyl'],
      finishes: ['Matte', 'Gloss', 'Anti-glare'],
      colors: ['Full Color', 'Spot Color'],
      sides: ['Single-Sided', 'Double-Sided'],
    },
    basePrice: 2.0,
  },
  {
    slug: 'flex-banner',
    title: 'Flex Banners',
    subtitle: 'Big, bold, and built to perform.',
    description:
      '<p>High-visibility flex banners designed for outdoor campaigns, events, and retail activations. Vivid color, reinforced edges, and reliable hardware make setup simple and performance dependable.</p>' +
      '<p>Scale up your message with large-format capabilities and durable materials that stand up to real-world use.</p>',
    features: ['UV-stable inks', 'Reinforced hems & eyelets', 'Large-format up to 3.2m width'],
    images: [
      { src: '/sample-1.jpg', alt: 'Outdoor flex banner on building' },
      { src: '/sample-2.jpg', alt: 'Event banner with crowd' },
    ],
    options: {
      sizes: ['2x3m', '3x5m', 'Custom'],
      materials: ['Flex', 'Mesh Flex'],
      finishes: ['None', 'Matte', 'Gloss'],
      colors: ['Full Color'],
      sides: ['Single-Sided'],
    },
    basePrice: 3.5,
  },
  {
    slug: 'vinyl',
    title: 'Vinyl Printing & Cutting',
    subtitle: 'Turn surfaces into brand moments.',
    description:
      '<p>From vehicles to windows and walls, vinyl branding delivers high-impact visuals with precision-cut details and long-lasting adhesion.</p>' +
      '<p>Perfect for wraps, decals, and custom cutouts — all produced for durability and clean installation.</p>',
    features: ['Precision plotter cutting', 'High-tack, long-life adhesives', 'Vehicle, window, and wall applications'],
    images: [
      { src: '/sample-4.png', alt: 'Vehicle wrap in progress' },
      { src: '/sample-2.jpg', alt: 'Window graphics on storefront' },
    ],
    options: {
      sizes: ['S', 'M', 'L', 'Custom'],
      materials: ['Gloss Vinyl', 'Matte Vinyl', 'Clear Vinyl'],
      finishes: ['None', 'Laminate'],
      colors: ['Full Color', 'Spot Color'],
      sides: ['Single-Sided'],
    },
    basePrice: 1.2,
  },
  {
    slug: 'fabric',
    title: 'Fabric Printing',
    subtitle: 'Soft signage that moves with your audience.',
    description:
      '<p>Premium fabric graphics with rich, dye-sublimated color for flags, tension frames, and event backdrops. Lightweight, wrinkle-resistant, and easy to transport.</p>' +
      '<p>Ideal for indoor environments and outdoor setups where texture and elegance matter.</p>',
    features: ['Dye-sublimation printing', 'Wrinkle-resistant, soft-touch output', 'Portable and event-ready'],
    images: [
      { src: '/sample-3.jpeg', alt: 'Fabric tension display' },
      { src: '/sample-1.jpg', alt: 'Flags at an event' },
    ],
    options: {
      sizes: ['S', 'M', 'L', 'Custom'],
      materials: ['Poly Fabric', 'Mesh Fabric'],
      finishes: ['None', 'Hem', 'Grommets'],
      colors: ['Full Color'],
      sides: ['Single-Sided', 'Double-Sided'],
    },
    basePrice: 2.5,
  },
  {
    slug: 'promotional',
    title: 'Promotional Merchandise',
    subtitle: 'Merch people actually keep.',
    description:
      '<p>Amplify brand recall with high-quality promotional items for campaigns, launches, and events. From apparel and drinkware to stationery and gifts, we curate and brand products that feel premium and purposeful.</p>',
    features: ['Wide product range', 'Heat transfer, screen print, embroidery', 'Bulk-friendly pricing'],
    images: [
      { src: '/sample-5.png', alt: 'Promo items assortment' },
      { src: '/sample-2.jpg', alt: 'Branded tote bags' },
    ],
    options: {
      sizes: ['S', 'M', 'L', 'Custom'],
      materials: ['Plastic', 'Cotton', 'Metal'],
      finishes: ['None', 'Gloss', 'Matte'],
      colors: ['Full Color', 'One Color'],
      sides: ['Single-Sided'],
    },
    basePrice: 0.8,
  },
  {
    slug: 'design',
    title: 'Creative Design Services',
    subtitle: 'From strategy to pixel-perfect execution.',
    description:
      '<p>Partner with a creative team that aligns design to outcomes. We develop brand identities, campaign visuals, and production-ready assets that look great and work hard across print and digital.</p>',
    features: ['Logo & identity systems', 'Campaign and marketing visuals', 'Print-ready and digital templates'],
    images: [
      { src: '/sample-1.jpg', alt: 'Design moodboard' },
      { src: '/sample-3.jpeg', alt: 'Layout design preview' },
    ],
    options: {
      services: ['Logo', 'Brand Kit', 'Poster Design', 'Social Templates'],
    },
    basePrice: 5.0,
  },
  {
    slug: 'events',
    title: 'Event Branding & Production',
    subtitle: 'End-to-end branding and on-site support.',
    description:
      '<p>Make events memorable with cohesive branding, signage, and production support. From concept to execution, we handle booths, backdrops, directional systems, and attendee materials for a seamless experience.</p>',
    features: ['Booths & stands', 'Backdrops & stages', 'Directional signage', 'Attendee kits', 'On-site production support'],
    images: [
      { src: '/sample-2.jpg', alt: 'Event booth branding' },
      { src: '/sample-3.jpeg', alt: 'Venue signage' },
    ],
    options: {
      packages: ['Basic', 'Standard', 'Premium'],
    },
    basePrice: 4.0,
  },
];
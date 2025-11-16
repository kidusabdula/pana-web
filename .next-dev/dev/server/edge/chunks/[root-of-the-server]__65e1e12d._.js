(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__65e1e12d._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/lib/services-data.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        slug: 'digital-print',
        title: 'Digital Paper Print Solutions',
        subtitle: 'Precision printing that elevates your brand.',
        description: '<p>Bring ideas to life with production-grade digital printing built for clarity, speed, and consistency. From business cards and brochures to reports and marketing kits, we deliver polished results that represent your brand at its best.</p>' + '<p>Expect ultrafine detail, color-accurate output, and flexible finishing — all handled in-house for reliable quality and quick turnaround.</p>',
        features: [
            'Ultrafine 1200 DPI detail',
            'Color-accurate CMYK + Pantone support',
            'Same-day and rush options',
            'Premium papers and finishes',
            'In-house binding, lamination, and kitting'
        ],
        equipment: 'Konica Minolta AccurioPress series, Duplo binders, cold/hot laminators',
        images: [
            {
                src: '/digitalpaperprint.jpg',
                alt: 'Accordion brochure mockup on concrete surface'
            },
            {
                src: '/sample-2.jpg',
                alt: 'Business card close-up'
            },
            {
                src: '/sample-3.jpeg',
                alt: 'Magazine spread'
            },
            {
                src: '/sample-4.png',
                alt: 'Event posters'
            }
        ],
        options: {
            sizes: [
                'A3',
                'A4',
                'A5',
                'Letter',
                'Custom'
            ],
            materials: [
                'Matte 150gsm',
                'Gloss 200gsm',
                'Textured 250gsm',
                'Cardstock 300gsm'
            ],
            finishes: [
                'None',
                'Matte Lamination',
                'Gloss Lamination',
                'UV Spot',
                'Foil'
            ],
            colors: [
                'Full Color',
                'Black & White',
                'Pantone'
            ],
            sides: [
                'Single-Sided',
                'Double-Sided'
            ]
        },
        basePrice: 0.5
    },
    {
        slug: 'signage',
        title: 'Indoor & Outdoor Signage',
        subtitle: 'Make a statement that lasts.',
        description: '<p>Command attention with signage engineered for impact and durability. Whether storefronts, wayfinding, or large-scale promotional displays, we craft solutions that are bold, legible, and built to withstand the elements.</p>' + '<p>From illumination to precision-cut lettering, every piece is produced and finished to professional standards.</p>',
        features: [
            'Illuminated and non-illuminated options',
            'CNC / laser-cut letters and shapes',
            'Weatherproof, long-lasting materials',
            'Professional installation'
        ],
        images: [
            {
                src: '/indoorsinage.jpg',
                alt: 'Emergency exit sign on yellow brick wall'
            },
            {
                src: '/outdoorsinage.jpg',
                alt: 'Outdoor signage installation with bold branding'
            },
            {
                src: '/sample-3.jpeg',
                alt: 'Promotional signage wall'
            }
        ],
        options: {
            sizes: [
                'S',
                'M',
                'L',
                'XL',
                'Custom'
            ],
            materials: [
                'Acrylic',
                'Aluminum',
                'PVC',
                'Vinyl'
            ],
            finishes: [
                'Matte',
                'Gloss',
                'Anti-glare'
            ],
            colors: [
                'Full Color',
                'Spot Color'
            ],
            sides: [
                'Single-Sided',
                'Double-Sided'
            ]
        },
        basePrice: 2.0
    },
    {
        slug: 'flex-banner',
        title: 'Flex Banners',
        subtitle: 'Big, bold, and built to perform.',
        description: '<p>High-visibility flex banners designed for outdoor campaigns, events, and retail activations. Vivid color, reinforced edges, and reliable hardware make setup simple and performance dependable.</p>' + '<p>Scale up your message with large-format capabilities and durable materials that stand up to real-world use.</p>',
        features: [
            'UV-stable inks',
            'Reinforced hems & eyelets',
            'Large-format up to 3.2m width'
        ],
        images: [
            {
                src: '/flexbanner.jpg',
                alt: 'Flex banner production on large-format printer'
            },
            {
                src: '/sample-2.jpg',
                alt: 'Event banner with crowd'
            }
        ],
        options: {
            sizes: [
                '2x3m',
                '3x5m',
                'Custom'
            ],
            materials: [
                'Flex',
                'Mesh Flex'
            ],
            finishes: [
                'None',
                'Matte',
                'Gloss'
            ],
            colors: [
                'Full Color'
            ],
            sides: [
                'Single-Sided'
            ]
        },
        basePrice: 3.5
    },
    {
        slug: 'vinyl',
        title: 'Vinyl Printing & Cutting',
        subtitle: 'Turn surfaces into brand moments.',
        description: '<p>From vehicles to windows and walls, vinyl branding delivers high-impact visuals with precision-cut details and long-lasting adhesion.</p>' + '<p>Perfect for wraps, decals, and custom cutouts — all produced for durability and clean installation.</p>',
        features: [
            'Precision plotter cutting',
            'High-tack, long-life adhesives',
            'Vehicle, window, and wall applications'
        ],
        images: [
            {
                src: '/vinlyprinting.png',
                alt: 'Modern green exhibition panels with silver frame'
            },
            {
                src: '/sample-2.jpg',
                alt: 'Window graphics on storefront'
            }
        ],
        options: {
            sizes: [
                'S',
                'M',
                'L',
                'Custom'
            ],
            materials: [
                'Gloss Vinyl',
                'Matte Vinyl',
                'Clear Vinyl'
            ],
            finishes: [
                'None',
                'Laminate'
            ],
            colors: [
                'Full Color',
                'Spot Color'
            ],
            sides: [
                'Single-Sided'
            ]
        },
        basePrice: 1.2
    },
    {
        slug: 'fabric',
        title: 'Fabric Printing',
        subtitle: 'Soft signage that moves with your audience.',
        description: '<p>Premium fabric graphics with rich, dye-sublimated color for flags, tension frames, and event backdrops. Lightweight, wrinkle-resistant, and easy to transport.</p>' + '<p>Ideal for indoor environments and outdoor setups where texture and elegance matter.</p>',
        features: [
            'Dye-sublimation printing',
            'Wrinkle-resistant, soft-touch output',
            'Portable and event-ready'
        ],
        images: [
            {
                src: '/sample-3.jpeg',
                alt: 'Fabric tension display'
            },
            {
                src: '/sample-1.jpg',
                alt: 'Flags at an event'
            }
        ],
        options: {
            sizes: [
                'S',
                'M',
                'L',
                'Custom'
            ],
            materials: [
                'Poly Fabric',
                'Mesh Fabric'
            ],
            finishes: [
                'None',
                'Hem',
                'Grommets'
            ],
            colors: [
                'Full Color'
            ],
            sides: [
                'Single-Sided',
                'Double-Sided'
            ]
        },
        basePrice: 2.5
    },
    {
        slug: 'promotional',
        title: 'Promotional Merchandise',
        subtitle: 'Merch people actually keep.',
        description: '<p>Amplify brand recall with high-quality promotional items for campaigns, launches, and events. From apparel and drinkware to stationery and gifts, we curate and brand products that feel premium and purposeful.</p>',
        features: [
            'Wide product range',
            'Heat transfer, screen print, embroidery',
            'Bulk-friendly pricing'
        ],
        images: [
            {
                src: '/sample-5.png',
                alt: 'Promo items assortment'
            },
            {
                src: '/sample-2.jpg',
                alt: 'Branded tote bags'
            }
        ],
        options: {
            sizes: [
                'S',
                'M',
                'L',
                'Custom'
            ],
            materials: [
                'Plastic',
                'Cotton',
                'Metal'
            ],
            finishes: [
                'None',
                'Gloss',
                'Matte'
            ],
            colors: [
                'Full Color',
                'One Color'
            ],
            sides: [
                'Single-Sided'
            ]
        },
        basePrice: 0.8
    },
    {
        slug: 'design',
        title: 'Creative Design Services',
        subtitle: 'From strategy to pixel-perfect execution.',
        description: '<p>Partner with a creative team that aligns design to outcomes. We develop brand identities, campaign visuals, and production-ready assets that look great and work hard across print and digital.</p>',
        features: [
            'Logo & identity systems',
            'Campaign and marketing visuals',
            'Print-ready and digital templates'
        ],
        images: [
            {
                src: '/graphicdesign.jpg',
                alt: 'Graphic design mockup signage'
            },
            {
                src: '/sample-3.jpeg',
                alt: 'Layout design preview'
            }
        ],
        options: {
            services: [
                'Logo',
                'Brand Kit',
                'Poster Design',
                'Social Templates'
            ]
        },
        basePrice: 5.0
    },
    {
        slug: 'events',
        title: 'Event Branding & Production',
        subtitle: 'End-to-end branding and on-site support.',
        description: '<p>Make events memorable with cohesive branding, signage, and production support. From concept to execution, we handle booths, backdrops, directional systems, and attendee materials for a seamless experience.</p>',
        features: [
            'Booths & stands',
            'Backdrops & stages',
            'Directional signage',
            'Attendee kits',
            'On-site production support'
        ],
        images: [
            {
                src: '/sample-2.jpg',
                alt: 'Event booth branding'
            },
            {
                src: '/sample-3.jpeg',
                alt: 'Venue signage'
            }
        ],
        options: {
            packages: [
                'Basic',
                'Standard',
                'Premium'
            ]
        },
        basePrice: 4.0
    }
];
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services-data.ts [middleware-edge] (ecmascript)");
;
;
function normalizeSlug(input) {
    return input.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$|^\/+|\/+$/g, "");
}
function middleware(req) {
    const { pathname } = req.nextUrl;
    if (!pathname.startsWith("/services")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    const parts = pathname.split("/").filter(Boolean);
    // /services
    if (parts.length === 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // /services/<slug>
    const raw = parts[1] ?? "";
    const normalized = normalizeSlug(raw);
    // Try match by canonical slug
    const matchBySlug = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["services"].find((s)=>s.slug === normalized);
    // Try match by title-derived alias (e.g., "Digital Paper Print Solutions" -> "digital-paper-print-solutions")
    const matchByTitleAlias = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$data$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["services"].find((s)=>normalizeSlug(s.title) === normalized);
    const match = matchBySlug ?? matchByTitleAlias;
    // If unknown slug, redirect to /services
    if (!match) {
        const url = req.nextUrl.clone();
        url.pathname = "/services";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url, 308);
    }
    // If alias used, redirect to canonical
    if (match.slug !== normalized) {
        const url = req.nextUrl.clone();
        url.pathname = `/services/${match.slug}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url, 308);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/services/:path*"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__65e1e12d._.js.map
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { services } from "./lib/services-data";

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$|^\/+|\/+$/g, "");
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/services")) return NextResponse.next();
  const parts = pathname.split("/").filter(Boolean);

  // /services
  if (parts.length === 1) return NextResponse.next();

  // /services/<slug>
  const raw = parts[1] ?? "";
  const normalized = normalizeSlug(raw);

  // Try match by canonical slug
  const matchBySlug = services.find((s) => s.slug === normalized);
  // Try match by title-derived alias (e.g., "Digital Paper Print Solutions" -> "digital-paper-print-solutions")
  const matchByTitleAlias = services.find((s) => normalizeSlug(s.title) === normalized);

  const match = matchBySlug ?? matchByTitleAlias;

  // If unknown slug, redirect to /services
  if (!match) {
    const url = req.nextUrl.clone();
    url.pathname = "/services";
    return NextResponse.redirect(url, 308);
  }

  // If alias used, redirect to canonical
  if (match.slug !== normalized) {
    const url = req.nextUrl.clone();
    url.pathname = `/services/${match.slug}`;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:path*"],
};
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLayout from "@/components/services/ui/ServiceLayout";
import { services } from "../../../lib/services-data";
import type { ServiceSpec } from "@/types/service";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const normalized = decodeURIComponent(slug).replace(/^\/+|\/+$/g, "");
  const service = services.find((s) => s.slug === normalized);
  if (!service) {
    return {
      title: `Services | PANA`,
      description: "Explore print, signage, events, and design services.",
    };
  }
  return {
    title: `${service.title} | PANA`,
    description: service.subtitle ?? service.description?.replace(/<[^>]*>?/gm, "").slice(0, 160),
    openGraph: {
      title: `${service.title} | PANA`,
      description: service.subtitle ?? undefined,
      images: service.images?.length ? [{ url: service.images[0].src }] : undefined,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const normalized = decodeURIComponent(slug).replace(/^\/+|\/+$/g, "");
  const service = services.find((s) => s.slug === normalized);

  if (!service) return notFound();
  return <ServiceLayout service={service} />;
}
import { Metadata } from "next";
import { redirect } from "next/navigation";
import ServiceLayout from "@/components/services/ui/ServiceLayout";
import { services } from "../../../lib/services-data";
import type { ServiceSpec } from "@/types/service";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = decodeURIComponent(params.slug).replace(/^\/+|\/+$/g, "");
  const service = services.find((s) => s.slug === slug) ?? services[0];
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

export default function ServicePage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug).replace(/^\/+|\/+$/g, "");
  const service = services.find((s) => s.slug === slug) ?? services[0];

  // No redirect fallback; we will render with a default service when unmatched
  return <ServiceLayout service={service} />;
}
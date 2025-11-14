import { notFound } from "next/navigation";
import DigitalPrint from "@/components/services/DigitalPrint";
import Signage from "@/components/services/Signage";
import FlexBanner from "@/components/services/FlexBanner";
import Vinyl from "@/components/services/Vinyl";
import Fabric from "@/components/services/Fabric";
import Promotional from "@/components/services/Promotional";
import Design from "@/components/services/Design";
import Events from "@/components/services/Events";

const servicesMap = {
  "digital-print": DigitalPrint,
  signage: Signage,
  "flex-banner": FlexBanner,
  vinyl: Vinyl,
  fabric: Fabric,
  promotional: Promotional,
  design: Design,
  events: Events,
} as const;

export function generateStaticParams() {
  return Object.keys(servicesMap).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: keyof typeof servicesMap | string };
}) {
  const ServiceComponent = servicesMap[params.slug as keyof typeof servicesMap];
  if (!ServiceComponent) return notFound();
  return <ServiceComponent />;
}
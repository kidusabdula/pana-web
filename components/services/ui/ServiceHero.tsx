"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ServiceSpec } from "@/types/service";
import { Printer, Flag, Sparkles, Palette, Shirt, Zap } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const IconMap: Record<string, any> = {
  "digital-print": Printer,
  signage: Flag,
  "flex-banner": Sparkles,
  vinyl: Palette,
  fabric: Shirt,
  promotional: Sparkles,
  design: Palette,
  events: Zap,
};

export default function ServiceHero({ service }: { service: ServiceSpec }) {
  const Icon = IconMap[service.slug] || Printer;

  return (
    <motion.div initial="initial" animate="animate" variants={fadeUp}>
      <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
        <Icon className="w-3 h-3 mr-1" /> {service.slug.replace("-", " ")}
      </Badge>
      <h1 className="text-4xl lg:text-6xl font-bold bg-linear-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
        {service.title}
      </h1>
      {service.subtitle && (
        <p className="text-lg lg:text-xl text-muted-foreground mt-3">{service.subtitle}</p>
      )}

      {service.images?.[0] && (
        <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl group mt-8" whileHover={{ scale: 1.02 }} transition={{ duration: 0.6 }}>
          <div className="aspect-video relative">
            <Image
              src={service.images[0].src}
              alt={service.images[0].alt}
              fill
              priority
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
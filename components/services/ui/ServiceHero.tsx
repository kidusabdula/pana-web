"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ServiceSpec } from "@/types/service";
import { Printer, Flag, Sparkles, Palette, Shirt, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const isVinyl = service.slug === "vinyl";

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
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl group mt-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-video relative">
            {/* Primary image */}
            <Image
              src={service.images[0].src}
              alt={service.images[0].alt}
              fill
              priority
              className={
                cn(
                  "object-cover transition ease-in-out duration-300 group-hover:scale-110 opacity-100 group-hover:opacity-0",
                  isVinyl && "saturate-125 contrast-110"
                )
              }
            />
            {/* Hover image (falls back to primary if not provided) */}
            <Image
              src={
                service.slug === "signage"
                  ? "/outdoorsinage.jpg"
                  : service.images?.[1]?.src || service.images[0].src
              }
              alt={service.images?.[1]?.alt || service.images[0].alt}
              fill
              className={
                cn(
                  "object-cover transition ease-in-out duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100",
                  isVinyl && "saturate-125 contrast-110"
                )
              }
            />
            {/* Base vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            {/* Vinyl-specific modern overlays */}
            {isVinyl && (
              <>
                {/* Subtle grid / pattern for tech feel */}
                <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[radial-gradient(circle_at_20%_30%,#00c6ff_0%,transparent_35%),radial-gradient(circle_at_80%_70%,#ff6ec7_0%,transparent_35%)]" />
                {/* Color wash to push brand accents */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-transparent mix-blend-multiply" />
                {/* Glass label */}
                <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white shadow-lg">
                  <span className="text-sm font-medium">Vinyl • Featured Work</span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
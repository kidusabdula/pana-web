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
  const isSignage = service.slug === "signage";

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
            {isSignage ? (
              <>
                {/* Default hero image */}
                <Image
                  src={service.images[0].src}
                  alt={service.images[0].alt}
                  fill
                  priority
                  className={cn(
                    "object-cover transition-transform duration-1000 group-hover:scale-110",
                    "transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  )}
                />
                {/* Hover replacement image from public/ */}
                <Image
                  src={"/outdoorsinage.jpg"}
                  alt={"Outdoor signage installation with bold branding"}
                  fill
                  priority
                  className={cn(
                    "object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-110",
                    "transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  )}
                />
              </>
            ) : (
              <Image
                src={service.images[0].src}
                alt={service.images[0].alt}
                fill
                priority
                className={
                  cn(
                    "object-cover transition-transform duration-1000 group-hover:scale-110",
                    isVinyl && "saturate-125 contrast-110"
                  )
                }
              />
            )}

            {/* Base vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

            {/* Signage-specific subtle cool-neutral overlay */}
            {isSignage && (
              <>
                <div className="absolute inset-0 bg-linear-to-br from-cyan-300/10 via-transparent to-blue-300/10 mix-blend-multiply" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,transparent_60%)]" />
              </>
            )}

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
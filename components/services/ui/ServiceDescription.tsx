"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Zap } from "lucide-react";
import { ServiceSpec } from "@/types/service";

const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

export default function ServiceDescription({ service }: { service: ServiceSpec }) {
  return (
    <>
      <motion.div
        variants={fadeUp}
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: service.description }}
      />

      <Separator className="my-8 bg-primary/10" />

      <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
        {service.features.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex shrink-0 items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <p className="font-medium text-foreground">{f}</p>
          </div>
        ))}
      </motion.div>

      {service.equipment && (
        <>
          <Separator className="my-8 bg-primary/10" />
          <motion.div variants={fadeUp} className="bg-muted/50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">Powered by</h3>
            <p className="text-sm text-muted-foreground">{service.equipment}</p>
          </motion.div>
        </>
      )}
    </>
  );
}
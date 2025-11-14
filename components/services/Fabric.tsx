"use client";
import { motion } from "framer-motion";

export default function Fabric() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py:12 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Fabric</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Fabric printing for soft signage, flags, and tension displays with premium textures and vibrant dyes.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-3"
      >
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Soft Signage</h3>
          <p className="text-sm text-muted-foreground mt-2">Elegant fabric backdrops and displays.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Flags</h3>
          <p className="text-sm text-muted-foreground mt-2">Feather and teardrop flags for outdoor presence.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Tension Frames</h3>
          <p className="text-sm text-muted-foreground mt-2">Seamless fabric graphics with easy setup.</p>
        </div>
      </motion.div>
    </section>
  );
}
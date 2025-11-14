"use client";
import { motion } from "framer-motion";

export default function Design() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Design</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Creative design services for cohesive brand identity, campaign concepts, and production-ready assets.
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
          <h3 className="font-semibold">Brand Identity</h3>
          <p className="text-sm text-muted-foreground mt-2">Logos, palettes, and typography systems.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Campaign Design</h3>
          <p className="text-sm text-muted-foreground mt-2">Concepts and layouts across channels.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Production Assets</h3>
          <p className="text-sm text-muted-foreground mt-2">Print-ready files with precise specs.</p>
        </div>
      </motion.div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

export default function DigitalPrint() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Digital Print</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          High-resolution digital printing for brochures, flyers, posters, and branded collateral with vivid colors and crisp detail.
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
          <h3 className="font-semibold">Brochures & Flyers</h3>
          <p className="text-sm text-muted-foreground mt-2">Vibrant print finishes and quick turnarounds.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Posters</h3>
          <p className="text-sm text-muted-foreground mt-2">Large-format posters with premium stock options.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Custom Collateral</h3>
          <p className="text-sm text-muted-foreground mt-2">Brand-on materials tailored to your campaigns.</p>
        </div>
      </motion.div>
    </section>
  );
}
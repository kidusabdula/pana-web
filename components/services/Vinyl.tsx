"use client";
import { motion } from "framer-motion";

export default function Vinyl() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Vinyl</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Custom vinyl printing and cutting for decals, vehicle wraps, and window graphics with long-lasting adhesives.
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
          <h3 className="font-semibold">Decals</h3>
          <p className="text-sm text-muted-foreground mt-2">Precision cut and durable finishes.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Vehicle Wraps</h3>
          <p className="text-sm text-muted-foreground mt-2">Full and partial wraps for fleets and promos.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Window Graphics</h3>
          <p className="text-sm text-muted-foreground mt-2">Perforated and opaque options for retail.</p>
        </div>
      </motion.div>
    </section>
  );
}
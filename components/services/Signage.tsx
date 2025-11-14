"use client";
import { motion } from "framer-motion";

export default function Signage() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Signage</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Indoor and outdoor signage solutions: storefronts, wayfinding, and promotional signs engineered for durability and impact.
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
          <h3 className="font-semibold">Storefront Signs</h3>
          <p className="text-sm text-muted-foreground mt-2">Brand visibility with weather-resistant materials.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Wayfinding</h3>
          <p className="text-sm text-muted-foreground mt-2">Clear navigation systems for campuses and venues.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Promotional</h3>
          <p className="text-sm text-muted-foreground mt-2">Pop-up and seasonal signage for campaigns.</p>
        </div>
      </motion.div>
    </section>
  );
}
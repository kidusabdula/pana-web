"use client";
import { motion } from "framer-motion";

export default function FlexBanner() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Flex Banner</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          High-visibility flex banners for outdoor advertising, events, and brand activations with resilient finishes.
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
          <h3 className="font-semibold">Outdoor Banners</h3>
          <p className="text-sm text-muted-foreground mt-2">UV-resistant inks and tear-proof substrates.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Event Backdrops</h3>
          <p className="text-sm text-muted-foreground mt-2">Custom sizes and rapid turnaround.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Retail Promotions</h3>
          <p className="text-sm text-muted-foreground mt-2">Seasonal promos with vivid color fidelity.</p>
        </div>
      </motion.div>
    </section>
  );
}
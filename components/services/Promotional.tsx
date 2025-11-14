"use client";
import { motion } from "framer-motion";

export default function Promotional() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Promotional</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Branded giveaways and promotional merchandise to amplify campaigns and events with cohesive identity.
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
          <h3 className="font-semibold">Giveaways</h3>
          <p className="text-sm text-muted-foreground mt-2">Custom branded items for audience engagement.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Corporate Gifts</h3>
          <p className="text-sm text-muted-foreground mt-2">Premium selections for client appreciation.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Event Kits</h3>
          <p className="text-sm text-muted-foreground mt-2">Unified branding across all materials.</p>
        </div>
      </motion.div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Events</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Event branding and production support: booths, backdrops, signage, and attendee engagement materials.
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
          <h3 className="font-semibold">Booths & Stands</h3>
          <p className="text-sm text-muted-foreground mt-2">Modular builds with brand presence.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Backdrops & Stages</h3>
          <p className="text-sm text-muted-foreground mt-2">Photo ops and keynote branding.</p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="font-semibold">Attendee Materials</h3>
          <p className="text-sm text-muted-foreground mt-2">Lanyards, badges, and kits.</p>
        </div>
      </motion.div>
    </section>
  );
}
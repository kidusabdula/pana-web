"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

export default function ServiceImageGallery({ images }: { images: { src: string; alt: string }[] }) {
  if (!images || images.length === 0) return null;

  return (
    <motion.div initial="initial" animate="animate" variants={fadeUp}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Real Projects, Real Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform group-hover:scale-110 duration-700" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-4">
              <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
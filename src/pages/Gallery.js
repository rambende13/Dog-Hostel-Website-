import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imgs = [
  "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602067340370-bdcebe8d1930?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop", // ✅ fixed (happy puppy)
  "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1200&auto=format&fit=crop", // ✅ fixed (dog playing outside)
];


export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="gallery"
      className="section-anchor py-24 bg-gradient-to-b from-emerald-50 via-white to-pink-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-emerald-500">Gallery</span>
        </h2>
        <p className="text-center text-gray-600 mt-3 text-lg">
          A glimpse of happy paws enjoying their stay 🐾
        </p>

        {/* Grid */}
        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {imgs.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group relative"
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Happy dog ${i + 1}`}
                className="w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                Click to View
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

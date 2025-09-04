import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-pink-50 via-white to-emerald-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-emerald-500">
              Bela’s Paw’s
            </span>
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed text-lg">
            Run by two brothers, Bela’s Paw’s started during the lockdown while
            fostering and caring for rescue dogs. With support from PFA, they
            helped{" "}
            <strong className="text-pink-600 font-semibold">25–30 dogs</strong>{" "}
            across Pune — providing medical care, proper food, and most
            importantly, <span className="italic">lots of love</span>.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            In 2024, they opened this{" "}
            <em className="text-emerald-700 font-semibold">
              Pet Home Stay & Café
            </em>{" "}
            where your furry friends can enjoy a safe, mountain-side retreat
            with daily updates, playtime, and home-style food.
          </p>

          {/* Highlighted Features */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-md">
              <p className="text-3xl">🐾</p>
              <p className="mt-2 text-gray-800 font-semibold">Rescue Care</p>
            </div>
            <div className="p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-md">
              <p className="text-3xl">🌿</p>
              <p className="mt-2 text-gray-800 font-semibold">Nature Space</p>
            </div>
            <div className="p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-md">
              <p className="text-3xl">🍲</p>
              <p className="mt-2 text-gray-800 font-semibold">Home Food</p>
            </div>
            <div className="p-4 bg-white/60 backdrop-blur-md rounded-xl shadow-md">
              <p className="text-3xl">📸</p>
              <p className="mt-2 text-gray-800 font-semibold">Daily Updates</p>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 md:order-2 relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70">
            <img
              className="w-full h-96 object-cover"
              src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Happy dog in play area"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

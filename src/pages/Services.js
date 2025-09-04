import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "⏰",
    title: "Daycare (12 hrs)",
    desc: "Drop in before work, pick up after. Play, rest & care all day.",
  },
  {
    icon: "🏠",
    title: "Boarding (24 hrs)",
    desc: "Overnight stays in a safe, homely environment with supervision.",
  },
  {
    icon: "📆",
    title: "Long Stay",
    desc: "Weekly or monthly stays with regular photo/video updates.",
  },
  {
    icon: "🚕",
    title: "Pick & Drop Service",
    desc: "Convenient transport option for your pet’s comfort and your ease.",
  },
];

const facilities = [
  {
    icon: "🍲",
    title: "Nutritious Food Included",
    desc: "Balanced Chicken & Rice meals included with every stay (customizable if needed).",
  },
  {
    icon: "🌿",
    title: "Open & Cage-Free Options",
    desc: "Choose between open play or cozy cages depending on temperament.",
  },
  {
    icon: "🛝",
    title: "Play & Safe Area",
    desc: "Green, fenced zones with mountain views and constant care.",
  },
  {
    icon: "🧼",
    title: "Clean & Hygienic",
    desc: "Daily sanitization, fresh water, and safe bedding for comfort.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-anchor py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Services */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 text-center">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Flexible options to suit your pet’s stay.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-md 
                         hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100
                         transition transform hover:-translate-y-2 hover:scale-[1.02] 
                         hover:shadow-xl p-6 text-center"
            >
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-3 font-semibold text-lg text-gray-800">
                {s.title}
              </h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-green-700 font-medium">
          📌 Pricing available on request.
        </p>

        {/* Facilities */}
        <section id="facilities" className="mt-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 text-center">
            Our Facilities
          </h2>
          <p className="text-center text-gray-600 mt-2">
            A safe, loving, and premium environment for every guest.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl shadow-md 
                           hover:bg-gradient-to-br hover:from-pink-50 hover:to-emerald-50
                           transition transform hover:-translate-y-2 hover:scale-[1.02] 
                           hover:shadow-xl p-6 text-center"
              >
                <div className="text-4xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold text-lg text-gray-800">
                  {f.title}
                </h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

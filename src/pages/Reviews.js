import React from "react";
import { motion } from "framer-motion";

const stars = "★★★★★";

const reviews = [
  {
    name: "Abhishek Fating",
    time: "2 months ago",
    text:
      "Excellent pet stay. Both Madhav and his brother are very good. It was our first time; they did trial sessions before the actual stay and kept sending updates and photos. Bella came back happy and confident.",
  },
  {
    name: "Tanmay Tikekar",
    time: "1 year ago",
    text:
      "Great homestay! We kept our kid Charlie for 7 days; they took care like their own — playtime, exercise, proper feeding. Regular photos and videos; Charlie enjoyed the stay.",
  },
  {
    name: "Naina Gill",
    time: "7 months ago",
    text:
      "Very good experience. We enrolled two rescued dogs. They cooked home food and even helped with socialization. Dogs were happy and comfortable.",
  },
  {
    name: "Yatharth Srivastava",
    time: "2 months ago",
    text:
      "Completely satisfied with the way Sagar and Madhav took care of Simba. He was comfortable with the place and the routine.",
  },
  {
    name: "Sharath S",
    time: "6 months ago",
    text:
      "We were hesitant at first, but Sagar ensured a secure environment and kept Robert busy. Regular updates; now we can trust Bela’s blindly when we have to go out.",
  },
  {
    name: "Saket Joshi",
    time: "8 months ago",
    text:
      "Owner is kind. Hygienic place. Vaccination proof required. Free trials available. Pocket-friendly charges and constant WhatsApp updates.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-anchor py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 text-center">
          What Pet Parents Say
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Pulled from Google reviews (summarized).
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white rounded-2xl shadow-md 
                         hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100
                         transition transform hover:-translate-y-2 hover:scale-[1.02] 
                         hover:shadow-xl p-6"
            >
              <div className="text-yellow-500" aria-label={`${stars} rating`}>
                {stars}
              </div>
              <p className="mt-3 text-gray-700">{r.text}</p>
              <div className="mt-4 text-sm text-gray-500">
                — {r.name} • {r.time}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8">
          <a
            href="https://share.google/6vfpCfztqYQ7mNbVL"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-green-600 text-white px-5 py-2 
                       hover:bg-green-700 transition"
          >
            See on Google Maps
          </a>
        </p>
      </div>
    </section>
  );
}

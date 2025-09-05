import React, { useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [modalType, setModalType] = useState(null);

  const contacts = [
    { name: "Sagar", phone: "919131546670" },
    { name: "Madhav", phone: "918180954507" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-200 via-white to-pink-100"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight drop-shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bela’s Paw’s 🐾
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-emerald-500">
          Pet Home Stay & Café
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-2xl text-gray-700 max-w-xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        A cozy second home where tails wag, paws play, and every furry friend feels loved.  
        ✨ Premium care with a touch of warmth.
      </motion.p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-5">
        <motion.button
          onClick={() => setModalType("call")}
          className="px-8 py-4 bg-white/40 backdrop-blur-md text-pink-700 border border-white/50 
          font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          📞 Call Now
        </motion.button>

        <motion.button
          onClick={() => setModalType("whatsapp")}
          className="px-8 py-4 bg-white/40 backdrop-blur-md text-emerald-700 border border-white/50 
          font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          💬 WhatsApp
        </motion.button>
      </div>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {modalType === "call" ? "Call Us" : "Chat on WhatsApp"}
            </h3>

            {contacts.map(({ name, phone }) => (
              <div key={phone} className="mb-4">
                <p className="font-semibold">{name}</p>
                {modalType === "call" ? (
                  <a
                    href={`tel:+${phone}`}
                    className="block mt-2 rounded bg-pink-600 text-white px-4 py-2 hover:bg-pink-700"
                  >
                    Call {name}
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-2 rounded bg-green-600 text-white px-4 py-2 hover:bg-green-700"
                  >
                    WhatsApp {name}
                  </a>
                )}
              </div>
            ))}

            <button
              onClick={() => setModalType(null)}
              className="mt-4 rounded-full bg-gray-300 text-gray-700 px-5 py-2 hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;

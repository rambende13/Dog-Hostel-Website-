import React, { useState } from "react";
import siteData from "../siteData";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 text-white shadow-lg">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_#34d399,_#065f46,_#0f766e)]"></div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 font-extrabold text-2xl tracking-wide hover:scale-105 transition-transform"
        >
          {/* Circle Logo */}
         <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
         < span className="text-2xl">🐕</span>
         </div>




          <span>{siteData.businessName}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative group font-medium text-lg"
            >
              {n.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-300 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 hover:bg-emerald-900/40 focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-emerald-700 bg-gradient-to-b from-emerald-700 via-emerald-800 to-teal-900"
          >
            <div className="px-4 py-3 flex flex-col gap-4">
              {navItems.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="py-2 rounded-lg hover:bg-emerald-800 text-lg font-medium text-center transition"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

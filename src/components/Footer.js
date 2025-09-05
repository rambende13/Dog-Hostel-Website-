import React from "react";
import siteData from "../siteData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-200 via-white to-pink-100 pointer-events-none"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-center space-y-6">
        {/* Tagline */}
        <p className="text-xl font-semibold text-green-900">
          Caring for your pets like family 🐾
        </p>

        {/* Address (highlighted) */}
        <p className="text-lg font-bold text-gray-900 bg-white/80 px-4 py-2 rounded-lg inline-block shadow">
          {siteData.addressText}
        </p>

        {/* Map */}
        <p>
          📍{" "}
          <a
            href={siteData.mapLink}
            target="_blank"
            rel="noreferrer"
            className="text-pink-600 font-medium underline underline-offset-4 hover:text-pink-700 transition"
          >
            View on Google Maps
          </a>
        </p>

        {/* Instagram */}
        <p>
          📷{" "}
          <a
            href={siteData.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-pink-600 font-medium hover:text-pink-700 transition"
          >
            Instagram
          </a>
        </p>

        {/* Business Hours */}
        <p className="text-gray-700 font-medium">
          ⏰ Open daily: <span className="text-emerald-700">7:00 AM – 9:00 PM</span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-600 pt-4">
          © {new Date().getFullYear()} {siteData.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

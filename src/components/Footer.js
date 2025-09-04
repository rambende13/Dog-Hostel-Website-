import React from "react";
import siteData from "../siteData";

export default function Footer() {
  const [p1, p2] = siteData.phones;

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-200 via-white to-pink-100"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 text-center space-y-6">
        {/* Address */}
        <p className="text-gray-900 font-bold text-base">
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

        {/* Phones */}
        <p className="space-x-4">
          📞{" "}
          <a
            href={`tel:${p1}`}
            className="text-emerald-700 font-semibold hover:text-emerald-900 transition"
          >
            {p1}
          </a>
          <span className="text-gray-500">|</span>
          <a
            href={`tel:${p2}`}
            className="text-emerald-700 font-semibold hover:text-emerald-900 transition"
          >
            {p2}
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

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center pt-4 text-sm font-semibold">
          {["Home", "About", "Services", "Gallery", "Reviews", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-pink-600 transition"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 pt-4">
          © {new Date().getFullYear()} {siteData.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

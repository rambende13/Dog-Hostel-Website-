import React from "react";
import siteData from "../siteData";

export default function Contact() {
  const sagar = "9131546670";
  const madhav = "8180954507";

  return (
    <section id="contact" className="section-anchor py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
          Contact Us
        </h2>
        <p className="mt-2 text-gray-700">{siteData.addressText}</p>

        {/* Contact buttons */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {/* Sagar */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-lg text-green-800 mb-4">📞 Sagar</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${sagar}`}
                className="rounded-full bg-pink-600 text-white px-6 py-3 shadow hover:scale-105 active:scale-95 transition"
              >
                Call {sagar}
              </a>
              <a
                href={`https://wa.me/${sagar}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-600 text-white px-6 py-3 shadow hover:scale-105 active:scale-95 transition"
              >
                WhatsApp {sagar}
              </a>
            </div>
          </div>

          {/* Madhav */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-bold text-lg text-green-800 mb-4">📞 Madhav</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${madhav}`}
                className="rounded-full bg-pink-600 text-white px-6 py-3 shadow hover:scale-105 active:scale-95 transition"
              >
                Call {madhav}
              </a>
              <a
                href={`https://wa.me/${madhav}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-600 text-white px-6 py-3 shadow hover:scale-105 active:scale-95 transition"
              >
                WhatsApp {madhav}
              </a>
            </div>
          </div>
        </div>

        {/* Other links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={siteData.mapLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-800 text-white px-6 py-3 shadow hover:scale-105 active:scale-95 transition"
          >
            📍 Open Google Maps
          </a>
          <a
            href={siteData.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-black text-white px-6 py-3 shadow hover:scale-105 active:scale-95 transition"
          >
            📷 Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

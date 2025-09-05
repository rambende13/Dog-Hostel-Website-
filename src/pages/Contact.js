import React from "react";
import siteData from "../siteData";

export default function Contact() {
  const [sagar, madhav] = siteData.phones;

  return (
    <section id="contact" className="section-anchor py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-800">
          Contact Us
        </h2>

        {/* Contact buttons */}
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {[{ name: "Sagar", phone: sagar }, { name: "Madhav", phone: madhav }].map(
            ({ name, phone }) => (
              <div key={phone} className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-bold text-lg text-green-800 mb-4">📞 {name}</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${phone}`}
                    className="rounded-full bg-pink-600 text-white px-6 py-3 shadow hover:scale-105 active:scale-95 transition"
                  >
                    Call {phone}
                  </a>
                  <a
                    href={`https://wa.me/${phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-green-600 text-white px-6 py-3 shadow hover:scale-105 active:scale-95 transition"
                  >
                    WhatsApp {phone}
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

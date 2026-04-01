import React from "react";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative px-5 md:px-16 py-20 bg-gradient-to-br from-white to-amber-50 overflow-hidden"
    >
      {/* Floating Icons */}
      <span className="absolute top-16 left-10 text-4xl animate-bounce">🐶</span>
      <span className="absolute bottom-16 right-12 text-4xl animate-pulse">🐱</span>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-amber-600 mb-12 animate-fadeIn">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
          {/* Contact Info */}
          <div className="md:w-1/2 w-full text-gray-800 text-left animate-slideLeft">
            <p className="flex items-center gap-3 mb-4 text-lg">
              📧 <span className="font-semibold">xyz@gmail.com</span>
            </p>
            <p className="flex items-center gap-3 mb-4 text-lg">
              📞 <span className="font-semibold">+91 9876544488</span>
            </p>
            <p className="flex items-center gap-3 mb-6 text-lg">
              📍 <span className="font-semibold">Jaipur, Rajasthan</span>
            </p>

            <div className="rounded-2xl overflow-hidden border shadow-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                className="w-full h-64"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 w-full bg-white rounded-2xl shadow-2xl p-8 animate-slideRight">
            <form
              action="http://localhost:5170/contact"
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-amber-400 transition"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 rounded-xl shadow-lg transition hover:scale-105"
              >
                Send Message 🐾
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-out both;
          }
          .animate-slideLeft {
            animation: slideLeft 1s ease-out both;
          }
          .animate-slideRight {
            animation: slideRight 1s ease-out both;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </section>
  );
}

import React from "react";

export default function Trust() {
  const trustItems = [
    {
      id: 1,
      icon: "✅",
      title: "Certified & Verified",
      desc: "All pets are vaccinated & pedigree-certified for complete peace of mind.",
    },
    {
      id: 2,
      icon: "⭐",
      title: "Happy Families",
      desc: "500+ families have found their perfect pet companion with us.",
    },
    {
      id: 3,
      icon: "🐾",
      title: "Premium Pet Care",
      desc: "Raised with expert veterinary care, nutrition & love.",
    },
  ];

  return (
    <section
      id="Trust"
      className="py-24 px-5 md:px-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-amber-700 mb-14 animate-fadeIn">
          Trusted by Pet Lovers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {trustItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur rounded-2xl p-10 shadow-lg border-b-4 border-amber-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slideUp"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-out both;
          }
          .animate-slideUp {
            animation: slideUp 0.9s ease-out both;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

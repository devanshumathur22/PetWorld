import React from "react";

export default function Trust() {
  return (
    <section id="Trust" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-amber-700">Trusted by Pet Lovers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <div className="text-amber-600 text-2xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-3">Certified & Verified</h3>
            <p>All pets are <span className="font-semibold">vaccinated & pedigree-certified</span>.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <div className="text-amber-600 text-2xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold mb-3">Happy Families</h3>
            <p>500+ satisfied customers have found their perfect pet companion with us.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-2xl">
            <div className="text-amber-600 text-2xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold mb-3">Premium Pet Care</h3>
            <p>Pets are raised with <span className="font-semibold">expert care & nutrition</span>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

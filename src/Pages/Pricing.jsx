import React from "react";
import pet from "../assets/images/pet.jpg";
import cats from "../assets/images/cat1.jpg";
import pet3 from "../assets/images/pet3.jpg";

export default function Pricing() {
  return (
    <section id="Pricing" className="relative w-full py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-amber-700">Adoption Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl shadow-lg p-6 bg-white">
            <img src={pet} alt="puppies" className="w-full h-48 object-cover rounded-t-xl" />
            <h3 className="text-2xl font-bold mt-4">Puppies</h3>
            <p className="text-xl font-semibold">Starting ₹8,000</p>
            <p className="mt-2">Includes vaccination & health check.</p>
          </div>
          <div className="rounded-xl shadow-lg p-6 bg-white">
            <img src={cats} alt="kittens" className="w-full h-48 object-cover rounded-t-xl" />
            <h3 className="text-2xl font-bold mt-4">Kittens</h3>
            <p className="text-xl font-semibold">Starting ₹6,000</p>
            <p className="mt-2">Certified pedigree & litter trained.</p>
          </div>
          <div className="rounded-xl shadow-lg p-6 bg-white">
            <img src={pet3} alt="premium" className="w-full h-48 object-cover rounded-t-xl" />
            <h3 className="text-2xl font-bold mt-4">Premium Breeds</h3>
            <p className="text-xl font-semibold">₹15,000+</p>
            <p className="mt-2">Rare breeds with full documentation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

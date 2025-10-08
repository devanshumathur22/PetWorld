import React from "react";
import lab from "../assets/images/lab.jpg";
import kitten from "../assets/images/kitten.jpg";
import puppy from "../assets/images/puppy.jpg";
import la from "../assets/images/la.jpg"

export default function Reviews() {
  const reviews = [
    { id:1, img: la, text: "Got my Labrador from PetWorld. He’s super healthy!", name: "Priya Sharma" },
    { id:2, img: kitten, text: "Adopted a Persian kitten, she's calm & beautiful.", name: "Amit Verma" },
    { id:3, img: puppy, text: "Highly recommend PetWorld! Genuine & caring breeders.", name: "Arjun Yogi" },
  ];

  return (
    <section id="Reviews" className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-amber-700">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {reviews.map(r => (
            <div key={r.id} className="p-5 rounded-xl  overflow-hidden hover:shadow-xl transition ">
              <img src={r.img} alt="" className="w-full h-80 rounded mb-3 object-cover" />
              <p className="text-gray-700 text-sm mb-3">"{r.text}"</p>
              <div className="flex justify-center text-amber-500 text-lg mb-1">⭐⭐⭐⭐⭐</div>
              <h3 className="font-semibold text-gray-800 text-sm">{r.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

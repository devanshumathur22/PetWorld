import React from "react";
import dog from "../assets/images/dog.jpg";
import ger from "../assets/images/ger.jpg";
import cats from "../assets/images/cat1.jpg";
import catss from "../assets/images/cat2.jpg";
import doggs from "../assets/images/dog6.jpg";
import cat from "../assets/images/cat.jpg";
import la from "../assets/images/la.jpg"

export default function DogCat() {
  const items = [
    { id:1, img: la, title:"Golden Retriever", text:"Friendly & family-loving companion." },
    { id:2, img: ger, title:"German Shepherd", text:"Loyal, protective, intelligent." },
    { id:3, img: cats, title:"Persian Cat", text:"Calm, affectionate." },
    { id:4, img: catss, title:"Siamese Cat", text:"Elegant & vocal." },
    { id:5, img: doggs, title:"Labrador", text:"Gentle & kid-friendly." },
    { id:6, img: cat, title:"Maine Coon", text:"Large, sociable." },
  ];

  return (
    <section className="py-20 mb-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-amber-700">Available Dog & Cat Breeds</h2>
        <p className="text-lg text-gray-600 mb-12">Explore our wide range of healthy, certified, and playful pets.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map(i => (
            <div key={i.id} className="rounded-xl  overflow-hidden hover:shadow-xl transition  border-b-4 border-amber-600 shadow">
              <img src={i.img} alt={i.title} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{i.title}</h3>
                <p className="text-gray-600">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

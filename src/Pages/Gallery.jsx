import React, { useState, useEffect } from "react";
import cats from "../assets/images/cat1.jpg";
import dog from "../assets/images/dog.jpg";
import annie from "../assets/images/annie.jpg";
import pet from "../assets/images/pet.jpg";
import pet3 from "../assets/images/pet3.jpg";
import dog6 from "../assets/images/dog6.jpg";
import cat2 from "../assets/images/cat2.jpg";

const images = [cats, dog, annie, pet, pet3, dog6, cat2];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % images.length), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="Gallery" className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg cursor-pointer  bg-gray-50">
      {images.map((img, i) => (
        <div key={i} className={`absolute w-full h-full transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <img src={img} alt={`slide-${i}`} className="w-full h-full object-contain" />
        </div>
      ))}

      <button onClick={() => setCurrent((current - 1 + images.length) % images.length)} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 cursor-pointer hover:bg-yellow-700 text-white p-3 rounded-full">❮</button>
      <button onClick={() => setCurrent((current + 1) % images.length)} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 cursor-pointer hover:bg-yellow-700 text-white p-3 rounded-full">❯</button>
    </div>
  );
}

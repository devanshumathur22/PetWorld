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
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      2500
    );
    return () => clearInterval(timer);
  }, [pause]);

  return (
    <section
      id="Gallery"
      className="relative w-full max-w-6xl mx-auto h-[260px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-2xl shadow-2xl bg-gray-100"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* Slides */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ${
            i === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <img
            src={img}
            alt={`slide-${i}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-amber-600 text-white p-3 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-amber-600 text-white p-3 rounded-full transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-amber-500 scale-110" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

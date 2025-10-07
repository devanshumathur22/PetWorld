import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-amber-400">PetWorld</h3>
          <p className="text-gray-300 mt-4">Trusted pet adoption center since 2005.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#Home" className="hover:text-amber-300">Home</a></li>
            <li><a href="#About" className="hover:text-amber-300">About</a></li>
            <li><a href="#Breeds" className="hover:text-amber-300">Breeds</a></li>
            <li><a href="#Gallery" className="hover:text-amber-300">Gallery</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400">Breeds</h3>
          <ul className="space-y-2 text-gray-300">
            <li>German Shepherd</li>
            <li>Labrador</li>
            <li>Golden Retriever</li>
            <li>Persian Cat</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-amber-300">Fb</a>
            <a href="#" className="hover:text-amber-300">IG</a>
            <a href="#" className="hover:text-amber-300">Tw</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

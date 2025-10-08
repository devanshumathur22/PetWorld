import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">       
        <div>
          <h3 className="text-2xl font-bold text-amber-400">PetWorld</h3>
          <p className="text-gray-300 mt-4">
          Your trusted partner in finding forever homes for loving pets. Bringing joy to families and paws since 2005
          </p>
        </div>        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-amber-400">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#Home" className="hover:text-amber-300">Home</a>
            </li>
            <li>
              <a href="#About" className="hover:text-amber-300">About</a>
            </li>
            <li>
              <a href="#Breeds" className="hover:text-amber-300">Breeds</a>
            </li>
            <li>
              <a href="#Gallery" className="hover:text-amber-300">Gallery</a>
            </li>
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
          <div className="flex gap-8 text-2xl">
            <a href="#" className="hover:text-amber-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-amber-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-amber-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

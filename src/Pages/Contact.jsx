import React from "react";

export default function Contact() {
  return (
    <section id="Contact" className=" px-8 py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-5xl font-bold font-serif text-amber-700 mb-10">Contact</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div className="space-y-6 mt-4">
            <div className="flex items-center gap-3"><i className="fa-solid fa-envelope text-xl"></i><p>xyz@gmail.com</p></div>
            <div className="flex items-center gap-3"><i className="fa-solid fa-phone text-xl"></i><p>+91 9876544488</p></div>
            <div className="flex items-center gap-3"><i className="fa-solid fa-location-dot text-xl"></i><p>Jaipur, Rajasthan</p></div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18..." className="w-full h-48 border-0"></iframe>
          </div>
          <form action="http://localhost:5170/contact" method="POST" className="p-6 rounded-lg shadow-md border border-gray-200 space-y-4">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded border" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded border" required />
            <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 rounded border" required></textarea>
            <button type="submit" className="w-full bg-gray-800 cursor-pointer text-white py-3 rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

// import { useState, useEffect } from "react";
// // import facebook from"./assets/images/facebook.jpg"
// // import insta from "./assets/images/insrta.jpg"
// import annie from "../src/assets/images/annie.jpg"
// import cat from "../src/assets/images/cat.jpg"
// import cats from "../src/assets/images/cat1.jpg"
// import catss from "../src/assets/images/cat2.jpg"
// import dog from "../src/assets/images/dog.jpg"
// import dogs from "../src/assets/images/dog1.jpg"
// // import dogss from "../src/assets/images/dog4.jpg"
// import dogg from "../src/assets/images/dog5.jpg"
// import doggs from "../src/assets/images/dog6.jpg"
// import ger from "../src/assets/images/ger.jpg"
// import pet from "../src/assets/images/pet.jpg"
// import petss from "./assets/images/pet3.jpg"
// import lab from "./assets/images/lab.jpg"
// import kitten from "./assets/images/kitten.jpg"
// import puppy from "./assets/images/puppy.jpg"
// export default function App() {
//   const [open, setOpen] = useState(false);
//   const navbar = [
//     { name: "Home", path: "#Home" },
//     { name: "About", path: "#About" },
//     { name: "Breeds", path: "#Breeds" },
//     { name: "Gallery", path: "#Gallery" },
//     { name: "Pricing", path: "#Pricing" },
//     { name: "Contact", path: "#Contact" },
//   ];
//   const pets = [
//     {
//       id: 1,
//       title: "Golden Retriever Puppy",
//       img: lab,
//       desc: "Healthy, vaccinated Golden Retriever puppy. Friendly & playful, ideal for families.",
//     },
//     {
//       id: 2,
//       title: "Persian Cat",
//       img:dogs,
//       desc: "Beautiful Persian kitten with pedigree certification. Calm and affectionate.",
//     },
//     {
//       id: 3,
//       title: "German Shepherd",
//       img: ger,
//       desc: "Strong, loyal, and protective. Perfect for security and companionship.",
//     },
//   ];
//    const images = [cats, dog, annie , pet, petss , doggs, catss, cat];
//   const [current, setCurrent] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(timer);
//   }, []);
//   return (
//     <>
//       <nav id="navbar" className="fixed top-0 left-0 w-full z-50 bg-gray-50 shadow">
//         <div className="flex justify-between items-center px-6 py-4 md:px-12">
//           <h1 className="font-serif font-extrabold text-2xl text-amber-700">PetWorld</h1>
//           <ul className="hidden md:flex items-center gap-10 font-mono">
//             {navbar.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.path}
//                   className="text-xl font-serif font-bold cursor-pointer hover:text-amber-700"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
//             <div className="w-6 h-0.5 bg-black mb-1"></div>
//             <div className="w-6 h-0.5 bg-black mb-1"></div>
//             <div className="w-6 h-0.5 bg-black"></div>
//           </div>
//         </div>
//         {open && (
//           <ul className="flex flex-col items-center gap-6 md:hidden py-4">
//             {navbar.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.path}
//                   className="text-xl cursor-pointer hover:text-amber-700"
//                   onClick={() => setOpen(false)}
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>

//       {/* hero */}
//       <section id="Home" className="h-screen flex items-center justify-center bg-cover object-cover bg-gray-50 "
//       style={{backgroundImage:`url(${dogg})`}}>

//         <div className="flex flex-col justify-center mb-24 px-4 gap-6 text-center">
//           <h2 className="font-extrabold text-2xl md:text-5xl text-amber-800 font-mono">
//             Find Your Perfect Pet Companion
//           </h2>
//           <p className="py-2 font-bold font-sans text-xl  md:text-2xl max-w-xl mx-auto">
//             Explore healthy, certified dogs & cats <br /> waiting for a loving home.
//           </p>
//           <div className="flex items-center justify-center gap-3">
//             <button className="font-bold text-lg md:text-2xl rounded cursor-pointer px-6 py-2 mt-6 bg-gray-400">
//               View Breeds
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* about */}
//       <section id="About" className="h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center p-6">
//           <h1 className="font-extrabold font-mono text-4xl mb-10">About Us</h1>
//           <p className="font-semibold  text-2xl mt-4 ">
//             We are a trusted pet breeding center since 2005,
//             providing certified and vaccinated dogs & cats <br />
//             with love and expert care.
//           </p>
//           <p className="font-semibold  text-2xl mt-8 ">
//             Join hundreds of families who found their best friend with us.
//           </p>
//         </div>
//       </section>

//       {/* breeds */}
//       <section id="Breeds" className="flex flex-col items-center px-8 py-14 gap-14 shadow bg-gray-50">
//         <div className="w-full text-center">
//           <h2 className="font-serif font-extrabold text-4xl mb-10 text-amber-700">Featured Breeds</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
//             {pets.map((pet) => (
//               <div
//                 key={pet.id}
//                 className="flex flex-col items-center p-6 rounded-2xl border-b-4 border-amber-600 shadow transition"              >
//                 <img src={pet.img} alt={pet.title} className="h-40 w-full object-cover rounded-lg mb-6" />
//                 <h3 className="font-bold font-mono text-xl text-gray-800 mb-4">{pet.title}</h3>
//                 <p className="font-serif text-center mt-2">{pet.desc}</p>
//                 <button className="bg-amber-300 px-6 py-2 mt-6 rounded-lg cursor-pointer hover:bg-amber-400">
//                   More Details
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* dog&cat */}
//    <section className="py-20 bg-gray-50">
//   <div className="max-w-6xl mx-auto px-6 text-center">
//     <h2 className="text-4xl font-bold mb-6 text-amber-700">Available Dog & Cat Breeds</h2>
//     <p className="text-lg text-gray-600 mb-12">
//       Explore our wide range of healthy, certified, and playful pets waiting for their forever home.
//     </p>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//       <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
//         <img src={dog} alt="Golden Retriever" className="w-full h-56 object-cover" />
//         <div className="p-4">
//           <h3 className="text-xl font-bold text-gray-800">Golden Retriever</h3>
//           <p className="text-gray-600">Friendly & family-loving companion.</p>
//         </div>
//       </div>
//       <div className=" rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
//         <img src={ger} alt="German Shepherd" className="w-full h-56 object-cover" />
//         <div className="p-4">
//           <h3 className="text-xl font-bold text-gray-800">German Shepherd</h3>
//           <p className="text-gray-600">Loyal, protective, and intelligent.</p>
//         </div>
//       </div>
//       <div className=" rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
//         <img src={cats} alt="Persian Cat" className="w-full h-56 object-cover" />
//         <div className="p-4">
//           <h3 className="text-xl font-bold text-gray-800">Persian Cat</h3>
//           <p className="text-gray-600">Calm, affectionate, and beautiful.</p>
//         </div>
//       </div>
//       <div className=" rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
//         <img src={catss} alt="Siamese Cat" className="w-full h-56 object-cover" />
//         <div className="p-4">
//           <h3 className="text-xl font-bold text-gray-800">Siamese Cat</h3>
//           <p className="text-gray-600">Elegant, vocal, and playful.</p>
//         </div>
//       </div>
//       <div className=" rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
//         <img src={doggs} alt="Labrador" className="w-full h-56 object-cover" />
//         <div className="p-4">
//           <h3 className="text-xl font-bold text-gray-800">Labrador</h3>
//           <p className="text-gray-600">Gentle, active, and kid-friendly.</p>
//         </div>
//       </div>
//       <div className=" rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
//         <img src={cat} alt="Maine Coon" className="w-full h-56 object-cover" />
//         <div className="p-4">
//           <h3 className="text-xl font-bold text-gray-800">Maine Coon</h3>
//           <p className="text-gray-600">Large, gentle, and sociable cat breed.</p>
//         </div>
//       </div>
//     </div>
//   </div>
//       </section>

//       {/* pricing */}
//       <section id="Pricing" className="relative w-full py-14 bg-gray-50">
//         <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-4xl font-extrabold font-serif mb-12 text-amber-700">Adoption Info</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="rounded-xl shadow-lg p-6 bg-white">
//               <img src={pet} alt="" className="w-full h-48 object-cover rounded-t-xl" />
//               <h3 className="text-2xl font-bold font-mono mt-4">Puppies</h3>
//               <p className="text-xl font-semibold">Starting ₹8,000</p>
//               <p className="mt-2">Includes vaccination & health check.</p>
//             </div>
//             <div className="rounded-xl shadow-lg p-6 bg-white">
//               <img src={cats} alt="" className="w-full h-48 object-cover rounded-t-xl" />
//               <h3 className="text-2xl font-bold font-mono mt-4">Kittens</h3>
//               <p className="text-xl font-semibold">Starting ₹6,000</p>
//               <p className="mt-2">Certified pedigree & litter trained.</p>
//             </div>
//             <div className="rounded-xl shadow-lg p-6 bg-white">
//               <img src={petss} alt="" className="w-full h-48 object-cover rounded-t-xl" />
//               <h3 className="text-2xl font-bold font-mono mt-4">Premium Breeds</h3>
//               <p className="text-xl font-semibold">₹15,000+</p>
//               <p className="mt-2">Rare breeds with full documentation.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* image */}
//        <div id="Gallery" className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg bg-gray-50">
//       {images.map((img, index) => (
//         <div
//           key={index}
//           className={`absolute w-full h-full transition-opacity duration-1000 ${
//             index === current ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={img}
//             alt="slide"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       ))}

//       {/* Buttons */}
//       <button
//         onClick={() => setCurrent((current - 1 + images.length) % images.length)}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full">
//         ❮
//       </button>
//       <button
//         onClick={() => setCurrent((current + 1) % images.length)}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full">
//         ❯
//       </button>
//     </div>

//     {/* Trust Factors */}
// <section id="Trust" className="py-20 bg-gray-50">
//   <div className="max-w-6xl mx-auto px-6 text-center">
//     <h2 className="text-4xl font-bold mb-12 text-amber-700">Trusted by Pet Lovers</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//       <div className="bg-white shadow-lg p-6 rounded-2xl">
//         <div className="text-amber-600 text-2xl mb-4">✅</div>
//         <h3 className="text-2xl font-bold font-mono mb-3">Certified & Verified</h3>
//         <p className="text-lg text-gray-600">
//           All pets are <span className="font-semibold">vaccinated & pedigree-certified</span>
//           to ensure safety and authenticity.
//         </p>
//       </div>
//       <div className="bg-white shadow-lg p-6 rounded-2xl">
//         <div className="text-amber-600 text-2xl mb-4">⭐</div>
//         <h3 className="text-2xl font-bold font-mono mb-3">Happy Families</h3>
//         <p className="text-lg text-gray-600">
//           500+ satisfied customers have found their
//           <span className="font-semibold"> perfect pet companion</span> with us.
//         </p>
//       </div>
//       <div className="bg-white shadow-lg p-6 rounded-2xl">
//         <div className="text-amber-600 text-2xl mb-4">🐾</div>
//         <h3 className="text-2xl font-bold font-mono mb-3">Premium Pet Care</h3>
//         <p className="text-lg text-gray-600">
//           Our pets are raised with <span className="font-semibold">love, expert care,
//           and proper nutrition</span> for a healthy life.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

//   {/* Reviews */}
// <section id="Reviews" className="py-14 bg-gray-50">
//   <div className="max-w-5xl mx-auto px-6 text-center">
//     <h2 className="text-3xl font-bold mb-8 text-amber-700">Customer Reviews</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div className=" p-5 rounded-xl shadow hover:shadow-lg transition">
//         <img src={lab}alt=""className="w-80 h-32 rounded mb-3 object-cover"></img>
//         <p className="text-gray-700 text-sm mb-3">
//           "Got my Labrador from PetWorld. He’s super healthy and adorable! Thanks for the best service."
//         </p>
//         <div className="flex justify-center text-amber-500 text-lg mb-1">⭐⭐⭐⭐⭐</div>
//         <h3 className="font-semibold text-gray-800 text-sm">Priya Sharma</h3>
//       </div>
//       <div className=" p-5 rounded-xl shadow hover:shadow-lg transition">
//         <img src={kitten}alt=""className="w-80 h-32 rounded mb-3 object-cover"></img>
//         <p className="text-gray-700 text-sm mb-3">
//           "Adopted a Persian kitten, and she's so calm & beautiful. Totally satisfied with the care."
//         </p>
//         <div className="flex justify-center text-amber-500 text-lg mb-1">⭐⭐⭐⭐⭐</div>
//         <h3 className="font-semibold text-gray-800 text-sm">Amit Verma</h3>
//       </div>
//       <div className=" p-5 rounded-xl shadow hover:shadow-lg transition">
//         <img src={puppy}alt=""className="w-80 h-32 rounded mb-3 object-cover"></img>
//         <p className="text-gray-700 text-sm mb-3">
//           "Highly recommend PetWorld! Genuine, trusted, and caring breeders. My puppy is my best friend now."
//         </p>
//         <div className="flex justify-center text-amber-500 text-lg mb-1">⭐⭐⭐⭐⭐</div>
//         <h3 className="font-semibold text-gray-800 text-sm">Arjun Yogi</h3>
//       </div>
//     </div>
//   </div>
// </section>

//  {/* Contact */}
//  <section id="Contact" className="text-black px-8 py-16 bg-gray-50">
//   <div className="max-w-5xl mx-auto text-center">
//     <h2 className="text-3xl font-bold text-amber-700 mb-10">Contact</h2>
//     <div className="grid md:grid-cols-2 gap-10 text-left">

//       <div className="space-y-6 mt-4">
//         <div className="flex items-center gap-3">
//           <i className="fa-solid fa-envelope text-xl"></i>
//           <p>xyz@gmail.com</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <i className="fa-solid fa-phone text-xl"></i>
//           <p>+91 9876544488</p>
//         </div>
//         <div className="flex items-center gap-3">
//           <i className="fa-solid fa-location-dot text-xl"></i>
//           <p>Jaipur, Rajasthan</p>
//         </div>
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05321219523!2d75.62574544891959!3d26.885115143985647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1759735726788!5m2!1sen!2sin">
//       </iframe>
//       </div>
//       <form
//         action="http://localhost:5170/contact"
//         method="POST"
//         className="p-6 rounded-lg shadow-md border border-gray-200 space-y-4 " >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="w-full p-3 rounded border border-gray-300 focus:ring-2 outline-none"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="w-full p-3 rounded border border-gray-300 focus:ring-2 outline-none"
//           required
//         />
//         <textarea
//           name="message"
//           rows="4"
//           placeholder="Your Message"
//           className="w-full p-3 rounded border border-gray-300 focus:ring-2 outline-none"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-black text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-gray-800 transition">
//           Send Message
//         </button>
//       </form>
//     </div>
//   </div>
// </section>

//       {/* Footer */}
// <footer className="bg-gray-600 text-gray-200 py-8 flex justify-between items-center">
//   <div className="max-w-6xl mx-auto px-0 grid grid-cols-1 md:grid-cols-4 gap-8">
//     <div className="">
//       <h3 className="text-xl font-bold text-amber-400">PetWorld</h3>
//       <p className="text-gray-300 mt-4">
//         Trusted pet adoption center since 2005. Bringing healthy, certified, and loving pets to your family.
//       </p>
//     </div>
//     <div className="space-y-4">
//       <h3 className="text-xl font-bold text-amber-400">Quick Links</h3>
//       <ul className="space-y-2">
//         <li><a href="#Home" className="hover:text-amber-300">Home</a></li>
//         <li><a href="#About" className="hover:text-amber-300">About</a></li>
//         <li><a href="#Breeds" className="hover:text-amber-300">Breeds</a></li>
//         <li><a href="#Gallery" className="hover:text-amber-300">Gallery</a></li>
//         <li><a href="#Pricing" className="hover:text-amber-300">Adoption Info</a></li>
//         <li><a href="#Contact" className="hover:text-amber-300">Contact</a></li>
//       </ul>
//     </div>
//     <div className="space-y-4">
//       <h3 className="text-xl font-bold text-amber-400">Breeds</h3>
//       <ul className="space-y-2 text-gray-300">
//         <li>German Shepherd</li>
//         <li>Labrador</li>
//         <li>Golden Retriever</li>
//         <li>Persian Cat</li>
//         <li>Maine Coon</li>
//         <li>Siamese Cat</li>
//       </ul>
//     </div>
//     <div className="space-y-4">
//       <h3 className="text-xl font-bold text-amber-400">Follow Us</h3>
//       <div className="flex gap-4 text-2xl">
//         <a href="#" className="hover:text-amber-300"></a>
//         <a href="#" className="hover:text-amber-300"></a>
//         <a href="#" className="hover:text-amber-300"></a>
//         <a href="#" className="hover:text-amber-300"></a>
//       </div>
//     </div>
//   </div>
// </footer>

//     </>
//   );
// }
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breeds from "./Pages/Breeds";
import Contact from "./Pages/Contact";
import Trust from "./Pages/Trust";
import DogCat from "./Pages/DogCat";
import Gallery from "./Pages/Gallery";
import Pricing from "./Pages/Pricing";
import Reviews from "./Pages/Reviews";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
       
      <Breeds/>
      <About/>     
      <Trust/>
      <DogCat/>
    <Gallery/>
    <Reviews/>
    <Pricing/>    
     <Contact/>      
    <Footer/>
    </div>
  );
}

export default App;

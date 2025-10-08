import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navbar = [
    { name: "Home", path: "#Home" },
    { name: "About", path: "#About" },
    { name: "Breeds", path: "#Breeds" },
    { name: "Gallery", path: "#Gallery" },
    { name: "Pricing", path: "#Pricing" },
    { name: "Contact", path: "#Contact" },
  ];

  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full z-50 bg-gray-50 shadow">
      <div className="flex justify-between items-center px-6 py-4 md:px-12">
        <h1 className="font-serif font-extrabold text-2xl text-amber-700">PetWorld</h1>
        <ul className="hidden md:flex items-center gap-10 font-mono">
          {navbar.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="text-xl font-serif font-bold hover:text-amber-700"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>
      {open && (
        <ul className="flex flex-col items-center gap-6 md:hidden py-4">
          {navbar.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="text-xl hover:text-amber-700"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

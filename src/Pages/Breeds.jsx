import ger from "../assets/images/ger.jpg";
import la from "../assets/images/la.jpg";
import Persian from "../assets/images/Persian.jpg";

export default function Breeds() {
  const pets = [
    {
      id: 1,
      title: "Golden Retriever Puppy",
      img: la,
      type: "Dog 🐶",
      desc: "Healthy & vaccinated. Friendly, playful, and perfect for families.",
    },
    {
      id: 2,
      title: "Persian Cat",
      img: Persian,
      type: "Cat 🐱",
      desc: "Pedigree Persian kitten. Calm, affectionate & very loving.",
    },
    {
      id: 3,
      title: "German Shepherd",
      img: ger,
      type: "Dog 🐕",
      desc: "Strong, loyal & protective. Ideal for security and companionship.",
    },
  ];

  return (
    <section
      id="Breeds"
      className="px-5 md:px-16 py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-amber-700 mb-12 animate-fadeIn">
        Featured Breeds
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border-b-4 border-amber-600 hover:shadow-2xl transition-all duration-300 group animate-slideUp"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={pet.img}
                alt={pet.title}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <span className="inline-block mb-2 px-3 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-700">
                {pet.type}
              </span>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {pet.title}
              </h3>

              <p className="text-gray-600 text-sm mb-5">
                {pet.desc}
              </p>

              <button className="px-6 py-2 bg-amber-400 hover:bg-amber-500 rounded-full font-semibold transition hover:scale-105">
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-out both;
          }
          .animate-slideUp {
            animation: slideUp 0.9s ease-out both;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

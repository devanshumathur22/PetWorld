import cats from "../assets/images/cat1.jpg";
import pet3 from "../assets/images/pet3.jpg";
import pu from "../assets/images/pu.jpg";

export default function Pricing() {
  const plans = [
    {
      id: 1,
      title: "Puppies",
      price: "Starting ₹8,000",
      desc: "Vaccinated, dewormed & health-checked.",
      img: pu,
      badge: "Popular 🐶",
    },
    {
      id: 2,
      title: "Kittens",
      price: "Starting ₹6,000",
      desc: "Pedigree certified & litter trained.",
      img: cats,
      badge: "Best Value 🐱",
    },
    {
      id: 3,
      title: "Premium Breeds",
      price: "₹15,000+",
      desc: "Rare breeds with full documentation.",
      img: pet3,
      badge: "Premium ⭐",
      featured: true,
    },
  ];

  return (
    <section
      id="Pricing"
      className="py-24 px-5 md:px-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-amber-700 mb-14 font-serif animate-fadeIn">
        Adoption Info
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border-b-4 border-amber-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              plan.featured ? "ring-2 ring-amber-400 scale-[1.03]" : ""
            }`}
          >
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {plan.badge}
            </span>

            {/* Image */}
            <img
              src={plan.img}
              alt={plan.title}
              className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                {plan.title}
              </h3>

              <p className="text-lg font-semibold text-amber-700">
                {plan.price}
              </p>

              <p className="mt-3 text-gray-600 text-sm">
                {plan.desc}
              </p>

              <button className="mt-6 bg-amber-400 hover:bg-amber-500 text-black font-bold px-6 py-2 rounded-full transition hover:scale-105">
                Adopt Now 🐾
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
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}

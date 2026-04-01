import human from "../assets/images/human.jpg";
import cat from "../assets/images/human2.jpg";
import ger from "../assets/images/human1.jpg";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      img: human,
      text: "Got my Labrador from PetWorld. He’s super healthy!",
      name: "Priya Sharma",
    },
    {
      id: 2,
      img: cat,
      text: "Adopted a Persian kitten, she's calm & beautiful.",
      name: "Amit Verma",
    },
    {
      id: 3,
      img: ger,
      text: "Highly recommend PetWorld! Genuine & caring breeders.",
      name: "Arjun Yogi",
    },
  ];

  return (
    <section
      id="Reviews"
      className="py-24 px-5 md:px-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-amber-700 mb-14 font-serif animate-fadeIn">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-amber-600 animate-slideUp"
          >
            {/* Avatar */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <img
                src={r.img}
                alt={r.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            {/* Content */}
            <div className="pt-14 px-6 pb-6 text-center">
              <p className="text-gray-700 italic mb-4 text-sm md:text-base leading-relaxed">
                “{r.text}”
              </p>

              <div className="flex justify-center text-amber-500 text-lg mb-2">
                ★★★★★
              </div>

              <h3 className="font-semibold text-gray-800">
                {r.name}
              </h3>
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

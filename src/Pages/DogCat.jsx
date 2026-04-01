import ger from "../assets/images/ger.jpg";
import cats from "../assets/images/cat1.jpg";
import catss from "../assets/images/cat2.jpg";
import doggs from "../assets/images/dog6.jpg";
import cat from "../assets/images/cat.jpg";
import la from "../assets/images/la.jpg";

export default function DogCat() {
  const items = [
    { id: 1, img: la, title: "Golden Retriever", text: "Friendly & family-loving companion.", type: "Dog 🐶" },
    { id: 2, img: ger, title: "German Shepherd", text: "Loyal, protective & intelligent.", type: "Dog 🐕" },
    { id: 3, img: cats, title: "Persian Cat", text: "Calm, affectionate & gentle.", type: "Cat 🐱" },
    { id: 4, img: catss, title: "Siamese Cat", text: "Elegant, vocal & social.", type: "Cat 🐾" },
    { id: 5, img: doggs, title: "Labrador", text: "Gentle, playful & kid-friendly.", type: "Dog 🐾" },
    { id: 6, img: cat, title: "Maine Coon", text: "Large, fluffy & sociable.", type: "Cat 🐱" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-amber-700 mb-4 animate-fadeIn">
          Available Dog & Cat Breeds
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-14 animate-fadeIn">
          Explore our healthy, certified, and playful companions 🐾
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((i) => (
            <div
              key={i.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-b-4 border-amber-600 group hover:shadow-2xl transition-all duration-300 animate-slideUp"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <span className="inline-block mb-2 px-3 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-700">
                  {i.type}
                </span>

                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {i.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {i.text}
                </p>
              </div>
            </div>
          ))}
        </div>
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

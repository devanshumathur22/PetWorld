import lab from "../assets/images/lab.jpg";
import dogs from "../assets/images/dog1.jpg";
import ger from "../assets/images/ger.jpg";
import la from "../assets/images/la.jpg"
export default function Breeds() {
  const pets = [
    {
      id: 1,
      title: "Golden Retriever Puppy",
      img: la,
      desc: "Healthy, vaccinated Golden Retriever puppy. Friendly & playful, ideal for families.",
    },
    {
      id: 2,
      title: "Persian Cat",
      img: dogs,
      desc: "Beautiful Persian kitten with pedigree certification. Calm and affectionate.",
    },
    {
      id: 3,
      title: "German Shepherd",
      img: ger,
      desc: "Strong, loyal, and protective. Perfect for security and companionship.",
    },
  ];

  return (
    <section id="Breeds" className="flex flex-col items-center px-8 py-10 bg-gray-50">
      <h2 className="font-serif font-extrabold text-4xl mb-6 text-amber-700">Featured Breeds</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="max-w-4xl flex flex-col items-center p-4 rounded-2xl  overflow-hidden hover:shadow-xl transition  border-b-4 border-amber-600 shadow">
            <img src={pet.img} alt={pet.title} className="h-64 w-full object-cover rounded-lg mb-6" />
            <h3 className="font-bold font-mono text-xl text-gray-800 mb-4">{pet.title}</h3>
            <p className="font-serif text-center mt-2">{pet.desc}</p>
            <button className="bg-amber-300 px-6 py-2 mt-6 rounded-lg hover:bg-amber-400">
              More Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

import dogg from "../assets/images/dog5.jpg";
import hero from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="Home"
      className="h-screen flex items-center bg-cover bg-gray-50 border-b-4 border-amber-600 shadow"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex flex-col justify-center items-start mb-24 px-6 gap-2 text-white text-left">
        <h2 className="font-extrabold text-xl md:text-4xl font-mono">
          Find Your Perfect Pet Companion
        </h2>
        <p className="py-2 font-bold text-xl md:text-2xl max-w-xl text-white">
          Explore healthy, certified dogs & cats <br /> waiting for a loving home.
        </p>
        <div className="flex">
          <button className="text-black font-bold text-lg md:text-2xl rounded px-6 py-2 mt-6 bg-gray-400 hover:bg-amber-700 cursor-pointer">
            View Breeds
          </button>
        </div>
      </div>
    </section>
  );
}

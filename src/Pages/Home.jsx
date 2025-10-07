import dogg from "../assets/images/dog5.jpg";

export default function Hero() {
  return (
    <section
      id="Home"
      className="h-screen flex items-center justify-center bg-cover bg-gray-50"
      style={{ backgroundImage: `url(${dogg})` }}
    >
      <div className="flex flex-col justify-center mb-24 px-4 gap-6 text-center">
        <h2 className="font-extrabold text-2xl md:text-5xl text-amber-800 font-mono">
          Find Your Perfect Pet Companion
        </h2>
        <p className="py-2 font-bold font-sans text-xl md:text-2xl max-w-xl mx-auto">
          Explore healthy, certified dogs & cats <br /> waiting for a loving home.
        </p>
        <div className="flex justify-center">
          <button className="font-bold text-lg md:text-2xl rounded px-6 py-2 mt-6 bg-gray-400">
            View Breeds
          </button>
        </div>
      </div>
    </section>
  );
}

import dogg from "../assets/images/dog5.jpg";
import hero from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative h-screen flex items-center border-b-4 border-amber-600 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${hero})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Floating Pets */}
      <img
        src={dogg}
        alt="Dog"
        className="hidden md:block absolute bottom-10 right-10 w-56 rounded-xl shadow-xl animate-float"
      />

      <span className="absolute top-24 left-10 text-5xl animate-bounce">🐶</span>
      <span className="absolute bottom-24 left-20 text-5xl animate-pulse">🐱</span>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 text-white max-w-2xl animate-slideUp">
        <h2 className="font-extrabold text-2xl md:text-5xl leading-tight">
          Find Your <span className="text-amber-400">Perfect</span> Pet Companion
        </h2>

        <p className="mt-4 text-lg md:text-2xl font-medium">
          Explore healthy, certified dogs & cats  
          waiting for a loving home.
        </p>

        <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg md:text-xl px-8 py-3 rounded-full transition hover:scale-105 shadow-lg">
          View Breeds 🐾
        </button>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-slideUp {
            animation: slideUp 1s ease-out both;
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
    </section>
  );
}

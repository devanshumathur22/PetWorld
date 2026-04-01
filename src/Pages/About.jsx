import heros from "../assets/images/heros.jpg";

export default function About() {
  return (
    <section
      id="About"
      className="relative w-full min-h-screen flex items-center justify-center px-5 md:px-10 py-20 border-b-4 border-amber-600 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${heros})`,
          filter: "blur(10px)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Floating Paw Icons */}
      <span className="absolute top-20 left-10 text-4xl animate-bounce">🐶</span>
      <span className="absolute bottom-20 right-12 text-4xl animate-pulse">🐱</span>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center animate-fadeIn">
        <h1 className="text-3xl md:text-5xl font-extrabold text-amber-400 mb-6 tracking-wide">
          About Us
        </h1>

        <p className="text-base md:text-xl text-white leading-relaxed font-medium">
          We are a trusted pet breeding center, proudly connecting loving families
          with happy and healthy pets since <span className="text-amber-400 font-bold">2005</span>.
          Every pet receives proper nutrition, certified vaccinations, and expert
          medical care. Our ethical breeding practices ensure safety, love, and
          lifelong companionship.
        </p>

        <p className="mt-6 md:mt-8 text-lg md:text-2xl font-semibold text-amber-300">
          🐾 Helping families find their forever friend 🐾
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-amber-400">500+</h2>
            <p className="text-white text-sm">Happy Families</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 hover:scale-105 transition">
            <h2 className="text-2xl font-bold text-amber-400">100%</h2>
            <p className="text-white text-sm">Healthy Pets</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 hover:scale-105 transition hidden md:block">
            <h2 className="text-2xl font-bold text-amber-400">20+</h2>
            <p className="text-white text-sm">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1.2s ease-out both;
          }
          @keyframes fadeIn {
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

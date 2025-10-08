import heros from "../assets/images/heros.jpg"

export default function About() {
  return (
    <section
      id="About"
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-6 py-16 md:py-24 border-b-4 border-amber-600 shadow"
      style={{ backgroundImage: `url(${heros})` }}>      
      <div className="absolute inset-0 bg-opacity-50"></div>     
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="font-extrabold text-3xl md:text-4xl text-amber-800 mb-6 md:mb-12">
          About Us
        </h1>
        <p className="font-bold text-lg md:text-xl text-white leading-relaxed">
          We are a trusted pet breeding center, dedicated to connecting loving families with happy and healthy pets since 2005. Every pet in our care receives proper nutrition, certified vaccinations, and expert medical attention to ensure long-term health. Our passionate team works with love and responsibility, following safe and ethical breeding practices. We focus on creating the perfect match between pets and owners, helping each family find a loyal companion for life. Over the years, we’ve earned the trust of hundreds of pet lovers across the country. Together, we continue spreading joy, love, and care through every paw we nurture.
        </p>
        <p className="font-bold text-lg md:text-2xl mt-6 md:mt-8 text-white">
          Join hundreds of families who found their best friend with us.
        </p>
      </div>
    </section>
  )
}

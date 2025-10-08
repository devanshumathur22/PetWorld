import heros from "../assets/images/heros.jpg"

export default function About() {
  return (
    <section id="About"className="relative w-full h-screen flex items-center justify-center bg-cover bg-center px-10 py-24 border-b-4 border-amber-600 shadow "
      style={{ backgroundImage: `url(${heros})` }}>      
      <div className="absolute inset-0  bg-opacity-50"></div>     
      <div className="relative z-10 text-center px-6 ">
        <h1 className="font-extrabold  text-4xl  text-amber-800 mb-96">About Us</h1>
        <p className="font-bold text-xl md:text-xl text-white ">
         We are a trusted pet breeding center, dedicated to connecting loving families with happy and healthy pets since 2005. Every pet in our care receives proper nutrition, certified vaccinations, and expert medical attention to ensure long-term health. Our passionate team works with love and responsibility, following safe and ethical breeding practices. We focus on creating the perfect match between pets and owners, helping each family find a loyal companion for life. Over the years, we’ve earned the trust of hundreds of pet lovers across the country. Together, we continue spreading joy, love, and care through every paw we nurture.
        </p>
        <p className="font-bold text-xl md:text-2xl mt-8 max-w-2xl mx-auto text-white">
          Join hundreds of families who found their best friend with us.
        </p>
      </div>
    </section>
  );
}

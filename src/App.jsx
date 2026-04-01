import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Breeds from "./Pages/Breeds";
import Contact from "./Pages/Contact";
import Trust from "./Pages/Trust";
import DogCat from "./Pages/DogCat";
// import Gallery from "./Pages/Gallery";
import Pricing from "./Pages/Pricing";
import Reviews from "./Pages/Reviews";
import Cta from "./components/cta";
import Gallerytwo from "./components/Gallerytwo";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>       
      <Breeds/>
      <About/>     
      <Trust/>
      <DogCat/>
    {/* <Gallery/> */}
    <Gallerytwo/>
    <Reviews/>
    <Pricing/>    
     <Contact/> 
     <Cta/>     
    <Footer/>
    </div>
  );
}
export default App;

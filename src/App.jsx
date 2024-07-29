import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Horarios from "./Components/Horarios";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Reseñas from "./Components/Svg/Reseñas";
import "./index.css";

function App() {
  return (
    <div className="transition-colors duration-300">
      <Navbar />
      <main>
        <section className="dark:text-gray-400 dark:bg-gray-900 text-gray-900 bg-gray-200 body-font">
          <Hero />
          <About />
          <Reseñas />
          <Services />
          <Horarios />
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const servicios = [
    {
      nombre: "Corte Caballero",
      precio: "€10,00",
      duracion: "30 minutos",
    },
    {
      nombre: "Corte más Barba",
      precio: "€13,00",
      duracion: "40 minutos",
    },
    {
      nombre: "Barba",
      precio: "€5,00",
      duracion: "15 minutos",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl dark:bg-gray-950/10 p-6 md:p-10 lg:p-16 text-center bg-gray-200 dark:bg-gray-900 transition-all duration-300"
      initial={{ scale: 0.8 }}
      animate={inView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Nuestros servicios
        </span>
      </h1>
      <section
        id="services"
        className="text-gray-400 bg-gray-200 dark:bg-gray-900 body-font overflow-hidden"
      >
        <div ref={ref} className="max-w-4xl mx-auto px-5 py-12">
          <div className="flex flex-wrap -m-4 justify-center">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="p-4 xl:w-1/4 md:w-1/2 w-full shadow-2xl shadow-yellow-500/10"
              >
                <div
                  className={`h-full p-6 rounded-lg border-2 ${
                    index === 1 ? "border-custom-yellow" : "border-gray-700"
                  } flex flex-col items-center justify-center relative overflow-hidden`}
                >
                  {index === 1 && (
                    <span className="bg-yellow-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      POPULAR
                    </span>
                  )}
                  <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                    {servicio.nombre}
                  </h2>
                  <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
                    {servicio.precio}
                  </h1>
                  <p className="flex items-center text-gray-400 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {servicio.duracion}
                  </p>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={1000}
                    className="w-full"
                  >
                    <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
                      ¡Reserva ahora!
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;

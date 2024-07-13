import React, { useRef } from 'react';
import { Link } from 'react-scroll'; // Importa Link desde react-scroll
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const containerRef = useRef(null);

  return (
    <section id="services" className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <motion.div
          ref={containerRef}
          className="flex flex-col items-center justify-center w-full mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl text-custom-yellow-2 pb-2 mb-2 border-b-4 border-custom-yellow-2 border-dashed leading-none">
            Precios
          </h1>
          <p className="text-gray-300 text-lg mt-2">
            ¡Descubre nuestras ofertas especiales!
          </p>
        </motion.div>
        <div ref={ref} className="flex flex-wrap -m-4 justify-center">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              className="p-4 xl:w-1/4 md:w-1/2 w-full shadow-2xl shadow-yellow-500/10"
              initial={{ scale: 0.8 }}
              animate={inView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-full p-6 rounded-lg border-2 ${index === 1 ? 'border-custom-yellow' : 'border-gray-700'} flex flex-col items-center justify-center relative overflow-hidden`}>
                {index === 1 && <span className="bg-yellow-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>}
                <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">{servicio.nombre}</h2>
                <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">{servicio.precio}</h1>
                <p className="flex items-center text-gray-400 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>{servicio.duracion}
                </p>
                <Link to="contact" smooth={true} duration={1000} className="w-full">
                  <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
                    ¡Reserva ahora!
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
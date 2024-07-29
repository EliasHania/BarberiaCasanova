import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reseñas = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Activar la animación repetidamente
    threshold: 0.5, // Umbral de visibilidad
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl dark:bg-gray-950/10 p-6 md:p-10 lg:p-16 text-center bg-gray-200 dark:bg-gray-900 transition-all duration-300"
      initial={{ scale: 0.8 }}
      animate={inView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={ref} className="container mx-auto py-12">
        <div
          className="elfsight-app-6062a1f3-af4a-48db-84f0-1dc7347f3437"
          data-elfsight-app-lazy
        ></div>
      </div>
    </motion.div>
  );
};

export default Reseñas;

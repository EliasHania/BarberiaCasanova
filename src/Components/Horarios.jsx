import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Horarios = () => {
  const horarios = [
    { dia: 'Lunes', horario: '10:00 - 21:00' },
    { dia: 'Martes', horario: '10:00 - 21:00' },
    { dia: 'Miércoles', horario: '10:00 - 21:00' },
    { dia: 'Jueves', horario: '10:00 - 21:00' },
    { dia: 'Viernes', horario: '10:00 - 21:00' },
    { dia: 'Sábado', horario: '09:00 - 18:00' },
    { dia: 'Domingo', horario: 'Cerrado' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false, // Permitir que se active la animación varias veces
    threshold: 0.5, // Umbral de visibilidad
  });

  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl bg-gray-950/10 p-6 text-center"
      initial={{ scale: 0.8 }}
      animate={inView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={ref}>
        <h2 className="text-3xl font-bold mb-4 text-custom-yellow">Horario de Apertura</h2>
        <div className="overflow-x-auto h-full">
          <table className="min-w-full border-collapse border border-gray-400">
            <thead className="bg-custom-yellow">
              <tr>
                <th className="border border-gray-400 px-4 py-2">Día</th>
                <th className="border border-gray-400 px-4 py-2">Horario</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}`}>
                  <td className="border border-gray-400 px-4 py-2 text-gray-200">{item.dia}</td>
                  <td className="border border-gray-400 px-4 py-2 text-gray-200">{item.horario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Horarios;
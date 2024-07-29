import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [contacto, setContacto] = useState("whatsapp"); // Estado para elegir método de contacto

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const containerRef = useRef(null);

  const handleContactoChange = (value) => {
    setContacto(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado:\n\n${mensaje}`);
  };

  const abrirChatWhatsApp = () => {
    const telefono = "+34623350106"; // Tu número de WhatsApp
    const mensajeWhatsApp = `Hola, soy ${nombre}. ${mensaje}`;
    window.open(
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeWhatsApp)}`,
      "_blank"
    );
  };

  const llamarPorTelefono = () => {
    const telefono = "+34623350106"; // Tu número de teléfono
    window.open(`tel:${telefono}`, "_self");
  };
  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl dark:bg-gray-950/10 p-6 md:p-10 lg:p-16 text-center bg-gray-200 dark:bg-gray-900 transition-all duration-300"
      initial={{ scale: 0.8 }}
      animate={inView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        id="contact"
        className="py-20 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <div className="container mx-auto text-center">
          <h1 className="mb-4 pb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Reserva tu cita
            </span>
          </h1>
          <div className="mb-4 flex justify-center space-x-4">
            <button
              className={`px-4 py-2 rounded ${
                contacto === "whatsapp"
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handleContactoChange("whatsapp")}
            >
              WhatsApp
            </button>
            <button
              className={`px-4 py-2 rounded ${
                contacto === "telefono"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handleContactoChange("telefono")}
            >
              Teléfono
            </button>
          </div>
          {contacto === "whatsapp" && (
            <motion.div
              className="flex justify-center mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={abrirChatWhatsApp}
                className="flex items-center px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.49 3.51A9.97 9.97 0 0012 2a10.001 10.001 0 00-7.49 3.51A9.97 9.97 0 001 12c0 2.5.91 4.78 2.59 6.59l-1.72 4.09 4.21-1.73C8.5 21.09 10.25 22 12 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 0M9 12l2 2 4-4"
                  />
                </svg>
                Contactar por WhatsApp
              </button>
            </motion.div>
          )}
          {contacto === "telefono" && (
            <motion.div
              className="flex justify-center mt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={llamarPorTelefono}
                className="flex items-center px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h4l1-4 4 4-2 2 4 4 2-2 4 4-4 4-8-8-1 4H3v-8z"
                  />
                </svg>
                Llamar por Teléfono
              </button>
            </motion.div>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [contacto, setContacto] = useState('email'); // Estado para elegir método de contacto

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
    const telefono = '+34623350106'; // Tu número de WhatsApp
    const mensajeWhatsApp = `Hola, soy ${nombre}. ${mensaje}`;
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');
  };

  const llamarPorTelefono = () => {
    const telefono = '+34623350106'; // Tu número de teléfono
    window.open(`tel:${telefono}`, '_self');
  };

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl bg-gray-950/10 p-6 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        id="contact"
        className="py-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-custom-yellow-2">Contáctanos</h2>
          <div className="max-w-md mx-auto mb-8 shadow-2xl shadow-yellow-500/10">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.055171807822!2d-5.4480173!3d36.14086989999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cebdc700a4375%3A0xeafd1aaa4c7fcc51!2sBarberia%20casanova!5e0!3m2!1ses!2ses!4v1720831733816!5m2!1ses!2ses"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="mb-4 flex justify-center space-x-4">
            <button
              className={`px-4 py-2 rounded ${contacto === 'email' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => handleContactoChange('email')}
            >
              Email
            </button>
            <button
              className={`px-4 py-2 rounded ${contacto === 'whatsapp' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => handleContactoChange('whatsapp')}
            >
              WhatsApp
            </button>
            <button
              className={`px-4 py-2 rounded ${contacto === 'telefono' ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => handleContactoChange('telefono')}
            >
              Teléfono
            </button>
          </div>
          {contacto === 'email' && (
            <motion.form
              className="max-w-md mx-auto"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 rounded"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-2 rounded"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-2 rounded"
                  placeholder="Mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="px-4 py-2 rounded bg-custom-yellow-2 hover:bg-yellow-500 text-white">Enviar</button>
            </motion.form>
          )}
          {contacto === 'whatsapp' && (
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
          {contacto === 'telefono' && (
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
import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../images/barber-2.webp';
import CustomButton from './CustomButton';
import LogoInstagram from './Svg/logo-instagram';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
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
      <motion.section
        id="Hero"
        className="text-gray-400 bg-gray-900 body-font"
        initial={{ scale: 0.8 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            src={logo}
            alt="Logo Peluquería Pro"
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded shadow-2xl shadow-yellow-500/10"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-custom-yellow-2">
              ¡Bienvenido a Casanova!
            </h1>
            <p className="leading-relaxed mb-8">
              Descubre una experiencia única en nuestro salón, donde la tradición se une con la innovación.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Link
                to="services"
                smooth={true}
                duration={1000}
                className="inline-block cursor-pointer"
              >
                <CustomButton>SERVICIOS</CustomButton>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="inline-block cursor-pointer"
              >
                <CustomButton>CITA</CustomButton>
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://www.instagram.com/casanovabarberia7/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 py-2 px-6 rounded-lg text-white flex items-center space-x-2 hover:bg-gray-700 transition duration-300"
              >
                <LogoInstagram />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Hero;
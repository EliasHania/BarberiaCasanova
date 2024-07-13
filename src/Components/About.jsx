import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import pelado1 from '../images/pelado1.webp';
import pelado2 from '../images/pelado2.webp';
import pelado3 from '../images/pelado3.webp';
import pelado4 from '../images/pelado4.webp';
import pelado5 from '../images/pelado5.webp';
import pelado6 from '../images/pelado6.webp';
import pelado7 from '../images/pelado7.webp';
import pelado8 from '../images/pelado8.webp';

const About = () => {
  const images = [pelado1, pelado2, pelado3, pelado4, pelado5, pelado6, pelado7, pelado8];
  const [currentSlide, setCurrentSlide] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-screen-lg mx-auto py-12 relative shadow-2xl shadow-yellow-500/10"
      initial={{ scale: 0.8 }}
      animate={inView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-96 md:h-96 overflow-hidden rounded-lg">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}`}
            onClick={() => setCurrentSlide(index)}
            aria-current={index === currentSlide ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleBack}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </motion.div>
  );
};

export default About;

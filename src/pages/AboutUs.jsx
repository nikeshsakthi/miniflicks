import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BiSolidLeaf } from 'react-icons/bi';

const points = [
  "MiniFlicks Private Theater offers a unique space for movie screenings, birthdays, anniversaries, and proposals.",
  "Equipped with top-tier audiovisual technology, MiniFlicks ensures every event is immersive and memorable.",
  "Whether a movie night, a special celebration, or a romantic proposal, MiniFlicks provides a luxurious and private experience.",
  "Perfect for creating unforgettable moments in an intimate and customizable setting.",
];

const handleScrollToSection = (target) => {
  const element = document.getElementById(target);
  const headerOffset = 60; // Adjust based on your header height
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const AboutUs = () => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.01,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (entry && entry.boundingClientRect.top > window.innerHeight) {
      controls.start('hidden');
    }
  }, [controls, inView, entry]);

  const parentVariants = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id='about' className="flex flex-col items-center justify-center px-8 py-16 overflow-hidden bg-lightBg bg-darkGray lg:flex-row">
      <motion.div
        className="flex items-center justify-center w-full lg:w-1/2"
        initial="hidden"
        animate={controls}
        variants={parentVariants}
        ref={ref}
      >
        <img
          src="https://images.unsplash.com/photo-1523973740062-18e700e8da35?q=80&" // Unsplash image related to decorations or cinema
          alt="Theater Decorations"
          className="object-cover lg:w-[35vw] lg:h-[35vw] md:w-full md:h-full rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div
        className="w-full mt-8 lg:w-1/2 lg:mt-0"
        initial="hidden"
        animate={controls}
        variants={parentVariants}
      >
        <h2 className="mb-4 text-4xl font-bold text-primary ">Welcome to MiniFlicks</h2>
        <h3 className="mb-4 text-3xl font-bold text-primaryText">Private Theater</h3>
        <motion.ul className="mb-8 space-y-4 text-secondaryText">
          {points.map((point, index) => (
            <motion.li key={index} className="flex items-center" variants={childVariants}>
              <BiSolidLeaf className="mr-2 text-primary " /> {point}
            </motion.li>
          ))}
        </motion.ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 text-white rounded-full shadow-lg bg-primary"
          onClick={() => handleScrollToSection('theatres')}
          variants={childVariants}
        >
          Book Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutUs;

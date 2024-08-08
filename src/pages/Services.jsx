import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShippingFast, FaSnowflake, FaAppleAlt, FaSeedling } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaShippingFast />,
    title: "Free Delivery",
    description: "For those who purchased a monthly subscription"
  },
  {
    icon: <FaSnowflake />,
    title: "Freeze Option",
    description: "2 days freeze option for those who purchased a monthly subscription"
  },
  {
    icon: <FaAppleAlt />,
    title: "Fresh Fruits",
    description: "Fresh and hygienic seasonal fruits"
  },
  {
    icon: <FaSeedling />,
    title: "Sustainable Practices",
    description: "Our fruits are sourced from farms that use sustainable practices"
  }
];

const Services = () => {
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

  const h2Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 px-8 bg-lightBg">
      <motion.h2 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={h2Variants}
        className="mb-8 text-3xl font-bold text-primary Text lg:text-5xl"
      >
        Why <span className="text-primary">Phalaharam ?</span>
      </motion.h2>
      <motion.div
        className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap"
        initial="hidden"
        animate={controls}
        variants={parentVariants}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="flex lg:flex-row md:flex-col lg:items-start lg:justify-start items-center justify-start w-full p-4 text-center border border-secondaryText rounded-lg gap-4 lg:gap-0 hover:cursor-pointer hover:border-primary lg:w-[40%] lg:h-[18vh]"
            variants={childVariants}
          >
            <div className="p-4 text-2xl border-4 border-dashed rounded-full text-primary border-primary">{service.icon}</div>
            <div className="text-left md:ml-4">
              <h3 className="text-xl font-semibold text-primary Text">{service.title}</h3>
              <p className="mt-2 text-secondaryText">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;

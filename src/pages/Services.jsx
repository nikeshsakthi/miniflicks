import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { BsSpeaker } from "react-icons/bs";
import { LiaCouchSolid } from "react-icons/lia";
import { LuPartyPopper, LuProjector } from "react-icons/lu";
import { useInView } from "react-intersection-observer";

const servicesData = [
  {
    icon: <LiaCouchSolid />,
    title: "Luxurious Seating",
    description:
      "Relax in our ultra-comfortable seating designed for a luxurious experience with reclined seating.",
  },
  {
    icon: <LuProjector />,
    title: "150-inch 4K Screens",
    description:
      "Enjoy your favorite movies on massive 150-inch 4K screens for the ultimate visual experience.",
  },
  {
    icon: <BsSpeaker />,
    title: "Dolby Atmos Sound",
    description:
      "Experience immersive audio with state-of-the-art Dolby Atmos sound systems.",
  },
  {
    icon: <LuPartyPopper />,
    title: "Decorated Ambiance",
    description:
      "Our theater is elegantly decorated to create the perfect atmosphere for every movie night and for every celebration.",
  },
];

const Services = () => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.01,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (entry && entry.boundingClientRect.top > window.innerHeight) {
      controls.start("hidden");
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
        className="mb-8 text-3xl font-bold text-black Text lg:text-5xl"
      >
        Why Choose{" "}
        <span className="text-primary">Miniflicks Private Theatre?</span>
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
            <div className="p-4 text-2xl border-4 border-dashed rounded-full text-primary border-primary">
              {service.icon}
            </div>
            <div className="text-left md:ml-4">
              <h3 className="text-xl font-semibold text-primary Text">
                {service.title}
              </h3>
              <p className="mt-2 text-secondaryText">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;

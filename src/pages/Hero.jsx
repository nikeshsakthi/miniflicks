import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";

const Hero = ({ handleScrollToSection }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const parentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const images = [
    {
      url: "./images/slide_one.jpeg",
      heading: "Room 1",
      description: "A cozy and comfortable room with a beautiful view.",
    },
    {
      url: "./images/slide_two.jpeg",
      heading: "Room 2",
      description: "Experience luxury and elegance in this spacious room.",
    },
    {
      url: "./images/slide_three.jpeg",
      heading: "Room 3",
      description: "A modern room with all the amenities you need.",
    },
  ];

  return (
    <motion.div
      id="home"
      className="relative flex items-center justify-center h-screen bg-center bg-cover"
      initial="hidden"
      animate={controls}
      variants={parentVariants}
      ref={ref}
    >
     <Swiper
        modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
        slidesPerView={1} 
        effect="coverflow"
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="rounded-t-lg"
        speed={2000} // Duration of transition between slides (2 seconds)
        style={{width: '100vw', height: '100vh'}}
    >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center w-full h-full">
            <img
              src={image.url}
              alt={`Slide ${index}`}
              className="absolute inset-0 w-full h-full object-fit"
            />
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-20"
              initial="hidden"
              animate="visible"
              variants={parentVariants}
            >
              <motion.h1 className="text-5xl font-black" variants={childVariants}>
                {image.heading}
              </motion.h1>
              <motion.p className="mt-4 text-5xl" variants={childVariants}>
                {image.description}
              </motion.p>
              <motion.div className="mt-6 space-x-4" variants={childVariants}>
                <button className="px-6 py-3 font-bold text-white rounded bg-primary hover:bg-primary-dark">
                  Book Now
                </button>
                <button className="px-6 py-3 font-bold text-white rounded bg-primary hover:bg-primary-dark">
                  View
                </button>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Hero;

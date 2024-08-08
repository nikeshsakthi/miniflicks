import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
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

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Amazing Experience!",
      text: "The private theater was the perfect place to celebrate our anniversary. The ambiance was fantastic!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Best Birthday Ever!",
      text: "I had my birthday party here, and it was the best experience. The staff made everything perfect.",
      rating: 5,
    },
    {
      name: "Samuel Green",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Romantic Proposal",
      text: "Proposing in the private theater was the best decision ever. The setting was magical.",
      rating: 5,
    },
    {
      name: "Lisa White",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Unforgettable Baby Shower",
      text: "We hosted a baby shower here, and it was unforgettable. The private setting made it so special.",
      rating: 4,
    },
    {
      name: "Michael Brown",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Fantastic Farewell Party",
      text: "The farewell party we had at the private theater was top-notch. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Johnson",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Great for Anniversaries!",
      text: "We celebrated our 10th anniversary here, and it was a night to remember.",
      rating: 5,
    },
    {
      name: "William Harris",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Wonderful Engagement",
      text: "The private theater made our engagement party intimate and special.",
      rating: 5,
    },
    {
      name: "Sophia Martinez",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Memorable Graduation Party",
      text: "My graduation party here was amazing! The setup was perfect.",
      rating: 4,
    },
  ];

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

  return (
    <motion.div
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
      initial="hidden"
      animate={controls}
      variants={parentVariants}
      ref={ref}
    >
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center"
        initial="hidden"
        animate="visible"
        variants={parentVariants}
      >
        <motion.h1
          className="text-3xl font-bold text-primary "
          variants={childVariants}
        >
          What our customers are saying
        </motion.h1>
      </motion.div>

      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        loop={true}
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        className="w-full"
        effect="coverflow"
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex h-72 md:flex-col">
            <div className="flex items-center justify-center w-full h-full p-6">
              <div className="w-full max-w-md p-6 border-2 border-black rounded-lg shadow-lg h-52 bg-lightBg hover:border-primary">
                <div className="flex items-center mb-4 space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold">{testimonial.title}</h4>
                    <p className="text-sm text-primaryText">
                      {testimonial.text}
                    </p>
                    <p className="text-sm text-secondaryText">
                      {testimonial.name}
                    </p>
                    <div className="flex justify-start mt-4 text-primary ">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <GiPartyPopper
                          size={24}
                          key={j}
                          className={`mr-1 ${
                            j < testimonial.rating
                              ? "text-primary "
                              : "text-secondaryText"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom arrows */}
        <div className="absolute z-10 text-4xl text-white transform -translate-y-1/2 rounded-full right-4 bg-primary swiper-button-next-custom top-1/2">
          <FiChevronRight />
        </div>
        <div className="absolute z-10 text-4xl text-white transform -translate-y-1/2 rounded-full left-4 swiper-button-prev-custom bg-primary top-1/2">
          <FiChevronLeft />
        </div>
      </Swiper>
    </motion.div>
  );
};

export default Testimonials;

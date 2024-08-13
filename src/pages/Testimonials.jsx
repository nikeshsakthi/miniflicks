import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { BiParty } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
      name: "Ratheesh CN",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Unforgettable Anniversary Celebration!",
      text: "MiniFlicks truly delivered an unforgettable anniversary celebration for us on our anniversary day 20th March 2024. The owners' warm and welcoming demeanor added to the charm of our experience. The high-quality sound system and screen enhanced our enjoyment of the event, while the stunning decorations created a magical atmosphere. Despite our last-minute cake order, they graciously arranged it, even late at night. We were all thrilled by the special touches like fog and rose petals entry, offered at a minimal cost. Moreover, the affordability of the three-hour package, inclusive of all facilities, surpassed our expectations. Conveniently located near Jeevika hospital, accessibility was never an issue. Highly recommend MiniFlicks for any special occasion!",
      rating: 5,
    },
    {
      name: "Sameer shaik",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Exceeded Expectations!",
      text: "The private party theatre experience exceeded expectations. Management was impeccable, ensuring a seamless event. The ambience enhanced the overall enjoyment. Miniflicks' organized platform made planning effortless. Perfect for surprise parties and various occasions. Customized decorations were provided within a budget-friendly range, adding a personal touch to the festivities. Highly recommended for unforgettable celebrations.",
      rating: 5,
    },
    {
      name: "Reshu Thupaki",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Wonderful Experience!",
      text: "It's a wonderful experience in MiniFlicks private Theatre. Mainly Staff is so good, Friendly and very cooperative. Theater decoration and others things are so good in MiniFlicks private Theatre. If you want to experience the good private theatre world with Dolby sounds I can suggest you MiniFlicks private Theatre.",
      rating: 5,
    },
    {
      name: "Komal Sharma",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Family Theatre Booking!",
      text: "I have been there and had a booking of family theatre. It has been a wonderful experience and almost like a original theatre experience with audio installed. It has dolby atmos surround and awesome bass.",
      rating: 5,
    },
    {
      name: "Manish Kumar",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Fantastic Private Theater Experience!",
      text: "I wanted to express my gratitude for the incredible private theater experience. The ambiance was superb, creating the perfect atmosphere for enjoying the performance. The seating was exceptionally comfortable, allowing me to fully relax and immerse myself in the show. The sound quality was top-notch, truly enhancing the audio experience. Overall, it was a memorable and enjoyable experience that I look forward to repeating in the future. Thank you for providing such a fantastic entertainment option.",
      rating: 5,
    },
    {
      name: "Kavya Kamisetty",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Mom's 50th Birthday Celebration!",
      text: "We recently celebrated my mom's 50th birthday, and it was an absolute delight! The staff were incredibly warm and welcoming, and the decorations added such a special touch to the celebration. Not to mention, their collection of showpieces was truly impressive, adding an extra layer of charm to the ambiance. It was truly a wonderful experience.",
      rating: 5,
    },
    {
      name: "Hemalatha P",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Couple Private Theatre!",
      text: "I have been there and had a booked couple private theatre. It has been a wonderful experience and almost like a original theatre experience with audio installed. They are also providing add-ons like decoration, cakes, and so on. Prices are very affordable. Staffs are also very friendly. I liked it a lot and enjoyed well. Thank you MiniFlicks team 🙂",
      rating: 5,
    },
    {
      name: "Deepika GN",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Top-Notch Birthday Celebration!",
      text: "Recently celebrated my birthday and it was top-notch. Thanks for the amazing birthday set up team. Service was great, staff were so helpful and good food as well. Highly recommended!!",
      rating: 5,
    },
    {
      name: "Vidhya Karanthamalai",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Surprise Birthday Party for My Husband!",
      text: "I booked a surprise birthday party for my husband. The decoration and ambiance were very good, and they quoted a very reasonable price. The staff were very polite and the service was excellent. The movie experience was also enjoyable with perfect audio and video arrangements, and it was indeed like watching a movie in a theatre.",
      rating: 5,
    },
    {
      name: "Sreenivasan Sathiyamoorthy",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      title: "Memorable Experience!",
      text: "I went to the place with limited expectations. But once I entered the private theatre, I was flabbergasted. The ambiance was really awesome and it was a memorable experience for a lifetime. The prices are very affordable and the service was too good. I highly recommend planning any celebration in this venue. It's worth every penny.",
      rating: 5,
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
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const handleClick = () => {
    window.open(
      "https://www.google.com/search?q=google+reviews+miniflicks+bangalore&sca_esv=68041e448ebf4032&sca_upv=1&rlz=1C5CHFA_enIN966IN967&sxsrf=ADLYWIL02G252tgnDSn1xjqQwlY9ZxUvdg%3A1719863970531&ei=ogqDZsuQIOmY4-EP3Y-x-AY&oq=google+reviews+miniflicks+&gs_lp=Egxnd3Mtd2l6LXNlcnAiGmdvb2dsZSByZXZpZXdzIG1pbmlmbGlja3MgKgIIADIFECEYoAEyBRAhGKABMgUQIRifBUiQClCcAVicAXABeACQAQCYAYYBoAGGAaoBAzAuMbgBAcgBAPgBAZgCAaACiwGYAwCIBgGSBwMwLjGgB74D&sclient=gws-wiz-serp#lrd=0x3bae131e0d1e4479:0xcba4ab3250d34b75,1,,,,",
      "_blank"
    );
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
        className="relative flex flex-col items-center justify-center w-full h-full text-center"
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
          <SwiperSlide key={index} className="flex md:flex-col">
            <div className="flex items-center justify-center w-full h-full p-8 ">
              <div className="w-full max-w-md p-4 border-2 border-black rounded-lg shadow-lg md:h-48 h-52 bg-lightBg hover:border-primary">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="mb-2 text-lg font-bold">
                      {truncateText(testimonial.title, 20)}
                    </h4>
                    <p className="mb-2 text-sm text-primaryText">
                      {truncateText(testimonial.text, 100)}
                    </p>
                    <p className="text-sm font-bold text-secondaryText">
                      {testimonial.name}
                    </p>
                    <div className="flex justify-start mt-2 text-primary ">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <BiParty
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
      <motion.button
        className="px-6 py-3 text-lg font-bold text-white transition-colors duration-300 rounded-lg bg-primary hover:bg-primary-dark focus:outline-none"
        variants={childVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        See More
      </motion.button>
    </motion.div>
  );
};

export default Testimonials;

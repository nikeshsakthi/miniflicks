// BackToTop.js
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed flex flex-col items-center space-y-4 bottom-4 lg:bottom-4 md:bottom-16 right-4 md:right-8 lg:right-4">
      <motion.a
        className="relative flex items-center justify-center p-2 text-white bg-green-400 rounded-full shadow-lg hover:bg-green-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // animate={{ scale: [1, 1.2, 1] }}
        // transition={{ duration: 1, repeat: Infinity }}
        href="https://wa.me/+918073597390"
        target="_blank" // Ensure the link opens in a new tab
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={20} />
        <span className="absolute inline-flex w-8 h-8 bg-green-500 rounded-full opacity-75 animate-ping"></span>
      </motion.a>
      {isMobile && (
        <>
          <motion.a
            className="relative flex items-center justify-center p-2 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            // animate={{ scale: [1, 1.2, 1] }}
            // transition={{ duration: 1, repeat: Infinity }}
            href="tel:+918073597390"
          >
            <FaPhoneAlt size={16} />
            <span className="absolute inline-flex w-8 h-8 bg-blue-400 rounded-full opacity-75 animate-ping"></span>
          </motion.a>
        </>
      )}

      {isVisible && (
        <>
          <motion.button
            onClick={scrollToTop}
            className="relative flex items-center justify-center p-2 rounded-full bg-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="text-white">
              <IoIosArrowUp size={20} />
            </button>
          </motion.button>
        </>
      )}
    </div>
  );
};

export default BackToTop;

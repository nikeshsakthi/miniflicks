import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.01,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (entry && entry.boundingClientRect.top >= window.innerHeight) {
      controls.start("hidden");
    }
  }, [controls, inView, entry]);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "918073597390"; // Ensure the phone number is in international format without the "+" sign
    const textMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      id="contact"
      ref={ref}
      className="flex flex-col items-center justify-center gap-4 p-8 bg-lightBg bg-darkBlue md:flex-row"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 lg:items-start md:w-1/2">
        <h1 className="text-4xl font-bold leading-tight">
          Contact <span className="text-primary">Us</span>{" "}
        </h1>
        <div className="mt-8 space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="mr-4 text-primary " />
            <span>miniflicksprivatetheatres@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-4 text-primary " />
            <span>+91 901 916 2002</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-4 text-primary " />
            <span>
            <p className="text-primaryText">
                THE SUMMIT,# 13, 1st 'A' Cross, <br />
                Anantharama Reddy Layout,<br />
                Outer Ring Road, Chinnappanahalli, <br />
                Marathahalli, Bangalore, 560037
                <br />
                India <br />
                <strong className="text-primary ">Phone:</strong> +91 9019162002, +91 8143115899
                <br />
                <strong className="text-primary ">Email:</strong>{" "}
                miniflicksprivatetheatres@gmail.com
                <br />
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl px-0 rounded-lg lg:p-8 md:w-1/2">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg">Your name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-b bg-lightBg border-secondaryText focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-b bg-lightBg border-secondaryText focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Your message</label>
            <textarea
              rows="1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border-b bg-lightBg border-secondaryText focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded-md bg-primary"
          >
            Send message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactUs;

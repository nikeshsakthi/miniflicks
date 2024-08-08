import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const faqs = [
    {
      question: "How does the subscription work?",
      answer:
        "You can choose from daily, weekly, or monthly plans. The fruits will be delivered to your address on the selected schedule.",
    },
    {
      question: "Can I change my delivery address?",
      answer:
        "Once subscribed, the delivery address cannot be changed in the middle of the plan.",
    },
    {
      question: "What if I want to freeze my subscription?",
      answer:
        "Monthly subscribers can freeze their subscription for up to 2 days. The price may differ for this option.",
    },
    {
      question: "Are there any delivery charges?",
      answer:
        "Delivery charges are included in the subscription fee. There are no additional charges for delivery.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time. However, the cancellation will be effective from the next billing cycle.",
    },
    {
      question: "What types of fruits are included in the subscription?",
      answer:
        "We offer a variety of seasonal fruits. The specific types of fruits may vary depending on the availability and season.",
    },
    {
      question: "What if I have an issue with the delivery?",
      answer:
        "If you have any issues with the delivery, please contact our customer support team, and we will resolve the issue promptly.",
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const variants = {
    hidden: { opacity: 0, y: -50 },
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

  return (
    <section id="faq" className="p-8 px-0 bg-lightBg">
      <div className="p-4 mx-auto max-w-7xl">
        <motion.h1
          className="mb-6 text-4xl font-bold text-center text-primary"
          initial="hidden"
          animate={controls}
          variants={variants}
          ref={ref}
        >
          FAQs
        </motion.h1>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="px-4 pt-2 pb-0 mb-4 rounded-lg shadow bg-lightSecondary"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <button
              className="flex items-center justify-between w-full text-lg font-semibold text-left bg-lightSecondary accordion-header focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span
                className={`${
                  activeIndex === index ? "text-primary" : "text-PrimaryText"
                }`}
              >
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`${
                  activeIndex === index ? "text-primary" : "text-PrimaryText"
                }`}
              >
                {activeIndex === index ? (
                  <IoChevronUpOutline />
                ) : (
                  <IoChevronDownOutline />
                )}
              </motion.div>
            </button>
            <motion.div
              className="mt-2 overflow-hidden text-primaryText accordion-content"
              initial={false}
              animate={{ height: activeIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ height: activeIndex === index ? "auto" : 0 }}
              layout
            >
              <p className="pb-2">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

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
      question: "What is Miniflicks?",
      answer:
        "Miniflicks is a streaming service that offers a curated selection of short films and web series across various genres.",
    },
    {
      question: "How can I subscribe to Miniflicks?",
      answer:
        "You can subscribe to Miniflicks by signing up on our website and choosing a subscription plan that suits you. We offer monthly and yearly plans.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. Your access to Miniflicks will remain active until the end of the billing period.",
    },
    {
      question: "What devices are supported?",
      answer:
        "Miniflicks is available on web browsers, smartphones, tablets, and smart TVs. Check our website for a full list of supported devices.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 7-day free trial for new users. You can explore our content and decide if Miniflicks is right for you.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via email or live chat on our website. We're here to help with any issues you may have.",
    },
    {
      question: "Can I download content for offline viewing?",
      answer:
        "Yes, Miniflicks allows you to download select content for offline viewing on your mobile devices.",
    },
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

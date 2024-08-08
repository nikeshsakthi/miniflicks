import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    name: "Daily Delight",
    image: "/images/other/first-bowl.jpg",
    description: "1 Day Subscription",
    price: "₹ 149/day",
    variety: "Includes 5 different fruits",
  },
  {
    name: "Weekly Fruity Five",
    image: "/images/other/fifth-bowl.jpg",
    description: "5 Days - Week Subscription",
    price: "₹ 599/week",
    variety: "Includes 10 different fruits",
  },
  {
    name: "Weekly Super Six",
    image: "/images/other/second-bowl.jpg",
    description: "6 Days - Week Subscription",
    price: "₹ 649/week",
    variety: "Includes 20 different fruits",
  },
];

const SubscriptionPlans = () => {
  const variants = {
    initial: { opacity: 0, y: -80 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Increase duration for smoother effect
        when: 'beforeChildren',
        staggerChildren: 0.3, // Adjusted staggerChildren for better sequence
      },
    },
  };

  return (
    <section id="subscription" className="py-12 bg-lightBg">
      <div className="container px-4 mx-auto md:px-8 lg:px-12">
        <div className="mb-8 text-center section-header">
          <h2 className="mb-2 text-3xl font-bold text-primary">
            Subscription Plans
          </h2>
          <p className="text-secondaryText">
            Choose the best plan that suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const controls = useAnimation();
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.1, // Adjust as needed to trigger animation earlier or later
            });

            useEffect(() => {
              if (inView) {
                controls.start("whileInView");
              } else {
                controls.start("initial");
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                className="p-4 border-2 rounded-lg hover:cursor-pointer group border-primaryText hover:border-primary bg-lightSecondary plan"
                ref={ref}
                initial="initial"
                animate={controls}
                variants={variants}
              >
                <div className="mb-4 plan-img">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="object-cover w-full h-48 rounded-t-lg"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-primary">
                  <a href="#">{plan.name}</a>
                </h3>
                <p className="mb-4 text-secondaryText">{plan.description}</p>
                <p className="text-2xl font-bold text-primary font-rubik">
                  {plan.price}
                </p>
                <p className="text-secondaryText">{plan.variety}</p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 mt-4 font-semibold transition duration-500 ease-in-out border rounded-full group-hover:text-white text-primary group-hover:bg-primary bg-lightSecondary border-primary"
                >
                  Order
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";
import Header from "./Header";
import BackToTop from "./components/BackToTop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import SubscriptionPlans from "./pages/SubscriptionPlan";
import Testimonials from "./pages/Testimonials";
import EventCard from "./pages/EventCard";

function App() {
  const [active, setActive] = useState("Home"); // State to keep track of active section
  const [theme, setTheme] = useState("light"); // State to keep track of theme

  // Toggle dark mode class on document element based on theme state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Intersection observers for sections
  const [homeRef, inViewHome] = useInView({ threshold: 0.5 });
  const [aboutRef, inViewAbout] = useInView({ threshold: 0.5 });
  const [subscriptionRef, inViewSubscription] = useInView({ threshold: 0.3 });
  const [faqRef, inViewFaq] = useInView({ threshold: 0.5 });
  const [contactRef, inViewContact] = useInView({ threshold: 0.5 });

  // Update active section based on visibility
  useEffect(() => {
    if (inViewHome) setActive("Home");
    else if (inViewAbout) setActive("About");
    else if (inViewSubscription) setActive("Subscription");
    else if (inViewFaq) setActive("Faq");
    else if (inViewContact) setActive("Contact");
  }, [inViewHome, inViewAbout, inViewSubscription, inViewFaq, inViewContact]);

  // Function to scroll to a section smoothly
  const handleScrollToSection = (target) => {
    const element = document.getElementById(target);
    const headerOffset = 60; // Adjust based on your header height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setActive(
      target
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  return (
    <>
      <Header active={active} handleScrollToSection={handleScrollToSection} />
      <main>
        {/* Sections with intersection observer refs */}
        <div id="home" ref={homeRef}>
          <Hero handleScrollToSection={handleScrollToSection} />
        </div>
        <div id="about" ref={aboutRef}>
          <AboutUs />
        </div>
        <div id="subscription" ref={subscriptionRef}>
          <SubscriptionPlans />
        </div>
        <div id="faq" ref={faqRef}>
          <FAQ />
        </div>
        <Services />
        {/* <EventCard /> */}
        <Testimonials />
        <div id="contact" ref={contactRef}>
          <ContactUs />
        </div>
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}

export default App;

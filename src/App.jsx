import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";
import Header from "./Header";
import BackToTop from "./components/BackToTop";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import EventCard from "./pages/EventCard";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import RoomsData from "./pages/RoomsData";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import TheatreDetails from "./pages/TheatreDetails";
import { useData } from "./components/DataContext";

function App() {
  const [active, setActive] = useState("Home"); // State to keep track of active section
  const [theme, setTheme] = useState("light"); // State to keep track of theme



  const {bgColor,updateBgColor} = useData();

  console.log(bgColor);

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
  const [servicesRef, inViewServices] = useInView({ threshold: 0.3 });
  const [faqRef, inViewFaq] = useInView({ threshold: 0.5 });
  const [contactRef, inViewContact] = useInView({ threshold: 0.5 });

  // Update active section based on visibility
  useEffect(() => {
    if (inViewHome) setActive("Home");
    else if (inViewAbout) setActive("About");
    else if (inViewServices) setActive("Services");
    else if (inViewFaq) setActive("Faq");
    else if (inViewContact) setActive("Contact");
  }, [inViewHome, inViewAbout, inViewServices, inViewFaq, inViewContact]);

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
        <section id="home" ref={homeRef}>
          <Hero handleScrollToSection={handleScrollToSection} />
        </section>

        <section id="roomsdata">
          <RoomsData />
        </section>

        <section id="about" ref={aboutRef}>
          <AboutUs />
        </section>

        <TheatreDetails />

        <section id="services" ref={servicesRef}>
          <Services />
        </section>

        <section id="faq" ref={faqRef}>
          <FAQ />
        </section>

        <section id="events">
          <EventCard />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact" ref={contactRef}>
          <ContactUs />
        </section>

        <Footer />
        <BackToTop />
      </main>
    </>
  );
}

export default App;

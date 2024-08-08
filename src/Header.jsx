import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Logo from "./assets/main-logo.jpg";

const Header = ({ active, handleScrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Menu links
  const menuLinks = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Subscription", target: "subscription" },
    { name: "Faq", target: "faq" },
    { name: "Contact", target: "contact" },
  ];

  // Toggle menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-2 shadow-md bg-[#f7fffe]">
      <nav className="container flex items-center justify-between px-5 mx-auto">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-black">
          <img
            src={Logo}
            alt="Main Logo"
            className="w-16 h-16 md:h-12 lg:h-16"
          />
          <span className="text-primary text-md">MiniFlicks</span>
        </a>

        {/* Centered menu for larger screens */}
        <div className="items-center justify-end hidden w-full gap-24 md:flex">
          <ul className="flex gap-8">
            {menuLinks.map((link) => (
              <li key={link.name} className="flex flex-col items-center">
                <button
                  className={`hover:text-primary ${
                    active === link.name ? "text-primary" : "text-primaryText"
                  }`}
                  onClick={() => handleScrollToSection(link.target)}
                >
                  <span
                    className={`text-sm lg:text-lg font-bold hover:text-primary ${
                      active === link.name ? "text-primary" : "text-black"
                    }`}
                  >
                    {link.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {/* User icon and Book Now button for larger screens */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 text-lg text-white rounded-lg bg-primary ">
            Book Now
          </button>
        </div>
        </div>
        {/* Hamburger menu button for mobile screens */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-primary focus:outline-none"
          >
            {/* Hamburger icon when menu is closed */}
            <svg
              className={`w-8 h-8 ${isOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            {/* Close icon when menu is open */}
            <RxCross2 className={`w-8 h-8 ${isOpen ? "block" : "hidden"}`} />
          </button>
        </div>

        {/* Animated mobile menu */}
        <div
          className={`fixed top-20 right-0 w-full h-full bg-[#f7fffe] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-700 ease-in-out md:hidden`}
        >
          <ul className="flex flex-col items-start p-6 mt-8 space-y-2">
            {menuLinks.map((link) => (
              <li
                key={link.name}
                className="flex flex-col items-start w-full py-2 border-b border-gray-400"
              >
                <button
                  className={`hover:text-primary ${
                    active === link.name ? "text-primary" : "text-primaryText"
                  }`}
                  onClick={() => {
                    handleScrollToSection(link.target);
                    toggleMenu();
                  }}
                >
                  <span
                    className={`text-xl lg:text-lg font-bold hover:text-primary ${
                      active === link.name ? "text-primary" : "text-primaryText"
                    }`}
                  >
                    {link.name}
                  </span>
                </button>
              </li>
            ))}
            <li className="flex flex-col py-2 space-y-2">
              <button className="px-4 py-2 text-white rounded bg-primary hover:bg-primary-dark">
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

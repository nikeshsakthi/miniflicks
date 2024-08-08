import React from "react";
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const pageLinks = [
    { name: "Home", target: "home" },
    { name: "About us", target: "about" },
    { name: "Blog", target: "blog" },
    { name: "Gallery", target: "gallery" },
    { name: "FAQ's", target: "faq" },
    { name: "Contact Us", target: "contact" },
  ];

  const usefulLinks = [
    { name: "Terms & Conditions", target: "#" },
    { name: "Returns & Refunds", target: "#" },
    { name: "Our Services", target: "#" },
    { name: "Testimonials", target: "#" },
    { name: "Terms of service", target: "#" },
    { name: "Privacy policy", target: "#" },
  ];

  const handleScrollToSection = (target) => {
    if (target === "#") return;
    const element = document.getElementById(target);
    const headerOffset = 60; // Adjust based on your header height
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="px-4 pb-16 lg:pb-2 text-primaryText bg-lightBg md:px-8 lg:px-16"
    >
      <div className="py-12 footer-top">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="footer-info">
              <h2 className="mb-4 text-3xl font-bold tracking-wider text-primary ">
                MiniFlicks
              </h2>
              <h4 className="mb-4 text-xl font-semibold text-primary ">
                About Us
              </h4>
              <p>
                MiniFlicks Private Theater in Bangalore is a versatile
                celebration space that caters to a range of events, including
                movie screenings, birthday celebrations, anniversaries, and
                proposals.
              </p>
            </div>

            <div className="footer-links">
              <h4 className="mb-4 text-xl font-semibold text-primary ">
                Pages
              </h4>
              <ul>
                {pageLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <FaAngleRight className="inline mr-2 text-primary " />
                    <button
                      className="text-primaryText hover:text-primary"
                      onClick={() => handleScrollToSection(link.target)}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links">
              <h4 className="mb-4 text-xl font-semibold text-primary ">
                Useful Links
              </h4>
              <ul>
                {usefulLinks.map((link, index) => (
                  <li key={index} className="mb-2">
                    <FaAngleRight className="inline mr-2 text-primary " />
                    <button
                      className="text-primaryText hover:text-primary "
                      onClick={() => handleScrollToSection(link.target)}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contactus">
              <h4 className="mb-4 text-xl font-semibold text-primary ">
                Contact Us
              </h4>
              <p className="text-primaryText">
                THE SUMMIT,# 13,  <br />
                1st 'A' Cross, Anantharama Reddy Layout,<br />
                Outer Ring Road, Chinnappanahalli, <br />
                Marathahalli, <br />
                Bangalore, 560037
                <br />
                India <br />
                <strong className="text-primary ">Phone:</strong> +91 9019162002, +91 8143115899
                <br />
                <strong className="text-primary ">Email:</strong>{" "}
                miniflicksprivatetheatres@gmail.com
                <br />
              </p>

              <div className="flex items-center mt-4 space-x-4">
                <a
                  href="https://www.instagram.com/phalaharam.official/"
                  className="text-xl text-primaryTextText hover:text-primary "
                >
                  <FaInstagram size={24}/>
                </a>
                <a
                  href="tel:8073597390"
                  className="text-xl text-primaryTextText hover:text-primary "
                >
                  <FaFacebook size={24}/>
                </a>
                <a
                  href="whatsapp://send?text=Hello%20there!&phone=+91 807 359 7390"
                  className="text-xl text-primaryTextText hover:text-primary "
                >
                  <FaWhatsapp size={24}/>
                </a>
                <a
                  href="tel:8073597390"
                  className="text-xl text-primaryTextText hover:text-primary "
                >
                  <FaPhoneAlt size={20}/>
                </a>
                <a
                  href="tel:8073597390"
                  className="text-xl text-primaryTextText hover:text-primary "
                >
                  <FaYoutube size={24}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4 mx-auto border-t-2 border-primary">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong className="text-primaryTextText ">Phalaharam</strong>. All
            Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="#intro" className="text-primaryTextText ">
              Phalaharam
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

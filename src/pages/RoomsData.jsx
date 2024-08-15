import React from "react";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import slideOne from "../assets/slide_one.jpeg";
import slideTwo from "../assets/slide_two.jpeg";
import slideThree from "../assets/slide_three.jpeg";
import slideFour from "../assets/slide_one.jpeg";
import slideFive from "../assets/slide_two.jpeg";
import slideSix from "../assets/slide_three.jpeg";

const RoomsData = () => {
  // Arrays of images for each room
  const coupleTheatreImages = [slideOne, slideTwo, slideThree];
  const friendsRoomImages = [slideFive, slideSix, slideFour];
  const familyTheatreImages = [slideThree, slideOne, slideFive];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseonhover: false,
    
  };

  // Array of room data
  const rooms = [
    {
      title: "Couple Theatre",
      description:
        "Enjoy a romantic getaway in our cozy Couple Theater, perfect for a private, intimate experience.",
      capacity: "2 People",
      buttonText: "Book Now",
      images: coupleTheatreImages,
      icon: <FaUserFriends />,
    },
    {
      title: "Friends Room",
      description:
        "Gather your friends and dive into a fun-filled stay in our spacious Friends Theater, designed for great memories.",
      capacity: "4 - 6 People",
      buttonText: "Book Now",
      images: friendsRoomImages,
      icon: <FaUsers />,
    },
    {
      title: "Family Theatre",
      description:
        "Create lasting family memories in our comfortable Family Theater, offering ample space and modern amenities.",
      capacity: "8 - 12 People",
      buttonText: "Book Now",
      images: familyTheatreImages,
      icon: <FaUsers />,
    },
  ];

  return (
    <div id="roomsdata" className="py-12 bg-lightBg">
      <h2 className="mb-12 text-4xl font-bold text-center text-gray-900 sm:text-5xl">
        Our Theatres
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4 md:gap-10 md:px-5">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="max-w-full p-4 transition-transform duration-300 ease-in-out bg-white border-2 border-gray-300 rounded-lg hover:border-primary hover:cursor-pointer group sm:max-w-sm sm:p-6"
          >
            {/* React Slick Carousel for images */}
            <Slider {...sliderSettings} className="rounded-lg">
              {room.images.map((imageSrc, imgIndex) => (
                <div key={imgIndex}>
                  <img
                    src={imageSrc}
                    alt={`${room.title} image ${imgIndex + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              ))}
            </Slider>

            <div className="mt-4 sm:mt-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <h5 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                  {room.title}
                </h5>
              </div>

              <div className="flex items-center mb-3 sm:mb-4">
                <p className="text-base text-gray-600 sm:text-lg">
                  {room.description}
                </p>
              </div>

              <div className="flex items-center mb-4 sm:mb-6">
                <div className="text-xl text-primary sm:text-2xl">
                  {room.icon}
                </div>
                <span className="ml-2 text-base font-medium text-gray-700 sm:text-lg">
                  {room.capacity}
                </span>
              </div>

              <div className="flex justify-center">
                <button className="px-5 py-2 font-medium transition duration-300 ease-in-out transform bg-transparent border-2 rounded-lg text-primary border-primary group-hover:bg-primary group-hover:text-white text-md sm:px-6 sm:py-3">
                  {room.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsData;

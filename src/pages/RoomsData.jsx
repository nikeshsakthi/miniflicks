import { FaUserFriends, FaUsers } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="py-12 bg-lightBg">
      <h2 className="mb-12 text-5xl font-bold text-center text-gray-900">
        Our Theatres
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-5">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="max-w-sm p-6 transition-transform duration-300 ease-in-out bg-white border-2 border-gray-300 rounded-lg hover:border-primary hover:cursor-pointer group"
          >
            {/* Swiper Carousel for images */}
            <Swiper
              modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
              slidesPerView={1}
              effect="coverflow"
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="rounded-lg"
              speed={2000} // Duration of transition between slides (2 seconds)
            >
              {room.images.map((imageSrc, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <img
                    src={imageSrc}
                    alt={`${room.title} image ${imgIndex + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-6">
              <div className="flex items-center mb-4">
                <h5 className="text-3xl font-semibold text-gray-800">
                  {room.title}
                </h5>
              </div>

              <div className="flex items-center mb-4">
                <p className="text-lg text-gray-600">{room.description}</p>
              </div>

              <div className="flex items-center mb-6">
                <div className="text-2xl text-primary">{room.icon}</div>
                <span className="ml-2 text-lg font-medium text-gray-700">
                  {room.capacity}
                </span>
              </div>

              <div className="flex justify-center">
                <button className="px-6 py-3 font-medium transition duration-300 ease-in-out transform bg-transparent border-2 rounded-lg text-primary border-primary group-hover:bg-primary group-hover:text-white focus:ring-4 focus:outline-none focus:ring-primary text-md">
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

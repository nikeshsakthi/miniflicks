import {
    Navigation,
    Autoplay,
    Pagination,
    Scrollbar,
    A11y,
  } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import "swiper/css/autoplay";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/effect-coverflow";
  import { FaUser } from "react-icons/fa";
  
  const RoomCard = ({
    title,
    description,
    price,
    capacity,
    buttonText,
    images,
  }) => {
    return (
      <div className="max-w-sm p-4 overflow-hidden bg-white border-2 border-black rounded-lg shadow-md">
        <div>
          <h5 className="mb-4 text-4xl font-semibold tracking-tight text-center text-primaryText">
            {title}
          </h5>
        </div>
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
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="rounded-t-lg"
          speed={2000} // Duration of transition between slides (2 seconds)
        >
          {images.map((imageSrc, index) => (
            <SwiperSlide key={index}>
              <img
                src={imageSrc}
                alt={`${title} image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
  
        <div className="px-5 py-2 pb-5">
          <p className="text-secondaryText">{description}</p>
  
          <div className="flex items-center mt-2.5 mb-5">
            <FaUser className="mr-2 text-primaryText" />
            <span className="backdrop-blur-2xl border-white border text-primaryText text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {capacity}
            </span>
          </div>
  
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primaryText">{price}</span>
            <button className="text-white bg-primary  hover:bg-secondaryText focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              {buttonText}
            </button>
            
          </div>
        </div>
      </div>
    );
  };
  
  const RoomsData = () => {
    return (
      <div className="py-6 bg-lightBg">
        <h2 className="mb-10 text-4xl font-bold text-center text-primaryText">
          Bangalore Location
        </h2>
  
        <div className="flex flex-wrap justify-center gap-10 px-5">
          <RoomCard
            title="Couple Theatre"
            description="Perfect for 2 people including taxes (Decorations included)"
            price="₹1499"
            capacity="2 People Only"
            buttonText="Book Now"
            images={[
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
            ]}
          />
  
          <RoomCard
            title="Friends Room"
            description="₹1799 with Decoration till 4 people or less including taxes (₹200 per extra person)"
            price="₹1799"
            capacity="4 - 6 People"
            buttonText="Book Now"
            images={[
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
            ]}
          />
  
          <RoomCard
            title="Family Theatre"
            description="₹1999 with Decoration till 4 people or less including taxes (₹200 per extra person)"
            price="₹1999"
            capacity="8 - 12 People"
            buttonText="Book Now"
            images={[
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
              "../public/Images/image.png",
            ]}
          />
        </div>
      </div>
    );
  };
  
  export default RoomsData;
  
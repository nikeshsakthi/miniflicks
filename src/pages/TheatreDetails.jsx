import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slideOne from "../assets/slide_one.jpeg";
import slideTwo from "../assets/slide_two.jpeg";
import slideThree from "../assets/slide_three.jpeg";

function TheatreDetails() {
  const images = [slideOne, slideTwo, slideThree];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex justify-start h-[100vh] p-12">
      <div className="w-[50%]">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TheatreDetails;

import React, { useState, useEffect } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import Slider from "react-slick";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from "date-fns";
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

  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [currentTime, setCurrentTime] = useState("");
  const [today, setToday] = useState("");

  const timeSlots = [
    {
      label: "09:30 AM - 12:30 PM",
      icon: <FiSun />,
      start: "09:30",
      end: "12:30",
    },
    {
      label: "01:00 PM - 04:00 PM",
      icon: <FiSun />,
      start: "13:00",
      end: "16:00",
    },
    {
      label: "04:30 PM - 06:00 PM",
      icon: <FiSun />,
      start: "16:30",
      end: "18:00",
    },
    {
      label: "06:30 PM - 09:30 PM",
      icon: <HiOutlineMoon />,
      start: "18:30",
      end: "21:30",
    },
    {
      label: "10:00 PM - 01:00 AM",
      icon: <HiOutlineMoon />,
      start: "22:00",
      end: "01:00",
    },
  ];

  useEffect(() => {
    const todayDate = new Date();
    setToday(format(todayDate, "yyyy-MM-dd"));
    setCurrentTime(
      String(todayDate.getHours()).padStart(2, "0") +
        ":" +
        String(todayDate.getMinutes()).padStart(2, "0")
    );
  }, []);

  const isPastTime = (startTime) => {
    if (currentDate !== today) return false;

    const [currentHours, currentMinutes] = currentTime.split(":");
    const [slotHours, slotMinutes] = startTime.split(":");
    return (
      parseInt(currentHours) > parseInt(slotHours) ||
      (parseInt(currentHours) === parseInt(slotHours) &&
        parseInt(currentMinutes) > parseInt(slotMinutes))
    );
  };

  const handleDateClick = (arg) => {
    setCurrentDate(arg.dateStr);
  };

  return (
    <div className="flex justify-start p-12">
      <div className="w-[20%]">
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
      {/* Right Side: Calendar Appointment */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full p-6 bg-white border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold text-center lg:text-left">
            Select Date & Time
          </h2>
          <div className="flex gap-2">
            <div className="mb-4  w-[50%]">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                selectable={true}
                dayMaxEventRows={true}
                events={[]} // Add any events if necessary
                headerToolbar={{
                  left: "prev,next",
                  center: "title",
                  right: "today",
                }}
                height="auto"
                contentHeight={400}
                aspectRatio={1.5}
              />
            </div>
            <div className="flex flex-col gap-2  w-[50%]">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`flex-1 flex items-center justify-center p-3 border rounded-lg transition-colors duration-300 ${
                    isPastTime(slot.start) ? "line-through text-gray-400" : ""
                  } ${
                    selectedTime === slot.label
                      ? "bg-primary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  disabled={isPastTime(slot.start)}
                  onClick={() => setSelectedTime(slot.label)}
                >
                  <span className="mr-2">{slot.icon}</span>
                  <span className="text-sm md:text-base">{slot.label}</span>
                </button>
              ))}
              <button
                className={`mt-6 w-full py-3 rounded-lg transition-colors duration-300 ${
                  selectedTime
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "bg-gray-300 text-gray-700 cursor-not-allowed"
                }`}
                disabled={!selectedTime}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheatreDetails;

import React, { useState, useEffect } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import Slider from "react-slick";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Swal from "sweetalert2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format, isBefore, parseISO } from "date-fns";
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

  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedTheatre, setSelectedTheatre] = useState("Couple Theatre");
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [currentTime, setCurrentTime] = useState("");
  const [today, setToday] = useState("");

  const timeSlots = {
    "Couple Theatre": [
      {
        label: "09:00 AM - 11:30 PM",
        icon: <FiSun />,
        start: "09:00",
        end: "23:30",
      },
      {
        label: "12:15 PM - 02:45 PM",
        icon: <FiSun />,
        start: "12:15",
        end: "14:45",
      },
      {
        label: "03:30 PM - 06:00 PM",
        icon: <FiSun />,
        start: "15:30",
        end: "18:00",
      },
      {
        label: "06:45 PM - 09:15 PM",
        icon: <HiOutlineMoon />,
        start: "18:45",
        end: "21:15",
      },
      {
        label: "10:00 PM - 12:30 AM",
        icon: <HiOutlineMoon />,
        start: "22:00",
        end: "00:30",
      },
    ],
    "Friends Theatre": [
      {
        label: "09:30 AM - 12:00 PM",
        icon: <FiSun />,
        start: "09:30",
        end: "12:00",
      },
      {
        label: "12:45 PM - 03:15 PM",
        icon: <FiSun />,
        start: "12:45",
        end: "15:15",
      },
      {
        label: "04:00 PM - 06:30 PM",
        icon: <FiSun />,
        start: "16:00",
        end: "18:30",
      },
      {
        label: "07:15 PM - 09:45 PM",
        icon: <HiOutlineMoon />,
        start: "19:15",
        end: "21:45",
      },
      {
        label: "10:30 PM - 01:00 AM",
        icon: <HiOutlineMoon />,
        start: "22:30",
        end: "01:00",
      },
    ],
    "Family Theatre": [
      {
        label: "10:00 AM - 01:00 PM",
        icon: <FiSun />,
        start: "10:00",
        end: "13:00",
      },
      {
        label: "02:00 PM - 05:00 PM",
        icon: <FiSun />,
        start: "14:00",
        end: "17:00",
      },
      {
        label: "06:00 PM - 09:00 PM",
        icon: <HiOutlineMoon />,
        start: "18:00",
        end: "21:00",
      },
      {
        label: "10:00 PM - 01:00 AM",
        icon: <HiOutlineMoon />,
        start: "22:00",
        end: "01:00",
      },
    ],
  };

  useEffect(() => {
    const todayDate = new Date();
    setToday(format(todayDate, "yyyy-MM-dd"));
    setCurrentTime(
      String(todayDate.getHours()).padStart(2, "0") +
        ":" +
        String(todayDate.getMinutes()).padStart(2, "0")
    );
  }, []);

  const isPastTime = (slotDate, startTime) => {
    const [slotHours, slotMinutes] = startTime.split(":");
    const slotDateTime = parseISO(`${slotDate}T${slotHours}:${slotMinutes}:00`);

    return isBefore(slotDateTime, new Date());
  };

  const handleDateClick = (arg) => {
    setCurrentDate(arg.dateStr);
    setSelectedTimes([]); // Reset selected times when the date is changed
  };

  const toggleTimeSlot = (slot) => {
    setSelectedTimes((prevSelectedTimes) => {
      if (prevSelectedTimes.includes(slot)) {
        return prevSelectedTimes.filter(
          (selectedSlot) => selectedSlot !== slot
        );
      } else {
        return [...prevSelectedTimes, slot];
      }
    });
  };

  const handleProceedClick = () => {
    Swal.fire({
      title: "Selected Slot Timings",
      html: `The following time slots have been selected:<br><strong>${selectedTimes.join(
        "<br>"
      )}</strong>`,
      icon: "success",
      confirmButtonText: "OK",
    });

    setSelectedTimes([]);
  };

  const handleTheatreChange = (event) => {
    setSelectedTheatre(event.target.value);
    setSelectedTimes([]); // Reset selected times when the theatre type is changed
  };

  return (
    <div className="flex flex-col justify-start gap-8 p-4 lg:flex-row md:p-8 lg:p-12">
      <div className="w-full lg:w-[30%]">
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
      <div className="flex flex-col items-center w-full lg:w-[70%] p-4 md:p-6 bg-white border border-gray-300 rounded-lg">
        <h2 className="mb-4 text-lg font-bold text-center md:text-xl lg:text-left">
          Select Date & Time
        </h2>
        <div className="flex flex-col w-full gap-4 md:flex-row md:gap-12">
          <div className="mb-4 w-full md:w-[400px] lg:w-[600px] h-[300px] md:h-[400px]">
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
              height="100%"
              contentHeight={400}
              aspectRatio={1}
            />
          </div>

          <div className="flex flex-col gap-2 w-full md:w-[35%] lg:w-[23%]">
            <div className="flex justify-center gap-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Couple Theatre"
                  checked={selectedTheatre === "Couple Theatre"}
                  onChange={handleTheatreChange}
                />
                <span className="ml-2">Couple</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Friends Theatre"
                  checked={selectedTheatre === "Friends Theatre"}
                  onChange={handleTheatreChange}
                />
                <span className="ml-2">Friends</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Family Theatre"
                  checked={selectedTheatre === "Family Theatre"}
                  onChange={handleTheatreChange}
                />
                <span className="ml-2">Family</span>
              </label>
            </div>
            {timeSlots[selectedTheatre].map((slot, index) => (
              <button
                key={index}
                className={`flex-1 flex items-center justify-center p-3 border rounded-lg transition-colors duration-300 ${
                  isPastTime(currentDate, slot.start)
                    ? "line-through text-gray-400"
                    : ""
                } ${
                  selectedTimes.includes(slot.label)
                    ? "bg-primary text-white border-primary"
                    : "bg-gray-100 hover:border-primary hover:text-primary"
                }`}
                disabled={isPastTime(currentDate, slot.start)}
                onClick={() => toggleTimeSlot(slot.label)}
              >
                <span className="mr-2">{slot.icon}</span>
                <span className="text-sm md:text-base">{slot.label}</span>
              </button>
            ))}
            <button
              className={`mt-6 w-full py-3 rounded-lg transition-colors duration-300 ${
                selectedTimes.length > 0
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-gray-300 text-gray-700 cursor-not-allowed"
              }`}
              disabled={selectedTimes.length === 0}
              onClick={handleProceedClick}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheatreDetails;

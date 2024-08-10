import React, { useEffect, useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { FiSun } from "react-icons/fi";
import BabyShowerImage from "../assets/occassion/baby_shower.svg";
import BirthdayImage from "../assets/occassion/birthday.svg";
import BrideToBeImage from "../assets/occassion/bride_to_be.svg";
import CongratulationsImage from "../assets/occassion/celebration.svg";
import FarewellImage from "../assets/occassion/farewell.svg";
import MarriageProposalImage from "../assets/occassion/marriage_proposal.svg";
import RomanticDateImage from "../assets/occassion/romantic_date.svg";
import AnniversaryImage from "../assets/occassion/wedding_anniversary.svg";

const EventCard = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [today, setToday] = useState("");

  const events = [
    { title: "Anniversary", imageSrc: AnniversaryImage },
    { title: "Baby Shower", imageSrc: BabyShowerImage },
    { title: "Birthday Bash", imageSrc: BirthdayImage },
    { title: "Bride-to-Be Party", imageSrc: BrideToBeImage },
    { title: "Congratulations", imageSrc: CongratulationsImage },
    { title: "Farewell Party", imageSrc: FarewellImage },
    { title: "Marriage Proposal", imageSrc: MarriageProposalImage },
    { title: "Romantic Date", imageSrc: RomanticDateImage },
  ];

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
    const formattedDate = todayDate.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
    setToday(formattedDate);
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

  return (
    <div className="flex flex-col p-4 space-y-8 lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-8">
      {/* Left Side: Event Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:w-2/3">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2 overflow-hidden bg-white border border-gray-300 rounded-lg hover:border-primary hover:cursor-pointer"
          >
            <img
              src={event.imageSrc}
              alt={event.title}
              className="w-40 h-40 object-fit"
            />
            <h2 className="mt-2 text-lg font-bold text-center">
              {event.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Right Side: Calendar Appointment */}
      <div className="flex flex-col items-center w-full lg:w-1/3">
        <div className="w-full p-6 bg-white border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold text-center lg:text-left">
            Select Date & Time
          </h2>
          <input
            type="date"
            className="w-full p-2 mb-4 border rounded-lg"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
          <div className="flex flex-col gap-2">
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
          </div>
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
  );
};

export default EventCard;

import React from 'react';
import  AnniversaryImage from '../assets/occassion/wedding_anniversary.svg';
import BabyShowerImage from '../assets/occassion/baby_shower.svg';
import BirthdayImage from '../assets/occassion/birthday.svg';
import BrideToBeImage from '../assets/occassion/bride_to_be.svg';
import CongratulationsImage from '../assets/occassion/celebration.svg';
import FarewellImage from '../assets/occassion/farewell.svg';
import MarriageProposalImage from '../assets/occassion/marriage_proposal.svg';
import RomanticDateImage from '../assets/occassion/romantic_date.svg';

const EventCard = () => {
  const events = [
    {
      title: "Anniversary",
      imageSrc: AnniversaryImage,
    },
    {
      title: "Baby Shower",
      imageSrc: BabyShowerImage,
    },
    {
      title: "Birthday Bash",
      imageSrc: BirthdayImage,
    },
    {
      title: "Bride-to-Be Party",
      imageSrc: BrideToBeImage,
    },
    {
      title: "Congratulations",
      imageSrc: CongratulationsImage,
    },
    {
      title: "Farewell Party",
      imageSrc: FarewellImage,
    },
    {
      title: "Marriage Proposal",
      imageSrc: MarriageProposalImage,
    },
    {
      title: "Romantic Date",
      imageSrc: RomanticDateImage,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-2 p-4 lg:grid-cols-3">
      {/* Left Side: Event Cards */}
      <div className="grid grid-cols-1 gap-4 lg:col-span-2 md:grid-cols-4">
        {events.map((event, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-40 p-2 overflow-hidden bg-white border border-gray-300 rounded-lg hover:border-primary hover:cursor-pointer">
            <img src={event.imageSrc} alt={event.title} className="w-32 object-fit" />
              <h2 className="mt-2 font-bold text-md">{event.title}</h2>
          </div>
        ))}
      </div>

      {/* Right Side: Calendar Appointment */}
      <div>
        <div className="p-4 bg-white border border-gray-300 rounded-lg">
          <h2 className="mb-4 text-xl font-bold">Select Date & Time</h2>
          <input type="date" className="w-full p-2 mb-4 border" />
          <div className="grid grid-cols-2 gap-2">
            <button className="p-2 border">9:30 AM - 12:30 PM</button>
            <button className="p-2 border">1:00 PM - 4:00 PM</button>
            <button className="p-2 border">4:30 PM - 6:00 PM</button>
            <button className="p-2 border">6:30 PM - 9:30 PM</button>
            <button className="p-2 border">10:00 PM - 1:00 AM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

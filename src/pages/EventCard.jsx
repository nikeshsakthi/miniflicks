import React from "react";
import BabyShowerImage from "../assets/occassion/baby_shower.svg";
import BirthdayImage from "../assets/occassion/birthday.svg";
import BrideToBeImage from "../assets/occassion/bride_to_be.svg";
import CongratulationsImage from "../assets/occassion/celebration.svg";
import FarewellImage from "../assets/occassion/farewell.svg";
import MarriageProposalImage from "../assets/occassion/marriage_proposal.svg";
import RomanticDateImage from "../assets/occassion/romantic_date.svg";
import AnniversaryImage from "../assets/occassion/wedding_anniversary.svg";

const EventCard = () => {
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
    </div>
  );
};

export default EventCard;

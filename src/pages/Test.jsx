import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  { date: new Date(2024, 7, 10), availability: 'unavailable' },
  { date: new Date(2024, 7, 21), availability: 'available' },
  { date: new Date(2024, 7, 22), availability: 'pending' },
  { date: new Date(2024, 8, 23), availability: 'booked' },
  { date: new Date(2024, 8, 24), availability: 'partially-booked' },
];

const Test = () => {
    const [value, setValue] = useState(new Date());

    const getTileClass = ({ date, view }) => {
        if (view === 'month') {
        //   console.log('Checking date:', date);

        const today = new Date();
      const isToday = date.getFullYear() === today.getFullYear() &&
                      date.getMonth() === today.getMonth() &&
                      date.getDate() === today.getDate();
      if (isToday) {
        return 'today';
      }
      
          const isSpecificDate = date.getFullYear() === 2024 && date.getMonth() === 7 && date.getDate() === 15;
          if (isSpecificDate) {
            // console.log('Special date found:', date);
            return 'orange';
          }
      
          const matchingEvent = events.find(event => {
            const isSameYear = date.getFullYear() === event.date.getFullYear();
            const isSameMonth = date.getMonth() === event.date.getMonth();
            const isSameDay = date.getDate() === event.date.getDate();
      
            // console.log(date,'Checking event date:', event.date);
            return isSameYear && isSameMonth && isSameDay;
          });
      
          if (matchingEvent) {
            // console.log('Event found for date:', date, 'Event:', matchingEvent);
            const availabilityClassMap = {
              unavailable: 'unavailable',
              available: 'available',
              pending: 'pending',
              booked: 'booked',
              'partially-booked': 'partially-booked'
            };
      
            return availabilityClassMap[matchingEvent.availability] || '';
          } else {
            // console.log('No event found for date:', date);
          }
        }
        return '';
      };
      
    

  const getTileContent = ({ date, view }) => {
    if (view === 'month' && value.getDate() === date.getDate() && value.getMonth() === date.getMonth() && value.getFullYear() === date.getFullYear()) {
      return <div className="selected-date"></div>;
    }
  };

  const handleClickDay = (date) => {
    console.log('Clicked date:', date);
  };
  return (
    <div className="p-4 mt-14">
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={getTileClass}
        tileContent={getTileContent}
        onClickDay={handleClickDay}
      />
    </div>
  );
};

export default Test;

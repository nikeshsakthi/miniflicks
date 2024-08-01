import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react'; 
import { Button, ButtonGroup } from '@mui/material';



const RoomBookingCard = () => {
    const [value, setValue] = useState(null);

    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const timeSlots = [
        '09:30 AM - 12:30 PM',
        '01:00 PM - 04:00 PM',
        '04:30 PM - 06:00 PM',
        '06:30 PM - 09:30 PM',
        '10:00 PM - 01:00 AM'
    ];

    const handleTimeSlotSelection = (slot) => {
        setSelectedTimeSlot(slot);
    };

  
    // Handle the state changes for date and time
    const handleChange = (newValue) => {
        setValue(newValue);
    };

  // Placeholder images array. Replace these with actual image paths or URLs.
  const images = [
    '../public/Images/image.png',
    '../public/Images/image.png',
    '../public/Images/image.png',
    '../public/Images/image.png',
    '../public/Images/image.png',
    '../public/Images/image.png',
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="swiper-container">
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
            navigation={true}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            style={{ width: '500px', height: '500px' }}
            className="rounded-t-lg"
            speed={2000} // Duration of transition between slides (2 seconds)
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index}`} className="object-cover w-full h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Couple Theatre</h2>
          <div className="text-4xl font-bold text-red-500">₹1,499.00</div>
          <div className="flex flex-col p-4 space-y-2 bg-gray-100">
            <div className='flex gap-4 '>
            <div className="flex items-center justify-center px-4 font-semibold text-left h-14 text-md">
              Choose Date then Slot Time
            </div>
            <DatePicker
            label="Select Event Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
             />
             
            {value && (
                <div>
                    <div className="font-semibold">Booking Time:</div>
                    <ButtonGroup orientation="vertical" fullWidth>
                        {timeSlots.map((slot, index) => (
                            <Button
                                key={index}
                                variant={selectedTimeSlot === slot ? 'contained' : 'outlined'}
                                onClick={() => handleTimeSlotSelection(slot)}
                            >
                                {slot}
                            </Button>
                        ))}
                    </ButtonGroup>
                </div>
            )}
           </div>

            
            {/* Rest of the booking form */}
            <div className="flex items-center justify-start px-4 my-4 space-x-6" >
            <label htmlFor="no-of-people" className="text-gray-700">No. of People</label>
            <select id="no-of-people" className="w-20 h-12 px-4 border border-gray-300 rounded-lg shadow-sm cursor-pointer focus:outline-none focus:border-indigo-500">
              <option>2</option>
              <option>3</option>
              <option>4</option>
              {/* Add more options as needed */}
            </select>

            <label htmlFor="decoration-details" className="text-gray-700">Decoration details *</label>
            <select id="decoration-details" required className="h-12 px-2 border border-gray-300 rounded-lg shadow-sm cursor-pointer w-60 focus:outline-none focus:border-indigo-500">
              <option>Select an option</option>
              {/* Add more options as needed */}
            </select>
            </div>
            
            <div className='flex items-center justify-center'>
            <Link to="/booking" className=" w-40 text-center text-white bg-red-500 hover:bg-red-600  font-medium rounded-lg text-sm px-5 py-2.5 ">
              BOOK NOW
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </LocalizationProvider>
  );
};

export default RoomBookingCard;

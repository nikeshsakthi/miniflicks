import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../index.css';

const HomeCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1711645372528-cddb2c6eb565?q=80&w',
    'https://images.unsplash.com/photo-1711348260213-b4f6c9c1d6be?q=80&w',
    'https://images.unsplash.com/photo-1710946264456-0786fd17d34a?q=80&w',
    'https://images.unsplash.com/photo-1711669321296-227ff3bc1318?q=80&w'
    
    // Add more images as needed
  ];

  return (
    <Swiper
        modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
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
        className="rounded-t-lg"
        speed={2000} // Duration of transition between slides (2 seconds)
        style={{width: '100vw', height: '100vh'}}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100vw', height: '100%', maxWidth: '100%', objectFit: 'cover' }}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
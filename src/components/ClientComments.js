import React from 'react';
// import BlondOne from '../img/blond_slide_1.png';
import { ClientOne } from './ClientOne';
import { ClientTwo } from './ClientTwo';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const ClientComments = () => {
  return (
    <div className='bg-zinc-50 py-10 px-4 sm:px-10 lg:px-28 mb-10'>
      <Swiper
        // navigation={true}
        modules={[Navigation]}
        edgeSwipeThreshold='50px'
        loop={true}
      >
        <SwiperSlide>
          <ClientOne />
        </SwiperSlide>
        <SwiperSlide>
          <ClientTwo />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

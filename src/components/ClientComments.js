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
    <div className='bg-zinc-50 py-10 px-28 mb-40'>
      {/* <div className='flex flex-col sm:flex-row'>
        <div className='basis-1/2 pr-24'>
          <div className='flex flex-col justify-center items-center h-full'>
            <h1 className='playfair text-4xl leading-normal blonde-one'>
              Fits perfectly and very comfortable to wear. Thank You for
              providing dresses that I Love!!!
            </h1>
            <h2 className='gtamerica text-base leading-normal w-full justify-start mt-8 mb-6'>
              - VAY B.
            </h2>
            <a
              href='https://www.karenkane.com/collections/home'
              className='underline font-medium text-xs w-full'
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className='basis-1/2'>
          <div className='relative block'>
            <img src={BlondOne} alt='' className='w-full h-full' />
          </div>
        </div>
      </div> */}

      <Swiper navigation={true} modules={[Navigation]} edgeSwipeThreshold="50px" loop={true}>
        <SwiperSlide >
          <ClientOne />
        </SwiperSlide>
        <SwiperSlide>
          <ClientTwo />
        </SwiperSlide>
      </Swiper>

      {/* <ClientOne />
      <ClientTwo /> */}
    </div>
  );
};

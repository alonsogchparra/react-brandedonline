import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { illustrations } from '../utils/illustrations';

export const FollowKaren = () => {
  return (
    <div className='mb-10'>
      <div>
        <h2 className='text-center gtamerica text-lg font-light mb-10'>
          @KarenKane
        </h2>
      </div>
      <div className='karen-instagram'>
        <Swiper
          spaceBetween={5}
          slidesPerView={6}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            100: {
              width: 200,
              slidesPerView: 1,
            },
            440: {
              width: 440,
              slidesPerView: 2,
            },
            640: {
              width: 640,
              slidesPerView: 3,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
            1000: {
              width: 1000,
              slidesPerView: 5,
            },
            1440: {
              width: 1440,
              slidesPerView: 6,
            },
          }}
        >
          {illustrations.map(({ id, image }) => (
            <SwiperSlide key={id}>
              <div className='flex'>
                <div className='relative block w-[300px] h-[300px]'>
                  <img src={image} alt='' className='w-full h-full' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

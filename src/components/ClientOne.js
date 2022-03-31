import React from 'react';
import BlondOne from '../img/blond_slide_1.png';

export const ClientOne = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='basis-1/2 pr-24'>
        <div className='flex flex-col justify-center items-center h-full'>
          <h1 className='playfair text-4xl leading-normal blonde-one text-primary'>
            Fits perfectly and very comfortable to wear. Thank You for providing
            dresses that I Love!!!
          </h1>
          <h2 className='gtamerica text-base leading-normal w-full justify-start mt-8 mb-6 text-secondary'>
            - VAY B.
          </h2>
          <a
            href='https://www.karenkane.com/collections/home'
            className='underline font-medium text-xs w-full mb-10'
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
    </div>
  );
};

import React from 'react';
import Woman from '../img/woman.png';
import Necklace from '../img/necklace.png';

export const SpringSantuary = () => {
  return (
    <div className='mt-14 mb-10'>
      <h2 className='playfair text-4xl text-center text-primary'>
        Your Spring Sanctuary
      </h2>
      <div className='my-4'>
        <p className='gtamerica text-center text-secondary'>
          Relax at home with new classic designs, timeless prints, and globally
          inspired goods.
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <a
          href='https://www.karenkane.com/collections/home'
          className='underline font-medium text-sm'
        >
          Shop New Home Arrivals
        </a>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-5 sm:px-24 mt-10'>
        <div className='relative block'>
          <a href='https://www.karenkane.com//collections/accessories-view-all'>
            <img src={Necklace} alt='necklace' className='w-full h-full' />
          </a>
        </div>
        <div className='relative block'>
          <a href='https://www.karenkane.com//collections/accessories-view-all'>
            <img src={Woman} alt='necklace' className='w-full h-full' />
          </a>
        </div>

        <div className='row-start-2 lg:mt-3 py-10 px-8 sm:py-1 sm:px-0'>
          <h2 className='playfair text-3xl text-primary'>
            Most Loved Artisan Jewelry
          </h2>
          <p className='gtamerica my-2 text-secondary'>
            From rich turquoise to earthy green, these artisan accessories are
            simply lovely.
          </p>
          <a
            href='https://www.karenkane.com/collections/home'
            className='underline font-medium text-sm'
          >
            Shop Accessories
          </a>
        </div>
        <div className='lg:mt-3 py-10 px-8 sm:py-1 sm:px-0'>
          <h2 className='playfair text-3xl text-primary'>
            New Flattering Fits
          </h2>
          <p className='gtamerica my-2 text-secondary'>
            Give your wardrobe the update it deserves
          </p>
          <a
            href='https://www.karenkane.com/collections/home'
            className='underline font-medium text-sm'
          >
            Shop Plus
          </a>
        </div>
      </div>
    </div>
  );
};

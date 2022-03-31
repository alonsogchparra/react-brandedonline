import React from 'react';
import BlondeTwo from '../img/blond_slide_2.png';

export const ClientTwo = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='basis-1/2 pr-24'>
        <div className='flex flex-col justify-center items-center h-full'>
          <h1 className='playfair text-4xl leading-normal blonde-one text-primary'>
            Nice fabric. This dress has a great, drapey feel. Love the 3/4
            sleeves especially.
          </h1>
          <h2 className='gtamerica text-base leading-normal w-full justify-start mt-8 mb-6 text-secondary'>
            - SUE W.
          </h2>
          <a
            href='https://www.karenkane.com/collections/home'
            className='underline font-medium text-xs w-full mb-10'
          >
            Shop The 3 Quarter Sleeve Drees
          </a>
        </div>
      </div>
      <div className='basis-1/2'>
        <div className='relative block'>
          <img src={BlondeTwo} alt='' className='w-full h-full' />
        </div>
      </div>
    </div>
  );
};

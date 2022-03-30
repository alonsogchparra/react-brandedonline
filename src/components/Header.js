import React from 'react';

export const Header = () => {
  return (
    <div className='w-full p-2 bg-gray-50'>
      <div className='flex justify-evenly'>
        <div className='text-center inline-flex w-full border-none  sm:border-r-2 sm:border-solid border-r-black'>
          <p className='w-full gtamerica text-xs font-light'>
            Free Shipping on Orders Over $100
          </p>
        </div>
        <div className='text-center inline-flex w-full'>
          <p className='w-full gtamerica text-xs font-light'>
            Get notified first and stay on top of the trends with text alerts.{' '}
            <strong className='underline'>SIGN UP</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

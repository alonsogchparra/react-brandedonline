import React from 'react';

export const Header = () => {
  return (
    <div className='w-full pt-3 pb-2 px-16 bg-header_bg'>
      <div className='flex justify-evenly items-center'>
        <div className='text-center inline-flex w-full border-none lg:border-header lg:border-solid border-r-black'>
          <p className='w-full text-xs font-light'>
            Free Shipping on Orders Over $100
          </p>
        </div>
        <div className='text-center w-full hidden lg:inline-flex'>
          <p className='w-full text-xs font-light'>
            Get notified first and stay on top of the trends with text alerts.{' '}
            <strong className='underline font-bold'>SIGN UP</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

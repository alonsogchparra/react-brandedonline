import React from 'react';

export const Rewards = () => {
  return (
    <div className='bg-plants'>
      <div className='grid grid-cols-1 sm:grid-cols-2 mx-20 py-10'>
        <div className='flex flex-col mb-5'>
          <h1 className='playfair text-4xl mb-10 text-center sm:text-left'>
            Karen Kane Rewards
          </h1>
          <p className='gtamerica text-center sm:text-left'>
            Members get rewarded for shopping, sharing their favorite styles,
            reviewing best-selling looks, and more.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full text-center mb-5'>
            <button
              className='bg-black px-16 py-3 text-white 
            hover:bg-white hover:text-black hover:border-2 hover:border-black'
            >
              Join Now
            </button>
          </div>

          <h1 className='w-full text-center'>
            Already a Member?
            <a href='https://www.google.com'>
              {' '}
              <span className='underline'>LOG IN</span>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

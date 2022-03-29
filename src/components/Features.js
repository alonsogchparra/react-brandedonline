import React from 'react';

export const Features = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-5 gap-y-5 mt-10'>
        <div className='relative block'>
          <div className='absolute top-1/2 w-full'>
            <h2 className='text-white playfair text-4xl text-center'>
              Best-Sellers
            </h2>
          </div>
          <a href='https:://google.com'>
            <img
              src='https://cdn.shopify.com/s/files/1/0253/4355/7737/files/Best_Sellers_1280x.png?v=1635954358'
              alt='best-sellers'
              className='w-full h-full'
            />
          </a>
        </div>
        <div className='relative block'>
          <div className='absolute top-1/2 w-full'>
            <h2 className='text-white playfair text-4xl text-center'>
              Karen's Blog
            </h2>
          </div>
          <a href='https:://google.com'>
            <img
              src='https://cdn.shopify.com/s/files/1/0253/4355/7737/files/Blog_1280x.png?v=1635954358'
              alt='best-sellers'
              className='w-full h-full'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

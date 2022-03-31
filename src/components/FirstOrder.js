import React from 'react';

export const FirstOrder = () => {
  return (
    <div className='bg-slate-100 mt-10 py-10'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='playfair text-4xl'>Receive 20% Off Your First Order</h1>
        <p className='gtamerica text-gray-600 my-5'>
          Get notified first and stay on top of the trends with emails and text
          alerts
        </p>
        <div>
          <button
            className='bg-black text-white hover:bg-white hover:border-2 
          hover:border-black hover:text-black px-16 py-3'
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

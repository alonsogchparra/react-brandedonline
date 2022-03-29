import React from 'react';
import AmericaRiveraImg from '../../src/img/component_one.png';
import AmericaRiveraGif from '../../src/img/component_one_gif_responsive.gif';

export const AmericanRivera = () => {
  return (
    <div className=''>
      <a href='https://www.arkusnexus.com/' target='_blank' rel='noreferrer'>
        <img
          src={AmericaRiveraImg}
          alt=''
          width='100%'
          className='hidden sm:flex'
        />
        <img src={AmericaRiveraGif} alt='' width='auto' className='sm:hidden' />
      </a>
    </div>
  );
};

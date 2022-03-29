import React from 'react';
import DishesImg from '../img/dishes.png';
import Breakfast from '../img/breakfast.png';

export const Dishes = () => {
  return (
    <div className='container-lg mt-16'>
      <img
        src={DishesImg}
        alt='dishes'
        width='100%'
        className='hidden sm:px-24 sm:flex'
      />
      <img src={Breakfast} alt='breakfast' width='100%' className='sm:hidden' />
    </div>
  );
};

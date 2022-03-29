import React from 'react';
import OneTreePlantedImg from '../img/one-tree-planted.png';
import OneTreePlantedSmall from '../img/one-tree-planted-small.png';

export const OneTreePlanted = () => {
  return (
    <div className='mb-10'>
      <a
        href='https://onetreeplanted.org/pages/about-us'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={OneTreePlantedImg}
          alt='OneTreePlateImage'
          className='w-full hidden sm:flex'
        />
        <img
          src={OneTreePlantedSmall}
          alt='OneTreePlateImageResponsive'
          className='w-full sm:hidden'
        />
      </a>
    </div>
  );
};

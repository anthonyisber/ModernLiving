import React from 'react';

import Image from '../assets/img/houses/house8lg.png';
const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-cyan-400'>Find</span> your perfect home away from home
          </h1>
          <p className='max-w-[480px] mb-8'>
          At Modern Living, we believe that finding the perfect home should be a delightful and hassle-free experience. We are a premier house rental website dedicated to connecting renters with exceptional properties that offer the best of modern living.
            
            
            
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' /> 
        </div>
      </div>
      {/* <Search /> */}
    </section>
    
  );
  
};

export default Banner;

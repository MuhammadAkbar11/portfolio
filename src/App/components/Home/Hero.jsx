import React from 'react';
// import PropTypes from 'prop-types';

const Hero = () => {
  /* eslint-disable */

  return (
    <div className='flex flex-col flex-1 h-full w-full max-lg:justify-center min-md:pt-10   min-lg:justify-start  '>
      <h1 className=' font-montserrat font-extrabold text-primary text-5xl sm:text-6xl md:text-6.5xl lg:text-6.5xl  xl:text-5.5rem  '>
        Hello, There
      </h1>
      <h1 className='text-light text-lg font-poppins font-bold mt-0 sm:text-2xl md:text-3xl lg:text-3xl  xl:text-5xl '>
        I’ m Muhammad <span className='text-primary'>Akbar </span> Let-Let
      </h1>
      <h1 className='text-slate text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-2 xl:text-6.5xl  '>
        A Front-End<span className=' text-underline '>Web</span> Developer{' '}
      </h1>
      <div className=' mt-5 '>
        <button
          type='button'
          className='btn btn-outline min-md:px-6 min-md:py-4   '
        >
          Say Hello
        </button>
      </div>
    </div>
  );
};

Hero.defaultProps = {};

Hero.propTypes = {};

export default Hero;

import React from 'react';
import SocialNetworks from './SocialNetworks';
// import PropTypes from 'prop-types';

const Hero = () => {
  /* eslint-disable */

  return (
    <div className='flex flex-col flex-1 h-full w-full justify-start min-md:p-0 md:justify-center lg:justify-center xl:justify-center xll:justify-center '>
      <h1 className=' font-montserrat  lg:my-1 xl:-my-1 font-extrabold text-primary text-5xl sm:text-6xl md:text-6.5xl lg:text-6.5xl  xl:text-5.5rem  '>
        Hi, There
      </h1>
      <h3 className='text-light text-lg font-poppins font-bold  sm:text-2xl md:text-3xl lg:text-3xl  xl:text-4xl  xll:text-5xl'>
        I’ m Muhammad <span className='text-primary'>Akbar </span> Let-Let
      </h3>
      <h2 className='text-slate text-3xl sm:text-4xl md:text-5xl  lg:my-1 xl:-my-1  lg:text-5xl xl:text-6xl  xll:text-6.5xl  '>
        A Front-End<span className=' text-underline mx-2'>Web</span> Developer{' '}
      </h2>
      <div className=' mt-3 flex items-center  '>
        <button
          type='button'
          className='btn btn-outline min-md:px-6 min-md:py-4   '
        >
          Say Hello
        </button>
        <SocialNetworks className=' ml-8 max-lg:hidden' />
      </div>
    </div>
  );
};

Hero.defaultProps = {};

Hero.propTypes = {};

export default Hero;

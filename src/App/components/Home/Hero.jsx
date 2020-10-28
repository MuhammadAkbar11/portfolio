import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col flex-1 h-full w-full justify-center min-md:p-0'>
      <h1 className=' font-montserrat  lg:my-1 xl:-my-1 font-extrabold text-primary text-4xl sm:text-5xl min-md:text-6xl   xll:text-5rem  '>
        Hi, There
      </h1>
      <h3 className='text-light text-lg font-poppins font-semibold  sm:text-2xl min-md:text-3xl  xll:text-4xl'>
        I’ m Muhammad <span className='text-primary'>Akbar </span> Let-Let
      </h3>
      <h2 className='text-slate text-3xl sm:text-4xl min-md:text-5xl  lg:my-1 xl:-my-1  xll:text-6xl  '>
        A Front-End<span className=' text-underline mx-2'>Web</span> Developer{' '}
      </h2>
      <div className=' mt-3 min-lg:mt-8 flex items-center  '>
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

import React from 'react';
// import PropTypes from 'prop-types';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-greeting-title  '>Hi, There</div>
      <div className='hero-name '>
        I’ m Muhammad <span className='text-primary'>Akbar </span> Let-Let
      </div>
      <div className='hero-title mt-3  '>
        A FullStack <span className=' text-underline '>Web</span> Developer{' '}
      </div>
      <div className=' mt-5 lg:mt-8 px-1 '>
        <button type='button' className='btn btn-outline lg:px-6 lg:py-4 '>
          Say Hello
        </button>
      </div>
    </div>
  );
};

Hero.defaultProps = {};

Hero.propTypes = {};

export default Hero;

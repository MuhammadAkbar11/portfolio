import React from 'react';
// import PropTypes from 'prop-types';

const Hero = () => {
  return (
    <div className='hero'>
      <p className=' text-5xl font-montserrat font-extrabold text-primary '>
        Hi, There
      </p>
      <p className=' text-light text-lg font-poppins font-bold mt-1 '>
        I’ m Muhammad <span className='text-primary'>Akbar </span> Let-Let
      </p>
      <p className='text-slate -mt-1 text-2xl  '>
        A FullStack <span className=' text-lightness-slate'>Web</span> Developer{' '}
      </p>
      <button type='button' className=' btn btn-outline mt-5 '>
        Say Hello
      </button>
    </div>
  );
};

Hero.defaultProps = {};

Hero.propTypes = {};

export default Hero;

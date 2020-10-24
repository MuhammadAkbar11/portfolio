import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Hero from '../../components/Home/Hero';
import SliderWorks from '../../components/Home/SliderWorks';
import SocialNetworks from '../../components/Home/SocialNetworks';

const Home = props => {
  const { handleIsTextOverlay, handleTextOverlay } = props;

  useEffect(() => {
    handleIsTextOverlay(false);
    handleTextOverlay('');
    document.title = 'Muhammad Akbar | Home';
  }, []);

  return (
    <>
      <Hero />
      <SliderWorks />
      <div className='flex flex-row justify-between w-full py-6 md:mt-auto '>
        <SocialNetworks className='flex-1 min-md:justify-start' />
      </div>
    </>
  );
};

Home.defaultProps = {
  handleIsTextOverlay: null,
  handleTextOverlay: null,
};

Home.propTypes = {
  handleIsTextOverlay: PropTypes.func,
  handleTextOverlay: PropTypes.func,
};

export default Home;

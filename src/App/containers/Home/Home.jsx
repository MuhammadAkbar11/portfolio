import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Hero from '../../components/Home/Hero';
import SliderWorks from '../../components/Home/SliderWorks';
import SocialNetworks from '../../components/Home/SocialNetworks';
import Footer from '../../components/layouts/Footer';

const Home = props => {
  const { handleIsTextOverlay, handleTextOverlay, handleMainClass } = props;

  useEffect(() => {
    handleIsTextOverlay(false);
    handleTextOverlay('');
    handleMainClass('pt-24');
    document.title = 'Muhammad Akbar | Home';
  }, []);

  return (
    <>
      <Hero />
      <SliderWorks />
      <SocialNetworks className='flex flex-row flex-wrap justify-center  min-lg:hidden' />
      <Footer />
    </>
  );
};

Home.defaultProps = {
  handleIsTextOverlay: null,
  handleTextOverlay: null,
  handleMainClass: null,
};

Home.propTypes = {
  handleIsTextOverlay: PropTypes.func,
  handleTextOverlay: PropTypes.func,
  handleMainClass: PropTypes.func,
};

export default Home;

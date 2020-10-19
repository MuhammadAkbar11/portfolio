import React, { useEffect } from 'react';
import Hero from '../../../components/Home/Hero';
import Navigations from '../../../components/Home/Navigations';
import SliderWorks from '../../../components/Home/SliderWorks';

import SocialNetworks from '../../../components/Home/SocialNetworks';
import Wrapper from '../../../components/layouts/Wrapper';

const Home = props => {
  useEffect(() => {
    document.title = 'Muhammad Akbar | Home';
  }, []);

  /* eslint-disable */
  console.log(props);

  return (
    <Wrapper mainClass='pb-5  md:pb-10 '>
      <Hero />
      <SliderWorks />
      <div className='flex flex-row justify-between w-full  mt-16 '>
        <SocialNetworks className='flex-1 md:justify-start' />
        <Navigations />
      </div>
    </Wrapper>
  );
};

export default Home;

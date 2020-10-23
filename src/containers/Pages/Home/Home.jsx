import React, { useEffect } from 'react';

import Wrapper from '../../../components/layouts/Wrapper';
import Hero from '../../../components/Home/Hero';

import SliderWorks from '../../../components/Home/SliderWorks';

import Navigations from '../../../components/Home/Navigations';
import SocialNetworks from '../../../components/Home/SocialNetworks';

const Home = () => {
  useEffect(() => {
    document.title = 'Muhammad Akbar | Home';
  }, []);
  return (
    <Wrapper mainClass='pt-24'>
      <Hero />
      <SliderWorks />
      <div className='flex flex-row justify-between w-full py-6 md:mt-auto '>
        <SocialNetworks className='flex-1 min-md:justify-start' />
        <Navigations />
      </div>
    </Wrapper>
  );
};

export default Home;

import React, { useEffect } from 'react';
import Hero from '../../../components/Home/Hero';
import SelectedProjects from '../../../components/Home/SelectedProjects';
import SocialNetworks from '../../../components/Home/SocialNetworks';
import Templates from '../../../components/layouts/Templates';

const Home = () => {
  useEffect(() => {
    document.title = 'Muhammad Akbar | Home';
  }, []);

  return (
    <Templates mainClass='pb-5'>
      <Hero />
      <SelectedProjects />
      <SocialNetworks />
    </Templates>
  );
};

export default Home;

import React, { useContext } from 'react';

import { PublicContext } from '@app/context/context';
import { Template, Hero } from '@components';

const Home = () => {
  const context = useContext(PublicContext); // eslint-disable-line

  return (
    <>
      <Template>
        <Hero />
      </Template>
    </>
  );
};

export default Home;

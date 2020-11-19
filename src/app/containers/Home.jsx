import React, { useContext } from 'react';

import { PublicContext } from '@app/context/context';
import { Template, Hero, Socials } from '@components';
import { useTitle } from '../hooks';
import useTitleOverlay from '../hooks/useTitleOverlay';

const Home = () => {
  const context = useContext(PublicContext); // eslint-disable-line

  useTitleOverlay('Welcome', true);
  // useEffect(() => {
  useTitle('Home');
  // }, []);

  return (
    <>
      <Template>
        <Hero />
        <Socials />
      </Template>
    </>
  );
};

export default Home;

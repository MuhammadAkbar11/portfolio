import React, { useContext } from 'react';

import { PublicContext } from '@app/context/context';
import { Template, Hero, Socials } from '@components';
import { useTitle } from '../hooks';

const Home = () => {
  const context = useContext(PublicContext); // eslint-disable-line
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

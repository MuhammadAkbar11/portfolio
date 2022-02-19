import React from 'react';
import { Template, Hero } from '@components';
import withTransition from '@app/hoc/withTransition';
import { useTitle } from '@app/hooks';

const Home = () => {
  useTitle('Home');

  return (
    <>
      <Template>
        <Hero />
      </Template>
    </>
  );
};

export default withTransition(Home);

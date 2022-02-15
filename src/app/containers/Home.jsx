import React, { useContext } from 'react';

import { PublicContext } from '@app/context/context';
import { Template, Hero, Socials } from '@components';
import { useScrollShow, useTitle } from '../hooks';
import withTransition from '../hoc/withTransition';

const Home = () => {
  const context = useContext(PublicContext); // eslint-disable-line
  // useEffect(() => {
  useTitle('Home');
  // }, []);

  const [ref, inView] = useScrollShow();

  return (
    <>
      <Template>
        <Hero />
        <div className='pb-12' ref={ref}>
          <Socials inView={inView} />
        </div>
      </Template>
    </>
  );
};

export default withTransition(Home);

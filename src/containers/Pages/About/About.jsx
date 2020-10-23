import React from 'react';
import Wrapper from '../../../components/layouts/Wrapper';

import PageTitle from '../../../components/layouts/PageTitle';
import AboutContent from '../../../components/About/AboutContent';
import AboutInfo from '../../../components/About/AboutInfo';
import AboutProfilePict from '../../../components/About/AboutProfilePict';
import Footer from '../../../components/layouts/Footer';

const About = () => {
  return (
    <>
      <Wrapper
        mainClass='relative pt-32 z-5 '
        showTitleOverlay
        titleOverlay='About Me'
      >
        {/* Title */}
        <PageTitle title='02. About Me'>
          Can I Make <span className=' text-primary'>It Better?</span>
        </PageTitle>

        {/* content */}
        <AboutContent>
          <AboutProfilePict />
          <AboutInfo />
        </AboutContent>
        <Footer />
      </Wrapper>
    </>
  );
};

export default About;

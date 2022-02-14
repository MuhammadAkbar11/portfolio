import React, { useEffect } from 'react';
import {
  Template,
  PageTitle,
  AboutTextWrapper,
  AboutProfilePicture,
  AboutMoreInfos,
  Footer,
} from '@components';
import { StyledAboutSection } from '@app/styled';
import useTitle from '../hooks/useTitle';

const About = () => {
  useTitle('About');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Template>
      <PageTitle
        title='How do I say About myself?'
        primaryColor='About'
        subtitle='about'
      />
      <StyledAboutSection>
        <AboutProfilePicture />
        <AboutTextWrapper />
      </StyledAboutSection>
      <AboutMoreInfos />
      <Footer />
    </Template>
  );
};

export default About;

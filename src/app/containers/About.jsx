import React, { useEffect } from 'react';
import {
  Template,
  PageTitle,
  AboutTextWrapper,
  AboutProfilePicture,
  AboutMoreInfos,
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
      <PageTitle title='about'>
        How do I say <span className=' text-primary'>About</span> myself?
      </PageTitle>
      <StyledAboutSection>
        <AboutProfilePicture />
        <AboutTextWrapper />
      </StyledAboutSection>
      <AboutMoreInfos />
    </Template>
  );
};

export default About;

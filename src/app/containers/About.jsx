import React, { useEffect } from 'react';
import {
  Template,
  PageTitle,
  AboutTextWrapper,
  AboutProfilePicture,
  AboutMoreInfos,
  Footer,
  OverflowHidden,
} from '@components';
import { StyledAboutSection } from '@app/styled';
import useTitle from '@app/hooks/useTitle';
import { easeTransition } from '@app/animation/transtions';
import withTransition from '../hoc/withTransition';

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
      <StyledAboutSection
        exit={{ y: 100, opacity: 0 }}
        transition={{ ...easeTransition, delay: 0.3, duration: 0.5 }}
      >
        <AboutProfilePicture />
        <AboutTextWrapper />
      </StyledAboutSection>
      <OverflowHidden>
        <AboutMoreInfos />
      </OverflowHidden>
      <Footer />
    </Template>
  );
};

export default withTransition(About);

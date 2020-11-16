import React, { useEffect } from 'react';
import {
  Template,
  PageTitle,
  AboutTextWrapper,
  AboutProfilePicture,
} from '@components';
import { StyledAboutSection } from '@app/styled';
import useTitleOverlay from '../hooks/useTitleOverlay';
import useTitle from '../hooks/useTitle';

const variants = {
  init: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 2.8,
      when: 'beforeChildren',
      type: 'spring',
      staggerChildren: 0.6,
      staggerDirection: 1,
    },
  },
};

const colVariants = {
  init: {
    opacity: 0,
    y: '1rem',
  },
  show: {
    opacity: 1,
    y: '0rem',
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
};

const About = () => {
  useTitleOverlay('About Me');

  useTitle('About Me');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Template>
      <PageTitle title='02. About Me'>
        How do I say <span className=' text-primary'>About</span> myself?
      </PageTitle>
      <StyledAboutSection variants={variants} initial='init' animate='show'>
        <AboutProfilePicture variants={colVariants} />
        <AboutTextWrapper variants={colVariants} />
      </StyledAboutSection>
    </Template>
  );
};

export default About;

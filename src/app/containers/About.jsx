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

const About = () => {
  useTitleOverlay('About Me');

  useTitle('About Me');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const variants = {
    init: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 2.5,
        when: 'beforeChildren',
        staggerChildren: 0.4,
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
        duration: 0.7,
        when: 'beforeChildren',
      },
    },
  };

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

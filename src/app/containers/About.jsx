import React, { useEffect } from 'react';
import {
  Template,
  PageTitle,
  AboutTextWrapper,
  AboutProfilePicture,
  ExternalLink,
  Socials,
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
  useTitleOverlay('About Me', true);
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
      <div>
        <span className='text-2xl'>Let's make great products together! </span>
        <br />
        <ExternalLink className='font-inconsolata'>
          Muhammadakbarletlet@gmail.com
        </ExternalLink>
      </div>
      <div className='mt-4'>
        <Socials />
      </div>
    </Template>
  );
};

export default About;

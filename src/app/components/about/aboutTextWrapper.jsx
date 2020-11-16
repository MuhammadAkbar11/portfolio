import React from 'react';
import { StyledAboutTextWrapper } from '@app/styled';
import Paragraph from './paragraph';
import AboutListSkill from './aboutListSkills';
import { ExternalLink, Socials } from '..';

const variants = {
  init: {
    opacity: 0,
    y: '1rem',
  },
  show: {
    opacity: 1,
    y: '0rem',
    transition: {
      duration: 0.6,
      type: 'spring',
      when: 'beforeChildren',
    },
  },
};

const aboutInfo = () => {
  return (
    <StyledAboutTextWrapper variants={variants}>
      <Paragraph>
        {/* eslint-disable */}
        <span className='text-lg'>Hello..</span>. <br /> I'm Muhammad Akbar
        Let-let, a <span className='text-primary '>Front-End </span>
        Developer.
      </Paragraph>
      <Paragraph>
        A person who enjoys building and designing beautiful websites. and
        specializes in creating animations, UI effects, and interactive layouts
      </Paragraph>
      <Paragraph>
        Computers and technology were alaways a passion for me, but i found my
        self in web development.
      </Paragraph>
      <Paragraph>
        {/*eslint-disable */}i grew up in southest{' '}
        <span className='text-primary '>Maluku</span>, but now i live in{' '}
        <span className='text-primary '>Bekasi</span>, Vest Java. I'm currently
        a student at{' '}
        <ExternalLink href='http://www.bsi.ac.id'>
          UBSI Jatiwaringin
        </ExternalLink>
      </Paragraph>
      <Paragraph>
        And here are few tecnologies i've been working with recently:
      </Paragraph>
      <AboutListSkill />
      <br />
      <br />
      <Paragraph>
        <span className='text-2xl'>Let's make great products together! </span>
        <br />
        <ExternalLink className='font-inconsolata'>
          Muhammadakbarletlet@gmail.com
        </ExternalLink>
      </Paragraph>
      <Paragraph>
        <Socials />
      </Paragraph>
    </StyledAboutTextWrapper>
  );
};

export default aboutInfo;

import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { Button } from '.';
import { fadeUpVariants } from '../animation/fadeUp';

const StyledHero = motion.custom(styled.div`
  ${tw`flex   flex-col flex-1 h-full w-full justify-start lg:justify-center min-md:pt-12  `}
`);

const StyleGreeting = motion.custom(styled.h1`
  ${tw`font-inconsolata pl-1  text-primary text-lg sm:text-base min-md:text-lg `}
`);

const Title = motion.custom(styled.h3`
  ${tw`text-light text-3xl pl-0  sm:text-5xl md:text-5xl lg:text-7xl xl:text-9xl xll:text-10xl font-poppins font-semibold mt-3 min-md:-mt-1 `}
`);

const SubTitle = motion.custom(styled.h3`
  ${tw`text-slate pl-1 text-2xl mt-3 min-md:mt-5 sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl   `}
  text-transform: uppercase !important;
`);

const Devider = motion.custom(styled.hr`
  ${tw`bg-primary ml-1 h-1  mt-3 min-lg:mt-2 w-10  `}
  transform-origin: 0 0;
  @media (min-width: 766px) {
    width: 7rem;
  }
  border: none;
`);

const heroVariant = {
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
  },
};

const hrMotion = {
  show: {
    scaleX: [0, 1],
    transition: {
      delay: 1.5,
      scaleX: [0.1, 2],
    },
  },
  closed: {
    scaleX: 0,
  },
};

const hero = () => {
  return (
    <StyledHero variants={heroVariant} initial='closed' animate='show'>
      <StyleGreeting variants={fadeUpVariants(0.5)}>
        Hi, my name is{' '}
      </StyleGreeting>
      <Title variants={fadeUpVariants(0.7)}>
        Muhammad <span className='text-primary'>Akbar </span>
      </Title>
      <Devider variants={hrMotion} />
      <SubTitle variants={fadeUpVariants(0.9)}>
        {' '}
        A Front-End<span className=' text-underline mx-2'>
          Web
        </span> Developer{' '}
      </SubTitle>
      <div className='mt-3 min-lg:mt-5 flex items-center  '>
        <Button
          className='max-sm:mt-5 mt-10 ml-1'
          size='xl'
          href='/#'
          outline
          variants={fadeUpVariants(1)}
        >
          Say Hello
        </Button>
      </div>
    </StyledHero>
  );
};

export default hero;

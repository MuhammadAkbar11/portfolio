import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { Button } from '.';
import { fadeUpVariants } from '../animation/fadeUp';

const StyledHero = motion.custom(styled.div`
  ${tw`flex   flex-col flex-1 h-full w-full justify-start min-md:p-0  `}
`);

const StyleGreeting = motion.custom(styled.h1`
  ${tw`font-montserrat  lg:my-1 xl:-my-1 font-extrabold text-primary text-4xl sm:text-5xl min-md:text-6xl   xll:text-8xl `}
`);

const Title = motion.custom(styled.h3`
  ${tw`text-light text-lg font-poppins font-semibold  sm:text-2xl min-md:text-3xl  xll:text-4xl`}
`);

const SubTitle = motion.custom(styled.h3`
  ${tw`text-slate text-3xl sm:text-4xl min-md:text-5xl  lg:my-1 xl:-my-1  xll:text-6xl `}
`);

const variants = {
  open: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 1,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const hero = () => {
  return (
    <StyledHero variants={variants} animate='open'>
      <StyleGreeting
        variants={fadeUpVariants(0.3)}
        initial='init'
        animate='show'
      >
        Hi, There
      </StyleGreeting>
      <Title variants={fadeUpVariants(0.4)} initial='init' animate='show'>
        I’ m Muhammad <span className='text-primary'>Akbar </span> Let-Let
      </Title>
      <SubTitle variants={fadeUpVariants(0.5)} initial='init' animate='show'>
        {' '}
        A Front-End<span className=' text-underline mx-2'>
          Web
        </span> Developer{' '}
      </SubTitle>
      <div className='mt-3 min-lg:mt-5 flex items-center  '>
        <Button
          size='lg'
          outline
          variants={fadeUpVariants(0.6)}
          initial='init'
          animate='show'
        >
          Say Hello
        </Button>
      </div>
    </StyledHero>
  );
};

export default hero;

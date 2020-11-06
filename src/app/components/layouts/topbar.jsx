import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from 'assets/svg/AL.svg';
import { motion } from 'framer-motion';
import { StyledTopMenu } from '@app/styled';
import { Button } from '..';

const StyledNav = motion.custom(styled.nav`
  ${tw`min-md:justify-center min-md:flex `}
  width: 10%;
`);

const topbar = () => {
  return (
    <StyledTopMenu>
      <StyledNav
        initial={{
          x: -10,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <img className='h-10' src={Logo} alt='' />
      </StyledNav>
      <StyledNav
        initial={{
          x: 10,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 1.5,
        }}
      >
        <Button outline href='#/'>
          Resume
        </Button>
      </StyledNav>
    </StyledTopMenu>
  );
};

export default topbar;

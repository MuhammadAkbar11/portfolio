/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from 'assets/svg/AL.svg';
import { motion, useAnimation } from 'framer-motion';
import { StyledTopMenu } from '../../styled';
import { Button, ToggleNav } from '..';
import { useTopbarScroll } from '../../hooks';

const StyledNav = motion.custom(styled.nav`
  ${tw`min-md:justify-center min-md:flex  `}
  width: 15%;
`);

const navVariants = delay => ({
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      delay,
    },
  },
  closed: {
    y: -20,
    opacity: 0,
  },
});

const topbar = () => {
  const variants = useTopbarScroll();
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show');
  }, [variants]);
  return (
    <StyledTopMenu variants={variants} initial='closed' animate={controls}>
      <StyledNav variants={navVariants(0.6)}>
        <img className='h-10' src={Logo} alt='' />
      </StyledNav>
      <StyledNav
        variants={navVariants(1.2)}
        className=' max-md:flex max-md:justify-end  '
      >
        <div className='hidden min-md:block'>
          <Button outline href='#/'>
            Resume
          </Button>
        </div>
        <ToggleNav />
      </StyledNav>
    </StyledTopMenu>
  );
};

export default topbar;

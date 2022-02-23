/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from 'assets/svg/AL.svg';
import { motion, useAnimation } from 'framer-motion';
import { StyledTopMenu } from '@app/styled';
import { Button, ToggleNav } from '..';
import { useTopbarScroll } from '@app/hooks';

const StyledNav = motion.custom(styled.nav`
  ${tw`flex `}
  width: 15%;
  height: max-content;
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
  exit: {
    y: -20,
  },
});

const topbar = () => {
  const variants = useTopbarScroll();
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show');
  }, [variants]);
  return (
    <StyledTopMenu
      variants={variants}
      initial='closed'
      exit='exit'
      // exit={{ opacity: 0 }}
      animate={controls}
    >
      <StyledNav variants={navVariants(0.6)} className='justify-center'>
        <Link to='/'>
          <img className='h-10' src={Logo} alt='' />
        </Link>
      </StyledNav>
      <StyledNav
        variants={navVariants(1.2)}
        className=' relative justify-center  '
      >
        <div className='hidden min-md:flex justify-center relative mx-auto  w-full   '>
          <Button
            as='a'
            target={'_blank'}
            href='/resume'
            outline
            className='italic '
          >
            .resume()
          </Button>
        </div>
        <ToggleNav />
      </StyledNav>
    </StyledTopMenu>
  );
};

export default topbar;

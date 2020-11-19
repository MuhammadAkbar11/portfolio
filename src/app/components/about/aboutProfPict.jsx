import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { StyledAboutProfPictWrapper } from '@app/styled';

import profileImg from '@/assets/img/profile.jpg';

const ProfPictCard = motion.custom(styled.div`
  position: relative;

  width: 250px;
  height: 250px;
  overflow: hidden;
  border-radius: 5px;

  @media (min-width: 992px) {
    width: 280px;
    height: 280px;
  }

  @media (min-width: 1200px) {
    width: 370px;
    height: 370px;
  }
`);

const ProfPictImg = motion.custom(styled.img`
  object-fit: cover;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`);

const ProfPictOverlay = motion.custom(styled.div`
  ${tw`absolute left-0 right-0 top-0 h-full w-full  bg-secondary `}
  border-radius: 0px;
  overflow: hidden;
  transform-origin: 0 0;
  /* opacity: 0.8; */
`);

const variants = {
  init: {
    opacity: 0,
    y: '1rem',
  },
  show: {
    opacity: 1,
    y: '0rem',
    transition: { duration: 0.6, when: 'beforeChildren' },
  },
};

const variantsOverlay = {
  init: {
    scaleX: 1,
  },
  show: {
    scaleX: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const imgVariants = {
  init: {
    scale: 1,
  },
  show: {
    scale: 1.3,
    transition: {
      delay: 0.8,
      type: 'spring',
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.2,
    rotate: -5,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
};

const aboutProfPict = () => {
  return (
    <StyledAboutProfPictWrapper variants={variants}>
      <ProfPictCard className=' about-pict-card max-lg:mx-auto min '>
        <ProfPictImg
          variants={imgVariants}
          src={profileImg}
          whileHover='hover'
        />
        <ProfPictOverlay className='overlay' variants={variantsOverlay} />
      </ProfPictCard>
    </StyledAboutProfPictWrapper>
  );
};

export default aboutProfPict;

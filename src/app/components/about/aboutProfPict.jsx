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

  @media (min-width: 992px) {
    width: 280px;
    height: 280px;
  }

  @media (min-width: 1200px) {
    width: 370px;
    height: 370px;
  }
`);

const ProfPictImg = styled.img`
  object-fit: cover;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const ProfPictOverlay = motion.custom(styled.div`
  ${tw`absolute left-0 right-0 top-0 h-full w-full  bg-secondary `}
  border-radius: 0px;
  overflow: hidden;
  transform-origin: 100% 100%;
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
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
    },
  },
};

const variantsOverlay = {
  init: {
    scaleX: 1,
  },
  show: {
    scaleX: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const aboutProfPict = () => {
  return (
    <StyledAboutProfPictWrapper variants={variants}>
      <ProfPictCard className=' about-pict-card max-lg:mx-auto min '>
        <ProfPictOverlay className='overlay' variants={variantsOverlay} />
        <ProfPictImg src={profileImg} />
      </ProfPictCard>
    </StyledAboutProfPictWrapper>
  );
};

export default aboutProfPict;

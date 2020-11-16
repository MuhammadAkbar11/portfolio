import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { StyledAboutProfPictWrapper } from '@app/styled';

import profileImg from '@/assets/img/profile.jpg';

const ProfPictCard = motion.custom(styled.div`
  position: relative;
  width: 70% !important;

  &:hover .overlay {
    animation: slideRight 0.1s linear forwards;
  }

  @keyframes slideRight {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    30% {
      clip-path: polygon(0 0, 100% 0, 100% 74%, 0 76%);
    }
    50% {
      clip-path: polygon(0 0, 100% 0, 100% 42%, 0 44%);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
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

const ProfPictOverlay = styled.div`
  ${tw`absolute left-0 right-0 top-0 h-full w-full  bg-primary `}
  border-radius: 5px;
  opacity: 0.7;
  overflow: hidden;
`;

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

const aboutProfPict = () => {
  return (
    <StyledAboutProfPictWrapper variants={variants}>
      <ProfPictCard
        whileHover={{
          scale: 0.9,
          y: 5,
          rotate: 5,
        }}
        // variants={pictVariants}
        className='mx-auto about-pict-card'
      >
        <ProfPictOverlay className='overlay' />
        <ProfPictImg src={profileImg} />
      </ProfPictCard>
    </StyledAboutProfPictWrapper>
  );
};

export default aboutProfPict;

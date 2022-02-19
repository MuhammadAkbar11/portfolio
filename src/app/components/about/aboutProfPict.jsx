import React, { useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';
import { StyledAboutProfPictWrapper } from '@app/styled';
import profileImg from '@/assets/img/profile.jpeg';
import variants from './variants';
import useAppearOnScroll from '../../hooks/useAppearOnScroll';

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
  ${tw`absolute left-0 right-0 top-0 h-full w-full  bg-primary  `}
  border-radius: 0px;
  overflow: hidden;
  transform-origin: 0 0;
  opacity: 0.8;
`);

const aboutProfPict = () => {
  const ref = useRef();
  const [visible] = useAppearOnScroll(ref);

  return (
    <StyledAboutProfPictWrapper
      variants={variants.coloumVariants}
      ref={ref}
      initial='init'
      animate={visible ? 'animate' : ''}
      exit='exit'
    >
      <ProfPictCard className=' about-pict-card max-lg:mx-auto min '>
        <ProfPictImg
          variants={variants.media.img}
          src={profileImg}
          whileHover='hover'
        />
        <ProfPictOverlay
          className='overlay'
          variants={variants.media.overlay}
        />
      </ProfPictCard>
    </StyledAboutProfPictWrapper>
  );
};

export default aboutProfPict;

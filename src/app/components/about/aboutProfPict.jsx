import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, useAnimation } from 'framer-motion';
import { StyledAboutProfPictWrapper } from '@app/styled';
import profileImg from '@/assets/img/profile.jpeg';
import { useScrollShow } from '../../hooks';
import { coloumVariants, media } from './variants/default.variants';
import {
  setAnimatePPWrapp,
  setAnimateOverlay,
  setAnimateImage,
} from './variants/actions.variant';

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
  const [refWrapper, inViewWrapper] = useScrollShow();

  const [variants, setVariants] = useState({ ...coloumVariants });
  const [overlayVariants, setOverlayVariants] = useState({ ...media.overlay });
  const [imageVariants, setImageVariants] = useState({ ...media.img });

  const controlsWrapper = useAnimation();

  useEffect(() => {
    if (inViewWrapper) {
      setVariants(setAnimatePPWrapp);
      setOverlayVariants(setAnimateOverlay);
      setImageVariants(setAnimateImage);
    }

    return () => {
      setVariants(coloumVariants);
      setOverlayVariants(media.overlay);
      setImageVariants(media.img);
    };
  }, [inViewWrapper]);

  useEffect(() => {
    if (inViewWrapper) {
      controlsWrapper.start('animate');
    }
  }, [variants, overlayVariants, imageVariants]);

  return (
    <StyledAboutProfPictWrapper
      variants={variants}
      ref={refWrapper}
      initial='init'
      animate={controlsWrapper}
    >
      <ProfPictCard className=' about-pict-card max-lg:mx-auto min '>
        <ProfPictImg
          variants={imageVariants}
          src={profileImg}
          whileHover='hover'
        />
        <ProfPictOverlay className='overlay' variants={overlayVariants} />
      </ProfPictCard>
    </StyledAboutProfPictWrapper>
  );
};

export default aboutProfPict;

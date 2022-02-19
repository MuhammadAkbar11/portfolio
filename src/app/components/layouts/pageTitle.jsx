import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { easeTransition } from '@app/animation/transtions';
import { AnimatedLetters, OverflowHidden } from '..';

const variants = {
  subtitle: (delay, exitDelay) => ({
    show: {
      originY: 0,
      opacity: 1,
      y: 0,
      transition: {
        // y: { stiffness: 60 },
        ...easeTransition,
        when: 'beforeChildren',
        delay,
        duration: 1,
      },
    },
    closed: {
      opacity: 0,
      y: 60,
    },
    exit: {
      opacity: 0,
      y: 60,
      transition: {
        ...easeTransition,
        delay: exitDelay,
        duration: 0.9,
      },
    },
  }),
};

const TitleWrapper = motion.custom(styled.div`
  ${tw`w-full flex flex-col flex-wrap min-md:mt-8 `}
`);

const SmallTitle = motion.custom(styled.span`
  ${tw` z-10  font-inconsolata italic text-xs min-md:text-lg text-primary`}
`);

const LargeTitle = motion.custom(styled.h1`
  ${tw` z-10 -mt-1 text-light font-montserrat font-extrabold  `}
  font-size: 4.2vw;
`);

const pageTitle = props => {
  const { subtitle, title, primaryColor } = props;
  return (
    <>
      <TitleWrapper>
        <OverflowHidden>
          <SmallTitle
            variants={variants.subtitle(0.1, 0.8)}
            initial='closed'
            animate='show'
            exit='exit'
          >
            .{subtitle}
            <span>()</span>
          </SmallTitle>
        </OverflowHidden>
        <OverflowHidden>
          <AnimatedLetters
            comp={LargeTitle}
            title={title}
            type='word'
            delay={0.2}
            exitDelay={0.2}
            primaryTitles={primaryColor}
          />
        </OverflowHidden>
      </TitleWrapper>
    </>
  );
};

pageTitle.defaultProps = {
  subtitle: '',
  title: '',
  children: null,
};

pageTitle.propTypes = {
  title: PropTypes.string,
  primaryColor: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default pageTitle;

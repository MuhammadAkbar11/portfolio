import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { fadeUpVariants } from '../../animation/fadeUp';
import { AnimatedLetters, OverflowHidden } from '..';

const TitleWrapper = motion.custom(styled.div`
  ${tw`w-full flex flex-col flex-wrap min-md:mt-8 `}
`);

const SmallTitle = motion.custom(styled.span`
  ${tw` z-10  font-inconsolata text-xs min-md:text-lg text-primary`}
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
            variants={fadeUpVariants(0.1)}
            initial='closed'
            animate='show'
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
            delay={0.3}
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

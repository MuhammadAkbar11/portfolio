import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { fadeUpVariants } from '../../animation/fadeUp';

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
  const { title, children } = props;
  return (
    <>
      <TitleWrapper>
        <SmallTitle
          variants={fadeUpVariants(0.1)}
          initial='closed'
          animate='show'
        >
          .{title}
          <span>()</span>
        </SmallTitle>
        <LargeTitle
          variants={fadeUpVariants(0.5)}
          initial='closed'
          animate='show'
        >
          {children}
        </LargeTitle>
      </TitleWrapper>
    </>
  );
};

pageTitle.defaultProps = {
  title: '',
  children: null,
};

pageTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default pageTitle;

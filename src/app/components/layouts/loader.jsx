/* eslint-disable */
import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import { StyledLoader } from '@app/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutContext } from '@app/context/context';

const TextLoader = motion.custom(styled.span`
  ${tw`flex text-primary ml-1 text-3xl font-montserrat font-semibold `}
  opacity: 1;
`);

const variants = {
  mount: {
    clipPath: [
      'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    ],
    transition: {
      duration: 0.3,
      delayChildren: 0.1,
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
  unMount: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  exit: {
    opacity: 0,
  },
};

const textVariants = delay => ({
  mount: {
    opacity: [1, 0, 1],
    transition: {
      delay: 0.3 * delay,
      duration: 1,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  exit: {
    scale: 5,
  },
});

const loader = () => {
  const texts = 'Muhammad  Akbar ';
  const layoutContext = useContext(LayoutContext);

  const { loader } = layoutContext.layoutStore;

  return (
    <StyledLoader>
      <motion.div
        variants={variants}
        initial='unMount'
        animate='mount'
        exit=''
        className={`loader-content flex`}
      >
        {[...texts].map((text, i) => {
          const key = i + 1;
          return (
            <TextLoader
              variants={textVariants(i)}
              animate='mount'
              key={key}
              delay={i}
            >
              {text}
            </TextLoader>
          );
        })}
      </motion.div>
    </StyledLoader>
  );
};

export default loader;

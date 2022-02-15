import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { LayoutContext } from '@app/context/context';

const variants = {
  slidIn: {
    show: {
      opacity: 0,
      // scale: 0,
      y: 100,
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        delay: 1.5,
        duration: 0.1,
        // ...easeTransition,
      },
    },
    closed: {
      opacity: 0,
      y: 100,
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        delay: 1,
        duration: 0.1,
        // ...easeTransition,
      },
    },
    exit: {
      opacity: 1,

      y: [10, 0, -500],
      clipPath: [
        'inset(97% 0 0 0)',
        // 'inset(12% 0 0 0)',
        'inset(0 0 0 0)',
        'inset(0 0 0 0)',
        'inset(0 0 0 0)',
        'inset(0 0 44% 0)',
        'inset(0 0 100% 0)',
      ],
      transition: {
        delay: 1,
        duration: 1.3,
        // ...easeTransition,
      },
    },
  },
};

const SlideIn = motion.custom(styled.div`
  ${tw` bg-secondary  `}
  z-index: 9000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`);

const withTransition = OriginalComponent => {
  return () => {
    const {
      layoutStore: { loader },
    } = useContext(LayoutContext);

    return (
      <>
        <OriginalComponent />
        {!loader && (
          <SlideIn
            className='slide-in'
            variants={variants.slidIn}
            initial='closed'
            animate='show'
            exit='exit'
          />
          // <Loader />
        )}
      </>
    );
  };
};

export default withTransition;

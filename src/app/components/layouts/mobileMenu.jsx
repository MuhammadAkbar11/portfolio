import React, { useContext, useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { MobileMenuFooter, MobileMenuNavigation } from '..';
import { StyledMobileMenu } from '../../styled';
import { LayoutContext } from '../../context/context';

const defaultVariants = {
  init: {
    clipPath: 'circle(8.6% at 95% 6%)',
    opacity: 0,
  },
  animate: {
    clipPath: 'circle(8.6% at 95% 6%)',
  },
  exit: {
    scaleY: 0,
  },
};

const index = () => {
  const context = useContext(LayoutContext);
  const [variants, setVariants] = useState(defaultVariants);
  const { mobileMenu } = context.layoutStore;

  const controls = useAnimation();
  useEffect(() => {
    if (mobileMenu) {
      setVariants(prevState => {
        return {
          ...prevState,
          animate: {
            opacity: 1,
            clipPath: 'circle(133.8% at 95% 6%)',
            transition: {
              duration: 0.4,
              when: 'beforeChildren',
            },
          },
        };
      });
    }

    return () => {
      setVariants(defaultVariants);
      controls.start('exit');
    };
  }, [mobileMenu]);

  useEffect(() => {
    if (mobileMenu) {
      controls.start('animate');
    }
  }, [variants, mobileMenu]);
  return (
    <StyledMobileMenu
      variants={variants}
      initial='init'
      animate={controls}
      exit='exit'
    >
      <MobileMenuNavigation />
      <MobileMenuFooter />
    </StyledMobileMenu>
  );
};

export default index;

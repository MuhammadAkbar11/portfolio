import React, { useContext, useEffect, useState } from 'react';
import { AnimatePresence, useAnimation } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { MobileMenuFooter, MobileMenuNavigation } from '..';
import { StyledMobileMenu } from '../../styled';
import { LayoutContext } from '../../context/context';

const defaultVariants = {
  init: {
    clipPath: 'circle(8.6% at 95% 6%)',
    opacity: 0,
  },

  animate: {
    opacity: 1,
    clipPath: 'circle(133.8% at 95% 6%)',
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
    },
  },
  exit: {
    clipPath: 'circle(0% at 95% 6%)',
    transition: {
      duration: 0.3,
      type: 'spring',
      when: 'afterChildren',
    },
  },
};

const index = () => {
  const context = useContext(LayoutContext);
  const [variants, setVariants] = useState(defaultVariants);
  const [activePath, setActivePath] = useState(null);

  const history = useHistory();
  const controls = useAnimation();

  const { mobileMenu } = context.layoutStore;

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
    <AnimatePresence
      onExitComplete={() => {
        if (activePath) {
          history.push(activePath);
        }
      }}
    >
      {mobileMenu && (
        <StyledMobileMenu
          variants={defaultVariants}
          initial='init'
          animate='animate'
          exit='exit'
        >
          <MobileMenuNavigation onActivePath={val => setActivePath(val)} />
          <MobileMenuFooter />
        </StyledMobileMenu>
      )}
    </AnimatePresence>
  );
};

export default index;

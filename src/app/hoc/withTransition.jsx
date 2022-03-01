import React, { useContext, useEffect, useState } from 'react';
import { LayoutContext } from '@app/context/context';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from 'assets/svg/AL2.svg';
import variants from './withTransitonVariants';

const Transition = motion.custom(styled.div`
  ${tw` bg-gradient-to-br  from-light-secondary via-dark-secondary to-dark-secondary flex justify-center items-center `}
  z-index: 9000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`);

const BgTranstion = styled.div`
  ${tw` bg-gradient-to-bl from-light-secondary via-dark-secondary to-dark-secondary  `}
  height: 100vh;
  width: 100%;
`;

const withTransition = OriginalComponent => {
  return () => {
    const [transition, setTransition] = useState(true);
    const {
      layoutDispatch,
      layoutStore: { loader, isReload },
    } = useContext(LayoutContext);

    useEffect(() => {
      if (isReload && loader) {
        setTimeout(() => {
          setTransition(false);
        }, 50);
      } else {
        setTransition(false);
      }
      return () => {
        layoutDispatch({
          type: 'PAGE_NOT_REFRESH',
        });
        setTransition(true);
      };
    }, []);
    return (
      <>
        {!transition ? <OriginalComponent /> : <BgTranstion />}
        {!isReload && (
          <Transition
            variants={variants.slideOut}
            initial='closed'
            animate='show'
          >
            <motion.div variants={variants.logo}>
              <motion.img
                variants={variants.logoImg}
                className=' h-16 '
                src={Logo}
                alt=''
              />
            </motion.div>
          </Transition>
        )}
        {!loader && (
          <Transition
            className='slide-in   '
            variants={variants.slidIn}
            initial='closed'
            animate='show'
            exit='exit'
          >
            <motion.div variants={variants.logo}>
              <motion.img
                variants={variants.logoImg}
                className='h-16 '
                src={Logo}
                alt=''
              />
            </motion.div>
          </Transition>
        )}
      </>
    );
  };
};

export default withTransition;

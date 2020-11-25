import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink } from '@components';
import { useIsWindowScrolling, useScrollShow } from '../../hooks';
import { setAnimateMoreInfo } from './variants/actions.variant';
import { moreInfo as defaultVariants } from './variants/default.variants';

const aboutInformations = () => {
  const [variants, setVariants] = useState(defaultVariants);
  const [ref, inView] = useScrollShow();
  const { isWinScroll } = useIsWindowScrolling();

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      const delay = isWinScroll ? 0.3 : 1.5;
      setVariants(prevState => setAnimateMoreInfo(prevState, delay));
    }

    return () => {
      setVariants(defaultVariants);
    };
  }, [inView]);

  useEffect(() => {
    if (inView) controls.start('animate');
  }, [variants]);

  /* eslint-disable */
  return (
    <motion.div
      variants={variants}
      className='mb-10'
      initial='init'
      animate={controls}
      ref={ref}
    >
      <div className='text-primary text-2xl font-montserrat font-medium'>
        <span className=' text-light-slate '>
          Let's make great products together! , don't hesitate to
        </span>{' '}
        <ExternalLink className='font-inconsolata'>Contact Me</ExternalLink>
      </div>
    </motion.div>
  );
};

export default aboutInformations;

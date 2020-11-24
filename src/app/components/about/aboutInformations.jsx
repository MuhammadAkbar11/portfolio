import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink, Socials } from '..';
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
    <motion.div variants={variants} initial='init' animate={controls} ref={ref}>
      <div className='text-primary'>
        <span className='text-2xl text-light-slate '>
          Let's make great products together!{' '}
        </span>
        <br />
        <ExternalLink className='font-inconsolata'>
          Muhammadakbarletlet@gmail.com
        </ExternalLink>
      </div>
      <div className='mt-4'>
        <Socials />
      </div>
    </motion.div>
  );
};

export default aboutInformations;

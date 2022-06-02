import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from '@components';
import useAppearOnScroll from '@app/hooks/useAppearOnScroll';
import variants from './variants';

/* eslint-disable */

const aboutInformations = () => {
  const ref = useRef();
  const [visible] = useAppearOnScroll(ref);

  return (
    <motion.div
      ref={ref}
      variants={variants.moreInfo(0.3)}
      initial='init'
      exit={'exit'}
      animate={visible ? 'animate' : ''}
    >
      <div className='text-primary text-2xl font-montserrat font-medium'>
        <span className=' text-light-slate'>
          Let's make great products together!, don't hesitate to{' '}
        </span>
        <ExternalLink
          href='mailto:muhammadakbarletlet11@gmail.com'
          className='font-inconsolata '
        >
          Contact Me
        </ExternalLink>
      </div>
    </motion.div>
  );
};

export default aboutInformations;

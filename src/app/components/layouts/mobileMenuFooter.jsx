import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from '..';
import { StyledMobileMenuFooter } from '../../styled';

const variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
      type: 'spring',
      when: 'beforeChildren',
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const actionsVariants = {
  init: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      // damping: 9,
      stiffness: 150,
    },
  },
};

const mobileMenuFooter = () => {
  return (
    <StyledMobileMenuFooter variants={variants}>
      <motion.div variants={actionsVariants} className=' text-primary '>
        <ExternalLink href='/#'>Resume</ExternalLink>{' '}
      </motion.div>
      <motion.div variants={actionsVariants} className=' ml-3'>
        <span className=' text-slate'>|</span>
      </motion.div>
      {[
        {
          app: 'Github',
          url: '#',
        },
        {
          app: 'LinkedIn',
          url: '#',
        },
        {
          app: 'Instagram',
          url: '#',
        },
      ].map((item, i) => {
        const key = i * 0.1;
        return (
          <motion.div variants={actionsVariants} key={key}>
            <ExternalLink className=' mx-3' href={item.url}>
              {item.app}
            </ExternalLink>
          </motion.div>
        );
      })}
    </StyledMobileMenuFooter>
  );
};

export default mobileMenuFooter;

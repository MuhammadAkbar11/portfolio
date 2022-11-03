import React from 'react';
import { motion } from 'framer-motion';
import propTypes from 'prop-types';

const banner = (delay, exitDelay = 0.5) => ({
  closed: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + delay,
      delayChildren: 0.2 + delay,
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      delay: exitDelay,
      delayChildren: exitDelay,
      staggerDirection: -1,
      staggerChildren: 0.1,
    },
  },
});

const letterAni = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
    y: 200,
  },
  exit: {
    y: 200,
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const animatedLetters = ({
  comp: Component,
  title,
  delay,
  type,
  exitDelay,
  primaryTitles,
  className,
}) => {
  const checkPrimaryColor = w =>
    typeof primaryTitles === 'string'
      ? primaryTitles?.split(',').find(p => p === w)
      : primaryTitles.find(p => p === w);

  let content = [...title].map((letter, idx) => {
    const isPrimary = checkPrimaryColor(letter);
    const k = idx;
    return (
      <motion.span
        className={`${isPrimary ? 'text-primary' : ''} mr-0 `}
        variants={letterAni}
        key={k}
      >
        {letter}
      </motion.span>
    );
  });

  if (type === 'word') {
    content = title.split(' ').map((word, idx) => {
      const isPrimary = checkPrimaryColor(word);
      const k = idx;
      return (
        <motion.span
          className={`${isPrimary ? 'text-primary' : ''} mr-2 `}
          variants={letterAni}
          key={k}
        >
          {`${word}`}
        </motion.span>
      );
    });
  }

  const classNm = `flex h-auto relative ${className}`;

  return (
    <Component
      className={classNm}
      variants={banner(+delay, exitDelay)}
      initial='closed'
      animate='show'
      exit='exit'
    >
      {content}
    </Component>
  );
};

animatedLetters.propTypes = {
  comp: propTypes.elementType,
  className: propTypes.string,
  title: propTypes.string,
  delay: propTypes.number,
  type: propTypes.string,
  exitDelay: propTypes.number,
  primaryTitles: propTypes.string,
};

animatedLetters.defaultProps = {
  title: '',
  delay: 0.1,
  exitDelay: 0.5,
  comp: motion.div,
  type: 'letter',
  primaryTitles: '',
  className: '',
};

export default animatedLetters;

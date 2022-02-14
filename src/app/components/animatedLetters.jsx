import { motion } from 'framer-motion';
import React from 'react';

const banner = delay => ({
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
};

const animatedLetters = ({
  comp: Component,
  title,
  delay,
  type,
  primaryTitles,
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
        style={{
          letterSpacing: '0.2rem',
        }}
        className={`${isPrimary ? 'text-primary' : ''} `}
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

  return (
    <Component
      className='flex relative '
      variants={banner(+delay)}
      initial='closed'
      animate='show'
    >
      {content}
    </Component>
  );
};

animatedLetters.defaultProps = {
  delay: 0.1,
  comp: motion.div,
  type: 'letter',
  primaryTitles: '',
};

export default animatedLetters;

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 100,
      ease: 'easeInOut',
    },
  },
  closed: {
    opacity: 0,
    y: 10,
  },
  hover: {
    scale: 1.09,
    y: -3,
    transition: {
      duration: 0.3,
      type: 'spring',
    },
  },
};

const socialMediaIcons = props => {
  const { className, icon, url } = props;
  return (
    <motion.a
      href={url}
      variants={variants}
      whileHover='hover'
      className={`${className}`}
    >
      {icon}
    </motion.a>
  );
};
socialMediaIcons.defaultProps = {
  className: '',
  icon: null,
  url: '#/',
};

socialMediaIcons.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  url: PropTypes.string,
};

export default socialMediaIcons;

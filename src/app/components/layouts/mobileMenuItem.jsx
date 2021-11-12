import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StyledMobileMenuItem } from '../../styled';

const defaultProps = {
  menu: '',
  url: '',
};

const proptypes = {
  menu: PropTypes.string,
  url: PropTypes.string,
};

const variants = {
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
      damping: 9,
      stiffness: 150,
    },
  },
  hover: {
    y: -3,
    scale: 1.1,
    textShadow: '-1px 4px 13px #061020',
    color: '#63B3ED',
    transition: {
      duration: 0.3,
      type: 'spring',
    },
  },
  exit: {
    opacity: 0,
    y: -15,
  },
};

const overlayVariants = {
  init: {
    opacity: 0,
    scaleY: 1,
    y: 15,
  },
  animate: {
    opacity: 1,
    scaleY: 0,
    y: 0,
    position: 'absolute',
    transition: {
      delay: 0,
      duration: 0.5,
      type: 'tween',
    },
  },
  exit: {
    opacity: 1,
    scaleY: 0,
    y: 15,
    position: 'absolute',
  },
};

const mobileMenuItem = props => {
  const { menu, url } = props;

  return (
    <Link to={url}>
      <StyledMobileMenuItem
        variants={variants}
        data-text={menu}
        whileHover='hover'
        whileTap='hover'
      >
        {menu}
        <motion.div className='overlay' variants={overlayVariants} />
      </StyledMobileMenuItem>
    </Link>
  );
};

mobileMenuItem.defaultProps = defaultProps;

mobileMenuItem.propTypes = proptypes;

export default mobileMenuItem;

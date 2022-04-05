import React from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import tw from 'twin.macro';

/* eslint-disable */

const defaultProps = {
  menu: '',
  url: '#/',
  label: '',
};

const proptypes = {
  menu: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
};

const StyledLink = motion.custom(styled.div`
  ${tw`text-slate whitespace-no-wrap font-inconsolata min-md:mx-5 cursor-pointer`}
  &.active {
    ${tw`text-primary font-semibold  `}
  }
`);

const variants = {
  init: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1.1,
    transition: {
      duration: 0.1,
      type: 'spring',
      stiffness: 69,
    },
  },
};

const variantsChild = isActive => ({
  show: {
    opacity: 1,
  },
  onhover: {
    fontWeight: 600,
    scale: 1.05,
    opacity: [1, 0, 0, 1],
    rotate: ['0deg', '0deg', '-90deg', '-90deg'],
    y: ['0%', '-100%', '100%', '0%'],
    color: '#63B3ED',
    transition: { duration: 0.5, type: 'spring', damping: 9, stiffness: 50 },
  },
  leaveHover: {
    fontWeight: 500,
    scale: 1,
    opacity: [1, 0, 0, 1],
    rotate: ['-90deg', '-90deg', '0deg', '0deg'],
    y: ['0%', '100%', '-100%', '0%'],
    color: isActive ? '#63B3ED' : '#8892B0',
    transition: { duration: 0.5, type: 'spring', damping: 9, stiffness: 50 },
  },
  tap: {
    scale: 0.95,
  },
});

const navigationItem = props => {
  const { menu, url } = props;

  const location = useLocation();
  const history = useHistory();

  const labelControls = useAnimation();

  const handleOnlick = e => {
    e.preventDefault();
    labelControls.start('tap');
    if (location.pathname !== url) {
      history.push(url);
    }
  };

  const handleHover = event => {
    labelControls.start('onhover');
  };

  const handleLeave = event => {
    labelControls.start('leaveHover');
  };

  return (
    <StyledLink
      href={url}
      onClick={handleOnlick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`${location.pathname === url && 'active'} py-2  `}
      variants={variants}
      // whileHover={location.pathname !== url ? 'hover' : null}
      whileTap='tap'
      exit={'exit'}
    >
      <motion.div
        className='text-base  italic font-inconsolata '
        variants={variantsChild(location.pathname === url)}
        animate={labelControls}
      >
        .{menu}
        <span className='text-primary'>()</span>
      </motion.div>
    </StyledLink>
  );
};

navigationItem.defaultProps = defaultProps;

navigationItem.propTypes = proptypes;

export default navigationItem;

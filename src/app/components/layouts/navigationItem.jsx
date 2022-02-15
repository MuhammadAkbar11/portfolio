import React from 'react';

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';

import tw from 'twin.macro';
// import { easeTransition } from '../../animation/transtions';

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
    ${tw`text-primary `}
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

const variantsChild = {
  hover: {
    // opacity: [1, 0, 0, 1],
    // rotate: ['0deg', '0deg', '-90deg', '-90deg'],
    // y: ['0%', '-100%', '100%', '0%'],
    // scale: [1, 0, 0, 1.05],
    // rotate: ['0deg', '0deg', '-90deg', '-90deg'],
    y: -5,
    scale: 1.05,
    color: '#63B3ED',
    transition: { duration: 0.4, type: 'spring', damping: 9, stiffness: 120 },
  },
  tap: {
    scale: 1.05,
  },
};
/* eslint-disable */
const navigationItem = props => {
  const { menu, url } = props;
  const location = useLocation();
  const history = useHistory();

  const handleOnlick = e => {
    e.preventDefault();
    if (location.pathname !== url) {
      history.push(url);
    }
  };

  return (
    <StyledLink
      href={url}
      onClick={handleOnlick}
      className={`${location.pathname === url && 'active'} `}
      variants={variants}
      whileHover={location.pathname !== url ? 'hover' : null}
      whileTap='tap'
      exit={'exit'}
    >
      <motion.div className='text-base font-semibold ' variants={variantsChild}>
        .{menu}()
      </motion.div>
    </StyledLink>
  );
};

navigationItem.defaultProps = defaultProps;

navigationItem.propTypes = proptypes;

export default navigationItem;

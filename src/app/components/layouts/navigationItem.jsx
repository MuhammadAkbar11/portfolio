import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

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
`);

const variants = {
  init: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      stiffness: 100,
    },
  },
};

const variantsChild = {
  hover: {
    opacity: [1, 0, 0, 1],
    rotate: ['0deg', '0deg', '-90deg', '-90deg'],
    y: ['0%', '-100%', '100%', '0%'],
    // scale: [1, 0, 1, 1],
    color: '#63B3ED',
    transition: { duration: 0.6 },
  },
  tap: {
    scale: 1.05,
  },
};

const navigationItem = props => {
  const { menu, url } = props;
  return (
    <Link to={url}>
      <StyledLink variants={variants} whileHover='hover' whileTap='tap'>
        <motion.div
          className='text-base font-semibold '
          variants={variantsChild}
        >
          .{menu}()
        </motion.div>
      </StyledLink>
    </Link>
  );
};

navigationItem.defaultProps = defaultProps;

navigationItem.propTypes = proptypes;

export default navigationItem;

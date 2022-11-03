import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import PropTypes from 'prop-types';

const StyledBtn = motion.custom(styled.div`
  ${tw`flex items-center justify-around font-inconsolata italic   hover:text-primary px-0 py-2`}
`);

const childrenVariants = {
  hover: {
    y: [0, -1],
    scale: [1, 1.05],
    transition: {
      y: {
        type: 'spring',
        duration: 0.1,
      },
      scale: {
        type: 'spring',
        duration: 0.4,
      },
    },
  },
};

const buttonLink = props => {
  /* eslint-disable */
  const { url, className, children, ...attr } = props;
  return (
    <>
      <StyledBtn
        as='a'
        className={className}
        whileHover='hover'
        href={url}
        {...attr}
      >
        <motion.span variants={childrenVariants} className='  '>
          .{children}
          <span className='text-primary'>()</span>
        </motion.span>
      </StyledBtn>{' '}
    </>
  );
};

buttonLink.defaultProps = {
  children: '',
  className: 'text-xl',
  url: '#/',
};

buttonLink.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.string,
};

export default buttonLink;

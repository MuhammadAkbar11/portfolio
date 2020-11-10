import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

import PropTypes from 'prop-types';
import { CaretRight } from './icons';

const StyledBtn = motion.custom(styled.div`
  ${tw`flex items-center justify-around font-inconsolata text-lg hover:text-primary px-0 py-2`}
`);

const iconVariants = {
  hover: {
    x: [-3, 3],
    // color: ['#63B3ED', '#63B3ED'],
    transition: {
      yoyo: Infinity,
      duration: 0.6,
    },
  },
};

const buttonLink = props => {
  const { url, className, children, ...attr } = props;
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <>
      <StyledBtn
        as='a'
        whileHover='hover'
        className={className}
        href={url}
        {...attr}
      >
        {' '}
        <motion.span variants={iconVariants} className='mr-2 h-3'>
          <CaretRight />
        </motion.span>
        <motion.span className='text-2xl'>{children}</motion.span>
      </StyledBtn>{' '}
    </>
  );
};

buttonLink.defaultProps = {
  children: '',
  className: '',
  url: '#/',
};

buttonLink.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.string,
};

export default buttonLink;

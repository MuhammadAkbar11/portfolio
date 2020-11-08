import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

/* eslint-disable no-unused-expressions */
const handleOutline = outline => {
  return outline === true
    ? tw` outline-none border border-primary bg-transparent text-primary hover:bg-primary hover:text-secondary focus:bg-primary focus:text-secondary focus:shadow-outline `
    : tw`bg-primary text-secondary focus:shadow-outline`;
};

const handleSize = size => {
  let sizeStyles;
  switch (size) {
    case 'sm':
      sizeStyles = tw`py-2 px-3 text-xs`;
      return sizeStyles;
    case 'lg':
      sizeStyles = tw`py-3 px-6`;
      return sizeStyles;
    case 'xl':
      return tw`py-4 px-8 text-lg`;
    default:
      sizeStyles = tw`py-3 px-4 text-base `;
      return sizeStyles;
  }
};

const StyledButton = motion.custom(styled.div`
  ${tw`block rounded text-center font-inconsolata `}
  ${({ outline }) => handleOutline(outline)}
  ${({ size }) => handleSize(size)}
  transition: 0.2s all;
`);

const defProps = {
  className: '',
  children: null,
  tag: 'button',
  outline: false,
  size: 'md',
};

const propsTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.string,
};

function button(props) {
  let { tag } = props;
  const { className, children, outline, size, ...attr } = props;

  if (attr.href && tag === 'button') {
    tag = 'a';
    attr.type = undefined;
  } else {
    tag = 'button';
    attr.type = 'button';
  }
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <StyledButton
      className={className}
      type={attr.type}
      as={tag}
      {...attr}
      outline={outline}
      size={size}
    >
      {children}
    </StyledButton>
  );
}

button.defaultProps = defProps;

button.propTypes = propsTypes;

export default button;

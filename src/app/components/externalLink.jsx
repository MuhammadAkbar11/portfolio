import React from 'react';
import PropTypes from 'prop-types';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledLink = motion.custom(styled.a`
  ${tw` text-primary relative  `}
  opacity: 0.7;
  transition: 0.4s all;
  &::after {
    ${tw`  bg-primary px-2 `}
    content : "";
    opacity: 0.5;
    position: absolute;
    width: 100%;

    left: 0;
    right: 0;
    bottom: 0px;
    border-radius: 3px;
  }

  &:hover {
    opacity: 1;
    &::after {
      animation: widthFull 0.2s linear forwards;
    }
  }

  @keyframes widthFull {
    0% {
      height: 0%;
    }

    100% {
      height: 50%;
    }
  }
`);

const externalLink = props => {
  const { className, children, href } = props;
  return (
    <StyledLink target='_blank' href={href} className={className}>
      {children}
    </StyledLink>
  );
};

externalLink.defaultProps = {
  children: null,
  className: '',
  href: '#/',
};

externalLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default externalLink;

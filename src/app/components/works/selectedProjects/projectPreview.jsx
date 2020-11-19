import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const defaultProps = {
  img: '',
  alt: 'akbar',
  position: '',
};

const proptypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  position: PropTypes.string,
};

/* eslint-disable */
const StyledProjectPreview = motion.custom(styled.div`
  ${tw`w-full relative flex items-center min-lg:w-1/2  hover:opacity-100 py-6 `}
  ${props => {
    const { position } = props.children[1].props;
    if (position === 'right') {
      return css`
        ${tw`min-lg:order-1`}

        & .project-img-overlay {
          transform-origin: 0 0;
        }

        & .project-img {
          ${tw`ml-auto mr-5 min-lg:mr-auto min-lg:ml-5`}
        }
      `;
    } else {
      return css`
        ${tw`min-lg:order-2`}

        & .project-img-overlay {
          transform-origin: 100% 100%;
        }

        & .project-img {
          ${tw`mr-auto ml-5 min-lg:ml-auto min-lg:mr-5`}
        }
      `;
    }
  }}
`);

const StyledOverlay = motion.custom(styled.div`
  ${tw`bg-primary `}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50%;

  opacity: 0.5;
`);

const StyledImg = motion.custom(styled.a`
  ${tw`my-auto`}
  width: 85%;
  height: 80;
  position: relative;
  transform-origin: 0 0;
  object-fit: cover;
  overflow: hidden;

  &::after {
    ${tw`rounded-sm bg-primary`}
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0.4;
  }

  &:hover {
    &::after {
      display: none;
    }
  }
  img {
    ${tw`rounded-sm w-full h-full `}
    object-fit: cover;
  }
`);

const overlayVariants = {
  init: {
    scaleX: 0,
  },
  animate: {
    scaleX: [0, 1],
    transition: {
      type: 'spring',
      duration: 0.3,
    },
  },
};

const linkVariants = {
  init: {
    opacity: 0,
    y: 25,
  },
  animate: {
    opacity: 1.5,
    y: 0,

    transition: {
      type: 'spring',
      stiffnes: 100,
      duration: 0.6,
    },
  },
};

const pictVariant = {
  init: {
    scale: 1,
  },
  animate: {
    scale: 1.2,
    transition: {
      delay: 1.5,
      type: 'tween',
      duration: 0.3,
    },
  },
  hover: {
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  },
};

const projectPreview = props => {
  const { img, alt, position } = props;
  return (
    <StyledProjectPreview>
      <StyledOverlay
        variants={overlayVariants}
        className='project-img-overlay'
      />
      <StyledImg
        href='#/'
        variants={linkVariants}
        position={position}
        whileHover='hover'
        className='rounded-sm project-img '
      >
        <motion.img variants={pictVariant} src={img} alt={alt} />
      </StyledImg>
    </StyledProjectPreview>
  );
};

projectPreview.defaultProps = defaultProps;

projectPreview.propTypes = proptypes;

export default projectPreview;

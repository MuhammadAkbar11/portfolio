import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

const TitleOverlayStyled = motion.custom(styled.div`
  ${tw` fixed w-full text-center flex justify-center flex-no-wrap  `}
  overflow: hidden;
  left: 0;
  right: 0;
  top: 95px;
  z-index: 0;

  @media (min-width: 576px) {
    top: 55px;
    overflow: hidden;
  }
`);

const TitleOverlayTextStyled = motion.custom(styled.div`
  ${tw`-ml-2  font-black text-center text-primary  `}
  position: relative;
  font-size: 21vw;
  white-space: nowrap;
  letter-spacing: 5px;
  font-style: italic;
  overflow: hidden;
  animation: animate 1s 1.5s forwards;

  @keyframes animate {
    0% {
      clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    50% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

      transition: 0.1s;
    }
    100% {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
  }

  @media (min-width: 576px) {
    overflow: hidden;
  }
`);

const variant = {
  show: {
    opacity: 1,
    x: '0vw',
    transition: {
      type: 'tween',
      delay: 0.7,
      duration: 1,
    },
  },
  hide: {
    opacity: 0,
    x: '-1000vw',
  },
};

const pageTitleOverlay = props => {
  const [isMounted, setIsMounted] = useState(false);
  const { className, text } = props;

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  return (
    <TitleOverlayStyled
      variants={variant}
      initial='hide'
      animate={isMounted ? 'show' : ''}
      className={className}
    >
      <TitleOverlayTextStyled className={isMounted && `show`} data-text={text}>
        {text}
      </TitleOverlayTextStyled>
    </TitleOverlayStyled>
  );
};

pageTitleOverlay.defaultProps = {
  className: '',
  text: '',
};

pageTitleOverlay.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default pageTitleOverlay;

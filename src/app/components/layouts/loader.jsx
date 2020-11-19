/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import tw, { css } from 'twin.macro';
import { StyledLoader } from '../../styled';
import { AnimatePresence, motion } from 'framer-motion';

const TextLoader = styled.span`
  ${tw` text-primary ml-1 text-3xl font-montserrat font-semibold `}
  opacity: 0;
  transition: 0.1s ease-in;
  animation: animate 0.9s infinite alternate;
  ${({ delay }) => {
    return css`
      animation-delay: ${delay * 0.1}s;
    `;
  }}

  @keyframes animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const variants = {
  mount: {
    clipPath: [
      'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    ],
    transition: {
      duration: 0.3,
    },
  },
  unMount: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
  },
  exit: {
    x: '100vw',
    scale: 5,
  },
};

const loader = () => {
  const location = useLocation();
  const [isHide, setHide] = useState(false);
  const texts = 'Muhammad  Akbar ';

  useEffect(() => {
    const delay = location.pathname === '/' ? '3000' : '2500';

    setTimeout(() => {
      setHide(true);
    }, delay);

    return () => {
      setHide(false);
    };
  }, []);

  return (
    <AnimatePresence>
      <StyledLoader>
        <motion.div
          variants={variants}
          initial='unMount'
          animate='mount'
          className={`loader-content ${isHide ? 'hide' : ''} `}
        >
          {[...texts].map((text, i) => {
            const key = i + 1;
            return (
              <TextLoader key={key} delay={i}>
                {text}
              </TextLoader>
            );
          })}
        </motion.div>
      </StyledLoader>
    </AnimatePresence>
  );
};

export default loader;

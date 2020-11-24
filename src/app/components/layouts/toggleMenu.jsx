import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import { LayoutContext } from '@app/context/context';

/* eslint-disable */
const StyledMenu = motion.custom(styled.a`
  ${tw` px-0 relative min-md:hidden `}
  width: 55px;
  cursor: pointer;
  height: 55px;
  transition: 0.3s all ease-in-out;

  ${props => {
    if (props.mobileMenu === true) {
      return css`
        transform: rotate(720deg);
      `;
    } else {
      return css`
        transform: rotate(0deg);
      `;
    }
  }}

  &::before,
  &::after {
    ${tw` bg-primary mx-auto `}
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    transition: 0.2s all;
  }
  &::before {
    ${props => {
      if (props.mobileMenu === true) {
        return css`
          top: 1rem;
          transform: rotate(-45deg) translateY(9px) translateX(-5px);
        `;
      } else {
        return css`
          transform: rotate(0deg);
          bottom: 1rem;
        `;
      }
    }}
  }
  &::after {
    ${props => {
      if (props.mobileMenu === true) {
        return css`
          bottom: 1rem;
          transform: rotate(45deg) translateY(-9px) translateX(-5px);
        `;
      } else {
        return css`
          top: 1rem;
          transform: rotate(0deg);
        `;
      }
    }}
  }
`);

/* eslint-disable */
const toggleMenu = () => {
  const [winLastPos, setWinLastPos] = useState();
  const layoutContext = useContext(LayoutContext);

  const { layoutStore, layoutDispatch } = layoutContext;

  const { mobileMenu } = layoutStore;

  const handleClick = e => {
    e.preventDefault();

    let toggle;
    toggle = mobileMenu ? false : true;
    layoutDispatch({ type: 'TOGGLE_MOBILE_MENU', payload: { value: toggle } });
    if (!mobileMenu) {
      const lastY = window.pageYOffset;
      setWinLastPos(lastY);
    }
  };

  useEffect(() => {
    if (!mobileMenu) {
      window.scrollTo({
        top: winLastPos,
      });
    }
  }, [mobileMenu, winLastPos]);

  return <StyledMenu onClick={handleClick} mobileMenu={mobileMenu} />;
};

export default toggleMenu;

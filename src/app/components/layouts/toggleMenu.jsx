import React, { useContext, useEffect, useState } from 'react';

import { LayoutContext } from '@app/context/context';
import { ButtonLink } from '..';

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

  return (
    <div className='relative min-md:hidden'>
      <ButtonLink
        href='#/'
        className='px-0 text-sm font-inconsolata italic '
        onClick={handleClick}
        whileTap={{
          scale: 0.9,
        }}
      >
        {!mobileMenu ? 'showMenu' : 'closeMenu'}
      </ButtonLink>
    </div>
  );
};

export default toggleMenu;

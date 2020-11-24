import React, { useContext } from 'react';
import { StyledMobileMenuNav } from '../../styled';
import { LayoutContext } from '../../context/context';
import { MobileMenuItem } from '..';

const variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
      type: 'spring',
      when: 'beforeChildren',
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const mobileMenuNavigation = () => {
  const lycontext = useContext(LayoutContext);

  const { navigations } = lycontext.layoutStore;

  return (
    <StyledMobileMenuNav variants={variants} initial='init' animate='animate'>
      {navigations.map((item, index) => {
        const key = index * 0.1;
        return <MobileMenuItem key={key} url={item.url} menu={item.menu} />;
      })}
    </StyledMobileMenuNav>
  );
};

export default mobileMenuNavigation;

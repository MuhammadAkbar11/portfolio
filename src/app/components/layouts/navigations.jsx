import React, { useContext } from 'react';
import { LayoutContext } from '@app/context/context';
import { NavigationItem } from '..';
import { StyledNavigations } from '../../styled';

const variants = {
  init: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.4,
      when: 'afterChildren',
      delayChildren: 0.1,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const navigations = () => {
  /* eslint-disable */
  const contextLayout = useContext(LayoutContext);

  const { navigations } = contextLayout.layoutStore;

  return (
    <StyledNavigations
      variants={variants}
      initial='init'
      animate='show'
      exit={'exit'}
    >
      {navigations.map((item, index) => {
        const key = index * 0.1;
        return <NavigationItem key={key} menu={item.menu} url={item.url} />;
      })}
    </StyledNavigations>
  );
};

export default navigations;

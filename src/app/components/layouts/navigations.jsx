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
      delay: 2,
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const navigations = () => {
  /* eslint-disable */
  const contextLayout = useContext(LayoutContext);

  const { navigations } = contextLayout.layoutStore;

  return (
    <StyledNavigations variants={variants} initial='init' animate='show'>
      {navigations.map(item => {
        return (
          <NavigationItem
            key={item.label}
            menu={item.menu}
            label={item.label}
            url={item.url}
          />
        );
      })}
    </StyledNavigations>
  );
};

export default navigations;

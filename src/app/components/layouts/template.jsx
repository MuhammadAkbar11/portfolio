import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, MainContent } from '@app/styled';
import { SideWrapper, TopBar, Loader, MobileMenu } from '@components';
import { LayoutContext } from '@app/context/context';
import { AnimatePresence } from 'framer-motion';

const template = props => {
  /* eslint-disable */
  const context = useContext(LayoutContext);
  const [loader, setLoader] = useState(true);

  const { paddingMain, mobileMenu } = context.layoutStore;

  const location = useLocation();

  useEffect(() => {
    const delay = location.pathname === '/' ? '3300' : '2800';
    setTimeout(() => {
      setLoader(false);
    }, delay);
    return () => {
      setLoader(true);
      context.layoutDispatch({
        type: 'TOGGLE_MOBILE_MENU',
        payload: { value: false },
      });
    };
  }, []);

  const { children } = props;

  return (
    <>
      <AnimatePresence>
        {loader ? (
          <Loader />
        ) : (
          <Wrapper className={mobileMenu ? 'blur' : ''}>
            <SideWrapper position='left' />
            <TopBar />
            {mobileMenu && <MobileMenu />}
            <MainContent className={`${paddingMain}  `}>{children}</MainContent>
            <SideWrapper position='right' />
          </Wrapper>
        )}
      </AnimatePresence>
    </>
  );
};

template.defaultProps = {
  children: '',
};

template.propTypes = {
  children: PropTypes.node,
};

export default template;

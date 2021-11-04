import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MainContent } from '@app/styled';
import { SideWrapper, TopBar, Loader, MobileMenu } from '@components';
import { LayoutContext } from '@app/context/context';
import { AnimatePresence } from 'framer-motion';

const template = props => {
  const context = useContext(LayoutContext);
  const [loader, setLoader] = useState(true);

  const { paddingMain, mobileMenu } = context.layoutStore;

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1590);
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

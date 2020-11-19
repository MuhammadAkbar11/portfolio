import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, MainContent } from '@app/styled';
import { SideWrapper, TopBar, Loader } from '@components';
import { LayoutContext } from '@app/context/context';
import { AnimatePresence } from 'framer-motion';

const template = props => {
  /* eslint-disable */
  const context = useContext(LayoutContext);
  const [loader, setLoader] = useState(true);
  const { paddingMain } = context.layoutStore;

  const location = useLocation();

  useEffect(() => {
    const delay = location.pathname === '/' ? '3300' : '2800';
    setTimeout(() => {
      setLoader(false);
    }, delay);

    return () => {
      setLoader(true);
    };
  }, []);

  const { children } = props;

  return (
    <>
      <AnimatePresence>
        {loader ? (
          <Loader />
        ) : (
          <Wrapper>
            <SideWrapper position='left' />
            <TopBar />

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

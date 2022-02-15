/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MainContent } from '@app/styled';
import { SideWrapper, TopBar, Loader, MobileMenu } from '@components';
import { LayoutContext } from '@app/context/context';
import { AnimatePresence } from 'framer-motion';

const template = props => {
  const context = useContext(LayoutContext);
  // const [loader, setLoader] = useState(true);

  const { paddingMain, mobileMenu, loader } = context.layoutStore;

  const { children } = props;

  return (
    <>
      {/* <AnimatePresence initial={false} exitBeforeEnter> */}
      {loader ? (
        <Loader />
      ) : (
        <Wrapper className={mobileMenu ? 'blur' : ''}>
          <SideWrapper position='left' />
          <TopBar />
          <MobileMenu />
          <MainContent className={`${paddingMain}  `}>{children}</MainContent>
          <SideWrapper position='right' />
        </Wrapper>
      )}
      {/* </AnimatePresence> */}
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

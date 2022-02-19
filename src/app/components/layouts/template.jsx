/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MainContent } from '@app/styled';
import { SideWrapper, TopBar, Loader, MobileMenu } from '@components';
import { LayoutContext } from '@app/context/context';

const template = props => {
  const [mount, setMount] = useState(false);
  const context = useContext(LayoutContext);

  const { paddingMain, mobileMenu, loader } = context.layoutStore;

  const { children } = props;

  useEffect(() => {
    setMount(true);
    return () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setMount(false);
    };
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Wrapper className={mobileMenu ? 'blur' : ''}>
          {mount && (
            <>
              <SideWrapper position='left' />
              <TopBar />
              <MobileMenu />
              <MainContent className={`${paddingMain}  `}>
                {children}
              </MainContent>
              <SideWrapper position='right' />
            </>
          )}
        </Wrapper>
      )}
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

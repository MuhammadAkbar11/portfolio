/* eslint-disable */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from './Header';

import SideLayout from './SideLayout';
import PageTitleOverlay from './PageTitleOverlay';

import { LayoutContext } from '../../context/context';

const Wrapper = props => {
  const context = useContext(LayoutContext);
  const { isOpenSideMenu } = context.layoutStore;

  const { children, mainClass, titleOverlay, showTitleOverlay } = props;

  const wrapperHide = isOpenSideMenu ? 'overflow-hidden ' : '  ';

  return (
    <div
      className={`wrapper bg-secondary text-slate flex flex-col  px-6 pt-1  ${wrapperHide}  `}
    >
      <SideLayout position='left' />
      <Header />
      {showTitleOverlay ? <PageTitleOverlay text={titleOverlay} /> : null}
      <main className={`flex flex-1 flex-col flex-wrap  h-full  ${mainClass}`}>
        {children}
      </main>
      {isOpenSideMenu && <Sidebar />}
      <SideLayout position='right' />
    </div>
  );
};

Wrapper.defaultProps = {
  children: '',
  mainClass: '',
  titleOverlay: '',
  showTitleOverlay: false,
};

Wrapper.propTypes = {
  children: PropTypes.node,
  mainClass: PropTypes.string,
  titleOverlay: PropTypes.string,
  showTitleOverlay: PropTypes.bool,
};

export default Wrapper;

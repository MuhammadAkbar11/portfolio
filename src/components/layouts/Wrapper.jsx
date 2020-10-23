/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from './Header';

import SideLayout from './SideLayout';
import PageTitleOverlay from './PageTitleOverlay';

const Wrapper = props => {
  const [sideOpen, setSideOpen] = useState(false);

  const toggleSidebar = () => {
    if (sideOpen === false) {
      console.log('open');
      setSideOpen(true);
    } else {
      console.log('close');
      setSideOpen(false);
    }
  };

  const { children, mainClass, titleOverlay, showTitleOverlay } = props;

  const wrapperHide = sideOpen ? 'overflow-y-hidden h-screen' : '';

  return (
    <div
      className={`wrapper bg-secondary text-slate flex flex-col px-6 pt-1  ${wrapperHide}  `}
    >
      <SideLayout position='left' />
      <Header toggleSidebar={toggleSidebar} />
      {showTitleOverlay ? <PageTitleOverlay text={titleOverlay} /> : null}
      <main className={`flex flex-1 flex-col flex-wrap  h-full  ${mainClass}`}>
        {children}
      </main>
      <Sidebar open={sideOpen} toggle={toggleSidebar} />
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

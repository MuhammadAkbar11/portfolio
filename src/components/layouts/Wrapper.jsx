import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Header from './Header';

import SideLayout from './SideLayout';

const Wrapper = props => {
  /* eslint-disable */
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

  const { children, mainClass } = props;

  const wrapperHide = sideOpen
    ? 'overflow-y-hidden h-screen'
    : ' min-h-screen ';

  return (
    <div className={`wrapper sm:px-10 ${wrapperHide}  `}>
      <SideLayout position='left' />
      <Header toggleSidebar={toggleSidebar} />
      <main className={`main ${mainClass}`}>{children}</main>
      <Sidebar open={sideOpen} toggle={toggleSidebar} />
      <aside className='wrapper-spacing-right'></aside>
      <SideLayout position='right' />
    </div>
  );
};

Wrapper.defaultProps = {
  children: '',
  mainClass: '',
};

Wrapper.propTypes = {
  children: PropTypes.node,
  mainClass: PropTypes.string,
};

export default Wrapper;

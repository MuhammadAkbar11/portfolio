import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Templates = props => {
  /* eslint-disable */
  const [sideOpen , setSideOpen ] = useState(false);

  const toggleSidebar = () => {
    if(sideOpen === false) {
      console.log('open');
      setSideOpen(true)
    } else {
      console.log('close');
      setSideOpen(false)
    }
  }

  const { children, mainClass } = props;
  return (
    <div className={`wrapper ${sideOpen ? "overflow-y-hidden h-screen " : " min-h-screen " } `}>
      {/* nav */}
      <Nav toggleSidebar={toggleSidebar} />
      {/* main Content */}
      <div className={`main ${mainClass}`}>
        <>{children}</>
      </div>
      {/* Sidebar */}
      <Sidebar open={sideOpen} toggle={toggleSidebar} />
    </div>
  );
};

Templates.defaultProps = {
  children: '',
  mainClass: '',
};

Templates.propTypes = {
  children: PropTypes.node,
  mainClass: PropTypes.string,
};

export default Templates;

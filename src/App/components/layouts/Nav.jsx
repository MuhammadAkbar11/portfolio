import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/Logo.png';

const Nav = props => {
  const { toggleSidebar, navClassName } = props;

  return (
    <>
      <nav className={`nav ${navClassName}`}>
        <img className='h-12' src={Logo} alt='Logo' />
        {/* eslint-disable */}
        <button type='button' onClick={toggleSidebar} className=' cursor-pointer '>
        Toggle
        </button>
      </nav>
    </>
  );
};

Nav.defaultProps = {
  navClassName: ""
}

Nav.propTypes = {
  toggleSidebar: PropTypes.func,
  navClassName: PropTypes.string
}

export default Nav;

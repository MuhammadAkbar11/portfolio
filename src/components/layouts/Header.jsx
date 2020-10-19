import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/Logo.png';

const Header = props => {
  const { toggleSidebar, headerClass } = props;

  return (
    <>
      <header className={`header ${headerClass}`}>
        <img className='h-12 md:hidden' src={Logo} alt='Logo' />
        {/* eslint-disable */}
        <button
          type='button'
          onClick={toggleSidebar}
          className=' cursor-pointer md:hidden '
        >
          Toggle
        </button>
      </header>
    </>
  );
};

Header.defaultProps = {
  navClassName: '',
};

Header.propTypes = {
  toggleSidebar: PropTypes.func,
  headerClass: PropTypes.string,
};

export default Header;

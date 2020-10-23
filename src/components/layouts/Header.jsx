import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/Logo.png';

const Header = props => {
  const { toggleSidebar, headerClass } = props;

  const minHeaderSideClass = 'header-side min-md:justify-center min-md:flex   ';

  return (
    <>
      <header
        className={`header left-0 px-6 flex justify-between flex-row flex-wrap items-center text-primary ${headerClass} min-md:pt-5 min-md:px-0 `}
      >
        <div className={`${minHeaderSideClass} `}>
          <img className='h-12 ' src={Logo} alt='Logo' />
        </div>
        {/* eslint-disable */}
        <div className={`${minHeaderSideClass} `}>
          <button
            type='button'
            onClick={toggleSidebar}
            className='cursor-pointer '
          >
            Toggle
          </button>
        </div>
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

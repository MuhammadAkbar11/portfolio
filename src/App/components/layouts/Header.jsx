import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/Logo.png';

const Header = props => {
  const { toggleSidebar, headerClass } = props;

  const minHeaderSideClass = 'header-side min-md:justify-center min-md:flex   ';

  return (
    <>
      <header
        className={`header left-0 px-6 flex justify-between flex-row flex-wrap items-center text-primary ${headerClass} min-md:pt-6 min-md:pl-0 min-md:pr-8 `}
      >
        <a href='/' className={`${minHeaderSideClass} `}>
          <img className='h-12 ' src={Logo} alt='Logo' />
        </a>
        {/* eslint-disable */}
        <div className={`${minHeaderSideClass} `}>
          <button type='button' className='btn btn-outline max-md:hidden '>
            Resume
          </button>
          <button
            type='button'
            onClick={toggleSidebar}
            className='cursor-pointer min-md:hidden '
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

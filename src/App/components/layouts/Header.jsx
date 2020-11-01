import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/svg/AL.svg';
import { LayoutContext } from '../../context/context';

const Header = props => {
  const { headerClass } = props;

  const context = useContext(LayoutContext);
  const { layoutDispatch } = context;

  const minHeaderSideClass = 'header-side min-md:justify-center min-md:flex   ';

  const showSidebar = () => layoutDispatch({ type: 'TOGGLE_SIDEBAR' });

  return (
    <>
      <header
        className={`header left-0 px-6 flex justify-between flex-row flex-wrap pt-3 items-center text-primary ${headerClass} min-md:pt-8 min-md:pl-0 min-md:pr-8 `}
      >
        <a href='/' className={`${minHeaderSideClass} `}>
          <img className=' h-10 ' src={Logo} alt='Logo' />
        </a>
        {/* eslint-disable */}
        <div className={`${minHeaderSideClass} `}>
          <button type='button' className='btn btn-outline max-md:hidden '>
            Resume
          </button>
          <button
            onClick={showSidebar}
            type='button'
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
  headerClass: PropTypes.string,
};

export default Header;

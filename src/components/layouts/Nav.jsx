import React from 'react';
import Logo from '../../assets/img/Logo.png';

const Nav = () => {
  return (
    <>
      <nav className='nav '>
        <img className='h-12' src={Logo} alt='Logo' />
        <div>Burger</div>
      </nav>
    </>
  );
};

export default Nav;

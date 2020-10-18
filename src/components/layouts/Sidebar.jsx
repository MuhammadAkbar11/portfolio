import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import SocialNetworks from '../Home/SocialNetworks';
import SidebarMenu from './SidebarMenu';

const Sidebar = props => {
  const [textOverlay, setTextOverlay] = useState('Home');
  const { open, toggle } = props;

  const handleTextOverlay = useCallback(e => {
    const { textContent } = e.target;
    setTextOverlay(textContent);
  }, []);

  return (
    <aside
      className={`fixed flex flex-col z-50  px-6  w-full h-screen bg-light-secondary  shadow ${
        open ? 'w-100 left-0  right-0 ' : ' w-0 hidden right-0 '
      }`}
    >
      <Nav toggleSidebar={toggle} navClassName='z-10' />
      {/* text Background */}
      <div className='left-0 absolute w-full flex justify-center items-center  top-0 bottom-0 z-0 '>
        <h1
          style={{ fontSize: '9rem' }}
          className=' uppercase font-bold text-primary opacity-50 '
        >
          {textOverlay}
        </h1>
      </div>

      <nav
        style={{ lineHeight: '5.5rem' }}
        className='flex flex-1 flex-col h-auto  items-center justify-start text-5xl pt-12 font-montserrat z-10'
      >
        <SidebarMenu
          touch={handleTextOverlay}
          hover={handleTextOverlay}
          text='Home'
        />
        <SidebarMenu
          touch={handleTextOverlay}
          hover={handleTextOverlay}
          text='About'
        />
        <SidebarMenu
          touch={handleTextOverlay}
          hover={handleTextOverlay}
          text='Works'
        />
        <SidebarMenu
          touch={handleTextOverlay}
          hover={handleTextOverlay}
          text='Contact'
        />
      </nav>
      <SocialNetworks className='flex-1 items-center z-10' />
    </aside>
  );
};

Sidebar.defaultProps = {
  open: false,
  toggle: null,
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Sidebar;

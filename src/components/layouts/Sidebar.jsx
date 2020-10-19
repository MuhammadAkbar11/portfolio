import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import SocialNetworks from '../Home/SocialNetworks';
import SidebarMenu from './SidebarMenu';
import Header from './Header';

const Sidebar = props => {
  const [textOverlay, setTextOverlay] = useState('Home');
  const { open, toggle } = props;

  const handleTextOverlay = useCallback(e => {
    const { textContent } = e.target;

    const text = textContent.split('.')[1];

    setTextOverlay(text);
  }, []);

  return (
    <aside className={`sidemenu ${open ? 'open' : ''}`}>
      <Header toggleSidebar={toggle} headerClass='z-10' />

      <div className='textoverlay-container  '>
        <h1 className=' text-overlay  '>{textOverlay}</h1>
      </div>

      <nav className='sidemenu-nav'>
        <SidebarMenu
          touch={handleTextOverlay}
          hover={handleTextOverlay}
          text='Home'
          label='01.'
        />
        <SidebarMenu
          touch={handleTextOverlay}
          hover={handleTextOverlay}
          text='About'
          label='02.'
        />
        <SidebarMenu
          touch={handleTextOverlay}
          hover={handleTextOverlay}
          text='Works'
          label='03.'
        />
        <SidebarMenu
          touch={handleTextOverlay}
          hover={handleTextOverlay}
          text='Contact'
          label='04.'
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

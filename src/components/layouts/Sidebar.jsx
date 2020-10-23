import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import SocialNetworks from '../Home/SocialNetworks';
import SidebarMenu from './SidebarMenu';

const Sidebar = props => {
  const [textOverlay, setTextOverlay] = useState('Home');
  const { open, toggleCLose } = props;

  const handleTextOverlay = useCallback(e => {
    const { textContent } = e.target;
    const text = textContent.split('.')[1];
    setTextOverlay(text);
  }, []);

  return (
    <aside className={`sidemenu ${open ? 'open' : ''}`}>
      <div className=' py-3 w-full flex justify-between '>
        <div />
        {toggleCLose}
      </div>

      <div className='relative flex flex-col  justify-center items-center flex-1  '>
        <div className='textoverlay-container'>
          <h1 className=' text-overlay  '>{textOverlay}</h1>
        </div>

        <nav className='sidemenu-nav '>
          <SidebarMenu
            touch={handleTextOverlay}
            hover={handleTextOverlay}
            text='Home'
            url='/'
            label='01.'
          />
          <SidebarMenu
            touch={handleTextOverlay}
            hover={handleTextOverlay}
            text='About'
            url='/about'
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
        <SocialNetworks className='items-center h-40 z-10' />
      </div>
    </aside>
  );
};

Sidebar.defaultProps = {
  open: true,
  toggleCLose: null,
};

Sidebar.propTypes = {
  open: PropTypes.bool,
  toggleCLose: PropTypes.node,
};

export default Sidebar;

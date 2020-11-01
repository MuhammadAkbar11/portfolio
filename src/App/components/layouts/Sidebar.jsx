import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import SocialNetworks from '../Home/SocialNetworks';
import SidebarMenu from './SidebarMenu';
import { LayoutContext } from '../../context/context';
import Toggle from '../Toggle';
import useSideLinkHover from '../../hooks/useSideLinkHover';

const Sidebar = () => {
  const context = useContext(LayoutContext);
  const { layoutStore, layoutDispatch } = context;
  const { sidemenuLink } = layoutStore;

  const closeSidebar = () => layoutDispatch({ type: 'TOGGLE_SIDEBAR' });

  const location = useLocation();

  const initTextOverlay =
    location.pathname === '/' ? 'Home' : location.pathname.substr(1);

  const [textOverlay, setTextHover] = useSideLinkHover(initTextOverlay);

  return (
    <aside className={`sidemenu `}>
      <div className=' py-3 w-full flex justify-between '>
        <div />
        <Toggle click={closeSidebar} />
      </div>

      <div className='relative flex flex-col  justify-center items-center flex-1  '>
        <div className='textoverlay-container'>
          <h1 className=' text-overlay capitalize  '>{textOverlay}</h1>
        </div>

        <nav className='sidemenu-nav '>
          {sidemenuLink.map(link => {
            return (
              <SidebarMenu
                key={link.label}
                touch={setTextHover}
                hover={setTextHover}
                text={link.text}
                url={link.url}
                label={link.label}
              />
            );
          })}
          {/* <SidebarMenu
            touch={setTextHover}
            hover={setTextHover}
            text='Home'
            url='/'
            label='01.'
          />
          <SidebarMenu
            touch={setTextHover}
            hover={setTextHover}
            text='About'
            url='/about'
            label='02.'
          />
          <SidebarMenu
            touch={setTextHover}
            hover={setTextHover}
            text='Works'
            url='/works'
            label='03.'
          />
          <SidebarMenu
            touch={setTextHover}
            hover={setTextHover}
            text='Contact'
            url='/contact'
            label='04.'
          /> */}
        </nav>
        <div className='flex'>
          <SocialNetworks className='items-center h-40 z-10' />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

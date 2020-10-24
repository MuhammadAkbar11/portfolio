import React from 'react';
import PropTypes from 'prop-types';

const SidebarMenu = props => {
  const { url, text, label, hover, touch } = props;
  return (
    <>
      <a
        onMouseEnter={hover}
        onTouchMove={touch}
        className=' sidemenu-item '
        href={url}
      >
        <span className='sidemenu-label '>{label}</span>
        {text}
      </a>
    </>
  );
};

SidebarMenu.defaultProps = {
  url: '#/',
  text: '',
  label: '',
  hover: null,
  touch: null,
};

SidebarMenu.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
  hover: PropTypes.func,
  touch: PropTypes.func,
};

export default SidebarMenu;

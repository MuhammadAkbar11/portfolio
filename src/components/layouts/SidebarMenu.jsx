import React from 'react';
import PropTypes from 'prop-types';

const SidebarMenu = props => {
  const { url, text, hover, touch } = props;
  return (
    <>
      <a
        onMouseEnter={hover}
        onTouchMove={touch}
        className=' font-montserrat hover:text-light '
        href={url}
      >
        {text}
      </a>
    </>
  );
};

SidebarMenu.defaultProps = {
  url: '#/',
  text: '',
  hover: null,
  touch: null,
};

SidebarMenu.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  hover: PropTypes.func,
  touch: PropTypes.func,
};

export default SidebarMenu;

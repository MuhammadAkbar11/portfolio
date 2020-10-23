/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SideLayout = props => {
  const [classPosition, setClassPosition] = useState('');
  const [children, setChildren] = useState(null);

  const { position } = props;

  const leftContent = (
    <>
      <div className='side-layout-left__top -ml-5 '></div>
      <div className='side-layout-left__middle -ml-5  '>
        <a href='#/' className='flex-1 '>
          MuhammadAkbarletlet@gmail.com
        </a>
      </div>
      <div className='side-layout-left__bottom -ml-5' />
    </>
  );

  const rightContent = <div className=' h-full '></div>;

  useEffect(() => {
    if (position === 'left') {
      setClassPosition('side-layout-left pl-5 left-0');
      setChildren(leftContent);
    } else {
      setClassPosition('side-layout-right right-0 ');
      setChildren(rightContent);
    }
  }, []);
  return (
    <aside
      className={` min-md:flex  bg-transparent fixed flex-col justify-between
  top-0 bottom-0 px-3 ${classPosition} `}
    >
      {children}
    </aside>
  );
};

SideLayout.propTypes = {
  position: PropTypes.string.isRequired,
};

export default React.memo(SideLayout);

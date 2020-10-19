import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TopLogo from '../TopLogo';

const SideLayout = props => {
  const [classPosition, setClassPosition] = useState('');
  const [children, setChildren] = useState(null);

  const { position } = props;

  const leftContent = (
    <>
      <div className='side-layout-left__top    '>
        <TopLogo className=' h-12 mt-2 mb-auto mx-auto  ' />
      </div>
      <div className='side-layout-left__middle  '>
        <a href='#/' className='flex-1 '>
          MuhammadAkbarletlet@gmail.com
        </a>
      </div>
      <div className='side-layout-left__bottom ' />
    </>
  );

  const rightContent = (
    <div>
      <button
        type='button'
        className='btn btn-outline text-center btn-sm mx-auto lg:px-8 '
      >
        Resume
      </button>
    </div>
  );

  useEffect(() => {
    if (position === 'left') {
      setClassPosition('side-layout-left');
      setChildren(leftContent);
    } else {
      setClassPosition('side-layout-right');
      setChildren(rightContent);
    }
  }, []);
  return <aside className={`side-layout ${classPosition} `}>{children}</aside>;
};

SideLayout.propTypes = {
  position: PropTypes.string.isRequired,
};

export default React.memo(SideLayout);

import React from 'react';

const overflowHidden = ({ children }) => {
  return (
    <div className=' flex relative inset-0 p-0 m-0 overflow-hidden'>
      {children}
    </div>
  );
};

export default overflowHidden;

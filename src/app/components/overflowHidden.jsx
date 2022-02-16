import React from 'react';

const overflowHidden = ({ children, ...props }) => {
  const { className } = props;
  delete props.className;
  return (
    <div
      className={` flex relative inset-0 p-0 m-0 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default overflowHidden;

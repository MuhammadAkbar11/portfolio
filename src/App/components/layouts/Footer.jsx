import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  const { className } = props;

  return (
    <div
      className={` w-full h-20 flex justify-center items-center mb-3 font-iconsolata  ${className}`}
    >
      Design & Build by{' '}
      <span className='text-primary mx-2'> Muhammad Akbar Let-let </span>
      2020
    </div>
  );
};

Footer.defaultProps = {
  className: '',
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;

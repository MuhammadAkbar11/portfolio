import React from 'react';
import PropTypes from 'prop-types';
import logoSvg from '../assets/img/Logo.png';

const TopLogo = props => {
  const { className } = props;
  return <img className={`${className}`} src={logoSvg} alt='Logo' />;
};

TopLogo.defaultProps = {
  className: '',
};

TopLogo.propTypes = {
  className: PropTypes.string,
};

export default TopLogo;

import React from 'react';
import PropTypes from 'prop-types';

const defProps = {
  children: null,
  className: '',
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const paragraph = props => {
  const { className, children } = props;
  return <p className={` leading-8 mt-4 ${className}`}>{children}</p>;
};

paragraph.defaultProps = defProps;

paragraph.propTypes = propTypes;

export default paragraph;

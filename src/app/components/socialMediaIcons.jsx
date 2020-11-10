import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const socialMediaIcons = props => {
  const { className, icon, url } = props;
  return (
    <motion.a href={url} className={`${className}`}>
      {icon}
    </motion.a>
  );
};
socialMediaIcons.defaultProps = {
  className: '',
  icon: null,
  url: '#/',
};

socialMediaIcons.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  url: PropTypes.string,
};

export default socialMediaIcons;

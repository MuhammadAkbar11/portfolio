import React from 'react';
import PropTypes from 'prop-types';

const AboutContent = props => {
  const { children } = props;
  return (
    <div className='about-content flex flex-col min-sm:mt-12 min-md:flex-row flex-wrap pb-5 min-md:pb-10  mb-24 '>
      {children}
    </div>
  );
};

AboutContent.defaultProps = {
  children: null,
};

AboutContent.propTypes = {
  children: PropTypes.node,
};

export default AboutContent;

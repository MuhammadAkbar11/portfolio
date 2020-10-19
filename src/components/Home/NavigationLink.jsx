import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function NavigationLink(props) {
  const { text, label, url } = props;
  return (
    <>
      <a
        href={url}
        className={`text-slate hover:text-primary font-iconsolata mx-3 text-lg `}
      >
        {' '}
        <span className=' text-primary text-sm '>{label}</span> {text}
      </a>
    </>
  );
}

NavigationLink.defaultProps = {
  text: '',
  url: '#/',
  label: '',
};

NavigationLink.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
};

export default NavigationLink;

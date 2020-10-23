import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationLink(props) {
  const { text, label, url } = props;
  return (
    <>
      <Link
        to={url}
        className={`text-slate hover:text-primary font-iconsolata min-md:mr-2 min-lg:mx-3  lg:text-lg min-md:text-base `}
      >
        <>
          <span className=' text-primary text-sm '>{label}</span> {text}
        </>
      </Link>
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

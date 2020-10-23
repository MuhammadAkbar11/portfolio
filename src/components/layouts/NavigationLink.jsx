import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavigationLink(props) {
  const { text, label, url } = props;
  return (
    <>
      <Link
        to={url}
        className={`navigation-link text-slate whitespace-no-wrap hover:text-primary font-iconsolata min-md:mx-3 `}
      >
        <div>
          <span className=' text-primary text-sm '>{label}</span> {text}
        </div>
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
